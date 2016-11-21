(function () {
'use strict';

angular.module('Data')
.controller('MainCategoriesController', MainCategoriesController);
MainCategoriesController.$inject = ['MenuDataService','categories'];
function MainCategoriesController(MenuDataService,categories) {
    var maincategories = this;
    maincategories.categories = categories;
    console.log("----Data in MainCategoriesController---- :", categories);
    }

})();
