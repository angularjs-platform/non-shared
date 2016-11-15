export interface IConfigurationService {

    loadConfig(): ng.IPromise<any>;
    getConfig(): Configuration;
}

export type Configuration = {
    primaryMenuList: {}[],
    viewConfig: string[]
}
