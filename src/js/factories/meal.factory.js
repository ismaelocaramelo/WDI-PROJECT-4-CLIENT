angular
  .module('Cook&&Share')
  .factory('Meal', mealFactory);

mealFactory.$inject = ['API', '$resource'];
function mealFactory(API, $resource){
  return $resource(`${API}/meals/:id`, { id: '@_id'}, {
    'update': { method: 'PUT'}
  });
}
