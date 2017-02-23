angular
.module('Cook&&Share')
.controller('OrderRequestNewCtrl', OrderRequestNewCtrl);

OrderRequestNewCtrl.$inject = ['Meal', '$stateParams', 'Order', '$state'];
function OrderRequestNewCtrl(Meal, $stateParams, Order, $state){
  const vm = this;

  Meal
  .get($stateParams)
  .$promise
  .then(data => {
    vm.meal = data;
  });



  vm.create = () => {
    vm.order.meal_id = $stateParams.id;
    Order
    .save(vm.order)
    .$promise
    .then(response => {
      $state.go('mealIndex');
    }, err => {
      console.error(err);
    });
  };


}
