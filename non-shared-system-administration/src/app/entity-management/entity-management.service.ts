import {IEntityManagementService} from './entity-management';

export abstract class EntityManagementService implements IEntityManagementService {

    public baseUrl: string;
    public $http: ng.IHttpService;

    constructor($http: ng.IHttpService) {
        'ngInject';

        this.$http = $http;
    }

    public initiate = (): ng.IPromise<any> => {
        return this.$http.get(this.baseUrl + '/initiate').then(this.getCompleteHandler);
   };

    public create = (org: any): ng.IPromise<any> => {
        return this.$http.post(this.baseUrl + '/create', org).then(this.getCompleteHandler);
    };

    public edit = (orgId: Number): ng.IPromise<any> => {
        return this.$http.get(this.baseUrl + '/edit/' + orgId).then(this.getCompleteHandler);
   };

    public view = (orgId: Number): ng.IPromise<any> => {
        return this.$http.get(this.baseUrl + '/view/' + orgId).then(this.getCompleteHandler);
   };

    public update = (org: any): ng.IPromise<any> => {
        return this.$http.post(this.baseUrl + '/update', org).then(this.getCompleteHandler);
    };

    public delete = (orgId: Number): ng.IPromise<any> => {
        return this.$http.post(this.baseUrl + '/delete', {id: orgId}).then(this.getCompleteHandler);
    };

    public getListUrl = (): string => {
        return this.baseUrl + '/list';
    };

    public getCompleteHandler = (response: any): any => {
        return response.data;
    };
}
