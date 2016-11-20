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

.state('categories', {
    url: '/categories',
    templateUrl: 'src/menulist/templates/categories.template.html',
    controller: 'categoriesController as categories',
    resolve: {
              myData:['MenuDataService', function(MenuDataService){
                return MenuDataService.getAllCategories();
              }]
            }

 })
.state('items', {
    url: '/items',
    templateUrl: 'src/menulist/templates/items.template.html',
    controller: 'itemsController as items',
    resolve: {
              myData:['MenuDataService', function(MenuDataService){
                return MenuDataService.getItemsForCategory(categoryShortName);
              }]
            }

 });



}

})();