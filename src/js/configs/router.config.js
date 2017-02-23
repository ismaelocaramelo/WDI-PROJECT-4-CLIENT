angular
.module('Cook&&Share')
.config(Router);

Router.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
function Router($stateProvider, $locationProvider, $urlRouterProvider){
  $locationProvider.html5Mode(true);

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: '/js/views/home.html'
  })
  .state('register', {
    url: '/register',
    templateUrl: '/js/views/register.html',
    controller: 'RegisterCtrl',
    controllerAs: 'register'
  })
  .state('login', {
    url: '/login',
    templateUrl: '/js/views/login.html',
    controller: 'LoginCtrl',
    controllerAs: 'login'
  })
  .state('userIndex', {
    url: '/users',
    templateUrl: '/js/views/users/index.html',
    controller: 'UsersIndexCtrl',
    controllerAs: 'userIndex'
  })
  .state('userShow', {
    url: '/users/:id',
    templateUrl: '/js/views/users/show.html',
    controller: 'UserShowCtrl',
    controllerAs: 'userShow'
  })
  .state('orderNew', {
    url: '/meals/:id/orders/new',
    templateUrl: '/js/views/orders/new.html',
    controller: 'OrderRequestNewCtrl',
    controllerAs: 'OrderRequestNew'
  })
  .state('orderShow', {
    url: '/order_requests/:id',
    templateUrl: '/js/views/orders/show.html',
    controller: 'OrderRequestShowCtrl',
    controllerAs: 'OrderRequestShow'
  })
  .state('mealIndex', {
    url: '/meals',
    templateUrl: '/js/views/meals/index.html',
    controller: 'MealIndexCtrl',
    controllerAs: 'MealIndex'
  })
  .state('mealNew', {
    url: '/meals/new',
    templateUrl: '/js/views/meals/new.html',
    controller: 'MealNewCtrl',
    controllerAs: 'MealNew'
  })
  .state('mealShow', {
    url: '/meals/:id',
    templateUrl: '/js/views/meals/show.html',
    controller: 'MealShowCtrl',
    controllerAs: 'MealShow'
  })
  .state('groupNew', {
    url: '/groups/new',
    templateUrl: '/js/views/groups/new.html',
    controller: 'GroupNewCtrl',
    controllerAs: 'GroupNew'
  })
  .state('groupsIndex', {
    url: '/groups',
    templateUrl: '/js/views/groups/index.html',
    controller: 'groupsIndexCtrl',
    controllerAs: 'groupIndex'
  })
  .state('groupShow', {
    url: '/groups/:id',
    templateUrl: '/js/views/groups/show.html',
    controller: 'GroupShowCtrl',
    controllerAs: 'GroupShow'
  });

  // .state('notificationShow', {
  //   url: '/notificationsShow/:id',
  //   templateUrl: '/js/views/notifications/show.html',
  //   controller: 'notificationShowCtrl',
  //   controllerAs: 'notificationShow'
  // })
  // .state('notificationCreate', {
  //   url: '/notificationsCreate',
  //   templateUrl: '/js/views/notifications/create.html',
  //   controller: 'notificationsCreate',
  //   controllerAs: 'notificationsCreate'
  // })
  $urlRouterProvider.otherwise('/');
}
