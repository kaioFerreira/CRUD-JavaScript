
exports.up = function(knex) {
    return knex.schema.createTable('registros', function (table) {
        table.string('id').primary();
        table.string('servidor').notNullable();
        table.string('descricao').notNullable();
        table.string('data').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('registros');
};
