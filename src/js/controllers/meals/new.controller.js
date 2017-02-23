angular
.module('Cook&&Share')
.controller('MealNewCtrl', MealNewCtrl);

MealNewCtrl.$inject = ['Meal', '$state'];
function MealNewCtrl(Meal, $state){
  const vm = this;

  vm.create = (meal) => {
    Meal.save(meal).$promise
    .then(data => {
      $state.go('mealIndex');
    }, err => {
      console.error(err);
    });
  };


  vm.date = new Date();
  // vm.maxdate = new Date(date.getFullYear(), date.setMonth()+1, dat.getDate());

}
