import {IMenuService, ILayoutService} from '@norn/non-framework';
import {INavigationService} from '../navigation';

export class SecondaryNavigationController {

    public menuList: any = {};
    public LayoutService: ILayoutService;
    public NavigationService: INavigationService;

    constructor(LayoutService: ILayoutService,
                NavigationService: INavigationService,
                private MenuService: IMenuService) {
        'ngInject';

        this.LayoutService = LayoutService;
        this.NavigationService = NavigationService;
    }
}
