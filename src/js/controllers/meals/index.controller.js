angular
.module('Cook&&Share')
.controller('MealIndexCtrl', MealIndexCtrl);

MealIndexCtrl.$inject = ['Meal', 'CurrentUserService'];
function MealIndexCtrl(Meal, CurrentUserService){
  const vm = this;

  vm.meals = Meal.query();
  console.log(CurrentUserService.currentUser);
  vm.getUserId = function(){
    return CurrentUserService.currentUser.id;
  };
}
