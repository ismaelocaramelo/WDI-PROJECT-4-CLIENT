angular
.module('Cook&&Share')
.controller('UserShowCtrl', UserShowCtrl);

UserShowCtrl.$inject = ['User', '$stateParams', '$state', 'CurrentUserService'];
function UserShowCtrl(User, $stateParams, $state, CurrentUserService){
  const vm = this;

  vm.user = User.get($stateParams);
  console.log(vm.user);
  vm.delete = function(user){
    User
    .delete(user.id)
    .$promise
    .then(() => {
      CurrentUserService.removeUser();
      $state.go('/');
    });
  };

  // If the person logged in has the same id as the user profile they can edit/delete said profile, otherwise they can not.
  vm.isCurrentUser = function(){
    return CurrentUserService.currentUser._id === $stateParams.id;
  };
}
