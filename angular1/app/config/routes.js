angular.module('primeiraApp').config([
    'stateProvider',
    '$urlRouterProvider',
    function($stateProvider,$urlRouterProvider){
        $stateProvider.state('dashboard',{
            url:"/dashboard",
            templateUrl:"dashboard/dashboard.html"
        }).state('billingCycle',{
            url:"/billingCyles",
            templateUrl:"billingCycles/tabs.html"
        })

        $urlRouterProvider.otherwise('/dashboard')
    }
])