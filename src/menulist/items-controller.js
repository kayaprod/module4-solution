(function () {
'use strict';

angular.module('Data')
.controller('itemsController', itemsController); 
//itemsController.$inject = ['myData','MenuDataService'];
itemsController.$inject = ['myData'];

//function itemsController(myData, MenuDataService) {
function itemsController(myData) {
    var items = this;    
    items.$onInit = function(){
        items.myData = myData;
        console.log("----Data in controller items ---- :", myData);
    }
}

})();