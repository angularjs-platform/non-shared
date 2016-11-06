import {IConfigurationService, Configuration} from './config';

export class ConfigurationService implements IConfigurationService {

    private config: Configuration;

    constructor(
        private $http: ng.IHttpService) {
        'ngInject';
        this.config = {
            primaryMenuList: [],
            viewConfig: []
        };
    }

    public loadConfig = (): ng.IPromise<any> => {
        return this.$http.get('/config', {}).then(this.getCompleteHandler);
    };

    public getConfig = (): Configuration => {
        return this.config;
    };

    private getCompleteHandler: any = (response: any) => {
        this.config = response.data;
        return this.config;
    };
}
