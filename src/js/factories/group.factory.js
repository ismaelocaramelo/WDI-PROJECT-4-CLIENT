angular
  .module('Cook&&Share')
  .factory('Group', groupFactory);

groupFactory.$inject = ['API', '$resource'];
function groupFactory(API, $resource){
  return $resource(`${API}/groups/:id`, { id: '@_id'}, {
    query: { method: 'GET', isArray: true },
    update: { method: 'PUT'},
    addMember: { method: 'PUT', url: `${API}/groups/add_member/:group_id`}
  });
}
