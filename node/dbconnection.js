var Sequelize = require('sequelize');

module.exports = new Sequelize('de0ao4hl8qqkg4'/*DB name*/, 'jozqkhiztosydl'/*DB username*/, 'f7e00a18f18c0827876cc0e79221cfa454dafd90e41d8a8f1d3425fe8757eb9a'/*DB password*/, {
	host: 'ec2-54-235-244-185.compute-1.amazonaws.com',
	dialect: 'postgres'/*type of DBMS*/,

	pool: {
		/*Set max requesting to database*/
		max: 5,
		min: 0,
		idle: 3600
	},
	/*Set timezone to DB*/
	timezone: '+07:00'
});