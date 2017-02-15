import * as angular from 'angular';

const moduleName: string = 'non.shared.authentication-management.app';

import authentication from './authentication/authentication.module';

angular.module(moduleName, [authentication]);

export default moduleName;

