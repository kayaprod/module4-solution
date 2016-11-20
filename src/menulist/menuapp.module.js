(function () {
'use strict';

 angular.module('MenuApp', ['Data','ui.router']);
//angular.module('MenuApp', ['Data']);
 angular.module('MenuApp')
// .config(['$stateProvider',function ($stateProvider) {
//   console.log("Debut creation module MenuAPP");
//   console.log("MenuApp config fired.");
// }])
// .run(['$stateProvider',function ($stateProvider) {
//   console.log("Fin creation module MenuAPP");
//   console.log("MenuApp run fired.");
// }]);
//angular.module('MenuApp')
.config(function () {  
  console.log("MenuApp config fired.");
})

.run(function () {  
  console.log("MenuApp run fired.");
});



})();