export interface IEntityManagementService {

    baseUrl: string;

    initiate(): ng.IPromise<any>;

    create(entity: any): ng.IPromise<any>;

    edit(id: Number): ng.IPromise<any>;

    view(id: Number): ng.IPromise<any>;

    update(entity: any): ng.IPromise<any>;

    delete(id: Number): ng.IPromise<any>;

    list(): ng.IPromise<any>;
}
