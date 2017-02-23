angular
  .module('Cook&&Share')
  .factory('Notification', notificationFactory);

notificationFactory.$inject = ['API', '$resource'];
function notificationFactory(API, $resource){
  return $resource(`${API}/notifications/:id`, { id: '@_id'}, {
    'update': { method: 'PUT'}
  });
}
