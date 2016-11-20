(function () {
'use strict';

angular.module('Data')
.component('myCategories', {
  templateUrl: 'src/menulist/templates/categories.template.html',
  bindings: {
    categories: '<'
  }
});

})();
