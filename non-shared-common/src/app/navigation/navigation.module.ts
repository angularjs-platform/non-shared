const moduleName: string = 'non.shared.common.app.navigation';

// Sub-modules
import primaryNavigation from './primary-navigation/primary-navigation.module';
import secondaryNavigation from './secondary-navigation/secondary-navigation.module';

// Service
import {NavigationService} from './navigation.service';

angular.module(moduleName, [primaryNavigation, secondaryNavigation])
    .service('NavigationService', NavigationService);

export default moduleName;

