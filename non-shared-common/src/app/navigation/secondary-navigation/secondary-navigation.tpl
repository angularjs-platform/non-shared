<div layout="row" class="non-secondary-layout-container" layout-margin flex>
    <!-- Left Menu -->
    <md-content hide show-gt-sm ng-show="vm.LayoutService.getSecondaryLayoutType() === 'left' && vm.MenuService.getSecondaryMenuList()" class="md-whiteframe-4dp vertical-menu" non-lean-scroll flex>
        <non-vertical-navigation-bar menu-list="vm.MenuService.getSecondaryMenuList()"></non-vertical-navigation-bar>
    </md-content>

    <!-- Page Content -->
    <div ui-view="content" class="anim-in-out anim-slide-right" data-anim-sync="true"
        data-anim-out-speed="0" data-anim-in-speed="1000" layout="column" flex></div>

    <!-- Right Menu -->
    <md-content hide show-gt-sm ng-show="vm.LayoutService.getSecondaryLayoutType() === 'right' && vm.MenuService.getSecondaryMenuList()"
        class="md-whiteframe-4dp vertical-menu" non-lean-scroll flex>
        <non-vertical-navigation-bar menu-list="vm.MenuService.getSecondaryMenuList()"></non-vertical-navigation-bar>
    </md-content>
</div>
<md-sidenav class="md-sidenav-right md-whiteframe-4dp sidenav-secondary-navigation" md-component-id="secondary-nav" non-lean-scroll>
    <non-vertical-navigation-bar menu-list="vm.MenuService.getSecondaryMenuList()"></non-vertical-navigation-bar>
</md-sidenav>
