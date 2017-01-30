'use strict';

const Hapi = require('hapi');
const server = new Hapi.Server();
const routeConfigs = require('./route-loader.js');


server.connection({port: process.env.PORT || 80 });

// /docs
server.register([require('vision'), require('inert'), { register: require('lout') }], function(err) {
});

routeConfigs.forEach(function(route) {
    server.route({
        method: route.method,
        path: route.path,
        handler: route.handler,
        config: route.config
    });
});

server.start((err) => {
    if(err) {
        throw err;
    }

    console.log("Server running at : " + server.info.uri);
});
