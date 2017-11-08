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

if (process.argv[2] == 'help') {
    console.log(fs.readFileSync(path.join(__dirname, 'help.txt'), 'utf8'));
    process.exit(0);
}

if (1) {
    let ret = child_process.spawnSync('gitbook', [ '--version' ]);
    if (ret.error) {
        console.error('Command "gitbook" not found.');
        console.info('Please install NPM package "gitbook-cli" globally.');
        process.exit(1);
    }
}

let items = fs.readdirSync(process.cwd());
let readmeFound = false;
for (var i = 0; i < items.length; i++) {
    if (items[i].toLowerCase() == 'readme.md') {
        readmeFound = true;
        break;
    }
}
if (!readmeFound) {
    console.error('README.md not found.');
    console.info('Are you sure this is a gitbook project?');
}
else {
    getPort(4000, (port) => {
        getPort(35729, (lrport) => {
            let options = { stdio: [ null, process.stdout, process.stderr ] };
            child_process.spawn('gitbook', [ 'serve', '--port', port, '--lrport', lrport ], options);
        });
    });
}