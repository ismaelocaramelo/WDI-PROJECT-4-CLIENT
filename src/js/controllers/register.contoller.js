angular
.module('Cook&&Share')
.controller('RegisterCtrl', RegisterCtrl);

RegisterCtrl.$inject = ['User', 'CurrentUserService', '$state', '$http'];
function RegisterCtrl(User, CurrentUserService, $state, $http){
  const vm = this;

  vm.register = () => {
    User.register(vm.user)
    .$promise
    .then(() => {
      $('#registerModal').modal('close');
      CurrentUserService.getUser();
      $state.go('usersIndex');
    }, err => {
      console.log(err);
    });
  };
}
