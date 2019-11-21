'use strict';

var _mosca = require('mosca');

var mosca = _interopRequireWildcard(_mosca);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

var _fiwareIota = require('fiware-iota');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

const server = new mosca.Server(_config2.default.mqtt);

server.on('clientConnected', client => {
    console.log('client is connect with id' + client.id);
});

server.on('published', (packet, client) => {
    // const data = packet.payload.data;
    // const mode = packet.payload.mode;
    // const secret = packet.payload.secret;
    // createMamTransaction(data, {mode : mode, secret : secret});
    server.subscribe('IOTA', res => {
        console.log('packet is: ' + JSON.stringify(packet.payload.toString()));
        console.log('res is: ' + JSON.stringify(res));
    }, status => {
        console.log('status is: ' + JSON.stringify(status));
    });
});

server.on('ready', () => {
    //init configuration can be put here
    console.log('server is ready and listning on : ' + _config2.default.mqtt.port);
});