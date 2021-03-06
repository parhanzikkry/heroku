var sequelize = require(__dirname + '/../dbconnection'),
	Pengelolaan = sequelize.import(__dirname + '/../models/pengelolaan.model');

Pengelolaan
	.bulkCreate([{
		nama_pengelolaan: 'Pertanian basah',
		deskripsi_pengelolaan: 'Lahan dapat dimanfaatkan untuk bidang pertanian'
	},{
		nama_pengelolaan: 'Pertanian kering',
		deskripsi_pengelolaan: 'Lahan dapat dimanfaatkan menjadi ruang terbuka hijau atau hutan kota'
	},{
		nama_pengelolaan: 'Agroforestry',
		deskripsi_pengelolaan: 'Lahan dapat dimanfaatkan untuk bidang perbaduan antara hutan dan pertanian'
	},{
		nama_pengelolaan: 'Perternakan',
		deskripsi_pengelolaan: 'Lahan dapat dijadikan lahan perternakan'
	},{
		nama_pengelolaan: 'Perikanan',
		deskripsi_pengelolaan: 'Lahan dapat dijadikan lahan tambak atau budidaya perikanan'
	},{
		nama_pengelolaan: 'Kehutanan',
		deskripsi_pengelolaan: 'Lahan dapat dijadikan lahan perkebunan'
	}])