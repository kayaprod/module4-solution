(function () {
'use strict';


angular.module('Data', [])
.controller('categoriesController',categoriesController); 
//categoriesController.$inject = ['myData','MenuDataService'];
categoriesController.$inject = ['myData'];

//function categoriesController(myData, MenuDataService) {
function categoriesController(myData) {
    var categories = this;    
    categories.$onInit = function(){
        categories.myData = myData;
        console.log("----Data in controller---- :", myData);
    }
}

})();