import * as angular from 'angular';

const moduleName: string = 'non.shared.common.app';

// Bundle - config
import {UiRouterConfig} from './app.routes';

// Sub-modules
import navigation from './navigation/navigation.module';
import workflow from './workflow-management/workflow-management.module';

angular.module(moduleName, [navigation, workflow])
    .config(UiRouterConfig);

export default moduleName;

