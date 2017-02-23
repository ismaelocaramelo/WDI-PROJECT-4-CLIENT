angular
  .module('Cook&&Share')
  .factory('Order', orderFactory);

orderFactory.$inject = ['API', '$resource'];
function orderFactory(API, $resource){
  return $resource(`${API}/order_requests/:id`, { id: '@_id'}, {
    'update': { method: 'PUT'}
  });
}
