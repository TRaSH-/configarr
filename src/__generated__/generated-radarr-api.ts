/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export enum AddMovieMethod {
  Manual = "manual",
  List = "list",
  Collection = "collection",
}

export interface AddMovieOptions {
  ignoreEpisodesWithFiles?: boolean;
  ignoreEpisodesWithoutFiles?: boolean;
  monitor?: MonitorTypes;
  searchForMovie?: boolean;
  addMethod?: AddMovieMethod;
}

export interface AlternativeTitleResource {
  /** @format int32 */
  id?: number;
  sourceType?: SourceType;
  /** @format int32 */
  movieMetadataId?: number;
  title?: string | null;
  cleanTitle?: string | null;
}

export interface ApiInfoResource {
  current?: string | null;
  deprecated?: string[] | null;
}

export enum ApplyTags {
  Add = "add",
  Remove = "remove",
  Replace = "replace",
}

export enum AuthenticationRequiredType {
  Enabled = "enabled",
  DisabledForLocalAddresses = "disabledForLocalAddresses",
}

export enum AuthenticationType {
  None = "none",
  Basic = "basic",
  Forms = "forms",
  External = "external",
}

export interface AutoTaggingResource {
  /** @format int32 */
  id?: number;
  name?: string | null;
  removeTagsAutomatically?: boolean;
  /** @uniqueItems true */
  tags?: number[] | null;
  specifications?: AutoTaggingSpecificationSchema[] | null;
}

export interface AutoTaggingSpecificationSchema {
  /** @format int32 */
  id?: number;
  name?: string | null;
  implementation?: string | null;
  implementationName?: string | null;
  negate?: boolean;
  required?: boolean;
  fields?: Field[] | null;
}

export interface BackupResource {
  /** @format int32 */
  id?: number;
  name?: string | null;
  path?: string | null;
  type?: BackupType;
  /** @format int64 */
  size?: number;
  /** @format date-time */
  time?: string;
}

export enum BackupType {
  Scheduled = "scheduled",
  Manual = "manual",
  Update = "update",
}

export interface BlocklistBulkResource {
  ids?: number[] | null;
}

export interface BlocklistResource {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  movieId?: number;
  sourceTitle?: string | null;
  languages?: Language[] | null;
  quality?: QualityModel;
  customFormats?: CustomFormatResource[] | null;
  /** @format date-time */
  date?: string;
  protocol?: DownloadProtocol;
  indexer?: string | null;
  message?: string | null;
  movie?: MovieResource;
}

export interface BlocklistResourcePagingResource {
  /** @format int32 */
  page?: number;
  /** @format int32 */
  pageSize?: number;
  sortKey?: string | null;
  sortDirection?: SortDirection;
  /** @format int32 */
  totalRecords?: number;
  records?: BlocklistResource[] | null;
}

export enum CertificateValidationType {
  Enabled = "enabled",
  DisabledForLocalAddresses = "disabledForLocalAddresses",
  Disabled = "disabled",
}

export interface CollectionMovieResource {
  /** @format int32 */
  tmdbId?: number;
  imdbId?: string | null;
  title?: string | null;
  cleanTitle?: string | null;
  sortTitle?: string | null;
  status?: MovieStatusType;
  overview?: string | null;
  /** @format int32 */
  runtime?: number;
  images?: MediaCover[] | null;
  /** @format int32 */
  year?: number;
  ratings?: Ratings;
  genres?: string[] | null;
  folder?: string | null;
  isExisting?: boolean;
  isExcluded?: boolean;
}

export interface CollectionResource {
  /** @format int32 */
  id?: number;
  title?: string | null;
  sortTitle?: string | null;
  /** @format int32 */
  tmdbId?: number;
  images?: MediaCover[] | null;
  overview?: string | null;
  monitored?: boolean;
  rootFolderPath?: string | null;
  /** @format int32 */
  qualityProfileId?: number;
  searchOnAdd?: boolean;
  minimumAvailability?: MovieStatusType;
  movies?: CollectionMovieResource[] | null;
  /** @format int32 */
  missingMovies?: number;
  /** @uniqueItems true */
  tags?: number[] | null;
}

export interface CollectionUpdateResource {
  collectionIds?: number[] | null;
  monitored?: boolean | null;
  monitorMovies?: boolean | null;
  searchOnAdd?: boolean | null;
  /** @format int32 */
  qualityProfileId?: number | null;
  rootFolderPath?: string | null;
  minimumAvailability?: MovieStatusType;
}

export enum ColonReplacementFormat {
  Delete = "delete",
  Dash = "dash",
  SpaceDash = "spaceDash",
  SpaceDashSpace = "spaceDashSpace",
  Smart = "smart",
}

export interface Command {
  sendUpdatesToClient?: boolean;
  updateScheduledTask?: boolean;
  completionMessage?: string | null;
  requiresDiskAccess?: boolean;
  isExclusive?: boolean;
  isTypeExclusive?: boolean;
  isLongRunning?: boolean;
  name?: string | null;
  /** @format date-time */
  lastExecutionTime?: string | null;
  /** @format date-time */
  lastStartTime?: string | null;
  trigger?: CommandTrigger;
  suppressMessages?: boolean;
  clientUserAgent?: string | null;
}

export enum CommandPriority {
  Normal = "normal",
  High = "high",
  Low = "low",
}

export interface CommandResource {
  /** @format int32 */
  id?: number;
  name?: string | null;
  commandName?: string | null;
  message?: string | null;
  body?: Command;
  priority?: CommandPriority;
  status?: CommandStatus;
  result?: CommandResult;
  /** @format date-time */
  queued?: string;
  /** @format date-time */
  started?: string | null;
  /** @format date-time */
  ended?: string | null;
  /** @format date-span */
  duration?: string | null;
  exception?: string | null;
  trigger?: CommandTrigger;
  clientUserAgent?: string | null;
  /** @format date-time */
  stateChangeTime?: string | null;
  sendUpdatesToClient?: boolean;
  updateScheduledTask?: boolean;
  /** @format date-time */
  lastExecutionTime?: string | null;
}

export enum CommandResult {
  Unknown = "unknown",
  Successful = "successful",
  Unsuccessful = "unsuccessful",
}

export enum CommandStatus {
  Queued = "queued",
  Started = "started",
  Completed = "completed",
  Failed = "failed",
  Aborted = "aborted",
  Cancelled = "cancelled",
  Orphaned = "orphaned",
}

export enum CommandTrigger {
  Unspecified = "unspecified",
  Manual = "manual",
  Scheduled = "scheduled",
}

export interface CreditResource {
  /** @format int32 */
  id?: number;
  personName?: string | null;
  creditTmdbId?: string | null;
  /** @format int32 */
  personTmdbId?: number;
  /** @format int32 */
  movieMetadataId?: number;
  images?: MediaCover[] | null;
  department?: string | null;
  job?: string | null;
  character?: string | null;
  /** @format int32 */
  order?: number;
  type?: CreditType;
}

export enum CreditType {
  Cast = "cast",
  Crew = "crew",
}

export interface CustomFilterResource {
  /** @format int32 */
  id?: number;
  type?: string | null;
  label?: string | null;
  filters?: Record<string, any>[] | null;
}

export interface CustomFormatBulkResource {
  /** @uniqueItems true */
  ids?: number[] | null;
  includeCustomFormatWhenRenaming?: boolean | null;
}

export interface CustomFormatResource {
  /** @format int32 */
  id?: number;
  name?: string | null;
  includeCustomFormatWhenRenaming?: boolean | null;
  specifications?: CustomFormatSpecificationSchema[] | null;
}

export interface CustomFormatSpecificationSchema {
  /** @format int32 */
  id?: number;
  name?: string | null;
  implementation?: string | null;
  implementationName?: string | null;
  infoLink?: string | null;
  negate?: boolean;
  required?: boolean;
  fields?: Field[] | null;
  presets?: CustomFormatSpecificationSchema[] | null;
}

export enum DatabaseType {
  SqLite = "sqLite",
  PostgreSQL = "postgreSQL",
}

export interface DelayProfileResource {
  /** @format int32 */
  id?: number;
  enableUsenet?: boolean;
  enableTorrent?: boolean;
  preferredProtocol?: DownloadProtocol;
  /** @format int32 */
  usenetDelay?: number;
  /** @format int32 */
  torrentDelay?: number;
  bypassIfHighestQuality?: boolean;
  bypassIfAboveCustomFormatScore?: boolean;
  /** @format int32 */
  minimumCustomFormatScore?: number;
  /** @format int32 */
  order?: number;
  /** @uniqueItems true */
  tags?: number[] | null;
}

export interface DiskSpaceResource {
  /** @format int32 */
  id?: number;
  path?: string | null;
  label?: string | null;
  /** @format int64 */
  freeSpace?: number;
  /** @format int64 */
  totalSpace?: number;
}

export interface DownloadClientBulkResource {
  ids?: number[] | null;
  tags?: number[] | null;
  applyTags?: ApplyTags;
  enable?: boolean | null;
  /** @format int32 */
  priority?: number | null;
  removeCompletedDownloads?: boolean | null;
  removeFailedDownloads?: boolean | null;
}

export interface DownloadClientConfigResource {
  /** @format int32 */
  id?: number;
  downloadClientWorkingFolders?: string | null;
  enableCompletedDownloadHandling?: boolean;
  /** @format int32 */
  checkForFinishedDownloadInterval?: number;
  autoRedownloadFailed?: boolean;
  autoRedownloadFailedFromInteractiveSearch?: boolean;
}

export interface DownloadClientResource {
  /** @format int32 */
  id?: number;
  name?: string | null;
  fields?: Field[] | null;
  implementationName?: string | null;
  implementation?: string | null;
  configContract?: string | null;
  infoLink?: string | null;
  message?: ProviderMessage;
  /** @uniqueItems true */
  tags?: number[] | null;
  presets?: DownloadClientResource[] | null;
  enable?: boolean;
  protocol?: DownloadProtocol;
  /** @format int32 */
  priority?: number;
  removeCompletedDownloads?: boolean;
  removeFailedDownloads?: boolean;
}

export enum DownloadProtocol {
  Unknown = "unknown",
  Usenet = "usenet",
  Torrent = "torrent",
}

export interface ExtraFileResource {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  movieId?: number;
  /** @format int32 */
  movieFileId?: number | null;
  relativePath?: string | null;
  extension?: string | null;
  languageTags?: string[] | null;
  title?: string | null;
  type?: ExtraFileType;
}

export enum ExtraFileType {
  Subtitle = "subtitle",
  Metadata = "metadata",
  Other = "other",
}

export interface Field {
  /** @format int32 */
  order?: number;
  name?: string | null;
  label?: string | null;
  unit?: string | null;
  helpText?: string | null;
  helpTextWarning?: string | null;
  helpLink?: string | null;
  value?: any;
  type?: string | null;
  advanced?: boolean;
  selectOptions?: SelectOption[] | null;
  selectOptionsProviderAction?: string | null;
  section?: string | null;
  hidden?: string | null;
  privacy?: PrivacyLevel;
  placeholder?: string | null;
  isFloat?: boolean;
}

export enum FileDateType {
  None = "none",
  Cinemas = "cinemas",
  Release = "release",
}

export enum HealthCheckResult {
  Ok = "ok",
  Notice = "notice",
  Warning = "warning",
  Error = "error",
}

export interface HealthResource {
  /** @format int32 */
  id?: number;
  source?: string | null;
  type?: HealthCheckResult;
  message?: string | null;
  wikiUrl?: HttpUri;
}

export interface HistoryResource {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  movieId?: number;
  sourceTitle?: string | null;
  languages?: Language[] | null;
  quality?: QualityModel;
  customFormats?: CustomFormatResource[] | null;
  /** @format int32 */
  customFormatScore?: number;
  qualityCutoffNotMet?: boolean;
  /** @format date-time */
  date?: string;
  downloadId?: string | null;
  eventType?: MovieHistoryEventType;
  data?: Record<string, string | null>;
  movie?: MovieResource;
}

export interface HistoryResourcePagingResource {
  /** @format int32 */
  page?: number;
  /** @format int32 */
  pageSize?: number;
  sortKey?: string | null;
  sortDirection?: SortDirection;
  /** @format int32 */
  totalRecords?: number;
  records?: HistoryResource[] | null;
}

export interface HostConfigResource {
  /** @format int32 */
  id?: number;
  bindAddress?: string | null;
  /** @format int32 */
  port?: number;
  /** @format int32 */
  sslPort?: number;
  enableSsl?: boolean;
  launchBrowser?: boolean;
  authenticationMethod?: AuthenticationType;
  authenticationRequired?: AuthenticationRequiredType;
  analyticsEnabled?: boolean;
  username?: string | null;
  password?: string | null;
  passwordConfirmation?: string | null;
  logLevel?: string | null;
  /** @format int32 */
  logSizeLimit?: number;
  consoleLogLevel?: string | null;
  branch?: string | null;
  apiKey?: string | null;
  sslCertPath?: string | null;
  sslCertPassword?: string | null;
  urlBase?: string | null;
  instanceName?: string | null;
  applicationUrl?: string | null;
  updateAutomatically?: boolean;
  updateMechanism?: UpdateMechanism;
  updateScriptPath?: string | null;
  proxyEnabled?: boolean;
  proxyType?: ProxyType;
  proxyHostname?: string | null;
  /** @format int32 */
  proxyPort?: number;
  proxyUsername?: string | null;
  proxyPassword?: string | null;
  proxyBypassFilter?: string | null;
  proxyBypassLocalAddresses?: boolean;
  certificateValidation?: CertificateValidationType;
  backupFolder?: string | null;
  /** @format int32 */
  backupInterval?: number;
  /** @format int32 */
  backupRetention?: number;
}

