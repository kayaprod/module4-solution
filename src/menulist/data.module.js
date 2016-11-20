(function () {
'use strict';

angular.module('Data', [])
//.controller('TestController',TestController);  //test controleur
angular.module('Data')
.config(function () {
  console.log("Data config fired.");
})
.run(function () {
  console.log("Data run fired.");
});



})();
