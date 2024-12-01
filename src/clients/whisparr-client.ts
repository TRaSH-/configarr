import { KyHttpClient } from "../__generated__/ky-client";
import { Api } from "../__generated__/whisparr/Api";
import {
  CustomFormatResource,
  LanguageResource,
  QualityDefinitionResource,
  QualityProfileResource,
} from "../__generated__/whisparr/data-contracts";
import { logger } from "../logger";
import { cloneWithJSON } from "../util";
import { IArrClient, validateClientParams } from "./unified-client";

/**
 * Overwrite wrong types for now
 */
declare module "../__generated__/whisparr/data-contracts" {
  export interface QualityProfileResource {
    language?: Language;
  }
}

export class WhisparrClient
  implements IArrClient<QualityProfileResource, QualityDefinitionResource, CustomFormatResource, LanguageResource>
{
  private api!: Api<unknown>;
  private languageMap: Map<string, LanguageResource> = new Map();

  constructor(baseUrl: string, apiKey: string) {
    this.initialize(baseUrl, apiKey);
  }

  private initialize(baseUrl: string, apiKey: string) {
    validateClientParams(baseUrl, apiKey, "WHISPARR");

    const httpClient = new KyHttpClient({
      headers: {
        "X-Api-Key": apiKey,
      },
      prefixUrl: baseUrl,
    });

    this.api = new Api(httpClient);
  }

  async getLanguages() {
    return this.api.v3LanguageList();
  }

  // Quality Management
  getQualityDefinitions() {
    return this.api.v3QualitydefinitionList();
  }

  async updateQualityDefinitions(definitions: QualityDefinitionResource[]) {
    await this.api.v3QualitydefinitionUpdateUpdate(definitions);
    return this.api.v3QualitydefinitionList();
  }

  // Quality Profiles
  getQualityProfiles() {
    return this.api.v3QualityprofileList();
  }

  async createQualityProfile(profile: QualityProfileResource): Promise<QualityProfileResource> {
    const cloned = cloneWithJSON(profile);

    if (this.languageMap.size <= 0) {
      const languages = await this.getLanguages();
      this.languageMap = new Map(languages.map((i) => [i.name!, i]));
    }

    if (profile.language == null) {
      cloned.language = this.languageMap.get("Any");
    }

    return this.api.v3QualityprofileCreate(cloned);
  }

  updateQualityProfile(id: string, profile: QualityProfileResource) {
    return this.api.v3QualityprofileUpdate(id, profile);
  }

  // Custom Formats
  getCustomFormats() {
    return this.api.v3CustomformatList();
  }

  createCustomFormat(format: CustomFormatResource) {
    return this.api.v3CustomformatCreate(format);
  }

  updateCustomFormat(id: string, format: CustomFormatResource) {
    return this.api.v3CustomformatUpdate(id, format);
  }

  deleteCustomFormat(id: string) {
    return this.api.v3CustomformatDelete(+id);
  }

  // System/Health Check
  getSystemStatus() {
    return this.api.v3SystemStatusList();
  }

  async testConnection() {
    try {
      await this.api.v3HealthList();
    } catch (error) {
      logger.error(error);
      return false;
    }

    return true;
  }
}