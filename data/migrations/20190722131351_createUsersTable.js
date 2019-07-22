
exports.up = function (knex) {
    return knex.schema.createTable('users', table => {
        table.increments();
        table.text('username', 128)
            .unique()
            .notNullable();
        table.text('password', 128)
            .notNullable();
    })
};

exports.down = function (knex) {

};