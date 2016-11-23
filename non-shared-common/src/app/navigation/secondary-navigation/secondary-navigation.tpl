<div layout="row" class="non-secondary-layout-container" layout-margin flex>

    <!-- Left Menu -->
    <md-content hide show-gt-sm ng-show="vm.LayoutService.getSecondaryLayoutType() === 'left' && vm.MenuService.getSecondaryMenuList()" class="md-whiteframe-4dp vertical-menu" non-lean-scroll flex>
        <non-vertical-navigation-bar menu-list="vm.MenuService.getSecondaryMenuList()"></non-vertical-navigation-bar>
    </md-content>

    <!-- Page Content -->
    <div layout="column" class="md-whiteframe-4dp" flex>
        <md-toolbar layout="row" layout-align="space-between center">
            <div layout-margin layout-padding>
                {{vm.NavigationService.getCurrentScreenTitle()}}
            </div>
            <div layout="row" layout-align="end center" hide-gt-sm>
                <md-button class="md-icon-button" ng-click="vm.toggleSecondarySideNav()" aria-label="Secondary Menu Toogle Button">
                    <md-icon md-svg-icon="menu" class="icon"></md-icon>
                </md-button>
            </div>
        </md-toolbar>
        <md-content ui-view="content" layout="column" flex non-lean-scroll></md-content>
    </div>

    <!-- Right Menu -->
    <md-content hide show-gt-sm ng-show="vm.LayoutService.getSecondaryLayoutType() === 'right' && vm.MenuService.getSecondaryMenuList()"
        class="md-whiteframe-4dp vertical-menu" non-lean-scroll flex>
        <non-vertical-navigation-bar menu-list="vm.MenuService.getSecondaryMenuList()"></non-vertical-navigation-bar>
    </md-content>
</div>
<md-sidenav class="md-sidenav-right md-whiteframe-4dp sidenav-secondary-navigation" md-component-id="secondary-nav" non-lean-scroll>
    <non-vertical-navigation-bar menu-list="vm.MenuService.getSecondaryMenuList()"></non-vertical-navigation-bar>
</md-sidenav>
