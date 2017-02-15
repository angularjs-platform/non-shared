import * as angular from 'angular';

const moduleName: string = 'non.shared.authentication-management.app.authentication';

import {AuthenticationService} from './authentication.service';

angular.module(moduleName, [])
    .service('AuthenticationService', AuthenticationService);

export default moduleName;
