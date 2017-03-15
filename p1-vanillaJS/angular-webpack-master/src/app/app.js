import angular from 'angular';

import '../style/app.css';

let myDir = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

class AppCtrl {
  constructor() {
    this.url = 'https://github.com/preboot/angular-webpack';
  }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [])
  .directive('myDirective', myDir)
  .controller('AppCtrl', AppCtrl);

export default MODULE_NAME;