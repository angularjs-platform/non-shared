import {IMenuService, ILayoutService} from '@norn/non-framework';
import {INavigationService} from '../navigation';

export class SecondaryNavigationController {

    public menuList: any = {};

    constructor(private MenuService: IMenuService,
                private $mdSidenav: ng.material.ISidenavService,
                public LayoutService: ILayoutService,
                public NavigationService: INavigationService) {
        'ngInject';
    }

    public toggleSecondarySideNav = (): void => {
        this.$mdSidenav('secondary-nav').open();
    }
}
