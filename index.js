//
//  Copyright (C) 2015 Seth Holladay.
//
//  This Source Code Form is subject to the terms of the Mozilla Public
//  License, v. 2.0. If a copy of the MPL was not distributed with this
//  file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

'use strict';

var pkg = require('./package.json');

function app(protocol) {
    return app[protocol];
}

// Hypertext Transfer Protocol
app.http   = 80;
// HTTP Secure
app.https  = 443;
// WebSocket
app.ws     = 80;
// WebSocket Secure
app.wss    = 443;
// File Transfer Protocol
app.ftp    = 21;
// Secure Shell
app.ssh    = 22;
// SSH File Transfer Protocol
app.sftp   = 22;
// Remote Framebuffer
app.rfb    = 5900;


module.exports = app;

// Let our users access our package data easily,
// without forcing them to find it with code.
module.exports.pkg     = pkg;
// Let our users access the package version easily.
module.exports.version = pkg.version;
