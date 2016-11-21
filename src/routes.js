(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider
  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menulist/templates/home.template.html'
  })
     // Categories page
.state('mainCategories', {
    url: '/main-categories',
    templateUrl: 'src/menulist/templates/main-categories.template.html',
    controller: 'MainCategoriesController as maincategories',
    resolve: {
              categories:['MenuDataService', function(MenuDataService){
                return MenuDataService.getAllCategories();
              }]
            }

 })
   // Detail
.state('mainCategories.menuDetail', {
    //'/menu-detail/{menuId}',
    templateUrl: 'src/menulist/templates/menu-detail.template.html',
    controller: 'MenuDetailController as menuDetail',
    params: {
      menuId: null
    }
 });

}

})();
