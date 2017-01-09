import angular from 'angular';

// angular modules
import constants from './constants';
import onConfig  from './on_config';
import onRun     from './on_run';
import 'angular-ui-router';
import 'angular-aria';
import 'angular-animate';
import 'angular-material';
import 'angular-chart.js';
import 'angular-drag-and-drop-lists';

import 'angular-ui-bootstrap';
import './templates';
import './filters';
import './controllers';
import './services';
import './directives';

// create and bootstrap application
const requires = [
    'ui.router',
    'ui.bootstrap.modal',
    'chart.js',
    'templates',
    'ngMaterial',
    'ui.bootstrap',
    'app.filters',
    'app.controllers',
    'app.services',
    'app.directives'
];

// mount on window for testing
window.app = angular.module('app', requires);

angular.module('app').constant('AppSettings', constants);

angular.module('app').config(onConfig);

angular.module('app').run(onRun);

angular.bootstrap(document, ['app'], {
    strictDi: true
});