export interface HttpUri {
  fullUri?: string | null;
  scheme?: string | null;
  host?: string | null;
  /** @format int32 */
  port?: number | null;
  path?: string | null;
  query?: string | null;
  fragment?: string | null;
}

export interface ImportListBulkResource {
  ids?: number[] | null;
  tags?: number[] | null;
  applyTags?: ApplyTags;
  enabled?: boolean | null;
  enableAuto?: boolean | null;
  rootFolderPath?: string | null;
  /** @format int32 */
  qualityProfileId?: number | null;
  minimumAvailability?: MovieStatusType;
}

export interface ImportListConfigResource {
  /** @format int32 */
  id?: number;
  listSyncLevel?: string | null;
}

export interface ImportListExclusionBulkResource {
  /** @uniqueItems true */
  ids?: number[] | null;
}

export interface ImportListExclusionResource {
  /** @format int32 */
  id?: number;
  name?: string | null;
  fields?: Field[] | null;
  implementationName?: string | null;
  implementation?: string | null;
  configContract?: string | null;
  infoLink?: string | null;
  message?: ProviderMessage;
  /** @uniqueItems true */
  tags?: number[] | null;
  presets?: ImportListExclusionResource[] | null;
  /** @format int32 */
  tmdbId?: number;
  movieTitle?: string | null;
  /** @format int32 */
  movieYear?: number;
}

export interface ImportListExclusionResourcePagingResource {
  /** @format int32 */
  page?: number;
  /** @format int32 */
  pageSize?: number;
  sortKey?: string | null;
  sortDirection?: SortDirection;
  /** @format int32 */
  totalRecords?: number;
  records?: ImportListExclusionResource[] | null;
}

export interface ImportListResource {
  /** @format int32 */
  id?: number;
  name?: string | null;
  fields?: Field[] | null;
  implementationName?: string | null;
  implementation?: string | null;
  configContract?: string | null;
  infoLink?: string | null;
  message?: ProviderMessage;
  /** @uniqueItems true */
  tags?: number[] | null;
  presets?: ImportListResource[] | null;
  enabled?: boolean;
  enableAuto?: boolean;
  monitor?: MonitorTypes;
  rootFolderPath?: string | null;
  /** @format int32 */
  qualityProfileId?: number;
  searchOnAdd?: boolean;
  minimumAvailability?: MovieStatusType;
  listType?: ImportListType;
  /** @format int32 */
  listOrder?: number;
  /** @format date-span */
  minRefreshInterval?: string;
}

export enum ImportListType {
  Program = "program",
  Tmdb = "tmdb",
  Trakt = "trakt",
  Plex = "plex",
  Simkl = "simkl",
  Other = "other",
  Advanced = "advanced",
}

export interface IndexerBulkResource {
  ids?: number[] | null;
  tags?: number[] | null;
  applyTags?: ApplyTags;
  enableRss?: boolean | null;
  enableAutomaticSearch?: boolean | null;
  enableInteractiveSearch?: boolean | null;
  /** @format int32 */
  priority?: number | null;
}

export interface IndexerConfigResource {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  minimumAge?: number;
  /** @format int32 */
  maximumSize?: number;
  /** @format int32 */
  retention?: number;
  /** @format int32 */
  rssSyncInterval?: number;
  preferIndexerFlags?: boolean;
  /** @format int32 */
  availabilityDelay?: number;
  allowHardcodedSubs?: boolean;
  whitelistedHardcodedSubs?: string | null;
}

export interface IndexerFlagResource {
  /** @format int32 */
  id?: number;
  name?: string | null;
  nameLower?: string | null;
}

export interface IndexerResource {
  /** @format int32 */
  id?: number;
  name?: string | null;
  fields?: Field[] | null;
  implementationName?: string | null;
  implementation?: string | null;
  configContract?: string | null;
  infoLink?: string | null;
  message?: ProviderMessage;
  /** @uniqueItems true */
  tags?: number[] | null;
  presets?: IndexerResource[] | null;
  enableRss?: boolean;
  enableAutomaticSearch?: boolean;
  enableInteractiveSearch?: boolean;
  supportsRss?: boolean;
  supportsSearch?: boolean;
  protocol?: DownloadProtocol;
  /** @format int32 */
  priority?: number;
  /** @format int32 */
  downloadClientId?: number;
}

export interface Language {
  /** @format int32 */
  id?: number;
  name?: string | null;
}

export interface LanguageResource {
  /** @format int32 */
  id?: number;
  name?: string | null;
  nameLower?: string | null;
}

export interface LocalizationLanguageResource {
  identifier?: string | null;
}

export interface LogFileResource {
  /** @format int32 */
  id?: number;
  filename?: string | null;
  /** @format date-time */
  lastWriteTime?: string;
  contentsUrl?: string | null;
  downloadUrl?: string | null;
}

export interface LogResource {
  /** @format int32 */
  id?: number;
  /** @format date-time */
  time?: string;
  exception?: string | null;
  exceptionType?: string | null;
  level?: string | null;
  logger?: string | null;
  message?: string | null;
  method?: string | null;
}

export interface LogResourcePagingResource {
  /** @format int32 */
  page?: number;
  /** @format int32 */
  pageSize?: number;
  sortKey?: string | null;
  sortDirection?: SortDirection;
  /** @format int32 */
  totalRecords?: number;
  records?: LogResource[] | null;
}

export interface ManualImportReprocessResource {
  /** @format int32 */
  id?: number;
  path?: string | null;
  /** @format int32 */
  movieId?: number;
  movie?: MovieResource;
  quality?: QualityModel;
  languages?: Language[] | null;
  releaseGroup?: string | null;
  downloadId?: string | null;
  customFormats?: CustomFormatResource[] | null;
  /** @format int32 */
  customFormatScore?: number;
  /** @format int32 */
  indexerFlags?: number;
  rejections?: Rejection[] | null;
}

export interface ManualImportResource {
  /** @format int32 */
  id?: number;
  path?: string | null;
  relativePath?: string | null;
  folderName?: string | null;
  name?: string | null;
  /** @format int64 */
  size?: number;
  movie?: MovieResource;
  quality?: QualityModel;
  languages?: Language[] | null;
  releaseGroup?: string | null;
  /** @format int32 */
  qualityWeight?: number;
  downloadId?: string | null;
  customFormats?: CustomFormatResource[] | null;
  /** @format int32 */
  customFormatScore?: number;
  /** @format int32 */
  indexerFlags?: number;
  rejections?: Rejection[] | null;
}

export interface MediaCover {
  coverType?: MediaCoverTypes;
  url?: string | null;
  remoteUrl?: string | null;
}

export enum MediaCoverTypes {
  Unknown = "unknown",
  Poster = "poster",
  Banner = "banner",
  Fanart = "fanart",
  Screenshot = "screenshot",
  Headshot = "headshot",
  Clearlogo = "clearlogo",
}

export interface MediaInfoResource {
  /** @format int32 */
  id?: number;
  /** @format int64 */
  audioBitrate?: number;
  /** @format double */
  audioChannels?: number;
  audioCodec?: string | null;
  audioLanguages?: string | null;
  /** @format int32 */
  audioStreamCount?: number;
  /** @format int32 */
  videoBitDepth?: number;
  /** @format int64 */
  videoBitrate?: number;
  videoCodec?: string | null;
  /** @format double */
  videoFps?: number;
  videoDynamicRange?: string | null;
  videoDynamicRangeType?: string | null;
  resolution?: string | null;
  runTime?: string | null;
  scanType?: string | null;
  subtitles?: string | null;
}

export interface MediaManagementConfigResource {
  /** @format int32 */
  id?: number;
  autoUnmonitorPreviouslyDownloadedMovies?: boolean;
  recycleBin?: string | null;
  /** @format int32 */
  recycleBinCleanupDays?: number;
  downloadPropersAndRepacks?: ProperDownloadTypes;
  createEmptyMovieFolders?: boolean;
  deleteEmptyFolders?: boolean;
  fileDate?: FileDateType;
  rescanAfterRefresh?: RescanAfterRefreshType;
  autoRenameFolders?: boolean;
  pathsDefaultStatic?: boolean;
  setPermissionsLinux?: boolean;
  chmodFolder?: string | null;
  chownGroup?: string | null;
  skipFreeSpaceCheckWhenImporting?: boolean;
  /** @format int32 */
  minimumFreeSpaceWhenImporting?: number;
  copyUsingHardlinks?: boolean;
  useScriptImport?: boolean;
  scriptImportPath?: string | null;
  importExtraFiles?: boolean;
  extraFileExtensions?: string | null;
  enableMediaInfo?: boolean;
}

export interface MetadataConfigResource {
  /** @format int32 */
  id?: number;
  certificationCountry?: TMDbCountryCode;
}

export interface MetadataResource {
  /** @format int32 */
  id?: number;
  name?: string | null;
  fields?: Field[] | null;
  implementationName?: string | null;
  implementation?: string | null;
  configContract?: string | null;
  infoLink?: string | null;
  message?: ProviderMessage;
  /** @uniqueItems true */
  tags?: number[] | null;
  presets?: MetadataResource[] | null;
  enable?: boolean;
}

export enum Modifier {
  None = "none",
  Regional = "regional",
  Screener = "screener",
  Rawhd = "rawhd",
  Brdisk = "brdisk",
  Remux = "remux",
}

export enum MonitorTypes {
  MovieOnly = "movieOnly",
  MovieAndCollection = "movieAndCollection",
  None = "none",
}

export interface MovieCollectionResource {
  title?: string | null;
  /** @format int32 */
  tmdbId?: number;
}

export interface MovieEditorResource {
  movieIds?: number[] | null;
  monitored?: boolean | null;
  /** @format int32 */
  qualityProfileId?: number | null;
  minimumAvailability?: MovieStatusType;
  rootFolderPath?: string | null;
  tags?: number[] | null;
  applyTags?: ApplyTags;
  moveFiles?: boolean;
  deleteFiles?: boolean;
  addImportExclusion?: boolean;
}

export interface MovieFileListResource {
  movieFileIds?: number[] | null;
  languages?: Language[] | null;
  quality?: QualityModel;
  edition?: string | null;
  releaseGroup?: string | null;
  sceneName?: string | null;
  /** @format int32 */
  indexerFlags?: number | null;
}

export interface MovieFileResource {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  movieId?: number;
  relativePath?: string | null;
  path?: string | null;
  /** @format int64 */
  size?: number;
  /** @format date-time */
  dateAdded?: string;
  sceneName?: string | null;
  releaseGroup?: string | null;
  edition?: string | null;
  languages?: Language[] | null;
  quality?: QualityModel;
  customFormats?: CustomFormatResource[] | null;
  /** @format int32 */
  customFormatScore?: number;
  /** @format int32 */
  indexerFlags?: number | null;
  mediaInfo?: MediaInfoResource;
  originalFilePath?: string | null;
  qualityCutoffNotMet?: boolean;
}

export enum MovieHistoryEventType {
  Unknown = "unknown",
  Grabbed = "grabbed",
  DownloadFolderImported = "downloadFolderImported",
  DownloadFailed = "downloadFailed",
  MovieFileDeleted = "movieFileDeleted",
  MovieFolderImported = "movieFolderImported",
  MovieFileRenamed = "movieFileRenamed",
  DownloadIgnored = "downloadIgnored",
}

export interface MovieResource {
  /** @format int32 */
  id?: number;
  title?: string | null;
  originalTitle?: string | null;
  originalLanguage?: Language;
  alternateTitles?: AlternativeTitleResource[] | null;
  /** @format int32 */
  secondaryYear?: number | null;
  /** @format int32 */
  secondaryYearSourceId?: number;
  sortTitle?: string | null;
  /** @format int64 */
  sizeOnDisk?: number | null;
  status?: MovieStatusType;
  overview?: string | null;
  /** @format date-time */
  inCinemas?: string | null;
  /** @format date-time */
  physicalRelease?: string | null;
  /** @format date-time */
  digitalRelease?: string | null;
  /** @format date-time */
  releaseDate?: string | null;
  physicalReleaseNote?: string | null;
  images?: MediaCover[] | null;
  website?: string | null;
  remotePoster?: string | null;
  /** @format int32 */
  year?: number;
  youTubeTrailerId?: string | null;
  studio?: string | null;
  path?: string | null;
  /** @format int32 */
  qualityProfileId?: number;
  hasFile?: boolean | null;
  /** @format int32 */
  movieFileId?: number;
  monitored?: boolean;
  minimumAvailability?: MovieStatusType;
  isAvailable?: boolean;
  folderName?: string | null;
  /** @format int32 */
  runtime?: number;
  cleanTitle?: string | null;
  imdbId?: string | null;
  /** @format int32 */
  tmdbId?: number;
  titleSlug?: string | null;
  rootFolderPath?: string | null;
  folder?: string | null;
  certification?: string | null;
  genres?: string[] | null;
  /** @uniqueItems true */
  tags?: number[] | null;
  /** @format date-time */
  added?: string;
  addOptions?: AddMovieOptions;
  ratings?: Ratings;
  movieFile?: MovieFileResource;
  collection?: MovieCollectionResource;
  /** @format float */
  popularity?: number;
  /** @format date-time */
  lastSearchTime?: string | null;
  statistics?: MovieStatisticsResource;
}

export interface MovieResourcePagingResource {
  /** @format int32 */
  page?: number;
  /** @format int32 */
  pageSize?: number;
  sortKey?: string | null;
  sortDirection?: SortDirection;
  /** @format int32 */
  totalRecords?: number;
  records?: MovieResource[] | null;
}

export enum MovieRuntimeFormatType {
  HoursMinutes = "hoursMinutes",
  Minutes = "minutes",
}

export interface MovieStatisticsResource {
  /** @format int32 */
  movieFileCount?: number;
  /** @format int64 */
  sizeOnDisk?: number;
  releaseGroups?: string[] | null;
}

