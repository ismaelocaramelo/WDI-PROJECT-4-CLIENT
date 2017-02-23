angular
.module('Cook&&Share')
.controller('groupsIndexCtrl', groupsIndexCtrl);

groupsIndexCtrl.$inject = ['Group', 'CurrentUserService'];
function groupsIndexCtrl(Group, CurrentUserService){
  const vm = this;
  vm.groups = Group.query();
  console.log(vm.groups);
  vm.joinGroup = (group) =>{
    Group
    .addMember({ group_id: group.id}, {})
    .$promise
    .then(response =>{
      console.log('success', response);
      vm.groups = Group.query();
    });
  };
  // console.log(CurrentUserService.currentUser.id);

  vm.isMember = (group, user) => {
    console.log(group, 'grup');
    console.log(user, 'user');
    if(group.users && group.users.length > 0){
      return group.users.map((obj) => obj.id).indexOf(user.id) !== -1;
    }
    return false;
  };


}
