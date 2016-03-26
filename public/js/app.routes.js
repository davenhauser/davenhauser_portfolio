(function(){
    'use strict';

    angular
    .module('app')
    .config(appRoutes);

    appRoutes.$inject = ["$urlRouterProvider", "$stateProvider"];

    function appRoutes($urlRouterProvider, $stateProvider){
      //Define routes/states on the state provider

      $stateProvider
      .state("home", {
        url:            "/",
        templateUrl:    "/js/app/home/home.html",
        controller:     "HomeController",
        controllerAs:   "vm",
      });

      $urlRouterProvider.otherwise("/");
    }
})();
