var knex = require('knex')({
    client: 'pg',
    connection: 'postgres://pkhptmuilwplkm:06609d7a37d778a910e7e41a11d9ea3645e5c1a2eb39aecd7ad28c09db162ef8@ec2-54-247-99-159.eu-west-1.compute.amazonaws.com:5432/d7jqvvb2453gp2?ssl=true'   
});

module.exports = {
    method: 'GET',
    path: '/db/stockItem',
    handler: function(request, reply) {        

        var bookshelf = require('bookshelf')(knex);

        var StockItem = bookshelf.Model.extend({
            tableName: 'StockItem'
        });
        
        StockItem.fetchAll().then(function(stockItems) {            
            reply(stockItems);
        });
    },
    config: {
        description: 'db - Select all StockItem records',
        tags: ['api','db']
    }
}