export enum MovieStatusType {
  Tba = "tba",
  Announced = "announced",
  InCinemas = "inCinemas",
  Released = "released",
  Deleted = "deleted",
}

export interface NamingConfigResource {
  /** @format int32 */
  id?: number;
  renameMovies?: boolean;
  replaceIllegalCharacters?: boolean;
  colonReplacementFormat?: ColonReplacementFormat;
  standardMovieFormat?: string | null;
  movieFolderFormat?: string | null;
}

export interface NotificationResource {
  /** @format int32 */
  id?: number;
  name?: string | null;
  fields?: Field[] | null;
  implementationName?: string | null;
  implementation?: string | null;
  configContract?: string | null;
  infoLink?: string | null;
  message?: ProviderMessage;
  /** @uniqueItems true */
  tags?: number[] | null;
  presets?: NotificationResource[] | null;
  link?: string | null;
  onGrab?: boolean;
  onDownload?: boolean;
  onUpgrade?: boolean;
  onRename?: boolean;
  onMovieAdded?: boolean;
  onMovieDelete?: boolean;
  onMovieFileDelete?: boolean;
  onMovieFileDeleteForUpgrade?: boolean;
  onHealthIssue?: boolean;
  includeHealthWarnings?: boolean;
  onHealthRestored?: boolean;
  onApplicationUpdate?: boolean;
  onManualInteractionRequired?: boolean;
  supportsOnGrab?: boolean;
  supportsOnDownload?: boolean;
  supportsOnUpgrade?: boolean;
  supportsOnRename?: boolean;
  supportsOnMovieAdded?: boolean;
  supportsOnMovieDelete?: boolean;
  supportsOnMovieFileDelete?: boolean;
  supportsOnMovieFileDeleteForUpgrade?: boolean;
  supportsOnHealthIssue?: boolean;
  supportsOnHealthRestored?: boolean;
  supportsOnApplicationUpdate?: boolean;
  supportsOnManualInteractionRequired?: boolean;
  testCommand?: string | null;
}

export interface ParseResource {
  /** @format int32 */
  id?: number;
  title?: string | null;
  parsedMovieInfo?: ParsedMovieInfo;
  movie?: MovieResource;
  languages?: Language[] | null;
  customFormats?: CustomFormatResource[] | null;
  /** @format int32 */
  customFormatScore?: number;
}

export interface ParsedMovieInfo {
  movieTitles?: string[] | null;
  originalTitle?: string | null;
  releaseTitle?: string | null;
  simpleReleaseTitle?: string | null;
  quality?: QualityModel;
  languages?: Language[] | null;
  releaseGroup?: string | null;
  releaseHash?: string | null;
  edition?: string | null;
  /** @format int32 */
  year?: number;
  imdbId?: string | null;
  /** @format int32 */
  tmdbId?: number;
  hardcodedSubs?: string | null;
  movieTitle?: string | null;
  primaryMovieTitle?: string | null;
}

export interface PingResource {
  status?: string | null;
}

export enum PrivacyLevel {
  Normal = "normal",
  Password = "password",
  ApiKey = "apiKey",
  UserName = "userName",
}

export interface ProfileFormatItemResource {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  format?: number;
  name?: string | null;
  /** @format int32 */
  score?: number;
}

export enum ProperDownloadTypes {
  PreferAndUpgrade = "preferAndUpgrade",
  DoNotUpgrade = "doNotUpgrade",
  DoNotPrefer = "doNotPrefer",
}

export interface ProviderMessage {
  message?: string | null;
  type?: ProviderMessageType;
}

export enum ProviderMessageType {
  Info = "info",
  Warning = "warning",
  Error = "error",
}

export enum ProxyType {
  Http = "http",
  Socks4 = "socks4",
  Socks5 = "socks5",
}

export interface Quality {
  /** @format int32 */
  id?: number;
  name?: string | null;
  source?: QualitySource;
  /** @format int32 */
  resolution?: number;
  modifier?: Modifier;
}

export interface QualityDefinitionResource {
  /** @format int32 */
  id?: number;
  quality?: Quality;
  title?: string | null;
  /** @format int32 */
  weight?: number;
  /** @format double */
  minSize?: number | null;
  /** @format double */
  maxSize?: number | null;
  /** @format double */
  preferredSize?: number | null;
}

export interface QualityModel {
  quality?: Quality;
  revision?: Revision;
}

export interface QualityProfileQualityItemResource {
  /** @format int32 */
  id?: number;
  name?: string | null;
  quality?: Quality;
  items?: QualityProfileQualityItemResource[] | null;
  allowed?: boolean;
}

export interface QualityProfileResource {
  /** @format int32 */
  id?: number;
  name?: string | null;
  upgradeAllowed?: boolean;
  /** @format int32 */
  cutoff?: number;
  items?: QualityProfileQualityItemResource[] | null;
  /** @format int32 */
  minFormatScore?: number;
  /** @format int32 */
  cutoffFormatScore?: number;
  /** @format int32 */
  minUpgradeFormatScore?: number;
  formatItems?: ProfileFormatItemResource[] | null;
  language?: Language;
}

export enum QualitySource {
  Unknown = "unknown",
  Cam = "cam",
  Telesync = "telesync",
  Telecine = "telecine",
  Workprint = "workprint",
  Dvd = "dvd",
  Tv = "tv",
  Webdl = "webdl",
  Webrip = "webrip",
  Bluray = "bluray",
}

export interface QueueBulkResource {
  ids?: number[] | null;
}

export interface QueueResource {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  movieId?: number | null;
  movie?: MovieResource;
  languages?: Language[] | null;
  quality?: QualityModel;
  customFormats?: CustomFormatResource[] | null;
  /** @format int32 */
  customFormatScore?: number;
  /** @format double */
  size?: number;
  title?: string | null;
  /** @format double */
  sizeleft?: number;
  /** @format date-span */
  timeleft?: string | null;
  /** @format date-time */
  estimatedCompletionTime?: string | null;
  /** @format date-time */
  added?: string | null;
  status?: string | null;
  trackedDownloadStatus?: TrackedDownloadStatus;
  trackedDownloadState?: TrackedDownloadState;
  statusMessages?: TrackedDownloadStatusMessage[] | null;
  errorMessage?: string | null;
  downloadId?: string | null;
  protocol?: DownloadProtocol;
  downloadClient?: string | null;
  downloadClientHasPostImportCategory?: boolean;
  indexer?: string | null;
  outputPath?: string | null;
}

export interface QueueResourcePagingResource {
  /** @format int32 */
  page?: number;
  /** @format int32 */
  pageSize?: number;
  sortKey?: string | null;
  sortDirection?: SortDirection;
  /** @format int32 */
  totalRecords?: number;
  records?: QueueResource[] | null;
}

export interface QueueStatusResource {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  totalCount?: number;
  /** @format int32 */
  count?: number;
  /** @format int32 */
  unknownCount?: number;
  errors?: boolean;
  warnings?: boolean;
  unknownErrors?: boolean;
  unknownWarnings?: boolean;
}

export interface RatingChild {
  /** @format int32 */
  votes?: number;
  /** @format double */
  value?: number;
  type?: RatingType;
}

export enum RatingType {
  User = "user",
  Critic = "critic",
}

export interface Ratings {
  imdb?: RatingChild;
  tmdb?: RatingChild;
  metacritic?: RatingChild;
  rottenTomatoes?: RatingChild;
  trakt?: RatingChild;
}

export interface Rejection {
  reason?: string | null;
  type?: RejectionType;
}

export enum RejectionType {
  Permanent = "permanent",
  Temporary = "temporary",
}

export interface ReleaseProfileResource {
  /** @format int32 */
  id?: number;
  name?: string | null;
  enabled?: boolean;
  required?: any;
  ignored?: any;
  /** @format int32 */
  indexerId?: number;
  /** @uniqueItems true */
  tags?: number[] | null;
}

export interface ReleaseResource {
  /** @format int32 */
  id?: number;
  guid?: string | null;
  quality?: QualityModel;
  customFormats?: CustomFormatResource[] | null;
  /** @format int32 */
  customFormatScore?: number;
  /** @format int32 */
  qualityWeight?: number;
  /** @format int32 */
  age?: number;
  /** @format double */
  ageHours?: number;
  /** @format double */
  ageMinutes?: number;
  /** @format int64 */
  size?: number;
  /** @format int32 */
  indexerId?: number;
  indexer?: string | null;
  releaseGroup?: string | null;
  subGroup?: string | null;
  releaseHash?: string | null;
  title?: string | null;
  sceneSource?: boolean;
  movieTitles?: string[] | null;
  languages?: Language[] | null;
  /** @format int32 */
  mappedMovieId?: number | null;
  approved?: boolean;
  temporarilyRejected?: boolean;
  rejected?: boolean;
  /** @format int32 */
  tmdbId?: number;
  /** @format int32 */
  imdbId?: number;
  rejections?: string[] | null;
  /** @format date-time */
  publishDate?: string;
  commentUrl?: string | null;
  downloadUrl?: string | null;
  infoUrl?: string | null;
  downloadAllowed?: boolean;
  /** @format int32 */
  releaseWeight?: number;
  edition?: string | null;
  magnetUrl?: string | null;
  infoHash?: string | null;
  /** @format int32 */
  seeders?: number | null;
  /** @format int32 */
  leechers?: number | null;
  protocol?: DownloadProtocol;
  indexerFlags?: any;
  /** @format int32 */
  movieId?: number | null;
  /** @format int32 */
  downloadClientId?: number | null;
  downloadClient?: string | null;
  shouldOverride?: boolean | null;
}

export interface RemotePathMappingResource {
  /** @format int32 */
  id?: number;
  host?: string | null;
  remotePath?: string | null;
  localPath?: string | null;
}

export interface RenameMovieResource {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  movieId?: number;
  /** @format int32 */
  movieFileId?: number;
  existingPath?: string | null;
  newPath?: string | null;
}

export enum RescanAfterRefreshType {
  Always = "always",
  AfterManual = "afterManual",
  Never = "never",
}

export interface Revision {
  /** @format int32 */
  version?: number;
  /** @format int32 */
  real?: number;
  isRepack?: boolean;
}

export interface RootFolderResource {
  /** @format int32 */
  id?: number;
  path?: string | null;
  accessible?: boolean;
  /** @format int64 */
  freeSpace?: number | null;
  unmappedFolders?: UnmappedFolder[] | null;
}

export enum RuntimeMode {
  Console = "console",
  Service = "service",
  Tray = "tray",
}

export interface SelectOption {
  /** @format int32 */
  value?: number;
  name?: string | null;
  /** @format int32 */
  order?: number;
  hint?: string | null;
  dividerAfter?: boolean;
}

export enum SortDirection {
  Default = "default",
  Ascending = "ascending",
  Descending = "descending",
}

export enum SourceType {
  Tmdb = "tmdb",
  Mappings = "mappings",
  User = "user",
  Indexer = "indexer",
}

export interface SystemResource {
  appName?: string | null;
  instanceName?: string | null;
  version?: string | null;
  /** @format date-time */
  buildTime?: string;
  isDebug?: boolean;
  isProduction?: boolean;
  isAdmin?: boolean;
  isUserInteractive?: boolean;
  startupPath?: string | null;
  appData?: string | null;
  osName?: string | null;
  osVersion?: string | null;
  isNetCore?: boolean;
  isLinux?: boolean;
  isOsx?: boolean;
  isWindows?: boolean;
  isDocker?: boolean;
  mode?: RuntimeMode;
  branch?: string | null;
  databaseType?: DatabaseType;
  databaseVersion?: string | null;
  authentication?: AuthenticationType;
  /** @format int32 */
  migrationVersion?: number;
  urlBase?: string | null;
  runtimeVersion?: string | null;
  runtimeName?: string | null;
  /** @format date-time */
  startTime?: string;
  packageVersion?: string | null;
  packageAuthor?: string | null;
  packageUpdateMechanism?: UpdateMechanism;
  packageUpdateMechanismMessage?: string | null;
}

export enum TMDbCountryCode {
  Au = "au",
  Br = "br",
  Ca = "ca",
  Fr = "fr",
  De = "de",
  Gb = "gb",
  Ie = "ie",
  It = "it",
  Es = "es",
  Us = "us",
  Nz = "nz",
}

export interface TagDetailsResource {
  /** @format int32 */
  id?: number;
  label?: string | null;
  delayProfileIds?: number[] | null;
  importListIds?: number[] | null;
  notificationIds?: number[] | null;
  releaseProfileIds?: number[] | null;
  indexerIds?: number[] | null;
  downloadClientIds?: number[] | null;
  autoTagIds?: number[] | null;
  movieIds?: number[] | null;
}

export interface TagResource {
  /** @format int32 */
  id?: number;
  label?: string | null;
}

export interface TaskResource {
  /** @format int32 */
  id?: number;
  name?: string | null;
  taskName?: string | null;
  /** @format int32 */
  interval?: number;
  /** @format date-time */
  lastExecution?: string;
  /** @format date-time */
  lastStartTime?: string;
  /** @format date-time */
  nextExecution?: string;
  /** @format date-span */
  lastDuration?: string;
}

export enum TrackedDownloadState {
  Downloading = "downloading",
  ImportBlocked = "importBlocked",
  ImportPending = "importPending",
  Importing = "importing",
  Imported = "imported",
  FailedPending = "failedPending",
  Failed = "failed",
  Ignored = "ignored",
}

export enum TrackedDownloadStatus {
  Ok = "ok",
  Warning = "warning",
  Error = "error",
}

export interface TrackedDownloadStatusMessage {
  title?: string | null;
  messages?: string[] | null;
}

