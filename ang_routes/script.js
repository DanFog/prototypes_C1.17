// Create the route module and name it routeApp
var app = angular.module('routeApp', ['ngRoute']);
// Config the routes
app.config(function($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl: 'pages/home.html',
        controller: 'routeCtrl'
    }).when('/about', {
        templateUrl: 'pages/about.html',
        controller: 'aboutCtrl'
    }).when('/contact', {
        templateUrl: 'pages/contact.html',
        controller: 'contactCtrl'
    }).otherwise({
        redirectTo: '/'
    })
});
         // route for the home page

        // route for the about page

        // route for the contact page


// Create the controllers for the different pages below

// home page controller
// Create a message to display in the view
app.controller('routeCtrl', function($scope) {
    $scope.message = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum corporis eaque veniam repellendus, velit odit veritatis blanditiis voluptatibus saepe doloremque porro facere ut dicta odio sapiente magnam? Delectus sequi, rem.';
});

// about page controller
// Create a message to display in the view
app.controller('aboutCtrl', function($scope) {
    $scope.message = 'About';
});
// contact page controller
    // Create a message to display in the view
app.controller('contactCtrl', function($scope) {
    $scope.message = 'Contact Us';
});