<div layout="row" class="non-primary-layout-container" flex>

    <!-- Vertical Primary Menu -->
    <md-sidenav ng-show="vm.primaryLayoutType === 'vertical'" class="md-whiteframe-6dp primary-vertical-navigation"
            md-component-id="primary-vertical-navigation" ng-mouseleave="vm.verticalNavigationOnLeave()" md-is-locked-open="vm.verticalNavigationLocked">
        <md-toolbar class="md-accent" layout="row" layout-align="space-between center">
            <div layout="row" layout-align="start center" layout-margin>
                <md-icon md-svg-icon="earth" class="icon" aria-label="Logo"></md-icon>
                DEMOBANK
            </div>
            <div layout="row" layout-align="end center" hide show-gt-sm>
                <md-button class="md-icon-button vertical-navigation-lock-icon" md-ink-ripple="false" ng-click="vm.toogleVerticalNavigationLocked()" aria-label="Vertical Navigation lock">
                    <md-icon md-svg-icon="arrow-right-bold-hexagon-outline" class="icon" ng-class="{'vertical-navigation-locked': vm.verticalNavigationLocked}"></md-icon>
                </md-button>
            </div>
        </md-toolbar>
        <md-content non-lean-scroll>
            <non-vertical-navigation-bar menu-list="vm.menuList"></non-vertical-navigation-bar>
        </md-content>
    </md-sidenav>

    <div id="content-container" layout="column" flex>
        <!-- Header Toolbar-->
        <md-content layout="column" class="md-whiteframe-2dp">
            <md-toolbar class="md-primary non-primary-header-toolbar">
                <div layout="row" layout-align="space-between center" flex>
                    <div layout="row" layout-align="start center">
                        <div layout="row" layout-align="start center" ng-show="vm.primaryLayoutType !== 'vertical' || !vm.verticalNavigationLocked">
                            <md-button ng-show="vm.primaryLayoutType === 'vertical'" class="md-icon-button"
                                ng-mouseenter="vm.toggleSideNav('primary-vertical-navigation')" ng-click="vm.toggleSideNav('primary-vertical-navigation')"
                                aria-label="Toggle Primary Menu Button">
                                <md-icon md-svg-icon="menu" class="icon"></md-icon>
                            </md-button>
                            <div class="toolbar-separator" ng-show="vm.primaryLayoutType === 'vertical'"></div>

                            <div layout="row" layout-align="start center" layout-margin>
                                <md-icon md-svg-icon="earth" class="icon" aria-label="Logo"></md-icon>
                                DEMOBANK
                            </div>
                        </div>
                    </div>
                    <div layout="row" layout-align="end center">
                        <div class="toolbar-separator" hide show-xs></div>
                        <md-menu-bar id="user-menu">
                            <md-menu md-position-mode="left bottom">
                                <md-button class="md-icon-button user-profile-icon" ng-click="$mdMenu.open()" aria-label="User Menu Button">
                                    <md-icon md-svg-icon="account-circle" class="icon"></md-icon>
                                </md-button>
                                <md-menu-content width="3">
                                    <md-menu-item class="md-indent" ui-sref="app.userprofile">
                                        <md-icon md-svg-icon="account" class="icon"></md-icon>
                                        <md-button><span translate>USER_MENU.MY_PROFILE</span></md-button>
                                    </md-menu-item>
                                    <md-menu-item class="md-indent">
                                        <md-icon md-svg-icon="translate" class="icon"></md-icon>
                                        <md-menu>
                                            <md-button ng-click="$mdMenu.open()"><span translate>USER_MENU.LANGUAGE</span></md-button>
                                            <md-menu-content width="2">
                                                <md-menu-item>
                                                    <md-button ng-click="vm.changeLanguage('en')" ng-class="{'md-accent' : vm.isSelected('en')}"><span translate>USER_MENU.LANGUAGE_ENGLISH</span></md-button>
                                                </md-menu-item>
                                                <md-menu-item>
                                                    <md-button ng-click="vm.changeLanguage('fr')" ng-class="{'md-accent' : vm.isSelected('fr')}"><span translate>USER_MENU.LANGUAGE_FRENCH</span></md-button>
                                                </md-menu-item>
                                                <md-menu-item>
                                                    <md-button ng-click="vm.changeLanguage('de')" ng-class="{'md-accent' : vm.isSelected('de')}"><span translate>USER_MENU.LANGUAGE_GERMAN</span></md-button>
                                                </md-menu-item>
                                                <md-menu-item>
                                                    <md-button ng-click="vm.changeLanguage('es')" ng-class="{'md-accent' : vm.isSelected('es')}"><span translate>USER_MENU.LANGUAGE_SPANISH</span></md-button>
                                                </md-menu-item>
                                            </md-menu-content>
                                        </md-menu>
                                    </md-menu-item>
                                    <md-menu-divider></md-menu-divider>
                                    <md-menu-item class="md-indent" hide show-xs ng-click="vm.toggleSideNav('quick-panel')">
                                        <md-icon md-svg-icon="dots-vertical" class="icon"></md-icon>
                                        <md-button><span translate>USER_MENU.QUICK_ACCESS</span></md-button>
                                    </md-menu-item>
                                    <md-menu-divider  hide show-xs></md-menu-divider>
                                    <md-menu-item class="md-indent" ui-sref="login">
                                        <md-icon md-svg-icon="logout" class="icon"></md-icon>
                                        <md-button><span translate>USER_MENU.LOGOUT</span></md-button>
                                    </md-menu-item>
                                </md-menu-content>
                            </md-menu>
                        </md-menu-bar>

                        <div class="toolbar-separator"></div>

                        <md-button class="md-icon-button" hide show-gt-xs ng-click="vm.toggleSideNav('quick-panel')" aria-label="Quick Panel Button">
                            <md-icon md-svg-icon="dots-vertical" class="icon"></md-icon>
                        </md-button>
                    </div>
                </div>
            </md-toolbar>
            <!-- Horizontal Primary Menu -->
            <md-toolbar ng-show="vm.primaryLayoutType !== 'vertical'" class="md-menu-toolbar primary-horizontal-navigation" flex>
                <non-horizontal-navigation-bar menu-list="vm.menuList"></non-horizontal-navigation-bar>
            </md-toolbar>
        </md-content>

        <!-- Breadcrumb -->
        <div layout="row" layout-align="space-between center" class="md-whiteframe-2dp secondary-navigation-toolbar">
            <div ncy-breadcrumb></div>
            <div layout-align="end center" ng-show="vm.MenuService.getSecondaryMenuList()" hide-gt-sm>
                <md-button class="md-icon-button" ng-click="vm.toggleSecondarySideNav()" aria-label="Secondary Menu Toogle Button">
                    <md-icon md-svg-icon="menu" class="icon"></md-icon>
                </md-button>
            </div>
        </div>

        <!-- Secondary Page Content-->
        <div ui-view="secondary-main" class="non-secondary-main anim-in-out anim-slide-right" data-anim-sync="true"
        data-anim-out-speed="0" data-anim-in-speed="1000" layout="column" flex></div>

        <!-- Fab Speed Dial
        <md-fab-speed-dial md-direction="up" class="md-fling md-fab-bottom-right">
            <md-fab-trigger>
                <md-button class="md-fab md-primary" aria-label="Page Action Button">
                    <md-icon md-svg-icon="silverware" class="icon"></md-icon>
                </md-button>
            </md-fab-trigger>
            <md-fab-actions>
                <md-button class="md-fab md-mini md-accent" aria-label="Maximize Minimize Button">
                    <md-icon md-svg-icon="crop-free" class="icon"></md-icon>
                </md-button>
                <md-button class="md-fab md-mini md-accent" ng-click="vm.scrollToTop()" aria-label="Scroll To Top Button">
                    <md-icon md-svg-icon="chevron-double-up" class="icon"></md-icon>
                </md-button>
            </md-fab-actions>
        </md-fab-speed-dial> -->
    </div>

    <!-- Quick Panel -->
    <md-sidenav class="md-sidenav-right md-whiteframe-6dp non-primary-quick-panel" md-component-id="quick-panel" non-lean-scroll>
        <md-tabs md-no-pagination md-swipe-content md-dynamic-height md-stretch-tabs="always" md-border-bottom>
            <md-tab>
                <md-tab-label><span translate>QUICK_PANEL.TAB_HEADER_NOTIFICATIONS</span></md-tab-label>
                <md-tab-body>
                    <md-content class="notfications-tab scrollable" layout-margin non-lean-scroll>
                        <div layout-padding>Here notifications will appear</div>
                    </md-content>
                </md-tab-body>
            </md-tab>
            <md-tab>
                <md-tab-label><span translate>QUICK_PANEL.TAB_HEADER_BOOKMARKS</span></md-tab-label>
                <md-tab-body>
                    <md-content class="bookmarks-tab scrollable" layout-margin non-lean-scroll>
                        <div layout-padding>Here bookmarks will appear</div>
                    </md-content>
                </md-tab-body>
            </md-tab>
            <md-tab hide-xs hide-sm>
                <md-tab-label><span translate>QUICK_PANEL.TAB_HEADER_SETTINGS</span></md-tab-label>
                <md-tab-body>
                    <md-content class="settings-tab scrollable" non-lean-scroll>
                        <div hide show-gt-sm layout-padding>
                            <div layout="column" class="md-caption">
                                <div>
                                    <div class="md-body-2" translate>QUICK_PANEL.PRIMARY_LAYOUT_STYLE</div>
                                    <br/>
                                    <md-radio-group layout="column" ng-model="vm.primaryLayoutType"
                                        ng-change="vm.updatePrimaryLayoutStyle()">
                                        <md-radio-button value="vertical"><span translate>QUICK_PANEL.VERTICAL_NAVIGATION</span></md-radio-button>
                                        <md-radio-button value="horizontal"><span translate>QUICK_PANEL.HORIZONTAL_NAVIGATION</span></md-radio-button>
                                    </md-radio-group>
                                </div>

                                <md-divider></md-divider>
                                <br/>
                                <div>
                                    <div class="md-body-2" translate>QUICK_PANEL.SECONDARY_LAYOUT_STYLE</div>
                                    <br/>
                                    <md-radio-group layout="column" ng-model="vm.secondaryLayoutType"
                                        ng-change="vm.updateSecondaryLayoutStyle()">
                                        <md-radio-button value="left"><span translate>QUICK_PANEL.LEFT_NAVIGATION</span></md-radio-button>
                                        <md-radio-button value="right"><span translate>QUICK_PANEL.RIGHT_NAVIGATION</span></md-radio-button>
                                    </md-radio-group>
                                </div>
                            </div>
                            <md-divider></md-divider>
                            <div layout="column" class="md-caption">
                                <div>
                                    <div class="md-body-2" translate>QUICK_PANEL.THEME</div>
                                    <br/>
                                    <md-radio-group layout="column" ng-model="vm.theme"
                                        ng-change="vm.updateTheme()">
                                        <md-radio-button value="base"><span translate>QUICK_PANEL.DEFAULT</span></md-radio-button>
                                        <md-radio-button value="custom"><span translate>QUICK_PANEL.CUSTOM</span></md-radio-button>
                                    </md-radio-group>
                                </div>
                            </div>
                        </div>
                    </md-content>
                </md-tab-body>
            </md-tab>
        </md-tabs>
    </md-sidenav>
</div>
