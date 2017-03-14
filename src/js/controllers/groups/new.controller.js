angular
.module('Cook&&Share')
.controller('GroupNewCtrl', GroupNewCtrl);

GroupNewCtrl.$inject = ['$http', 'API', '$state', 'CurrentUserService','User', 'Group'];
function GroupNewCtrl($http, API, $state, CurrentUserService, User, Group){
  const vm = this;

  vm.createGroup = () =>{
    vm.group.admin_id = CurrentUserService.currentUser.id;
    Group
    .save(vm.group)
    .$promise
    .then(response =>{
      $state.go('groupsIndex');
    });
  };
}
