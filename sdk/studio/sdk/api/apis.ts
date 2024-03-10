export * from './adminApi';
import { AdminApi } from './adminApi';
export * from './authApi';
import { AuthApi } from './authApi';
export * from './cDNApi';
import { CDNApi } from './cDNApi';
export * from './classifyApi';
import { ClassifyApi } from './classifyApi';
export * from './dSPApi';
import { DSPApi } from './dSPApi';
export * from './deploymentApi';
import { DeploymentApi } from './deploymentApi';
export * from './devicesApi';
import { DevicesApi } from './devicesApi';
export * from './emailVerificationApi';
import { EmailVerificationApi } from './emailVerificationApi';
export * from './exportApi';
import { ExportApi } from './exportApi';
export * from './featureFlagsApi';
import { FeatureFlagsApi } from './featureFlagsApi';
export * from './healthApi';
import { HealthApi } from './healthApi';
export * from './impulseApi';
import { ImpulseApi } from './impulseApi';
export * from './jobsApi';
import { JobsApi } from './jobsApi';
export * from './learnApi';
import { LearnApi } from './learnApi';
export * from './loginApi';
import { LoginApi } from './loginApi';
export * from './metricsApi';
import { MetricsApi } from './metricsApi';
export * from './optimizationApi';
import { OptimizationApi } from './optimizationApi';
export * from './organizationBlocksApi';
import { OrganizationBlocksApi } from './organizationBlocksApi';
export * from './organizationCreateProjectApi';
import { OrganizationCreateProjectApi } from './organizationCreateProjectApi';
export * from './organizationDataApi';
import { OrganizationDataApi } from './organizationDataApi';
export * from './organizationDataCampaignsApi';
import { OrganizationDataCampaignsApi } from './organizationDataCampaignsApi';
export * from './organizationJobsApi';
import { OrganizationJobsApi } from './organizationJobsApi';
export * from './organizationPipelinesApi';
import { OrganizationPipelinesApi } from './organizationPipelinesApi';
export * from './organizationPortalsApi';
import { OrganizationPortalsApi } from './organizationPortalsApi';
export * from './organizationRequiresAdminApi';
import { OrganizationRequiresAdminApi } from './organizationRequiresAdminApi';
export * from './organizationRequiresWhitelabelAdminApi';
import { OrganizationRequiresWhitelabelAdminApi } from './organizationRequiresWhitelabelAdminApi';
export * from './organizationsApi';
import { OrganizationsApi } from './organizationsApi';
export * from './performanceCalibrationApi';
import { PerformanceCalibrationApi } from './performanceCalibrationApi';
export * from './projectsApi';
import { ProjectsApi } from './projectsApi';
export * from './rawDataApi';
import { RawDataApi } from './rawDataApi';
<<<<<<< HEAD:sdk/studio/sdk/api/apis.ts
export * from './themesApi';
import { ThemesApi } from './themesApi';
export * from './thirdPartyAuthApi';
import { ThirdPartyAuthApi } from './thirdPartyAuthApi';
=======
export * from './requiresSudoApi';
import { RequiresSudoApi } from './requiresSudoApi';
export * from './supportsRangeApi';
import { SupportsRangeApi } from './supportsRangeApi';
>>>>>>> parent of 840c0ea (Release v1.13.10):sdk/studio/api/apis.ts
export * from './uploadPortalApi';
import { UploadPortalApi } from './uploadPortalApi';
export * from './userApi';
import { UserApi } from './userApi';
export * from './whitelabelsApi';
import { WhitelabelsApi } from './whitelabelsApi';
import * as fs from 'fs';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export interface RequestDetailedFile {
    value: Buffer;
    options: {
        filename: string;
        contentType: string;
    }
}

export type RequestFile = RequestDetailedFile;

<<<<<<< HEAD:sdk/studio/sdk/api/apis.ts
export const APIS = [AdminApi, AuthApi, CDNApi, ClassifyApi, DSPApi, DeploymentApi, DevicesApi, EmailVerificationApi, ExportApi, FeatureFlagsApi, HealthApi, ImpulseApi, JobsApi, LearnApi, LoginApi, MetricsApi, OptimizationApi, OrganizationBlocksApi, OrganizationCreateProjectApi, OrganizationDataApi, OrganizationDataCampaignsApi, OrganizationJobsApi, OrganizationPipelinesApi, OrganizationPortalsApi, OrganizationRequiresAdminApi, OrganizationRequiresWhitelabelAdminApi, OrganizationsApi, PerformanceCalibrationApi, ProjectsApi, RawDataApi, ThemesApi, ThirdPartyAuthApi, UploadPortalApi, UserApi, WhitelabelsApi];
=======
export const APIS = [AdminApi, AllowsReadOnlyApi, AuthApi, CDNApi, ClassifyApi, DSPApi, DeploymentApi, DevicesApi, ExportApi, HealthApi, ImpulseApi, JobsApi, LearnApi, LoginApi, OptimizationApi, OrganizationBlocksApi, OrganizationCreateProjectApi, OrganizationDataApi, OrganizationJobsApi, OrganizationPortalsApi, OrganizationRequiresAdminApi, OrganizationsApi, ProjectsApi, RawDataApi, RequiresSudoApi, SupportsRangeApi, UploadPortalApi, UserApi];
>>>>>>> parent of 840c0ea (Release v1.13.10):sdk/studio/api/apis.ts
