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
            MenuService.setPrimaryMenuList({
                'main': [
                    {
                        'id': 'BankGroup',
                        'title': 'Bank Group',
                        'reference': 'BGA-SystemAdministration-Ref',
                        'url': null
                    },
                    {
                        'id': 'Bank',
                        'title': 'Bank',
                        'reference': 'BA-SystemAdministration-Ref',
                        'url': null
                    },
                    {
                        'id': 'Customer',
                        'title': 'Customer',
                        'reference': 'CA-SystemAdministration-Ref',
                        'url': null
                    }
                ],
                    'BGA-SystemAdministration-Ref': [
                        {
                            'id': 'BGA-SystemAdministration-User',
                            'title': 'User Profile',
                            'reference': 'BGA-SystemAdministration-User-Ref',
                            'url': null
                        },
                        {
                            'id': 'BGA-SystemAdministration-Bank',
                            'title': 'Bank Maintenance',
                            'reference': 'BGA-SystemAdministration-Bank-Ref',
                            'url': null
                        },
                        {
                            'id': 'BGA-SystemAdministration-Customer',
                            'title': 'Customer Maintenance',
                            'reference': 'BGA-SystemAdministration-Customer-Ref',
                            'url': null
                        }
                    ],
                        'BGA-SystemAdministration-User-Ref': [
                            {
                                'id': 'BGA-SystemAdministration-User-Create',
                                'title': 'Create User',
                                'reference': null,
                                'url': '/bga/bankgroup/user/initiate'
                            },
                            {
                                'id': 'BGA-SystemAdministration-User-List',
                                'title': 'List User',
                                'reference': null,
                                'url': '/bga/bankgroup/user/list'
                            }
                        ],
                        'BGA-SystemAdministration-Bank-Ref': [
                            {
                                'id': 'BGA-SystemAdministration-Bank-Profile',
                                'title': 'Profile',
                                'reference': 'BGA-SystemAdministration-Bank-Profile-Ref',
                                'url': null
                            },
                            {
                                'id': 'BGA-SystemAdministration-Bank-User',
                                'title': 'User Profile',
                                'reference': null,
                                'url': '/bga/bank/user/selectbank'
                            }
                        ],
                            'BGA-SystemAdministration-Bank-Profile-Ref': [
                                {
                                    'id': 'BGA-SystemAdministration-Bank-Profile-Create',
                                    'title': 'Create Bank',
                                    'reference': null,
                                    'url': '/bga/bank/initiate'
                                },
                                {
                                    'id': 'BGA-SystemAdministration-Bank-Profile-List',
                                    'title': 'List Banks',
                                    'reference': null,
                                    'url': '/bga/bank/list'
                                }
                            ],
                        'BGA-SystemAdministration-Customer-Ref': [
                            {
                                'id': 'BGA-SystemAdministration-Customer-Profile',
                                'title': 'Profile',
                                'reference': null,
                                'url': '/bga/customer/selectbank'
                            },
                            {
                                'id': 'BGA-SystemAdministration-Customer-User',
                                'title': 'User Profile',
                                'reference': null,
                                'url': '/bga/customer/user/selectbank'
                            }
                        ],
                'BA-SystemAdministration-Ref': [
                    {
                        'id': 'BA-SystemAdministration-User-Ref',
                        'title': 'User Profile',
                        'reference': 'BA-SystemAdministration-User-Ref',
                        'url': null
                    },
                    {
                        'id': 'BA-SystemAdministration-Customer-Ref',
                        'title': 'Customer Maintenance',
                        'reference': 'BA-SystemAdministration-Customer-Ref',
                        'url': null
                    }
                ],
                    'BA-SystemAdministration-User-Ref': [
                        {
                            'id': 'BA-SystemAdministration-User-Create',
                            'title': 'Create User',
                            'reference': null,
                            'url': '/ba/bank/user/initiate'
                        },
                        {
                            'id': 'BA-SystemAdministration-User-List',
                            'title': 'List User',
                            'reference': null,
                            'url': '/ba/bank/user/list'
                        }
                    ],
                    'BA-SystemAdministration-Customer-Ref': [
                        {
                            'id': 'BA-SystemAdministration-Customer-Profile',
                            'title': 'Profile',
                            'reference': 'BA-SystemAdministration-Customer-Profile-Ref',
                            'url': null
                        },
                        {
                            'id': 'BA-SystemAdministration-Customer-User',
                            'title': 'User Profile',
                            'reference': null,
                            'url': '/ba/customer/user/selectcustomer'
                        }
                    ],
                        'BA-SystemAdministration-Customer-Profile-Ref': [
                            {
                                'id': 'BA-SystemAdministration-Customer-Profile-Create',
                                'title': 'Create',
                                'reference': null,
                                'url': '/ba/customer/initiate'
                            },
                            {
                                'id': 'BA-SystemAdministration-Customer-Profile-List',
                                'title': 'List',
                                'reference': null,
                                'url': '/ba/customer/list'
                            }
                        ],
                'CA-SystemAdministration-Ref': [
                    {
                        'id': 'CA-SystemAdministration-User-Ref',
                        'title': 'User Profile',
                        'reference': 'CA-SystemAdministration-User-Ref',
                        'url': null
                    }
                ],
                    'CA-SystemAdministration-User-Ref': [
                        {
                            'id': 'CA-SystemAdministration-User-Create',
                            'title': 'Create User',
                            'reference': null,
                            'url': '/ca/customer/user/initiate'
                        },
                        {
                            'id': 'CA-SystemAdministration-User-List',
                            'title': 'List User',
                            'reference': null,
                            'url': '/ca/customer/user/list'
                        }
                    ]
            });
        });
    };

    private loadLocalization = ($translatePartialLoader: ng.translate.ITranslatePartialLoaderService, $translate: ng.translate.ITranslateService): any => {
        'ngInject';

        $translatePartialLoader.addPart('all');
        $translate.refresh();
    };
}
