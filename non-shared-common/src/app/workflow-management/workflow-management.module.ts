import * as angular from 'angular';

const moduleName: string = 'non.shared.common.app.workflow-management';

import {WorkflowManagementService} from './workflow-management.service';
import {WorkflowManagementRoutesProvider} from './workflow-management-routes.provider';
import {WorkflowFormDisplayState} from './workflow-form.constant';

angular.module(moduleName, [])
    .service('WorkflowManagementService', WorkflowManagementService)
    .constant('WorkflowFormDisplayState', WorkflowFormDisplayState)
    .provider('WorkflowManagementRoutes', WorkflowManagementRoutesProvider);

export default moduleName;

