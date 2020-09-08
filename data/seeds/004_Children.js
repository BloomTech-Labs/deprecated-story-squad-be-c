const faker = require('faker');
const bc = require('bcryptjs');

const children = [...new Array(10)].map((i, idx) => ({
  Name: `${faker.name.firstName()}`,
  PIN: `${bc.hashSync(`000${idx}`, process.env.BCRYPT_ROUNDS || 6)}`,
  ParentID: `${Math.floor((idx + 2) / 2)}`,
  AvatarID: `${faker.random.number({ min: 1, max: 8 })}`,
}));

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('Children').then(function () {
    // Inserts seed entries
    return knex('Children').insert(children);
  });
};
