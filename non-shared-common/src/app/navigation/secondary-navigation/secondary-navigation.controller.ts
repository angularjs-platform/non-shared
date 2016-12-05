import {IMenuService, ILayoutService} from '@norn/non-framework';

export class SecondaryNavigationController {

    public menuList: any = {};
    public LayoutService: ILayoutService;
    public MenuService: IMenuService;

    constructor(LayoutService: ILayoutService,
                MenuService: IMenuService) {
        'ngInject';

        this.LayoutService = LayoutService;
        this.MenuService = MenuService;
    }
}
