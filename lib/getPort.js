/**
 * To find an available socket port.
 * @cite https://gist.github.com/mikeal/1840641
 */

'use strict';

const MODULE_REQUIRE = 1
	/* built-in */
	, net = require('net')
	/* NPM */

	/* in-package */
	;

function getPort(portSeed, callback) {
	var server = net.createServer();
	server.listen(portSeed, function (err) {
		server.once('close', function () {
			callback(portSeed);
		})
		server.close();
	});
	server.on('error', function (err) {
		getPort(portSeed + 1, callback);
	});
}

module.exports = getPort;
