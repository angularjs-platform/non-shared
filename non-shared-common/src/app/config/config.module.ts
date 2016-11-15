const moduleName: string = 'non.shared.common.app.config';

import {ConfigurationService} from './config.service';

angular.module(moduleName, [])
    .service('ConfigurationService', ConfigurationService);

export default moduleName;
