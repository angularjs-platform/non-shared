import { FormConfiguration, IFormDisplayState} from '@norn/non-framework';

export interface IWorkflowManagementService {
    getFormJSONWithActions(baseUrl: string, baseState: string, formJSON: {}[], formDisplayState: string, params: ng.ui.IStateParamsService): {}[];
    retrieveFormModel(baseUrl: string, formDisplayState: string, $stateParams: ng.ui.IStateParamsService): ng.IPromise<any>;
    setupForm(baseUrl: string, baseState: string, formJSON: {}[], formDisplayState: string, params: ng.ui.IStateParamsService, viewManagerFunctions: {}): FormConfiguration;
}

export interface IWorkflowManagementRoutesProvider extends ng.IServiceProvider {
    setupRoutes(baseURL: string, baseState: string, abstractStateBreadCrumbLabel: string,
            parentState: string, abstractStateURL: string, formTemplate: string, formController: string, listTemplate: string, enableCreate: boolean): void;
}

export interface IWorkflowManagementRoutesService {

}

export interface IWorkflowFormDisplayState extends IFormDisplayState {
    historyEdit: string;
    historyView: string;
    historyCheck: string;
}
