const moduleName: string = 'non.shared.common.app.secondary-navigation';

// Controller
import {SecondaryNavigationController} from './secondary-navigation.controller';

angular.module(moduleName, [])
    .controller('SecondaryNavigationController', SecondaryNavigationController);

export default moduleName;
