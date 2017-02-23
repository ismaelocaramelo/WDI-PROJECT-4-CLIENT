angular
.module('Cook&&Share')
.controller('GroupShowCtrl', GroupShowCtrl);

GroupShowCtrl.$inject = ['Group', '$stateParams', '$http', 'API'];
function GroupShowCtrl(Group, $stateParams, $http, API){
  const vm = this;

  vm.groups = Group.get($stateParams);

  console.log($stateParams);

  vm.joinGroup = (group) =>{
    Group
    .addMember({ group_id: group.id}, {})
    .$promise
    .then(response =>{
      console.log('success', response);
    });
  };
}
