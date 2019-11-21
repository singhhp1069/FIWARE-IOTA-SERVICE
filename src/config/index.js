export default {
	env: process.env.NODE_ENV || 'development',
	server: {
		port: process.env.PORT || 4000,
		provider: process.env.IOTA_PROVIDER || 'https://nodes.devnet.thetangle.org:443',
		tcpProvider: process.env.IOTA_ZMQ_PROVIDER || 'tcp://zmq.devnet.iota.org:5556'
	},
	mqtt: {
		port: process.env.MQTT_SERVER_PORT || 1883
	}
};
