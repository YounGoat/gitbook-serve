#!/usr/bin/env node

'use strict';

const MODULE_REQUIRE = 1
    /* built-in */
    , child_process = require('child_process')
    , fs = require('fs')
    , path = require('path')

    /* NPM */
    
    /* in-package */
    , getPort = require('./lib/getPort')
    ;

let items = fs.readdirSync(process.cwd());
let readmeFound = false;
for (var i = 0; i < items.length; i++) {
    if (items[i].toLowerCase() == 'readme.md') {
        readmeFound = true;
        break;
    }
}
if (!readmeFound) {
    console.log('README.md not found.');
    console.log('Are you sure this is a gitbook project?');
}
else {
    getPort(4000, (port) => {
        getPort(35729, (lrport) => {
            let options = { stdio: [ null, process.stdout, process.stderr ] };
            child_process.spawn('gitbook', [ 'serve', '--port', port, '--lrport', lrport ], options);
        });
    });
}