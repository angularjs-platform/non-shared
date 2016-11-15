import {IMenuService, ILayoutService} from '@norn/non-framework';

export class SecondaryNavigationController {

    public menuList: any = {};
    public secondaryNavigationType: string;

    constructor(private $rootScope: ng.IRootScopeService,
                private MenuService: IMenuService,
                private LayoutService: ILayoutService,
                private $mdSidenav: ng.material.ISidenavService) {
        'ngInject';

        this.menuList = this.MenuService.getSecondaryMenuList();

        this.secondaryNavigationType = this.LayoutService.getSecondaryLayoutType();

        this.$rootScope.$on('$stateChangeStart', (event: any, toState: any, toParams: any, fromState: any, fromParams: any): any => {
            this.menuList = this.MenuService.getSecondaryMenuList();
        });
    }

    public toggleSideNav = (id: string) : any => {
        this.$mdSidenav(id).toggle();
    };
}
