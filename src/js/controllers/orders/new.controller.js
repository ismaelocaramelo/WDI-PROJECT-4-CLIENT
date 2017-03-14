angular
.module('Cook&&Share')
.controller('OrderRequestNewCtrl', OrderRequestNewCtrl);

OrderRequestNewCtrl.$inject = ['Meal', '$stateParams', 'Order', '$state'];
function OrderRequestNewCtrl(Meal, $stateParams, Order, $state){
  const vm = this;

  console.log('LOADED');

  vm.create = () => {
    $('#orderModal').modal('close');
    vm.order.meal_id = $stateParams.id;
    Order
    .save(vm.order)
    .$promise
    .then(response => {
      $('#orderModal').modal('close');
      $state.go('mealIndex');
    }, err => {
      console.error(err);
    });
  };


  vm.setMeal = (meal) => {
    Meal
    .get({id: meal.id})
    .$promise
    .then(data => {
      vm.meal = data;
    });
  };

}
