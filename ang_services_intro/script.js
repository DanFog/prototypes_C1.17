var app = angular.module("ang_services_intro", []);

app.controller("formController", function($log, $http) {
  var self = this;

  self.songUrl = function(artistName) {
    $log.log('https://itunes.apple.com/search?term=' + artistName + '&callback=JSON_CALLBACK');
    return 'https://itunes.apple.com/search?term=' + artistName + '&callback=JSON_CALLBACK';
  }

  self.song = function(artist) {
    $log.log("getData running");
    $http({
      url: self.songUrl(artist),
      dataType: 'jsonp',
      method: 'jsonp'
    }).then(function(response) {
      self.songData = response.data.results;
      $log.log(self.songData);
    }), function(response) {
      $log.log(response);
    }
  }
});
