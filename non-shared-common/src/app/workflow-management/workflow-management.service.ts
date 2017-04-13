import { IWorkflowManagementService, IWorkflowFormDisplayState} from './workflow-management';
import { FormConfiguration } from '@norn/non-framework';

export abstract class WorkflowManagementService implements IWorkflowManagementService {

    constructor(private $http: ng.IHttpService,
                private WorkflowFormDisplayState: IWorkflowFormDisplayState) {
        'ngInject';
        // Empty
    }

    public getFormJSONWithActions = (baseURL: string, baseState: string, formJSON: {}[], formDisplayState: string, params: ng.ui.IStateParamsService): {}[] => {

        const formActions: {} = {
                wrapper: 'fieldwrapper',
                elementAttributes: {
                    layout: 'row'
                },
                fieldGroup: []
        };

        if (formDisplayState === this.WorkflowFormDisplayState.create) {
            formActions['fieldGroup'].push(this.buttonConfig('BUTTON.DRAFT', 'md-primary', 'DRAFT', baseURL + '/create-draft', baseState + '.inprep', false, null));
            formActions['fieldGroup'].push(this.buttonConfig('BUTTON.SUBMIT', 'md-primary md-hue-3', 'SUBMIT', baseURL + '/create-submit', baseState + '.pending', true, null));
        }
        else if (formDisplayState === this.WorkflowFormDisplayState.historyEdit) {
            formActions['fieldGroup'].push(this.buttonConfig('BUTTON.DRAFT', 'md-primary', 'DRAFT', baseURL + '/create-draft', baseState + '.inprep', false, null));
            formActions['fieldGroup'].push(this.buttonConfig('BUTTON.SUBMIT', 'md-primary md-hue-3', 'SUBMIT', baseURL + '/create-submit', baseState + '.pending', true, null));
        }
        else if (formDisplayState === this.WorkflowFormDisplayState.historyView) {
            const discardButton: {} = this.buttonConfig('BUTTON.DISCARD', 'md-primary md-hue-2', 'DISCARD', baseURL + '/history/discard', baseState + '.inprep', false, 'createPayloadForDiscard');
            discardButton['hideExpression'] = 'model.state === "PENDING_INTERNAL"';
            formActions['fieldGroup'].push(discardButton);
        }
        else if (formDisplayState === this.WorkflowFormDisplayState.historyCheck) {
            formActions['fieldGroup'].push(this.buttonConfig('BUTTON.APPROVE', 'md-primary md-hue-3', 'APPROVE', baseURL + '/approve', baseState + '.master', false, 'createPayloadForCheck'));
            formActions['fieldGroup'].push(this.buttonConfig('BUTTON.REJECT', 'md-primary md-hue-2', 'REJECT', baseURL + '/reject', baseState + '.pending', false, 'createPayloadForCheck'));
            formActions['fieldGroup'].push(this.buttonConfig('BUTTON.RETURN', 'md-primary', 'RETURN', baseURL + '/return', baseState + '.pending', true, 'createPayloadForCheck'));
        }
        else if (formDisplayState === this.WorkflowFormDisplayState.edit) {
            formActions['fieldGroup'].push(this.buttonConfig('BUTTON.DRAFT', 'md-primary', 'DRAFT', baseURL + '/update-draft', baseState + '.inprep', false, null));
            formActions['fieldGroup'].push(this.buttonConfig('BUTTON.SUBMIT', 'md-primary md-hue-3', 'SUBMIT', baseURL + '/update-submit', baseState + '.pending', true, null));
        }
        else if (formDisplayState === this.WorkflowFormDisplayState.view) {
            formActions['fieldGroup'].push(this.buttonConfig('BUTTON.DELETE', 'md-primary md-hue-2', 'DELETE', baseURL + '/delete', baseState + '.pending', false, 'createPayloadForDiscard'));
        }
        else {
            console.error('WorkflowManagementService: Invalid Parameter formDisplayState');
        }

        formJSON.push(formActions);

        return formJSON;
    };

    public retrieveFormModel = (baseURL: string, formDisplayState: string, params: ng.ui.IStateParamsService): ng.IPromise<any> => {
        let url: string = baseURL;

        if (formDisplayState === this.WorkflowFormDisplayState.create) {
            url = url + '/create';
        }
        else if (formDisplayState === this.WorkflowFormDisplayState.historyEdit) {
            url = url + '/history/edit/' + params['historyId'];
        }
        else if (formDisplayState === this.WorkflowFormDisplayState.historyView) {
            url = url + '/history/view/' + params['historyId'];
        }
        else if (formDisplayState === this.WorkflowFormDisplayState.historyCheck) {
            url = url + '/history/check/' + params['historyId'];
        }
        else if (formDisplayState === this.WorkflowFormDisplayState.edit) {
            url = url + '/edit/' + params['id'];
        }
        else if (formDisplayState === this.WorkflowFormDisplayState.view) {
            url = url + '/view/' + params['id'];
        }
        else {
            console.error('WorkflowManagementService: Invalid Parameter formDisplayState');
        }

        return this.$http.get(url).then(this.getCompleteHandler);
    };

    public setupForm = (baseURL: string, baseState: string, formJSON: {}[], formDisplayState: string, params: ng.ui.IStateParamsService, viewManagerFunctions: {}): FormConfiguration => {

        viewManagerFunctions = viewManagerFunctions || {};

        // Inject Workflow specific functions into the view manager to allow form submission framework to access it.
        viewManagerFunctions['createPayloadForCheck'] = this.createPayloadForCheck;
        viewManagerFunctions['createPayloadForDiscard'] = this.createPayloadForDiscard;

        let formConfiguration: FormConfiguration = {
                model: {},
                fields: [],
                options: {
                    formState: {
                        displayState: formDisplayState,
                        viewManager: viewManagerFunctions
                    }
                }
        };

        formConfiguration.fields = this.getFormJSONWithActions(baseURL, baseState, formJSON, formDisplayState, params);

        this.retrieveFormModel(baseURL, formDisplayState, params).then((response: any): void => { formConfiguration.model = response; });

        return formConfiguration;
    };

    public getCompleteHandler = (response: any): any => {
        return response.data;
    };

    private createPayloadForCheck = (form: any, formModel: {}): {} => {
        const payload: {} = {};
        payload['ids'] = [];
        payload['ids'].push(formModel['rootVO']['id']);
        payload['comments'] = formModel['rootVO']['comments'];
        return payload;
    };

    private createPayloadForDiscard = (form: any, formModel: {}): {} => {
        const payload: {} = {};
        payload['ids'] = [];
        payload['ids'].push(formModel['rootVO']['id']);
        return payload;
    };

    private buttonConfig = (label: string, className: string, action: string, endpointURL: string, nextState: string, validateForm: boolean, createPayloadMethod: string): {} => {
        const buttonConfig: {} = {
            type: 'submitbutton',
            templateOptions: {
                label: label,
                class: className,
                actionConfig: {
                    action: action,
                    endpointURL: endpointURL,
                    nextState: nextState,
                    validateForm: validateForm,
                    createPayloadMethod: createPayloadMethod
                }
            }
        };

        return buttonConfig;
    }
}
