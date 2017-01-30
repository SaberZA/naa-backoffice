const fs = require('fs');
const path = require('path');
const url = require('url');
const walkSync = require('./utils/walkSync.js');
var routeConfigs = [];

var routeBasePath = path.join('src','server','routes');

var allFiles = walkSync(routeBasePath);
allFiles.forEach(function(file) {
    var routePath = path.dirname(file.fullName)
    .replace(routeBasePath,'');
    // var rootPathRoute = false;

    // if(!routePath) {
    //     routePath = '/';
    //     rootPathRoute = true;
    // }

    var fileRoute = path.join(__dirname, 'routes', routePath, file.name);
    
    // if(!rootPathRoute) {
    //     routePath = path.join(routePath, path.basename(file.name,'.js'));
    // }
    // routeInfo.route = routePath
    //     .replace(/\\/g, '/');
    
    var routeInfo = require(fileRoute);
    routeConfigs.push(routeInfo);
});

var external = routeConfigs;

module.exports = external;