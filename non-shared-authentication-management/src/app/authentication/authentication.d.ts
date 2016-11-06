export interface IAuthenticationService {

    login(orgName: string, userName: string, password:  string): ng.IPromise<any>;
}

