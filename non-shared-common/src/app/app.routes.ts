import { IMenuService, IStateProvider, IConfigurationService, Configuration } from '@norn/non-framework';

const menu: any = require('./menu.json');

export class UiRouterConfig {

    constructor (
        private $stateProvider: IStateProvider
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
                },
                ncyBreadcrumb: {
                    skip: true
                }
        });
    }

    private loadConfiguration = (ConfigurationService: IConfigurationService, MenuService: IMenuService): any => {
        'ngInject';

        return ConfigurationService.loadConfig().then((config: Configuration): void => {
            MenuService.setPrimaryMenuList(menu);
        });
    };

    private loadLocalization = ($translatePartialLoader: ng.translate.ITranslatePartialLoaderService, $translate: ng.translate.ITranslateService): any => {
        'ngInject';

        $translatePartialLoader.addPart('all');
        $translate.refresh();
    };
}