export interface UiConfigResource {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  firstDayOfWeek?: number;
  calendarWeekColumnHeader?: string | null;
  movieRuntimeFormat?: MovieRuntimeFormatType;
  shortDateFormat?: string | null;
  longDateFormat?: string | null;
  timeFormat?: string | null;
  showRelativeDates?: boolean;
  enableColorImpairedMode?: boolean;
  /** @format int32 */
  movieInfoLanguage?: number;
  /** @format int32 */
  uiLanguage?: number;
  theme?: string | null;
}

export interface UnmappedFolder {
  name?: string | null;
  path?: string | null;
  relativePath?: string | null;
}

export interface UpdateChanges {
  new?: string[] | null;
  fixed?: string[] | null;
}

export enum UpdateMechanism {
  BuiltIn = "builtIn",
  Script = "script",
  External = "external",
  Apt = "apt",
  Docker = "docker",
}

export interface UpdateResource {
  /** @format int32 */
  id?: number;
  version?: string | null;
  branch?: string | null;
  /** @format date-time */
  releaseDate?: string;
  fileName?: string | null;
  url?: string | null;
  installed?: boolean;
  /** @format date-time */
  installedOn?: string | null;
  installable?: boolean;
  latest?: boolean;
  changes?: UpdateChanges;
  hash?: string | null;
}

