const moduleName: string = 'non.shared.common.app';

// Bundle - config
import {UiRouterConfig} from './app.routes';

// Sub-modules
import navigation from './navigation/navigation.module';
import config from './config/config.module';

angular.module(moduleName, [navigation, config])
    .config(UiRouterConfig);

export * from './app.model';

export default moduleName;

