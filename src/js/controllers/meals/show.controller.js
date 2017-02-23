angular
.module('Cook&&Share')
.controller('MealShowCtrl', MealShowCtrl);

MealShowCtrl.$inject = ['Meal', '$stateParams', 'Order'];
function MealShowCtrl(Meal, $stateParams, Order){
  const vm = this;

  Meal
  .get($stateParams)
  .$promise
  .then(data => {
    vm.meal = data;
    vm.meal.accepted_requests = vm.meal.order_requests.filter(order => {return order.status === 'accepted'});
    vm.meal.pending_requests = vm.meal.order_requests.filter(order => {return order.status === 'pending'});
  });

  vm.changeStatus = (request, status)=>{
    let whichArray = request.status;
    let newStatus = status
    request.status = status;
    Order
    .update({id: request.id}, request)
    .$promise
    .then(response =>{
      if (whichArray === 'pending'){
        console.log('1', vm.meal.pending_requests);
        vm.meal.pending_requests.splice(vm.meal.pending_requests.indexOf(request), 1)
        if (newStatus === 'accepted'){
          vm.meal.accepted_requests.push(response);
        }
      } else if (whichArray === 'accepted') {
        console.log('2', vm.meal.accepted_requests);
        vm.meal.accepted_requests.splice(vm.meal.accepted_requests.indexOf(request), 1)
      }
    });
  };
}
