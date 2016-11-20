(function () {
'use strict';

angular.module('Data')
.constant('ApiBasePath',"https://davids-restaurant.herokuapp.com/")
.service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$q','$http','ApiBasePath'];
function MenuDataService($q,$http,ApiBasePath) {
  var service = this;  
  var items = [];
  var items_Processing = [];

service.getAllCategories = function(){    
    var deferred = $q.defer();
    console.log("getAllCategories");

     $http.get(ApiBasePath + "categories.json")                   
                    .then(function (response)
                    {                       
                        // this callback will be called asynchronously when the response is available
                        console.log("SUCCESS");                 
                        console.log("Status of the request: " + response.status); 
                        console.log("Text of response " + response.statusText);                       
                        items = response.data; 
                        console.log("items of getAllCategories:", items);                            
                        deferred.resolve(items);
                         
                    });
                    return deferred.promise;
            }; 


service.getItemsForCategory = function(categoryShortName)
    {        
        var deferred = $q.defer(); 

        console.log("getItemsForCategory");
        // Todo before the call
        // modified the category with the ShortName
        $http.get(ApiBasePath + "menu_items.json?category=")                    
                        .then(function (response)
                        {
                        
                            // this callback will be called asynchronously when the response is available
                            console.log("SUCCESS");                 
                            console.log("Status of the request: " + response.status); 
                            console.log("Text of response " + response.statusText); 
                            console.log("result of getItemsForCategory: ", response);        
                            items = response.data;                             
                            deferred.resolve(items); 
                        });
                        return deferred.promise;      

    };

}

})();
