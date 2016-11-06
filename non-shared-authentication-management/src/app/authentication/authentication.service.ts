import {IAuthenticationService} from './authentication';

export class AuthenticationService implements IAuthenticationService {

    constructor(
        private $http: ng.IHttpService) {
        'ngInject';
    }

    public login = (orgName: string, userName: string, password:  string): ng.IPromise<any> => {
        return this.$http.post('/login', {orgName: orgName, userName: userName, password: password}).then(getCompleteHandler);

        function getCompleteHandler(response: any): any {
            return response.data;
        }
    };
}
