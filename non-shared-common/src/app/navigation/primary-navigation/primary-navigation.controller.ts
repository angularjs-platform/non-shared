import {ILayoutService, IMenuService, IThemeService} from '@norn/non-framework';

export class PrimaryNavigationController {

    public storedLanguage: string;
    public menuList: any = {};
    public primaryLayoutType: string;
    public secondaryLayoutType: string;
    public theme: string;
    public verticalNavigationLocked: boolean;
    public MenuService: IMenuService;

    constructor (MenuService: IMenuService,
                 private LayoutService: ILayoutService,
                 private $mdSidenav: ng.material.ISidenavService,
                 private $translate: ng.translate.ITranslateService,
                 private $anchorScroll: ng.IAnchorScrollService,
                 private $location: ng.ILocationService,
                 private $window: ng.IWindowService,
                 private ThemeService: IThemeService) {
        'ngInject';

        this.MenuService = MenuService;
        this.primaryLayoutType = this.LayoutService.getPrimaryLayoutType();
        this.secondaryLayoutType = this.LayoutService.getSecondaryLayoutType();

        this.verticalNavigationLocked = false;

        this.theme = this.ThemeService.getTheme();

        // If no language is stored then the preferred language from the browser is selected
        this.storedLanguage = this.$translate.storage().get(this.$translate.storageKey());

        this.menuList =  this.MenuService.getPrimaryMenuList();
    }

    public toggleSideNav = (id: string): void => {
        this.$mdSidenav(id).open();
    }

    public toogleVerticalNavigationLocked = (): void => {
        if (this.verticalNavigationLocked) {
            this.$mdSidenav('primary-vertical-navigation').close();
        }
        this.verticalNavigationLocked = !this.verticalNavigationLocked;
    }

    public verticalNavigationOnLeave = (): void => {
        if (!this.verticalNavigationLocked) {
            this.$mdSidenav('primary-vertical-navigation').close();
        }
    }

    public toggleSecondarySideNav = (): void => {
        this.$mdSidenav('secondary-nav').open();
    }

    public changeLanguage = (lang: string): void => {
        this.$translate.use(lang);
        this.storedLanguage = lang;
    }

    public updatePrimaryLayoutStyle = () : void => {
        this.LayoutService.setPrimaryLayoutType(this.primaryLayoutType);
    }

    public updateSecondaryLayoutStyle = () : void => {
        this.LayoutService.setSecondaryLayoutType(this.secondaryLayoutType);
    }

    public updateTheme = () : void => {
        this.ThemeService.setTheme(this.theme);
    }

    public reload = () : void => {
        this.$window.location.reload();
    }

    public scrollToTop = (): void => {
        this.$location.hash('scrollTop');
        this.$anchorScroll();
    }
}
