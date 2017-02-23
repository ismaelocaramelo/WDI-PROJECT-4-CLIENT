angular
  .module('Cook&&Share')
  .factory('User', userFactory);

userFactory.$inject = ['API', '$resource'];
function userFactory(API, $resource){
  return $resource(`${API}/users/:id`, { id: '@_id'}, {
    'query': { method: 'GET', isArray: true },
    'register': { method: 'POST', url: `${API}/register` },
    'login': { method: 'POST', url: `${API}/login` },
    'update': { method: 'PUT'},
    'addToGroup': { method: 'PUT', url: `${API}/users/add_to_group/:group_id`}
  });
}
