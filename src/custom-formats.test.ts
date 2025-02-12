import fs from "node:fs";
import { beforeEach, describe, expect, it, vi } from "vitest";
import * as config from "./config";
import { calculateCFsToManage, loadCustomFormatDefinitions, loadLocalCfs, mergeCfSources } from "./custom-formats";
import { loadTrashCFs } from "./trash-guide";
import { CFProcessing } from "./types/common.types";
import { ConfigCustomFormatList } from "./types/config.types";
import { TrashCF } from "./types/trashguide.types";
import * as util from "./util";

describe("CustomFormats", () => {
  let customCF: TrashCF;

  beforeEach(() => {
    vi.resetAllMocks();
    vi.mock("node:fs");

    customCF = {
      trash_id: "custom-size-more-40gb",
      trash_scores: {
        default: -10000,
      },
      trash_description: "Size: Block sizes over 40GB",
      name: "Size: Block More 40GB",
      includeCustomFormatWhenRenaming: false,
      specifications: [
        {
          name: "Size",
          implementation: "SizeSpecification",
          negate: false,
          required: true,
          fields: {
            min: 1,
            max: 9,
          },
        },
      ],
    };
  });

  describe("loadLocalCfs", () => {
    it("should return null when no local path is configured", async () => {
      vi.spyOn(config, "getConfig").mockReturnValue({ localCustomFormatsPath: undefined });

      const result = await loadLocalCfs();
      expect(result).toBeNull();
    });

    it("should return null when configured path doesn't exist", async () => {
      vi.spyOn(config, "getConfig").mockReturnValue({ localCustomFormatsPath: "/fake/path" });
      vi.spyOn(fs, "existsSync").mockReturnValue(false);

      const result = await loadLocalCfs();
      expect(result).toBeNull();
    });

    it("should load and process JSON files from configured path", async () => {
      vi.spyOn(config, "getConfig").mockReturnValue({ localCustomFormatsPath: "/valid/path" });
      vi.spyOn(fs, "existsSync").mockReturnValue(true);

      vi.spyOn(fs, "readdirSync").mockReturnValue(["test.json"] as any);
      //vi.spyOn(fs, "readFileSync").mockImplementationOnce(() => "{}");

      vi.spyOn(util, "loadJsonFile").mockReturnValueOnce(customCF);

      const result = await loadLocalCfs();
      expect(result).not.toBeNull();
      expect(result!.carrIdMapping.size).toBe(1);
      expect(result!.carrIdMapping.get(customCF.trash_id)).not.toBeNull();
    });
  });

  describe("mergeCfSources", () => {
    it("should merge multiple CF sources correctly", () => {
      const source1: CFProcessing = {
        carrIdMapping: new Map([["id1", { carrConfig: { configarr_id: "id1", name: "CF1" }, requestConfig: {} }]]),
        cfNameToCarrConfig: new Map([["CF1", { configarr_id: "id1", name: "CF1" }]]),
      };

      const source2: CFProcessing = {
        carrIdMapping: new Map([["id2", { carrConfig: { configarr_id: "id2", name: "CF2" }, requestConfig: {} }]]),
        cfNameToCarrConfig: new Map([["CF2", { configarr_id: "id2", name: "CF2" }]]),
      };

      const result = mergeCfSources([source1, source2, null]);

      expect(result.carrIdMapping.size).toBe(2);
      expect(result.cfNameToCarrConfig.size).toBe(2);
      expect(result.carrIdMapping.has("id1")).toBeTruthy();
      expect(result.carrIdMapping.has("id2")).toBeTruthy();
    });
  });

  describe("calculateCFsToManage", () => {
    it("should collect all trash IDs from custom format list", () => {
      const yaml: ConfigCustomFormatList = {
        custom_formats: [
          { trash_ids: ["t1", "t2"], assign_scores_to: [{ name: "default", score: 100 }] },
          { trash_ids: ["t3"], assign_scores_to: [{ name: "default", score: 100 }] },
          { trash_ids: ["t2"], assign_scores_to: [{ name: "default", score: 100 }] }, // Duplicate to test Set behavior
        ],
      };

      const result = calculateCFsToManage(yaml);

      expect(result.size).toBe(3);
      expect(result.has("t1")).toBeTruthy();
      expect(result.has("t2")).toBeTruthy();
      expect(result.has("t3")).toBeTruthy();
    });
  });

  describe("loadCustomFormatDefinitions", () => {
    it("should load and merge (trash CFDs", async () => {
      const mockTrashCFs: CFProcessing = {
        carrIdMapping: new Map([["trash1", { carrConfig: { configarr_id: "trash1" }, requestConfig: {} }]]),
        cfNameToCarrConfig: new Map(),
      };

      vi.mock("./trash-guide");
      vi.mocked(loadTrashCFs).mockResolvedValue(mockTrashCFs);
      vi.spyOn(config, "getConfig").mockReturnValue({ localCustomFormatsPath: undefined });

      const result = await loadCustomFormatDefinitions("RADARR", []);

      expect(result.carrIdMapping.size).toBe(1);
      expect(result.carrIdMapping.has("trash1")).toBeTruthy();
    });

    it("should load and merge (additional CFDs)", async () => {
      const mockTrashCFs: CFProcessing = {
        carrIdMapping: new Map([["trash1", { carrConfig: { configarr_id: "trash1" }, requestConfig: {} }]]),
        cfNameToCarrConfig: new Map(),
      };

      vi.mock("./trash-guide");
      vi.mocked(loadTrashCFs).mockResolvedValue(mockTrashCFs);
      vi.spyOn(config, "getConfig").mockReturnValue({ localCustomFormatsPath: undefined });

      const result = await loadCustomFormatDefinitions("RADARR", [customCF]);

      expect(result.carrIdMapping.size).toBe(2);
      expect(result.carrIdMapping.has("trash1")).toBeTruthy();
    });

    it("should load and merge (config CFDs)", async () => {
      const mockTrashCFs: CFProcessing = {
        carrIdMapping: new Map(),
        cfNameToCarrConfig: new Map(),
      };

      const clonedCFD: TrashCF = JSON.parse(JSON.stringify(customCF));
      clonedCFD.trash_id = "trash2";
      clonedCFD.name = "Trash2";

      vi.mock("./trash-guide");
      vi.mocked(loadTrashCFs).mockResolvedValue(mockTrashCFs);
      vi.spyOn(config, "getConfig").mockReturnValue({ localCustomFormatsPath: undefined, customFormatDefinitions: [customCF] });

      const result = await loadCustomFormatDefinitions("RADARR", [clonedCFD]);

      expect(result.carrIdMapping.size).toBe(2);
      expect(result.carrIdMapping.has("trash2")).toBeTruthy();
    });
  });
});
