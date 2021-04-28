
exports.up = function(knex) {
  return knex('technologies').insert([
    { name: 'React', created_at: new Date(), updated_at: new Date()},
    { name: 'React Native', created_at: new Date(), updated_at: new Date()},
    { name: 'Flutter', created_at: new Date(), updated_at: new Date()},
    { name: 'Next.js', created_at: new Date(), updated_at: new Date()},
    { name: 'Anglular', created_at: new Date(), updated_at: new Date()}
  ]);
};

exports.down = function(knex) {
  return knex('technologies').del();
};
