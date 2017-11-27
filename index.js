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

if (1) {
    let items = fs.readdirSync(process.cwd());
    let bookJsonFound = false;
    let readmeFound = false;
    for (var i = 0; i < items.length; i++) {
        let name = items[i].toLowerCase();
        readmeFound || (readmeFound = name == 'readme.md');
        bookJsonFound || (bookJsonFound = name == 'book.json');
    }

    if (!readmeFound) {
        console.error('README.md not found.');
        console.info('Are you sure this is a gitbook project?');
        process.exit(1);
    }

    if (bookJsonFound) {
        let bookJson = require(path.join(process.cwd(), 'book.json'));
        bookJson.plugins.forEach((name) => {
            let moduleName = `gitbook-plugin-${name}`;
            let modulePath = path.join(process.cwd(), 'node_modules', moduleName);
            if (!fs.existsSync(modulePath)) {
                console.log(`install ${moduleName} ...`);
                child_process.spawnSync('npm', [ 'install', moduleName ]);
            }
        });
    }
}

getPort(4000, (port) => {
    getPort(35729, (lrport) => {
        let options = { stdio: [ null, process.stdout, process.stderr ] };
        child_process.spawn('gitbook', [ 'serve', '--port', port, '--lrport', lrport ], options);
    });
});