angular
.module('Cook&&Share')
.controller('GroupNewCtrl', GroupNewCtrl);

GroupNewCtrl.$inject = ['$http', 'API', '$state', 'CurrentUserService','User', 'Group'];
function GroupNewCtrl($http, API, $state, CurrentUserService, User, Group){
  const vm = this;

  vm.createGroup = () =>{
    vm.group.admin_id = CurrentUserService.currentUser.id;
    vm.group.icon = 'No apply';
    console.log('createGroup');
    Group
    .save(vm.group)
    .$promise
    .then(response =>{
      $state.go('groupsIndex')
    });
  };
}
