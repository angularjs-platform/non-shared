const moduleName: string = 'non.shared.system-administration';

import app from './app/app.module';

angular.module(moduleName, [app]);

export * from './app/app.model';

export default moduleName;
