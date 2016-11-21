(function () {
'use strict';

angular.module('Data')
.component('myItems', {
  templateUrl: 'src/menulist/templates/menu-detail.template.html',
  bindings: {
    items: '<'
  }
});

})();
