var app = angular.module('sgtApp', []);

app.provider('sgtData', function(){
    //Create a variable to hold this
    var self = this;
    //Create a variable to hold your api key but set it to an empty string
    self.api_key = "";
    //Create a variable to hold the API url but set it to an empty string
    self.api_url = "";

    //Add the necessary services to the function parameter list
    this.$get = function($http, $q, $log){
        //return an object that contains a function to call the API and get the student data
        //Refer to the prototype instructions for more help
        return {
          call_api: function() {
            var data = {
              "api_key": self.api_key
            }
            var dataStr = $.param(data);
            var defer = $q.defer();
            $http({
              url: self.api_url,
              data: dataStr,
              dataType: 'json',
              method: 'post',
              headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).then(
              function(response) {
                $log.log(response);
                defer.resolve(response);
              }, function(response) {
                defer.reject(response);
              }
            );
            return defer.promise;
          }
        };
    };
});

//Config your provider here to set the api_key and the api_url
app.config(function(sgtDataProvider) {
  sgtDataProvider.api_key = "lmCt3vlMNx";
  sgtDataProvider.api_url = "http://s-apis.learningfuze.com/sgt/get";
})

//Include your service in the function parameter list along with any other services you may want to use
app.controller('ioController', function($log, sgtData){
    //Create a variable to hold this, DO NOT use the same name you used in your provider
    var controllerSelf = this;
    //Add an empty data object to your controller, make sure to call it 'data'
    controllerSelf.data = {};

    //Add a function called getData to your controller to call the SGT API
    //Refer to the prototype instructions for more help
    controllerSelf.getData = function() {
      sgtData.call_api()
        .then(function(response) {
          $log.log(response);
          controllerSelf.data = response.data;
        }, function(response) {
          $log.log("Failed to load data: " + response);
        })
    }
});
