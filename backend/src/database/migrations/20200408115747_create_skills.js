exports.up = function(knex) {
    return knex.schema.createTable('skills', function (table) {
        table.increments();

        table.string('type').notNullable();
        table.string('period').notNullable();
        table.string('title').notNullable();
        table.string('description').notNullable();  
        
        table.string('user_id').notNullable();
        table.foreign('user_id').references('id').inTable('users');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('skills');
};
