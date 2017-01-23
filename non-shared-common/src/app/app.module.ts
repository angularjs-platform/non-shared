const moduleName: string = 'non.shared.common.app';

// Bundle - config
import {UiRouterConfig} from './app.routes';

// Sub-modules
import navigation from './navigation/navigation.module';

angular.module(moduleName, [navigation])
    .config(UiRouterConfig);

export default moduleName;

