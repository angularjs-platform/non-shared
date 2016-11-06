const moduleName: string = 'non.shared.common.app.primary-navigation';

// Controller
import {PrimaryNavigationController} from './primary-navigation.controller';

angular.module(moduleName, [])
    .controller('PrimaryNavigationController', PrimaryNavigationController);

export default moduleName;
