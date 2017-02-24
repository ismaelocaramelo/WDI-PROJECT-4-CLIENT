angular
.module('Cook&&Share')
.controller('GroupShowCtrl', GroupShowCtrl);

GroupShowCtrl.$inject = ['Group', '$stateParams', '$http', 'API'];
function GroupShowCtrl(Group, $stateParams, $http, API){
  const vm = this;

  vm.groups = Group.get($stateParams);

  vm.setIconProtected = (group) => {
    return (group.protected) ? 'lock_outline' : 'lock_open';
  }


}
