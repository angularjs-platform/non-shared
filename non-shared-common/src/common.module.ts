import * as angular from 'angular';

const moduleName: string = 'non.shared.common';

import app from './app/app.module';

angular.module(moduleName, [app]);

export default moduleName;