import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, HeadersDefaults, ResponseType } from "axios";
import axios from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "{protocol}://{hostpath}" });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method && this.instance.defaults.headers[method.toLowerCase() as keyof HeadersDefaults]) || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === "object" && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    if (input instanceof FormData) {
      return input;
    }
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] = property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (type === ContentType.Text && body && body !== null && typeof body !== "string") {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type ? { "Content-Type": type } : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title Radarr
 * @version 3.0.0
 * @license GPL-3.0 (https://github.com/Radarr/Radarr/blob/develop/LICENSE)
 * @baseUrl {protocol}://{hostpath}
 *
 * Radarr API docs
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags StaticResource
   * @name GetRoot
   * @request GET:/
   * @secure
   */
  getRoot = (path: string, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/`,
      method: "GET",
      secure: true,
      ...params,
    });

  api = {
    /**
     * No description
     *
     * @tags AlternativeTitle
     * @name V3AlttitleList
     * @request GET:/api/v3/alttitle
     * @secure
     */
    v3AlttitleList: (
      query?: {
        /** @format int32 */
        movieId?: number;
        /** @format int32 */
        movieMetadataId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<AlternativeTitleResource[], any>({
        path: `/api/v3/alttitle`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AlternativeTitle
     * @name V3AlttitleDetail
     * @request GET:/api/v3/alttitle/{id}
     * @secure
     */
    v3AlttitleDetail: (id: number, params: RequestParams = {}) =>
      this.request<AlternativeTitleResource, any>({
        path: `/api/v3/alttitle/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ApiInfo
     * @name GetApi
     * @request GET:/api
     * @secure
     */
    getApi: (params: RequestParams = {}) =>
      this.request<ApiInfoResource, any>({
        path: `/api`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AutoTagging
     * @name V3AutotaggingCreate
     * @request POST:/api/v3/autotagging
     * @secure
     */
    v3AutotaggingCreate: (data: AutoTaggingResource, params: RequestParams = {}) =>
      this.request<AutoTaggingResource, any>({
        path: `/api/v3/autotagging`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AutoTagging
     * @name V3AutotaggingList
     * @request GET:/api/v3/autotagging
     * @secure
     */
    v3AutotaggingList: (params: RequestParams = {}) =>
      this.request<AutoTaggingResource[], any>({
        path: `/api/v3/autotagging`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AutoTagging
     * @name V3AutotaggingUpdate
     * @request PUT:/api/v3/autotagging/{id}
     * @secure
     */
    v3AutotaggingUpdate: (id: string, data: AutoTaggingResource, params: RequestParams = {}) =>
      this.request<AutoTaggingResource, any>({
        path: `/api/v3/autotagging/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AutoTagging
     * @name V3AutotaggingDelete
     * @request DELETE:/api/v3/autotagging/{id}
     * @secure
     */
    v3AutotaggingDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v3/autotagging/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags AutoTagging
     * @name V3AutotaggingDetail
     * @request GET:/api/v3/autotagging/{id}
     * @secure
     */
    v3AutotaggingDetail: (id: number, params: RequestParams = {}) =>
      this.request<AutoTaggingResource, any>({
        path: `/api/v3/autotagging/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AutoTagging
     * @name V3AutotaggingSchemaList
     * @request GET:/api/v3/autotagging/schema
     * @secure
     */
    v3AutotaggingSchemaList: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v3/autotagging/schema`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Backup
     * @name V3SystemBackupList
     * @request GET:/api/v3/system/backup
     * @secure
     */
    v3SystemBackupList: (params: RequestParams = {}) =>
      this.request<BackupResource[], any>({
        path: `/api/v3/system/backup`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Backup
     * @name V3SystemBackupDelete
     * @request DELETE:/api/v3/system/backup/{id}
     * @secure
     */
    v3SystemBackupDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v3/system/backup/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Backup
     * @name V3SystemBackupRestoreCreate
     * @request POST:/api/v3/system/backup/restore/{id}
     * @secure
     */
    v3SystemBackupRestoreCreate: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v3/system/backup/restore/${id}`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Backup
     * @name V3SystemBackupRestoreUploadCreate
     * @request POST:/api/v3/system/backup/restore/upload
     * @secure
     */
    v3SystemBackupRestoreUploadCreate: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v3/system/backup/restore/upload`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Blocklist
     * @name V3BlocklistList
     * @request GET:/api/v3/blocklist
     * @secure
     */
    v3BlocklistList: (
      query?: {
        /**
         * @format int32
         * @default 1
         */
        page?: number;
        /**
         * @format int32
         * @default 10
         */
        pageSize?: number;
        sortKey?: string;
        sortDirection?: SortDirection;
        movieIds?: number[];
        protocols?: DownloadProtocol[];
      },
      params: RequestParams = {},
    ) =>
      this.request<BlocklistResourcePagingResource, any>({
        path: `/api/v3/blocklist`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Blocklist
     * @name V3BlocklistMovieList
     * @request GET:/api/v3/blocklist/movie
     * @secure
     */
    v3BlocklistMovieList: (
      query?: {
        /** @format int32 */
        movieId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BlocklistResource[], any>({
        path: `/api/v3/blocklist/movie`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Blocklist
     * @name V3BlocklistDelete
     * @request DELETE:/api/v3/blocklist/{id}
     * @secure
     */
    v3BlocklistDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v3/blocklist/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Blocklist
     * @name V3BlocklistBulkDelete
     * @request DELETE:/api/v3/blocklist/bulk
     * @secure
     */
    v3BlocklistBulkDelete: (data: BlocklistBulkResource, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v3/blocklist/bulk`,
        method: "DELETE",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Calendar
     * @name V3CalendarList
     * @request GET:/api/v3/calendar
     * @secure
     */
    v3CalendarList: (
      query?: {
        /** @format date-time */
        start?: string;
        /** @format date-time */
        end?: string;
        /** @default false */
        unmonitored?: boolean;
        /** @default "" */
        tags?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<MovieResource[], any>({
        path: `/api/v3/calendar`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Collection
     * @name V3CollectionList
     * @request GET:/api/v3/collection
     * @secure
     */
    v3CollectionList: (
      query?: {
        /** @format int32 */
        tmdbId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<CollectionResource[], any>({
        path: `/api/v3/collection`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Collection
     * @name V3CollectionUpdate
     * @request PUT:/api/v3/collection
     * @secure
     */
    v3CollectionUpdate: (data: CollectionUpdateResource, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v3/collection`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Collection
     * @name V3CollectionUpdate2
     * @request PUT:/api/v3/collection/{id}
     * @originalName v3CollectionUpdate
     * @duplicate
     * @secure
     */
    v3CollectionUpdate2: (id: string, data: CollectionResource, params: RequestParams = {}) =>
      this.request<CollectionResource, any>({
        path: `/api/v3/collection/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Collection
     * @name V3CollectionDetail
     * @request GET:/api/v3/collection/{id}
     * @secure
     */
    v3CollectionDetail: (id: number, params: RequestParams = {}) =>
      this.request<CollectionResource, any>({
        path: `/api/v3/collection/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Command
     * @name V3CommandCreate
     * @request POST:/api/v3/command
     * @secure
     */
    v3CommandCreate: (data: CommandResource, params: RequestParams = {}) =>
      this.request<CommandResource, any>({
        path: `/api/v3/command`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Command
     * @name V3CommandList
     * @request GET:/api/v3/command
     * @secure
     */
    v3CommandList: (params: RequestParams = {}) =>
      this.request<CommandResource[], any>({
        path: `/api/v3/command`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Command
     * @name V3CommandDelete
     * @request DELETE:/api/v3/command/{id}
     * @secure
     */
    v3CommandDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v3/command/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Command
     * @name V3CommandDetail
     * @request GET:/api/v3/command/{id}
     * @secure
     */
    v3CommandDetail: (id: number, params: RequestParams = {}) =>
      this.request<CommandResource, any>({
        path: `/api/v3/command/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Credit
     * @name V3CreditList
     * @request GET:/api/v3/credit
     * @secure
     */
    v3CreditList: (
      query?: {
        /** @format int32 */
        movieId?: number;
        /** @format int32 */
        movieMetadataId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/v3/credit`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Credit
     * @name V3CreditDetail
     * @request GET:/api/v3/credit/{id}
     * @secure
     */
    v3CreditDetail: (id: number, params: RequestParams = {}) =>
      this.request<CreditResource, any>({
        path: `/api/v3/credit/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomFilter
     * @name V3CustomfilterList
     * @request GET:/api/v3/customfilter
     * @secure
     */
    v3CustomfilterList: (params: RequestParams = {}) =>
      this.request<CustomFilterResource[], any>({
        path: `/api/v3/customfilter`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomFilter
     * @name V3CustomfilterCreate
     * @request POST:/api/v3/customfilter
     * @secure
     */
    v3CustomfilterCreate: (data: CustomFilterResource, params: RequestParams = {}) =>
      this.request<CustomFilterResource, any>({
        path: `/api/v3/customfilter`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomFilter
     * @name V3CustomfilterUpdate
     * @request PUT:/api/v3/customfilter/{id}
     * @secure
     */
    v3CustomfilterUpdate: (id: string, data: CustomFilterResource, params: RequestParams = {}) =>
      this.request<CustomFilterResource, any>({
        path: `/api/v3/customfilter/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomFilter
     * @name V3CustomfilterDelete
     * @request DELETE:/api/v3/customfilter/{id}
     * @secure
     */
    v3CustomfilterDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v3/customfilter/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomFilter
     * @name V3CustomfilterDetail
     * @request GET:/api/v3/customfilter/{id}
     * @secure
     */
    v3CustomfilterDetail: (id: number, params: RequestParams = {}) =>
      this.request<CustomFilterResource, any>({
        path: `/api/v3/customfilter/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomFormat
     * @name V3CustomformatList
     * @request GET:/api/v3/customformat
     * @secure
     */
    v3CustomformatList: (params: RequestParams = {}) =>
      this.request<CustomFormatResource[], any>({
        path: `/api/v3/customformat`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomFormat
     * @name V3CustomformatCreate
     * @request POST:/api/v3/customformat
     * @secure
     */
    v3CustomformatCreate: (data: CustomFormatResource, params: RequestParams = {}) =>
      this.request<CustomFormatResource, any>({
        path: `/api/v3/customformat`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomFormat
     * @name V3CustomformatUpdate
     * @request PUT:/api/v3/customformat/{id}
     * @secure
     */
    v3CustomformatUpdate: (id: string, data: CustomFormatResource, params: RequestParams = {}) =>
      this.request<CustomFormatResource, any>({
        path: `/api/v3/customformat/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomFormat
     * @name V3CustomformatDelete
     * @request DELETE:/api/v3/customformat/{id}
     * @secure
     */
    v3CustomformatDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v3/customformat/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomFormat
     * @name V3CustomformatDetail
     * @request GET:/api/v3/customformat/{id}
     * @secure
     */
    v3CustomformatDetail: (id: number, params: RequestParams = {}) =>
      this.request<CustomFormatResource, any>({
        path: `/api/v3/customformat/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomFormat
     * @name V3CustomformatBulkUpdate
     * @request PUT:/api/v3/customformat/bulk
     * @secure
     */
    v3CustomformatBulkUpdate: (data: CustomFormatBulkResource, params: RequestParams = {}) =>
      this.request<CustomFormatResource, any>({
        path: `/api/v3/customformat/bulk`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomFormat
     * @name V3CustomformatBulkDelete
     * @request DELETE:/api/v3/customformat/bulk
     * @secure
     */
    v3CustomformatBulkDelete: (data: CustomFormatBulkResource, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v3/customformat/bulk`,
        method: "DELETE",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomFormat
     * @name V3CustomformatSchemaList
     * @request GET:/api/v3/customformat/schema
     * @secure
     */
    v3CustomformatSchemaList: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v3/customformat/schema`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Cutoff
     * @name V3WantedCutoffList
     * @request GET:/api/v3/wanted/cutoff
     * @secure
     */
    v3WantedCutoffList: (
      query?: {
        /**
         * @format int32
         * @default 1
         */
        page?: number;
        /**
         * @format int32
         * @default 10
         */
        pageSize?: number;
        sortKey?: string;
        sortDirection?: SortDirection;
        /** @default true */
        monitored?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<MovieResourcePagingResource, any>({
        path: `/api/v3/wanted/cutoff`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags DelayProfile
     * @name V3DelayprofileCreate
     * @request POST:/api/v3/delayprofile
     * @secure
     */
    v3DelayprofileCreate: (data: DelayProfileResource, params: RequestParams = {}) =>
      this.request<DelayProfileResource, any>({
        path: `/api/v3/delayprofile`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags DelayProfile
     * @name V3DelayprofileList
     * @request GET:/api/v3/delayprofile
     * @secure
     */
    v3DelayprofileList: (params: RequestParams = {}) =>
      this.request<DelayProfileResource[], any>({
        path: `/api/v3/delayprofile`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags DelayProfile
     * @name V3DelayprofileDelete
     * @request DELETE:/api/v3/delayprofile/{id}
     * @secure
     */
    v3DelayprofileDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v3/delayprofile/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags DelayProfile
     * @name V3DelayprofileUpdate
     * @request PUT:/api/v3/delayprofile/{id}
     * @secure
     */
    v3DelayprofileUpdate: (id: string, data: DelayProfileResource, params: RequestParams = {}) =>
      this.request<DelayProfileResource, any>({
        path: `/api/v3/delayprofile/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags DelayProfile
     * @name V3DelayprofileDetail
     * @request GET:/api/v3/delayprofile/{id}
     * @secure
     */
    v3DelayprofileDetail: (id: number, params: RequestParams = {}) =>
      this.request<DelayProfileResource, any>({
        path: `/api/v3/delayprofile/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags DelayProfile
     * @name V3DelayprofileReorderUpdate
     * @request PUT:/api/v3/delayprofile/reorder/{id}
     * @secure
     */
    v3DelayprofileReorderUpdate: (
      id: number,
      query?: {
        /** @format int32 */
        after?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<DelayProfileResource[], any>({
        path: `/api/v3/delayprofile/reorder/${id}`,
        method: "PUT",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags DiskSpace
     * @name V3DiskspaceList
     * @request GET:/api/v3/diskspace
     * @secure
     */
    v3DiskspaceList: (params: RequestParams = {}) =>
      this.request<DiskSpaceResource[], any>({
        path: `/api/v3/diskspace`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags DownloadClient
     * @name V3DownloadclientList
     * @request GET:/api/v3/downloadclient
     * @secure
     */
    v3DownloadclientList: (params: RequestParams = {}) =>
      this.request<DownloadClientResource[], any>({
        path: `/api/v3/downloadclient`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags DownloadClient
     * @name V3DownloadclientCreate
     * @request POST:/api/v3/downloadclient
     * @secure
     */
    v3DownloadclientCreate: (
      data: DownloadClientResource,
      query?: {
        /** @default false */
        forceSave?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<DownloadClientResource, any>({
        path: `/api/v3/downloadclient`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags DownloadClient
     * @name V3DownloadclientUpdate
     * @request PUT:/api/v3/downloadclient/{id}
     * @secure
     */
    v3DownloadclientUpdate: (
      id: string,
      data: DownloadClientResource,
      query?: {
        /** @default false */
        forceSave?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<DownloadClientResource, any>({
        path: `/api/v3/downloadclient/${id}`,
        method: "PUT",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags DownloadClient
     * @name V3DownloadclientDelete
     * @request DELETE:/api/v3/downloadclient/{id}
     * @secure
     */
    v3DownloadclientDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v3/downloadclient/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags DownloadClient
     * @name V3DownloadclientDetail
     * @request GET:/api/v3/downloadclient/{id}
     * @secure
     */
    v3DownloadclientDetail: (id: number, params: RequestParams = {}) =>
      this.request<DownloadClientResource, any>({
        path: `/api/v3/downloadclient/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags DownloadClient
     * @name V3DownloadclientBulkUpdate
     * @request PUT:/api/v3/downloadclient/bulk
     * @secure
     */
    v3DownloadclientBulkUpdate: (data: DownloadClientBulkResource, params: RequestParams = {}) =>
      this.request<DownloadClientResource, any>({
        path: `/api/v3/downloadclient/bulk`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags DownloadClient
     * @name V3DownloadclientBulkDelete
     * @request DELETE:/api/v3/downloadclient/bulk
     * @secure
     */
    v3DownloadclientBulkDelete: (data: DownloadClientBulkResource, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v3/downloadclient/bulk`,
        method: "DELETE",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags DownloadClient
     * @name V3DownloadclientSchemaList
     * @request GET:/api/v3/downloadclient/schema
     * @secure
     */
    v3DownloadclientSchemaList: (params: RequestParams = {}) =>
      this.request<DownloadClientResource[], any>({
        path: `/api/v3/downloadclient/schema`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags DownloadClient
     * @name V3DownloadclientTestCreate
     * @request POST:/api/v3/downloadclient/test
     * @secure
     */
    v3DownloadclientTestCreate: (
      data: DownloadClientResource,
      query?: {
        /** @default false */
        forceTest?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/v3/downloadclient/test`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags DownloadClient
     * @name V3DownloadclientTestallCreate
     * @request POST:/api/v3/downloadclient/testall
     * @secure
     */
    v3DownloadclientTestallCreate: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v3/downloadclient/testall`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags DownloadClient
     * @name V3DownloadclientActionCreate
     * @request POST:/api/v3/downloadclient/action/{name}
     * @secure
     */
    v3DownloadclientActionCreate: (name: string, data: DownloadClientResource, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v3/downloadclient/action/${name}`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags DownloadClientConfig
     * @name V3ConfigDownloadclientList
     * @request GET:/api/v3/config/downloadclient
     * @secure
     */
    v3ConfigDownloadclientList: (params: RequestParams = {}) =>
      this.request<DownloadClientConfigResource, any>({
        path: `/api/v3/config/downloadclient`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags DownloadClientConfig
     * @name V3ConfigDownloadclientUpdate
     * @request PUT:/api/v3/config/downloadclient/{id}
     * @secure
     */
    v3ConfigDownloadclientUpdate: (id: string, data: DownloadClientConfigResource, params: RequestParams = {}) =>
      this.request<DownloadClientConfigResource, any>({
        path: `/api/v3/config/downloadclient/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags DownloadClientConfig
     * @name V3ConfigDownloadclientDetail
     * @request GET:/api/v3/config/downloadclient/{id}
     * @secure
     */
    v3ConfigDownloadclientDetail: (id: number, params: RequestParams = {}) =>
      this.request<DownloadClientConfigResource, any>({
        path: `/api/v3/config/downloadclient/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ExtraFile
     * @name V3ExtrafileList
     * @request GET:/api/v3/extrafile
     * @secure
     */
    v3ExtrafileList: (
      query?: {
        /** @format int32 */
        movieId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<ExtraFileResource[], any>({
        path: `/api/v3/extrafile`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags FileSystem
     * @name V3FilesystemList
     * @request GET:/api/v3/filesystem
     * @secure
     */
    v3FilesystemList: (
      query?: {
        path?: string;
        /** @default false */
        includeFiles?: boolean;
        /** @default false */
        allowFoldersWithoutTrailingSlashes?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/v3/filesystem`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags FileSystem
     * @name V3FilesystemTypeList
     * @request GET:/api/v3/filesystem/type
     * @secure
     */
    v3FilesystemTypeList: (
      query?: {
        path?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/v3/filesystem/type`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags FileSystem
     * @name V3FilesystemMediafilesList
     * @request GET:/api/v3/filesystem/mediafiles
     * @secure
     */
    v3FilesystemMediafilesList: (
      query?: {
        path?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/v3/filesystem/mediafiles`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Health
     * @name V3HealthList
     * @request GET:/api/v3/health
     * @secure
     */
    v3HealthList: (params: RequestParams = {}) =>
      this.request<HealthResource[], any>({
        path: `/api/v3/health`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags History
     * @name V3HistoryList
     * @request GET:/api/v3/history
     * @secure
     */
    v3HistoryList: (
      query?: {
        /**
         * @format int32
         * @default 1
         */
        page?: number;
        /**
         * @format int32
         * @default 10
         */
        pageSize?: number;
        sortKey?: string;
        sortDirection?: SortDirection;
        includeMovie?: boolean;
        eventType?: number[];
        downloadId?: string;
        movieIds?: number[];
        languages?: number[];
        quality?: number[];
      },
      params: RequestParams = {},
    ) =>
      this.request<HistoryResourcePagingResource, any>({
        path: `/api/v3/history`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags History
     * @name V3HistorySinceList
     * @request GET:/api/v3/history/since
     * @secure
     */
    v3HistorySinceList: (
      query?: {
        /** @format date-time */
        date?: string;
        eventType?: MovieHistoryEventType;
        /** @default false */
        includeMovie?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<HistoryResource[], any>({
        path: `/api/v3/history/since`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags History
     * @name V3HistoryMovieList
     * @request GET:/api/v3/history/movie
     * @secure
     */
    v3HistoryMovieList: (
      query?: {
        /** @format int32 */
        movieId?: number;
        eventType?: MovieHistoryEventType;
        /** @default false */
        includeMovie?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<HistoryResource[], any>({
        path: `/api/v3/history/movie`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags History
     * @name V3HistoryFailedCreate
     * @request POST:/api/v3/history/failed/{id}
     * @secure
     */
    v3HistoryFailedCreate: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v3/history/failed/${id}`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags HostConfig
     * @name V3ConfigHostList
     * @request GET:/api/v3/config/host
     * @secure
     */
    v3ConfigHostList: (params: RequestParams = {}) =>
      this.request<HostConfigResource, any>({
        path: `/api/v3/config/host`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags HostConfig
     * @name V3ConfigHostUpdate
     * @request PUT:/api/v3/config/host/{id}
     * @secure
     */
    v3ConfigHostUpdate: (id: string, data: HostConfigResource, params: RequestParams = {}) =>
      this.request<HostConfigResource, any>({
        path: `/api/v3/config/host/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags HostConfig
     * @name V3ConfigHostDetail
     * @request GET:/api/v3/config/host/{id}
     * @secure
     */
    v3ConfigHostDetail: (id: number, params: RequestParams = {}) =>
      this.request<HostConfigResource, any>({
        path: `/api/v3/config/host/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ImportList
     * @name V3ImportlistList
     * @request GET:/api/v3/importlist
     * @secure
     */
    v3ImportlistList: (params: RequestParams = {}) =>
      this.request<ImportListResource[], any>({
        path: `/api/v3/importlist`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ImportList
     * @name V3ImportlistCreate
     * @request POST:/api/v3/importlist
     * @secure
     */
    v3ImportlistCreate: (
      data: ImportListResource,
      query?: {
        /** @default false */
        forceSave?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<ImportListResource, any>({
        path: `/api/v3/importlist`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ImportList
     * @name V3ImportlistUpdate
     * @request PUT:/api/v3/importlist/{id}
     * @secure
     */
    v3ImportlistUpdate: (
      id: string,
      data: ImportListResource,
      query?: {
        /** @default false */
        forceSave?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<ImportListResource, any>({
        path: `/api/v3/importlist/${id}`,
        method: "PUT",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ImportList
     * @name V3ImportlistDelete
     * @request DELETE:/api/v3/importlist/{id}
     * @secure
     */
    v3ImportlistDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v3/importlist/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags ImportList
     * @name V3ImportlistDetail
     * @request GET:/api/v3/importlist/{id}
     * @secure
     */
    v3ImportlistDetail: (id: number, params: RequestParams = {}) =>
      this.request<ImportListResource, any>({
        path: `/api/v3/importlist/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ImportList
     * @name V3ImportlistBulkUpdate
     * @request PUT:/api/v3/importlist/bulk
     * @secure
     */
    v3ImportlistBulkUpdate: (data: ImportListBulkResource, params: RequestParams = {}) =>
      this.request<ImportListResource, any>({
        path: `/api/v3/importlist/bulk`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ImportList
     * @name V3ImportlistBulkDelete
     * @request DELETE:/api/v3/importlist/bulk
     * @secure
     */
    v3ImportlistBulkDelete: (data: ImportListBulkResource, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v3/importlist/bulk`,
        method: "DELETE",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags ImportList
     * @name V3ImportlistSchemaList
     * @request GET:/api/v3/importlist/schema
     * @secure
     */
    v3ImportlistSchemaList: (params: RequestParams = {}) =>
      this.request<ImportListResource[], any>({
        path: `/api/v3/importlist/schema`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ImportList
     * @name V3ImportlistTestCreate
     * @request POST:/api/v3/importlist/test
     * @secure
     */
    v3ImportlistTestCreate: (
      data: ImportListResource,
      query?: {
        /** @default false */
        forceTest?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/v3/importlist/test`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags ImportList
     * @name V3ImportlistTestallCreate
     * @request POST:/api/v3/importlist/testall
     * @secure
     */
    v3ImportlistTestallCreate: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v3/importlist/testall`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags ImportList
     * @name V3ImportlistActionCreate
     * @request POST:/api/v3/importlist/action/{name}
     * @secure
     */
    v3ImportlistActionCreate: (name: string, data: ImportListResource, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v3/importlist/action/${name}`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags ImportListConfig
     * @name V3ConfigImportlistList
     * @request GET:/api/v3/config/importlist
     * @secure
     */
    v3ConfigImportlistList: (params: RequestParams = {}) =>
      this.request<ImportListConfigResource, any>({
        path: `/api/v3/config/importlist`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ImportListConfig
     * @name V3ConfigImportlistUpdate
     * @request PUT:/api/v3/config/importlist/{id}
     * @secure
     */
    v3ConfigImportlistUpdate: (id: string, data: ImportListConfigResource, params: RequestParams = {}) =>
      this.request<ImportListConfigResource, any>({
        path: `/api/v3/config/importlist/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ImportListConfig
     * @name V3ConfigImportlistDetail
     * @request GET:/api/v3/config/importlist/{id}
     * @secure
     */
    v3ConfigImportlistDetail: (id: number, params: RequestParams = {}) =>
      this.request<ImportListConfigResource, any>({
        path: `/api/v3/config/importlist/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ImportListExclusion
     * @name V3ExclusionsList
     * @request GET:/api/v3/exclusions
     * @deprecated
     * @secure
     */
    v3ExclusionsList: (params: RequestParams = {}) =>
      this.request<ImportListExclusionResource[], any>({
        path: `/api/v3/exclusions`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ImportListExclusion
     * @name V3ExclusionsCreate
     * @request POST:/api/v3/exclusions
     * @secure
     */
    v3ExclusionsCreate: (data: ImportListExclusionResource, params: RequestParams = {}) =>
      this.request<ImportListExclusionResource, any>({
        path: `/api/v3/exclusions`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ImportListExclusion
     * @name V3ExclusionsPagedList
     * @request GET:/api/v3/exclusions/paged
     * @secure
     */
    v3ExclusionsPagedList: (
      query?: {
        /**
         * @format int32
         * @default 1
         */
        page?: number;
        /**
         * @format int32
         * @default 10
         */
        pageSize?: number;
        sortKey?: string;
        sortDirection?: SortDirection;
      },
      params: RequestParams = {},
    ) =>
      this.request<ImportListExclusionResourcePagingResource, any>({
        path: `/api/v3/exclusions/paged`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ImportListExclusion
     * @name V3ExclusionsUpdate
     * @request PUT:/api/v3/exclusions/{id}
     * @secure
     */
    v3ExclusionsUpdate: (id: string, data: ImportListExclusionResource, params: RequestParams = {}) =>
      this.request<ImportListExclusionResource, any>({
        path: `/api/v3/exclusions/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ImportListExclusion
     * @name V3ExclusionsDelete
     * @request DELETE:/api/v3/exclusions/{id}
     * @secure
     */
    v3ExclusionsDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v3/exclusions/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags ImportListExclusion
     * @name V3ExclusionsDetail
     * @request GET:/api/v3/exclusions/{id}
     * @secure
     */
    v3ExclusionsDetail: (id: number, params: RequestParams = {}) =>
      this.request<ImportListExclusionResource, any>({
        path: `/api/v3/exclusions/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ImportListExclusion
     * @name V3ExclusionsBulkCreate
     * @request POST:/api/v3/exclusions/bulk
     * @secure
     */
    v3ExclusionsBulkCreate: (data: ImportListExclusionResource[], params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v3/exclusions/bulk`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags ImportListExclusion
     * @name V3ExclusionsBulkDelete
     * @request DELETE:/api/v3/exclusions/bulk
     * @secure
     */
    v3ExclusionsBulkDelete: (data: ImportListExclusionBulkResource, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v3/exclusions/bulk`,
        method: "DELETE",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags ImportListMovies
     * @name V3ImportlistMovieList
     * @request GET:/api/v3/importlist/movie
     * @secure
     */
    v3ImportlistMovieList: (
      query?: {
        /** @default false */
        includeRecommendations?: boolean;
        /** @default false */
        includeTrending?: boolean;
        /** @default false */
        includePopular?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/v3/importlist/movie`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags ImportListMovies
     * @name V3ImportlistMovieCreate
     * @request POST:/api/v3/importlist/movie
     * @secure
     */
    v3ImportlistMovieCreate: (data: MovieResource[], params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v3/importlist/movie`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Indexer
     * @name V3IndexerList
     * @request GET:/api/v3/indexer
     * @secure
     */
    v3IndexerList: (params: RequestParams = {}) =>
      this.request<IndexerResource[], any>({
        path: `/api/v3/indexer`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Indexer
     * @name V3IndexerCreate
     * @request POST:/api/v3/indexer
     * @secure
     */
    v3IndexerCreate: (
      data: IndexerResource,
      query?: {
        /** @default false */
        forceSave?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<IndexerResource, any>({
        path: `/api/v3/indexer`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Indexer
     * @name V3IndexerUpdate
     * @request PUT:/api/v3/indexer/{id}
     * @secure
     */
    v3IndexerUpdate: (
      id: string,
      data: IndexerResource,
      query?: {
        /** @default false */
        forceSave?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<IndexerResource, any>({
        path: `/api/v3/indexer/${id}`,
        method: "PUT",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Indexer
     * @name V3IndexerDelete
     * @request DELETE:/api/v3/indexer/{id}
     * @secure
     */
    v3IndexerDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v3/indexer/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Indexer
     * @name V3IndexerDetail
     * @request GET:/api/v3/indexer/{id}
     * @secure
     */
    v3IndexerDetail: (id: number, params: RequestParams = {}) =>
      this.request<IndexerResource, any>({
        path: `/api/v3/indexer/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Indexer
     * @name V3IndexerBulkUpdate
     * @request PUT:/api/v3/indexer/bulk
     * @secure
     */
    v3IndexerBulkUpdate: (data: IndexerBulkResource, params: RequestParams = {}) =>
      this.request<IndexerResource, any>({
        path: `/api/v3/indexer/bulk`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Indexer
     * @name V3IndexerBulkDelete
     * @request DELETE:/api/v3/indexer/bulk
     * @secure
     */
    v3IndexerBulkDelete: (data: IndexerBulkResource, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v3/indexer/bulk`,
        method: "DELETE",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Indexer
     * @name V3IndexerSchemaList
     * @request GET:/api/v3/indexer/schema
     * @secure
     */
    v3IndexerSchemaList: (params: RequestParams = {}) =>
      this.request<IndexerResource[], any>({
        path: `/api/v3/indexer/schema`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Indexer
     * @name V3IndexerTestCreate
     * @request POST:/api/v3/indexer/test
     * @secure
     */
    v3IndexerTestCreate: (
      data: IndexerResource,
      query?: {
        /** @default false */
        forceTest?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/v3/indexer/test`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Indexer
     * @name V3IndexerTestallCreate
     * @request POST:/api/v3/indexer/testall
     * @secure
     */
    v3IndexerTestallCreate: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v3/indexer/testall`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Indexer
     * @name V3IndexerActionCreate
     * @request POST:/api/v3/indexer/action/{name}
     * @secure
     */
    v3IndexerActionCreate: (name: string, data: IndexerResource, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v3/indexer/action/${name}`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags IndexerConfig
     * @name V3ConfigIndexerList
     * @request GET:/api/v3/config/indexer
     * @secure
     */
    v3ConfigIndexerList: (params: RequestParams = {}) =>
      this.request<IndexerConfigResource, any>({
        path: `/api/v3/config/indexer`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags IndexerConfig
     * @name V3ConfigIndexerUpdate
     * @request PUT:/api/v3/config/indexer/{id}
     * @secure
     */
    v3ConfigIndexerUpdate: (id: string, data: IndexerConfigResource, params: RequestParams = {}) =>
      this.request<IndexerConfigResource, any>({
        path: `/api/v3/config/indexer/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags IndexerConfig
     * @name V3ConfigIndexerDetail
     * @request GET:/api/v3/config/indexer/{id}
     * @secure
     */
    v3ConfigIndexerDetail: (id: number, params: RequestParams = {}) =>
      this.request<IndexerConfigResource, any>({
        path: `/api/v3/config/indexer/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags IndexerFlag
     * @name V3IndexerflagList
     * @request GET:/api/v3/indexerflag
     * @secure
     */
    v3IndexerflagList: (params: RequestParams = {}) =>
      this.request<IndexerFlagResource[], any>({
        path: `/api/v3/indexerflag`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Language
     * @name V3LanguageList
     * @request GET:/api/v3/language
     * @secure
     */
    v3LanguageList: (params: RequestParams = {}) =>
      this.request<LanguageResource[], any>({
        path: `/api/v3/language`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Language
     * @name V3LanguageDetail
     * @request GET:/api/v3/language/{id}
     * @secure
     */
    v3LanguageDetail: (id: number, params: RequestParams = {}) =>
      this.request<LanguageResource, any>({
        path: `/api/v3/language/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Localization
     * @name V3LocalizationList
     * @request GET:/api/v3/localization
     * @secure
     */
    v3LocalizationList: (params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/api/v3/localization`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Localization
     * @name V3LocalizationLanguageList
     * @request GET:/api/v3/localization/language
     * @secure
     */
    v3LocalizationLanguageList: (params: RequestParams = {}) =>
      this.request<LocalizationLanguageResource, any>({
        path: `/api/v3/localization/language`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Log
     * @name V3LogList
     * @request GET:/api/v3/log
     * @secure
     */
    v3LogList: (
      query?: {
        /**
         * @format int32
         * @default 1
         */
        page?: number;
        /**
         * @format int32
         * @default 10
         */
        pageSize?: number;
        sortKey?: string;
        sortDirection?: SortDirection;
        level?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<LogResourcePagingResource, any>({
        path: `/api/v3/log`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LogFile
     * @name V3LogFileList
     * @request GET:/api/v3/log/file
     * @secure
     */
    v3LogFileList: (params: RequestParams = {}) =>
      this.request<LogFileResource[], any>({
        path: `/api/v3/log/file`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LogFile
     * @name V3LogFileDetail
     * @request GET:/api/v3/log/file/{filename}
     * @secure
     */
    v3LogFileDetail: (filename: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v3/log/file/${filename}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags ManualImport
     * @name V3ManualimportList
     * @request GET:/api/v3/manualimport
     * @secure
     */
    v3ManualimportList: (
      query?: {
        folder?: string;
        downloadId?: string;
        /** @format int32 */
        movieId?: number;
        /** @default true */
        filterExistingFiles?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<ManualImportResource[], any>({
        path: `/api/v3/manualimport`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ManualImport
     * @name V3ManualimportCreate
     * @request POST:/api/v3/manualimport
     * @secure
     */
    v3ManualimportCreate: (data: ManualImportReprocessResource[], params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v3/manualimport`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags MediaCover
     * @name V3MediacoverDetail
     * @request GET:/api/v3/mediacover/{movieId}/{filename}
     * @secure
     */
    v3MediacoverDetail: (movieId: number, filename: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v3/mediacover/${movieId}/${filename}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags MediaManagementConfig
     * @name V3ConfigMediamanagementList
     * @request GET:/api/v3/config/mediamanagement
     * @secure
     */
    v3ConfigMediamanagementList: (params: RequestParams = {}) =>
      this.request<MediaManagementConfigResource, any>({
        path: `/api/v3/config/mediamanagement`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MediaManagementConfig
     * @name V3ConfigMediamanagementUpdate
     * @request PUT:/api/v3/config/mediamanagement/{id}
     * @secure
     */
    v3ConfigMediamanagementUpdate: (id: string, data: MediaManagementConfigResource, params: RequestParams = {}) =>
      this.request<MediaManagementConfigResource, any>({
        path: `/api/v3/config/mediamanagement/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MediaManagementConfig
     * @name V3ConfigMediamanagementDetail
     * @request GET:/api/v3/config/mediamanagement/{id}
     * @secure
     */
    v3ConfigMediamanagementDetail: (id: number, params: RequestParams = {}) =>
      this.request<MediaManagementConfigResource, any>({
        path: `/api/v3/config/mediamanagement/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Metadata
     * @name V3MetadataList
     * @request GET:/api/v3/metadata
     * @secure
     */
    v3MetadataList: (params: RequestParams = {}) =>
      this.request<MetadataResource[], any>({
        path: `/api/v3/metadata`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Metadata
     * @name V3MetadataCreate
     * @request POST:/api/v3/metadata
     * @secure
     */
    v3MetadataCreate: (
      data: MetadataResource,
      query?: {
        /** @default false */
        forceSave?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<MetadataResource, any>({
        path: `/api/v3/metadata`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Metadata
     * @name V3MetadataUpdate
     * @request PUT:/api/v3/metadata/{id}
     * @secure
     */
    v3MetadataUpdate: (
      id: string,
      data: MetadataResource,
      query?: {
        /** @default false */
        forceSave?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<MetadataResource, any>({
        path: `/api/v3/metadata/${id}`,
        method: "PUT",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Metadata
     * @name V3MetadataDelete
     * @request DELETE:/api/v3/metadata/{id}
     * @secure
     */
    v3MetadataDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v3/metadata/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Metadata
     * @name V3MetadataDetail
     * @request GET:/api/v3/metadata/{id}
     * @secure
     */
    v3MetadataDetail: (id: number, params: RequestParams = {}) =>
      this.request<MetadataResource, any>({
        path: `/api/v3/metadata/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Metadata
     * @name V3MetadataSchemaList
     * @request GET:/api/v3/metadata/schema
     * @secure
     */
    v3MetadataSchemaList: (params: RequestParams = {}) =>
      this.request<MetadataResource[], any>({
        path: `/api/v3/metadata/schema`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Metadata
     * @name V3MetadataTestCreate
     * @request POST:/api/v3/metadata/test
     * @secure
     */
    v3MetadataTestCreate: (
      data: MetadataResource,
      query?: {
        /** @default false */
        forceTest?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/v3/metadata/test`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Metadata
     * @name V3MetadataTestallCreate
     * @request POST:/api/v3/metadata/testall
     * @secure
     */
    v3MetadataTestallCreate: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v3/metadata/testall`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Metadata
     * @name V3MetadataActionCreate
     * @request POST:/api/v3/metadata/action/{name}
     * @secure
     */
    v3MetadataActionCreate: (name: string, data: MetadataResource, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v3/metadata/action/${name}`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags MetadataConfig
     * @name V3ConfigMetadataList
     * @request GET:/api/v3/config/metadata
     * @secure
     */
    v3ConfigMetadataList: (params: RequestParams = {}) =>
      this.request<MetadataConfigResource, any>({
        path: `/api/v3/config/metadata`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MetadataConfig
     * @name V3ConfigMetadataUpdate
     * @request PUT:/api/v3/config/metadata/{id}
     * @secure
     */
    v3ConfigMetadataUpdate: (id: string, data: MetadataConfigResource, params: RequestParams = {}) =>
      this.request<MetadataConfigResource, any>({
        path: `/api/v3/config/metadata/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MetadataConfig
     * @name V3ConfigMetadataDetail
     * @request GET:/api/v3/config/metadata/{id}
     * @secure
     */
    v3ConfigMetadataDetail: (id: number, params: RequestParams = {}) =>
      this.request<MetadataConfigResource, any>({
        path: `/api/v3/config/metadata/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Missing
     * @name V3WantedMissingList
     * @request GET:/api/v3/wanted/missing
     * @secure
     */
    v3WantedMissingList: (
      query?: {
        /**
         * @format int32
         * @default 1
         */
        page?: number;
        /**
         * @format int32
         * @default 10
         */
        pageSize?: number;
        sortKey?: string;
        sortDirection?: SortDirection;
        /** @default true */
        monitored?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<MovieResourcePagingResource, any>({
        path: `/api/v3/wanted/missing`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Movie
     * @name V3MovieList
     * @request GET:/api/v3/movie
     * @secure
     */
    v3MovieList: (
      query?: {
        /** @format int32 */
        tmdbId?: number;
        /** @default false */
        excludeLocalCovers?: boolean;
        /** @format int32 */
        languageId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<MovieResource[], any>({
        path: `/api/v3/movie`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Movie
     * @name V3MovieCreate
     * @request POST:/api/v3/movie
     * @secure
     */
    v3MovieCreate: (data: MovieResource, params: RequestParams = {}) =>
      this.request<MovieResource, any>({
        path: `/api/v3/movie`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Movie
     * @name V3MovieUpdate
     * @request PUT:/api/v3/movie/{id}
     * @secure
     */
    v3MovieUpdate: (
      id: string,
      data: MovieResource,
      query?: {
        /** @default false */
        moveFiles?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<MovieResource, any>({
        path: `/api/v3/movie/${id}`,
        method: "PUT",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Movie
     * @name V3MovieDelete
     * @request DELETE:/api/v3/movie/{id}
     * @secure
     */
    v3MovieDelete: (
      id: number,
      query?: {
        /** @default false */
        deleteFiles?: boolean;
        /** @default false */
        addImportExclusion?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/v3/movie/${id}`,
        method: "DELETE",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Movie
     * @name V3MovieDetail
     * @request GET:/api/v3/movie/{id}
     * @secure
     */
    v3MovieDetail: (id: number, params: RequestParams = {}) =>
      this.request<MovieResource, any>({
        path: `/api/v3/movie/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MovieEditor
     * @name V3MovieEditorUpdate
     * @request PUT:/api/v3/movie/editor
     * @secure
     */
    v3MovieEditorUpdate: (data: MovieEditorResource, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v3/movie/editor`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags MovieEditor
     * @name V3MovieEditorDelete
     * @request DELETE:/api/v3/movie/editor
     * @secure
     */
    v3MovieEditorDelete: (data: MovieEditorResource, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v3/movie/editor`,
        method: "DELETE",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags MovieFile
     * @name V3MoviefileList
     * @request GET:/api/v3/moviefile
     * @secure
     */
    v3MoviefileList: (
      query?: {
        movieId?: number[];
        movieFileIds?: number[];
      },
      params: RequestParams = {},
    ) =>
      this.request<MovieFileResource[], any>({
        path: `/api/v3/moviefile`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MovieFile
     * @name V3MoviefileUpdate
     * @request PUT:/api/v3/moviefile/{id}
     * @secure
     */
    v3MoviefileUpdate: (id: string, data: MovieFileResource, params: RequestParams = {}) =>
      this.request<MovieFileResource, any>({
        path: `/api/v3/moviefile/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MovieFile
     * @name V3MoviefileDelete
     * @request DELETE:/api/v3/moviefile/{id}
     * @secure
     */
    v3MoviefileDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v3/moviefile/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags MovieFile
     * @name V3MoviefileDetail
     * @request GET:/api/v3/moviefile/{id}
     * @secure
     */
    v3MoviefileDetail: (id: number, params: RequestParams = {}) =>
      this.request<MovieFileResource, any>({
        path: `/api/v3/moviefile/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MovieFile
     * @name V3MoviefileEditorUpdate
     * @request PUT:/api/v3/moviefile/editor
     * @secure
     */
    v3MoviefileEditorUpdate: (data: MovieFileListResource, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v3/moviefile/editor`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags MovieFile
     * @name V3MoviefileBulkDelete
     * @request DELETE:/api/v3/moviefile/bulk
     * @secure
     */
    v3MoviefileBulkDelete: (data: MovieFileListResource, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v3/moviefile/bulk`,
        method: "DELETE",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags MovieImport
     * @name V3MovieImportCreate
     * @request POST:/api/v3/movie/import
     * @secure
     */
    v3MovieImportCreate: (data: MovieResource[], params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v3/movie/import`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags MovieLookup
     * @name V3MovieLookupTmdbList
     * @request GET:/api/v3/movie/lookup/tmdb
     * @secure
     */
    v3MovieLookupTmdbList: (
      query?: {
        /** @format int32 */
        tmdbId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/v3/movie/lookup/tmdb`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags MovieLookup
     * @name V3MovieLookupImdbList
     * @request GET:/api/v3/movie/lookup/imdb
     * @secure
     */
    v3MovieLookupImdbList: (
      query?: {
        imdbId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/v3/movie/lookup/imdb`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags MovieLookup
     * @name V3MovieLookupList
     * @request GET:/api/v3/movie/lookup
     * @secure
     */
    v3MovieLookupList: (
      query?: {
        term?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/v3/movie/lookup`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags NamingConfig
     * @name V3ConfigNamingList
     * @request GET:/api/v3/config/naming
     * @secure
     */
    v3ConfigNamingList: (params: RequestParams = {}) =>
      this.request<NamingConfigResource, any>({
        path: `/api/v3/config/naming`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags NamingConfig
     * @name V3ConfigNamingUpdate
     * @request PUT:/api/v3/config/naming/{id}
     * @secure
     */
    v3ConfigNamingUpdate: (id: string, data: NamingConfigResource, params: RequestParams = {}) =>
      this.request<NamingConfigResource, any>({
        path: `/api/v3/config/naming/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags NamingConfig
     * @name V3ConfigNamingDetail
     * @request GET:/api/v3/config/naming/{id}
     * @secure
     */
    v3ConfigNamingDetail: (id: number, params: RequestParams = {}) =>
      this.request<NamingConfigResource, any>({
        path: `/api/v3/config/naming/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags NamingConfig
     * @name V3ConfigNamingExamplesList
     * @request GET:/api/v3/config/naming/examples
     * @secure
     */
    v3ConfigNamingExamplesList: (
      query?: {
        renameMovies?: boolean;
        replaceIllegalCharacters?: boolean;
        colonReplacementFormat?: ColonReplacementFormat;
        standardMovieFormat?: string;
        movieFolderFormat?: string;
        /** @format int32 */
        id?: number;
        resourceName?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/v3/config/naming/examples`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Notification
     * @name V3NotificationList
     * @request GET:/api/v3/notification
     * @secure
     */
    v3NotificationList: (params: RequestParams = {}) =>
      this.request<NotificationResource[], any>({
        path: `/api/v3/notification`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Notification
     * @name V3NotificationCreate
     * @request POST:/api/v3/notification
     * @secure
     */
    v3NotificationCreate: (
      data: NotificationResource,
      query?: {
        /** @default false */
        forceSave?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<NotificationResource, any>({
        path: `/api/v3/notification`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Notification
     * @name V3NotificationUpdate
     * @request PUT:/api/v3/notification/{id}
     * @secure
     */
    v3NotificationUpdate: (
      id: string,
      data: NotificationResource,
      query?: {
        /** @default false */
        forceSave?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<NotificationResource, any>({
        path: `/api/v3/notification/${id}`,
        method: "PUT",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Notification
     * @name V3NotificationDelete
     * @request DELETE:/api/v3/notification/{id}
     * @secure
     */
    v3NotificationDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v3/notification/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Notification
     * @name V3NotificationDetail
     * @request GET:/api/v3/notification/{id}
     * @secure
     */
    v3NotificationDetail: (id: number, params: RequestParams = {}) =>
      this.request<NotificationResource, any>({
        path: `/api/v3/notification/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Notification
     * @name V3NotificationSchemaList
     * @request GET:/api/v3/notification/schema
     * @secure
     */
    v3NotificationSchemaList: (params: RequestParams = {}) =>
      this.request<NotificationResource[], any>({
        path: `/api/v3/notification/schema`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Notification
     * @name V3NotificationTestCreate
     * @request POST:/api/v3/notification/test
     * @secure
     */
    v3NotificationTestCreate: (
      data: NotificationResource,
      query?: {
        /** @default false */
        forceTest?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/v3/notification/test`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Notification
     * @name V3NotificationTestallCreate
     * @request POST:/api/v3/notification/testall
     * @secure
     */
    v3NotificationTestallCreate: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v3/notification/testall`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Notification
     * @name V3NotificationActionCreate
     * @request POST:/api/v3/notification/action/{name}
     * @secure
     */
    v3NotificationActionCreate: (name: string, data: NotificationResource, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v3/notification/action/${name}`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Parse
     * @name V3ParseList
     * @request GET:/api/v3/parse
     * @secure
     */
    v3ParseList: (
      query?: {
        title?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<ParseResource, any>({
        path: `/api/v3/parse`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags QualityDefinition
     * @name V3QualitydefinitionUpdate
     * @request PUT:/api/v3/qualitydefinition/{id}
     * @secure
     */
    v3QualitydefinitionUpdate: (id: string, data: QualityDefinitionResource, params: RequestParams = {}) =>
      this.request<QualityDefinitionResource, any>({
        path: `/api/v3/qualitydefinition/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags QualityDefinition
     * @name V3QualitydefinitionDetail
     * @request GET:/api/v3/qualitydefinition/{id}
     * @secure
     */
    v3QualitydefinitionDetail: (id: number, params: RequestParams = {}) =>
      this.request<QualityDefinitionResource, any>({
        path: `/api/v3/qualitydefinition/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags QualityDefinition
     * @name V3QualitydefinitionList
     * @request GET:/api/v3/qualitydefinition
     * @secure
     */
    v3QualitydefinitionList: (params: RequestParams = {}) =>
      this.request<QualityDefinitionResource[], any>({
        path: `/api/v3/qualitydefinition`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags QualityDefinition
     * @name V3QualitydefinitionUpdateUpdate
     * @request PUT:/api/v3/qualitydefinition/update
     * @secure
     */
    v3QualitydefinitionUpdateUpdate: (data: QualityDefinitionResource[], params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v3/qualitydefinition/update`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags QualityProfile
     * @name V3QualityprofileCreate
     * @request POST:/api/v3/qualityprofile
     * @secure
     */
    v3QualityprofileCreate: (data: QualityProfileResource, params: RequestParams = {}) =>
      this.request<QualityProfileResource, any>({
        path: `/api/v3/qualityprofile`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags QualityProfile
     * @name V3QualityprofileList
     * @request GET:/api/v3/qualityprofile
     * @secure
     */
    v3QualityprofileList: (params: RequestParams = {}) =>
      this.request<QualityProfileResource[], any>({
        path: `/api/v3/qualityprofile`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags QualityProfile
     * @name V3QualityprofileDelete
     * @request DELETE:/api/v3/qualityprofile/{id}
     * @secure
     */
    v3QualityprofileDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v3/qualityprofile/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags QualityProfile
     * @name V3QualityprofileUpdate
     * @request PUT:/api/v3/qualityprofile/{id}
     * @secure
     */
    v3QualityprofileUpdate: (id: string, data: QualityProfileResource, params: RequestParams = {}) =>
      this.request<QualityProfileResource, any>({
        path: `/api/v3/qualityprofile/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags QualityProfile
     * @name V3QualityprofileDetail
     * @request GET:/api/v3/qualityprofile/{id}
     * @secure
     */
    v3QualityprofileDetail: (id: number, params: RequestParams = {}) =>
      this.request<QualityProfileResource, any>({
        path: `/api/v3/qualityprofile/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags QualityProfileSchema
     * @name V3QualityprofileSchemaList
     * @request GET:/api/v3/qualityprofile/schema
     * @secure
     */
    v3QualityprofileSchemaList: (params: RequestParams = {}) =>
      this.request<QualityProfileResource, any>({
        path: `/api/v3/qualityprofile/schema`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Queue
     * @name V3QueueDelete
     * @request DELETE:/api/v3/queue/{id}
     * @secure
     */
    v3QueueDelete: (
      id: number,
      query?: {
        /** @default true */
        removeFromClient?: boolean;
        /** @default false */
        blocklist?: boolean;
        /** @default false */
        skipRedownload?: boolean;
        /** @default false */
        changeCategory?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/v3/queue/${id}`,
        method: "DELETE",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Queue
     * @name V3QueueBulkDelete
     * @request DELETE:/api/v3/queue/bulk
     * @secure
     */
    v3QueueBulkDelete: (
      data: QueueBulkResource,
      query?: {
        /** @default true */
        removeFromClient?: boolean;
        /** @default false */
        blocklist?: boolean;
        /** @default false */
        skipRedownload?: boolean;
        /** @default false */
        changeCategory?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/v3/queue/bulk`,
        method: "DELETE",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Queue
     * @name V3QueueList
     * @request GET:/api/v3/queue
     * @secure
     */
    v3QueueList: (
      query?: {
        /**
         * @format int32
         * @default 1
         */
        page?: number;
        /**
         * @format int32
         * @default 10
         */
        pageSize?: number;
        sortKey?: string;
        sortDirection?: SortDirection;
        /** @default false */
        includeUnknownMovieItems?: boolean;
        /** @default false */
        includeMovie?: boolean;
        movieIds?: number[];
        protocol?: DownloadProtocol;
        languages?: number[];
        /** @format int32 */
        quality?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<QueueResourcePagingResource, any>({
        path: `/api/v3/queue`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags QueueAction
     * @name V3QueueGrabCreate
     * @request POST:/api/v3/queue/grab/{id}
     * @secure
     */
    v3QueueGrabCreate: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v3/queue/grab/${id}`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags QueueAction
     * @name V3QueueGrabBulkCreate
     * @request POST:/api/v3/queue/grab/bulk
     * @secure
     */
    v3QueueGrabBulkCreate: (data: QueueBulkResource, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v3/queue/grab/bulk`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags QueueDetails
     * @name V3QueueDetailsList
     * @request GET:/api/v3/queue/details
     * @secure
     */
    v3QueueDetailsList: (
      query?: {
        /** @format int32 */
        movieId?: number;
        /** @default false */
        includeMovie?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<QueueResource[], any>({
        path: `/api/v3/queue/details`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags QueueStatus
     * @name V3QueueStatusList
     * @request GET:/api/v3/queue/status
     * @secure
     */
    v3QueueStatusList: (params: RequestParams = {}) =>
      this.request<QueueStatusResource, any>({
        path: `/api/v3/queue/status`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Release
     * @name V3ReleaseCreate
     * @request POST:/api/v3/release
     * @secure
     */
    v3ReleaseCreate: (data: ReleaseResource, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v3/release`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Release
     * @name V3ReleaseList
     * @request GET:/api/v3/release
     * @secure
     */
    v3ReleaseList: (
      query?: {
        /** @format int32 */
        movieId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<ReleaseResource[], any>({
        path: `/api/v3/release`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ReleaseProfile
     * @name V3ReleaseprofileCreate
     * @request POST:/api/v3/releaseprofile
     * @secure
     */
    v3ReleaseprofileCreate: (data: ReleaseProfileResource, params: RequestParams = {}) =>
      this.request<ReleaseProfileResource, any>({
        path: `/api/v3/releaseprofile`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ReleaseProfile
     * @name V3ReleaseprofileList
     * @request GET:/api/v3/releaseprofile
     * @secure
     */
    v3ReleaseprofileList: (params: RequestParams = {}) =>
      this.request<ReleaseProfileResource[], any>({
        path: `/api/v3/releaseprofile`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ReleaseProfile
     * @name V3ReleaseprofileDelete
     * @request DELETE:/api/v3/releaseprofile/{id}
     * @secure
     */
    v3ReleaseprofileDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v3/releaseprofile/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags ReleaseProfile
     * @name V3ReleaseprofileUpdate
     * @request PUT:/api/v3/releaseprofile/{id}
     * @secure
     */
    v3ReleaseprofileUpdate: (id: string, data: ReleaseProfileResource, params: RequestParams = {}) =>
      this.request<ReleaseProfileResource, any>({
        path: `/api/v3/releaseprofile/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ReleaseProfile
     * @name V3ReleaseprofileDetail
     * @request GET:/api/v3/releaseprofile/{id}
     * @secure
     */
    v3ReleaseprofileDetail: (id: number, params: RequestParams = {}) =>
      this.request<ReleaseProfileResource, any>({
        path: `/api/v3/releaseprofile/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ReleasePush
     * @name V3ReleasePushCreate
     * @request POST:/api/v3/release/push
     * @secure
     */
    v3ReleasePushCreate: (data: ReleaseResource, params: RequestParams = {}) =>
      this.request<ReleaseResource[], any>({
        path: `/api/v3/release/push`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags RemotePathMapping
     * @name V3RemotepathmappingCreate
     * @request POST:/api/v3/remotepathmapping
     * @secure
     */
    v3RemotepathmappingCreate: (data: RemotePathMappingResource, params: RequestParams = {}) =>
      this.request<RemotePathMappingResource, any>({
        path: `/api/v3/remotepathmapping`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags RemotePathMapping
     * @name V3RemotepathmappingList
     * @request GET:/api/v3/remotepathmapping
     * @secure
     */
    v3RemotepathmappingList: (params: RequestParams = {}) =>
      this.request<RemotePathMappingResource[], any>({
        path: `/api/v3/remotepathmapping`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags RemotePathMapping
     * @name V3RemotepathmappingDelete
     * @request DELETE:/api/v3/remotepathmapping/{id}
     * @secure
     */
    v3RemotepathmappingDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v3/remotepathmapping/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags RemotePathMapping
     * @name V3RemotepathmappingUpdate
     * @request PUT:/api/v3/remotepathmapping/{id}
     * @secure
     */
    v3RemotepathmappingUpdate: (id: string, data: RemotePathMappingResource, params: RequestParams = {}) =>
      this.request<RemotePathMappingResource, any>({
        path: `/api/v3/remotepathmapping/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags RemotePathMapping
     * @name V3RemotepathmappingDetail
     * @request GET:/api/v3/remotepathmapping/{id}
     * @secure
     */
    v3RemotepathmappingDetail: (id: number, params: RequestParams = {}) =>
      this.request<RemotePathMappingResource, any>({
        path: `/api/v3/remotepathmapping/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags RenameMovie
     * @name V3RenameList
     * @request GET:/api/v3/rename
     * @secure
     */
    v3RenameList: (
      query?: {
        /** @format int32 */
        movieId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<RenameMovieResource[], any>({
        path: `/api/v3/rename`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags RootFolder
     * @name V3RootfolderCreate
     * @request POST:/api/v3/rootfolder
     * @secure
     */
    v3RootfolderCreate: (data: RootFolderResource, params: RequestParams = {}) =>
      this.request<RootFolderResource, any>({
        path: `/api/v3/rootfolder`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags RootFolder
     * @name V3RootfolderList
     * @request GET:/api/v3/rootfolder
     * @secure
     */
    v3RootfolderList: (params: RequestParams = {}) =>
      this.request<RootFolderResource[], any>({
        path: `/api/v3/rootfolder`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags RootFolder
     * @name V3RootfolderDelete
     * @request DELETE:/api/v3/rootfolder/{id}
     * @secure
     */
    v3RootfolderDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v3/rootfolder/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags RootFolder
     * @name V3RootfolderDetail
     * @request GET:/api/v3/rootfolder/{id}
     * @secure
     */
    v3RootfolderDetail: (id: number, params: RequestParams = {}) =>
      this.request<RootFolderResource, any>({
        path: `/api/v3/rootfolder/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags System
     * @name V3SystemStatusList
     * @request GET:/api/v3/system/status
     * @secure
     */
    v3SystemStatusList: (params: RequestParams = {}) =>
      this.request<SystemResource, any>({
        path: `/api/v3/system/status`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags System
     * @name V3SystemRoutesList
     * @request GET:/api/v3/system/routes
     * @secure
     */
    v3SystemRoutesList: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v3/system/routes`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags System
     * @name V3SystemRoutesDuplicateList
     * @request GET:/api/v3/system/routes/duplicate
     * @secure
     */
    v3SystemRoutesDuplicateList: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v3/system/routes/duplicate`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags System
     * @name V3SystemShutdownCreate
     * @request POST:/api/v3/system/shutdown
     * @secure
     */
    v3SystemShutdownCreate: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v3/system/shutdown`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags System
     * @name V3SystemRestartCreate
     * @request POST:/api/v3/system/restart
     * @secure
     */
    v3SystemRestartCreate: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v3/system/restart`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tag
     * @name V3TagList
     * @request GET:/api/v3/tag
     * @secure
     */
    v3TagList: (params: RequestParams = {}) =>
      this.request<TagResource[], any>({
        path: `/api/v3/tag`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tag
     * @name V3TagCreate
     * @request POST:/api/v3/tag
     * @secure
     */
    v3TagCreate: (data: TagResource, params: RequestParams = {}) =>
      this.request<TagResource, any>({
        path: `/api/v3/tag`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tag
     * @name V3TagUpdate
     * @request PUT:/api/v3/tag/{id}
     * @secure
     */
    v3TagUpdate: (id: string, data: TagResource, params: RequestParams = {}) =>
      this.request<TagResource, any>({
        path: `/api/v3/tag/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tag
     * @name V3TagDelete
     * @request DELETE:/api/v3/tag/{id}
     * @secure
     */
    v3TagDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v3/tag/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tag
     * @name V3TagDetail
     * @request GET:/api/v3/tag/{id}
     * @secure
     */
    v3TagDetail: (id: number, params: RequestParams = {}) =>
      this.request<TagResource, any>({
        path: `/api/v3/tag/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags TagDetails
     * @name V3TagDetailList
     * @request GET:/api/v3/tag/detail
     * @secure
     */
    v3TagDetailList: (params: RequestParams = {}) =>
      this.request<TagDetailsResource[], any>({
        path: `/api/v3/tag/detail`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags TagDetails
     * @name V3TagDetailDetail
     * @request GET:/api/v3/tag/detail/{id}
     * @secure
     */
    v3TagDetailDetail: (id: number, params: RequestParams = {}) =>
      this.request<TagDetailsResource, any>({
        path: `/api/v3/tag/detail/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Task
     * @name V3SystemTaskList
     * @request GET:/api/v3/system/task
     * @secure
     */
    v3SystemTaskList: (params: RequestParams = {}) =>
      this.request<TaskResource[], any>({
        path: `/api/v3/system/task`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Task
     * @name V3SystemTaskDetail
     * @request GET:/api/v3/system/task/{id}
     * @secure
     */
    v3SystemTaskDetail: (id: number, params: RequestParams = {}) =>
      this.request<TaskResource, any>({
        path: `/api/v3/system/task/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags UiConfig
     * @name V3ConfigUiUpdate
     * @request PUT:/api/v3/config/ui/{id}
     * @secure
     */
    v3ConfigUiUpdate: (id: string, data: UiConfigResource, params: RequestParams = {}) =>
      this.request<UiConfigResource, any>({
        path: `/api/v3/config/ui/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags UiConfig
     * @name V3ConfigUiDetail
     * @request GET:/api/v3/config/ui/{id}
     * @secure
     */
    v3ConfigUiDetail: (id: number, params: RequestParams = {}) =>
      this.request<UiConfigResource, any>({
        path: `/api/v3/config/ui/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags UiConfig
     * @name V3ConfigUiList
     * @request GET:/api/v3/config/ui
     * @secure
     */
    v3ConfigUiList: (params: RequestParams = {}) =>
      this.request<UiConfigResource, any>({
        path: `/api/v3/config/ui`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Update
     * @name V3UpdateList
     * @request GET:/api/v3/update
     * @secure
     */
    v3UpdateList: (params: RequestParams = {}) =>
      this.request<UpdateResource[], any>({
        path: `/api/v3/update`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags UpdateLogFile
     * @name V3LogFileUpdateList
     * @request GET:/api/v3/log/file/update
     * @secure
     */
    v3LogFileUpdateList: (params: RequestParams = {}) =>
      this.request<LogFileResource[], any>({
        path: `/api/v3/log/file/update`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags UpdateLogFile
     * @name V3LogFileUpdateDetail
     * @request GET:/api/v3/log/file/update/{filename}
     * @secure
     */
    v3LogFileUpdateDetail: (filename: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v3/log/file/update/${filename}`,
        method: "GET",
        secure: true,
        ...params,
      }),
  };
  login = {
    /**
     * No description
     *
     * @tags Authentication
     * @name LoginCreate
     * @request POST:/login
     * @secure
     */
    loginCreate: (
      data: {
        username?: string;
        password?: string;
        rememberMe?: string;
      },
      query?: {
        returnUrl?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/login`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags StaticResource
     * @name LoginList
     * @request GET:/login
     * @secure
     */
    loginList: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/login`,
        method: "GET",
        secure: true,
        ...params,
      }),
  };
  logout = {
    /**
     * No description
     *
     * @tags Authentication
     * @name LogoutList
     * @request GET:/logout
     * @secure
     */
    logoutList: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/logout`,
        method: "GET",
        secure: true,
        ...params,
      }),
  };
  feed = {
    /**
     * No description
     *
     * @tags CalendarFeed
     * @name V3CalendarRadarrIcsList
     * @request GET:/feed/v3/calendar/radarr.ics
     * @secure
     */
    v3CalendarRadarrIcsList: (
      query?: {
        /**
         * @format int32
         * @default 7
         */
        pastDays?: number;
        /**
         * @format int32
         * @default 28
         */
        futureDays?: number;
        /** @default "" */
        tags?: string;
        /** @default false */
        unmonitored?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/feed/v3/calendar/radarr.ics`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),
  };
  ping = {
    /**
     * No description
     *
     * @tags Ping
     * @name PingList
     * @request GET:/ping
     * @secure
     */
    pingList: (params: RequestParams = {}) =>
      this.request<PingResource, any>({
        path: `/ping`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Ping
     * @name HeadPing
     * @request HEAD:/ping
     * @secure
     */
    headPing: (params: RequestParams = {}) =>
      this.request<PingResource, any>({
        path: `/ping`,
        method: "HEAD",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  content = {
    /**
     * No description
     *
     * @tags StaticResource
     * @name ContentDetail
     * @request GET:/content/{path}
     * @secure
     */
    contentDetail: (path: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/content/${path}`,
        method: "GET",
        secure: true,
        ...params,
      }),
  };
  path = {
    /**
     * No description
     *
     * @tags StaticResource
     * @name GetPath
     * @request GET:/{path}
     * @secure
     */
    getPath: (path: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/${path}`,
        method: "GET",
        secure: true,
        ...params,
      }),
  };
}
