'use strict';

function defaultPort(protocol) {

    if (typeof protocol !== 'number') {

        if (Object.prototype.hasOwnProperty.call(defaultPort, protocol)) {
            return defaultPort[protocol];
        }

        throw new Error('Unknown protocol.');
    }

    for (const key in defaultPort) {
        if (Object.prototype.hasOwnProperty.call(defaultPort, key)) {
            if (defaultPort[key] === protocol) {
                return key;
            }
        }
    }

    throw new Error('Unknown port number.');
}

// Hypertext Transfer Protocol
defaultPort.http  = 80;
// HTTP Secure
defaultPort.https = 443;
// WebSocket
defaultPort.ws    = 80;
// WebSocket Secure
defaultPort.wss   = 443;
// File Transfer Protocol
defaultPort.ftp   = 21;
// Secure Shell
defaultPort.ssh   = 22;
// SSH File Transfer Protocol
defaultPort.sftp  = 22;
// Remote Framebuffer
defaultPort.rfb   = 5900;


module.exports = defaultPort;
