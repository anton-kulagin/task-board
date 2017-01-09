function OnRun($rootScope, AppSettings) {
    'ngInject';

    $rootScope.isNavCollapsed = true;
    $rootScope.isCollapsed = false;
    $rootScope.isCollapsedHorizontal = false;

    $rootScope.CollapseNav = ()=> {
        let isNavBarOpened = document.querySelectorAll('[aria-hidden="false"]');
        if (isNavBarOpened.length) {
            $rootScope.isNavCollapsed = !$rootScope.isNavCollapsed;
        }
    };

    $rootScope.$on('$stateChangeSuccess', (event, toState) => {
        $rootScope.pageTitle = '';

        if (toState.title) {
            $rootScope.pageTitle += toState.title;
            $rootScope.pageTitle += ' \u2014 ';
        }

        $rootScope.pageTitle += AppSettings.appTitle;
    });

}

export default OnRun;
