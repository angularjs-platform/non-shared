import {IMenuService} from '@norn/non-framework';
import {IConfigurationService, Configuration} from './config/config';

export class UiRouterConfig {

    constructor (
        private $stateProvider: ng.ui.IStateProvider
    ) {
        'ngInject';

        // State definitions
        this.$stateProvider
            .state('app', {
                abstract: true,
                resolve: {
                    initialConfig: this.loadConfiguration,
                    loadLocalization: this.loadLocalization
                },
                views   : {
                    'main@': {
                        template: require('./navigation/primary-navigation/primary-navigation.tpl'),
                        controller: 'PrimaryNavigationController as vm'
                    },
                    'secondary-main@app': {
                        template: require('./navigation/secondary-navigation/secondary-navigation.tpl'),
                        controller: 'SecondaryNavigationController as vm'
                    }
                }
        });
    }

    private loadConfiguration = (ConfigurationService: IConfigurationService, MenuService: IMenuService): any => {
        'ngInject';

        return ConfigurationService.loadConfig().then((config: Configuration): void => {
            MenuService.setPrimaryMenuList(config.primaryMenuList);
        });
    };

    private loadLocalization = ($translatePartialLoader: ng.translate.ITranslatePartialLoaderService, $translate: ng.translate.ITranslateService): any => {
        'ngInject';

        $translatePartialLoader.addPart('all');
        $translate.refresh();
    };
}
