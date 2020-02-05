const db = require('../data/db-config');

function find() {
    return db('users');
};

function findById(id) {
    return db('users').where({ id }).first();
};

function findPosts(id) {
    return db('posts as p')
        .join('users as u', 'u.id', 'p.user_id')
        .select('p.id', 'u.username', 'p.contents')
        .where({ user_id: id })
};

module.exports = {
    find,
    findById,
    findPosts
}