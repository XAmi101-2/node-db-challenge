
exports.seed = function(knex) {
  return knex('Tasks').truncate()
  .then(function () {
    return knex('Tasks').insert([
      {name: 'run 1 min and walk mins ', notes: 'week 1 Couch to 5k', completed: false, project_id: 1},
      {name: 'Buy music stand', completed: false, project_id: 3},
      {name: 'Cancel tue piano lesson', completed: true, project_id: 3},
      {name: 'Buy extra books', completed: false, project_id: 2},
      
    ]);
  });
};