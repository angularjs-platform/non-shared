import { IMenuService, IStateProvider } from '@norn/non-framework';
import {IConfigurationService, Configuration} from './config/config';

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
            MenuService.setPrimaryMenuList({
                'main': [
                    {
                        'id': 'Home',
                        'title': 'Home',
                        'reference': null,
                        'url': '/home'
                    },
                    {
                        'id': 'bankgroup-system-administration',
                        'title': 'System Administration (BGA)',
                        'reference': 'bankgroup-system-administration-ref',
                        'url': null
                    },
                    {
                        'id': 'bank-system-administration',
                        'title': 'System Administration (BA)',
                        'reference': 'bank-system-administration-ref',
                        'url': null
                    },
                    {
                        'id': 'customer-system-administration',
                        'title': 'System Administration (CA)',
                        'reference': 'customer-system-administration-ref',
                        'url': null
                    }
                ],
                'bankgroup-system-administration-ref': [
                    {
                        'id': 'bga-maintenance',
                        'title': 'BankGroup Maintenance',
                        'reference': null,
                        'url': '/bga/bankgroup'
                    },
                    {
                        'id': 'bga-bank-maintenance',
                        'title': 'Bank Maintenance',
                        'reference': null,
                        'url': '/bga/bank'
                    },
                    {
                        'id': 'bga-customer-maintenance',
                        'title': 'Customer Maintenance',
                        'reference': null,
                        'url': '/bga/customer'
                    }
                ],
                'bank-system-administration-ref': [
                    {
                        'id': 'ba-maintenance',
                        'title': 'Bank Maintenance',
                        'reference': null,
                        'url': '/ba/bank'
                    },
                    {
                        'id': 'ba-customer-maintenance',
                        'title': 'Customer Maintenance',
                        'reference': null,
                        'url': '/ba/customer'
                    }
                ],
                'customer-system-administration-ref': [
                    {
                        'id': 'ca-maintenance',
                        'title': 'Customer Maintenance',
                        'reference': null,
                        'url': '/ca/customer'
                    }
                ],
                'bga-bankgroup-maintenance-ref': [
                    {
                        'id': 'bga-bankgroup-maintenance-user-profile',
                        'title': 'User Profile',
                        'reference': 'bga-bankgroup-maintenance-user-profile-ref',
                        'url': null
                    }
                ],
                'bga-bankgroup-maintenance-user-profile-ref': [
                    {
                        'id': 'bga-bankgroup-maintenance-user-profile-initiate',
                        'title': 'Create User',
                        'reference': null,
                        'url': '/bga/bankgroup/user/initiate'
                    },
                    {
                        'id': 'bga-bankgroup-maintenance-user-profile-list',
                        'title': 'List Users',
                        'reference': null,
                        'url': '/bga/bankgroup/user/list'
                    }
                ],
                'bga-bank-maintenance-ref': [
                    {
                        'id': 'bga-bank-maintenance-bank-profile',
                        'title': 'Bank Profile',
                        'reference': 'bga-bank-maintenance-bank-profile-ref',
                        'url': null
                    },
                    {
                        'id': 'bga-bank-maintenance-bank-user-profile',
                        'title': 'User Profile',
                        'reference': null,
                        'url': '/bga/bank/user/selectbank'
                    }
                ],
                'bga-bank-maintenance-bank-profile-ref': [
                    {
                        'id': 'bga-bank-maintenance-bank-profile-initiate',
                        'title': 'Create Bank',
                        'reference': null,
                        'url': '/bga/bank/initiate'
                    },
                    {
                        'id': 'bga-bank-maintenance-bank-profile-list',
                        'title': 'List Banks',
                        'reference': null,
                        'url': '/bga/bank/list'
                    }
                ],
                'bga-customer-maintenance-ref': [
                    {
                        'id': 'bga-customer-maintenance-customer-profile',
                        'title': 'Customer Profile',
                        'reference': null,
                        'url': '/bga/customer/selectbank'
                    },
                    {
                        'id': 'bga-customer-maintenance-user-profile',
                        'title': 'User Profile',
                        'reference': null,
                        'url': '/bga/customer/user/selectbank'
                    }
                ],
                'ba-bank-maintenance-ref': [
                    {
                        'id': 'ba-bank-maintenance-user-profile',
                        'title': 'User Profile',
                        'reference': 'ba-bank-maintenance-user-profile-ref',
                        'url': null
                    }
                ],
                'ba-bank-maintenance-user-profile-ref': [
                    {
                        'id': 'ba-bank-maintenance-user-profile-initiate',
                        'title': 'Create User',
                        'reference': null,
                        'url': '/ba/bank/user/initiate'
                    },
                    {
                        'id': 'ba-bank-maintenance-user-profile-list',
                        'title': 'List Users',
                        'reference': null,
                        'url': '/ba/bank/user/list'
                    }
                ],
                'ba-customer-maintenance-ref': [
                    {
                        'id': 'ba-customer-maintenance-customer-profile',
                        'title': 'Customer Profile',
                        'reference': 'ba-customer-maintenance-customer-profile-ref',
                        'url': null
                    },
                    {
                        'id': 'ba-customer-maintenance-user-profile',
                        'title': 'User Profile',
                        'reference': null,
                        'url': '/ba/customer/user/selectcustomer'
                    }
                ],
                'ba-customer-maintenance-customer-profile-ref': [
                    {
                        'id': 'ba-customer-maintenance-customer-profile-initiate',
                        'title': 'Create Customer',
                        'reference': null,
                        'url': '/ba/customer/initiate'
                    },
                    {
                        'id': 'ba-customer-maintenance-customer-profile-list',
                        'title': 'List Customers',
                        'reference': null,
                        'url': '/ba/customer/list'
                    }
                ],
                'ca-customer-maintenance-ref': [
                    {
                        'id': 'ca-customer-maintenance-user-profile',
                        'title': 'User Profile',
                        'reference': 'ca-customer-maintenance-user-profile-ref',
                        'url': null
                    }
                ],
                'ca-customer-maintenance-user-profile-ref': [
                    {
                        'id': 'ca-customer-maintenance-user-profile-initiate',
                        'title': 'Create User',
                        'reference': null,
                        'url': '/ca/customer/user/initiate'
                    },
                    {
                        'id': 'ca-customer-maintenance-user-profile-list',
                        'title': 'List Users',
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
