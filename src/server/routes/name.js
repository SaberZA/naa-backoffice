module.exports = {
    method: 'GET',
    path: '/{name}',
    handler: function(request, reply) {
        reply('Hello, '+ encodeURIComponent(request.params.name)+'!')
    },
    config: {
        description: 'Say Hello!',
        notes: 'The user parameter defaults to \'strange\' if unspecified',
        tags: ['api','greeting']
    }
}