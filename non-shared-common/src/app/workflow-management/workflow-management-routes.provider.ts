import {IStateProvider} from '@norn/non-framework';
import {IWorkflowManagementRoutesService, IWorkflowManagementRoutesProvider, IWorkflowFormDisplayState} from './workflow-management';

export class WorkflowManagementRoutesService implements IWorkflowManagementRoutesService {

    constructor () {
        // Empty
    }
}

export class WorkflowManagementRoutesProvider implements IWorkflowManagementRoutesProvider {

    constructor (private $stateProvider: IStateProvider,
                 private WorkflowFormDisplayState: IWorkflowFormDisplayState) {
        'ngInject';
    }

    public $get = (): IWorkflowManagementRoutesService => {
        return new WorkflowManagementRoutesService();
    }

    public setupRoutes = (baseURL: string, baseState: string, abstractStateBreadCrumbLabel: string,
            parentState: string, abstractStateURL: string, formTemplate: string, formController: string, listTemplate: string, enableCreate: boolean): void => {

        const inprepListURL: {} = { url: baseURL + '/inprep/list' };
        const pendingListURL: {} = { url: baseURL + '/pending/list' };
        const masterListURL: {} = { url: baseURL + '/master/list' };

        if (parentState && abstractStateURL) {
            this.$stateProvider
                .state(baseState, {
                    abstract: true,
                    url: abstractStateURL,
                    ncyBreadcrumb: {
                        label: abstractStateBreadCrumbLabel,
                        parent: parentState
                    }
            });
        }


        // Create
        if (enableCreate) {
            this.$stateProvider.state(baseState + '.create', {
                url: '/create',
                views: {
                    'content@app': {
                        template: formTemplate,
                        controller: formController,
                        controllerAs: 'vm',
                        resolve: {
                            formDisplayState: (): string => this.WorkflowFormDisplayState.create,
                            baseURL: (): string => baseURL,
                            baseState: (): string => baseState
                        }
                    }
                },
                ncyBreadcrumb: {
                    label: 'BREADCRUMB.CREATE'
                }
            });
        }


        // Inpreparation
        this.$stateProvider.state(baseState + '.inprep', {
                url: '/inprep/list',
                views: {
                    'content@app': {
                        template: listTemplate,
                        resolve: {
                            source: (): {} => inprepListURL
                        }
                    }
                },
                ncyBreadcrumb: {
                    label: 'BREADCRUMB.INPREP_LIST'
                }
            })
            .state(baseState + '.inprep.history-edit', {
                url: '/history/edit/:historyId',
                views: {
                    'content@app': {
                        template: formTemplate,
                        controller: formController,
                        controllerAs: 'vm',
                        resolve: {
                            formDisplayState: (): string => this.WorkflowFormDisplayState.historyEdit,
                            baseURL: (): string => baseURL,
                            baseState: (): string => baseState
                        }
                    }
                },
                ncyBreadcrumb: {
                    label: 'BREADCRUMB.HISTORY_EDIT'
                }
            })
            .state(baseState + '.inprep.history-view', {
                url: '/history/view/:historyId',
                views: {
                    'content@app': {
                        template: formTemplate,
                        controller: formController,
                        controllerAs: 'vm',
                        resolve: {
                            formDisplayState: (): string => this.WorkflowFormDisplayState.historyView,
                            baseURL: (): string => baseURL,
                            baseState: (): string => baseState
                        }
                    }
                },
                ncyBreadcrumb: {
                    label: 'BREADCRUMB.HISTORY_VIEW'
                }
            })

        // Pending
            .state(baseState + '.pending', {
                url: '/pending/list',
                views: {
                    'content@app': {
                        template: listTemplate,
                        resolve: {
                            source: (): {} => pendingListURL
                        }
                    }
                },
                ncyBreadcrumb: {
                    label: 'BREADCRUMB.PENDING_LIST'
                }
            })
            .state(baseState + '.pending.history-view', {
                url: '/history/view/:historyId',
                views: {
                    'content@app': {
                        template: formTemplate,
                        controller: formController,
                        controllerAs: 'vm',
                        resolve: {
                            formDisplayState: (): string => this.WorkflowFormDisplayState.historyView,
                            baseURL: (): string => baseURL,
                            baseState: (): string => baseState
                        }
                    }
                },
                ncyBreadcrumb: {
                    label: 'BREADCRUMB.VIEW'
                }
            })
            .state(baseState + '.pending.history-check', {
                url: '/history/check/:historyId',
                views: {
                    'content@app': {
                        template: formTemplate,
                        controller: formController,
                        controllerAs: 'vm',
                        resolve: {
                            formDisplayState: (): string => this.WorkflowFormDisplayState.historyCheck,
                            baseURL: (): string => baseURL,
                            baseState: (): string => baseState
                        }
                    }
                },
                ncyBreadcrumb: {
                    label: 'BREADCRUMB.HISTORY_CHECK'
                }
            })

        // Master
            .state(baseState + '.master', {
                url: '/master/list',
                views: {
                    'content@app': {
                        template: listTemplate,
                        resolve: {
                            source: (): {} => masterListURL
                        }
                    }
                },
                ncyBreadcrumb: {
                    label: 'BREADCRUMB.MASTER_LIST'
                }
            })
            .state(baseState + '.master.edit', {
                url: '/edit/:id',
                views: {
                    'content@app': {
                        template: formTemplate,
                        controller: formController,
                        controllerAs: 'vm',
                        resolve: {
                            formDisplayState: (): string => this.WorkflowFormDisplayState.edit,
                            baseURL: (): string => baseURL,
                            baseState: (): string => baseState
                        }
                    }
                },
                ncyBreadcrumb: {
                    label: 'BREADCRUMB.EDIT'
                }
            })
            .state(baseState + '.master.view', {
                url: '/view/:id',
                views: {
                    'content@app': {
                        template: formTemplate,
                        controller: formController,
                        controllerAs: 'vm',
                        resolve: {
                            formDisplayState: (): string => this.WorkflowFormDisplayState.view,
                            baseURL: (): string => baseURL,
                            baseState: (): string => baseState
                        }
                    }
                },
                ncyBreadcrumb: {
                    label: 'BREADCRUMB.VIEW'
                }
            });
    }
}
