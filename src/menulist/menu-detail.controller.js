(function () {
'use strict';

angular.module('Data')
.controller('MenuDetailController', MenuDetailController);
MenuDetailController.$inject = ['$stateParams','categories','MenuDataService'];

function MenuDetailController($stateParams, categories,MenuDataService) {
    var menuDetail = this;
    var strName;
    menuDetail.items = [];
    var promise;
    var menu = categories[$stateParams.menuId];
    strName = menu.short_name;
    console.log("----Data in MenuDetailController ---- :", menu);
    console.log("short_name selectionne: ",strName);
    // invoke getItemsForCategory
    promise = MenuDataService.getItemsForCategory(strName);
    console.log("promise", promise);
    promise.then(function(response){
    console.log("response", response);
    menuDetail.items = response;
    //console.log("Reponse requete :", menuDetail.items.menu_items[0].description);
    })
    .catch(function(error){
      console.log("There is a problem!")
    });    
}

})();
