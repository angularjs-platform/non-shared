const moduleName: string = 'non.shared.common.app.navigation';

// Sub-modules
import primaryNavigation from './primary-navigation/primary-navigation.module';
import secondaryNavigation from './secondary-navigation/secondary-navigation.module';

angular.module(moduleName, [primaryNavigation, secondaryNavigation]);

export default moduleName;

