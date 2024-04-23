const Sequelize = require('sequelize');
const db = require("../config/database");


// kode_buku, isbn, judul_buku, pengarang, sekilas_isi, tanggal_masuk, stok, foto
const DataBuku = db.define('data_buku', {
    kode_buku: {
        type: Sequelize.STRING,
        unique: true
    },
    isbn: {
        type: Sequelize.STRING,
        unique: true
    },
    judul_buku: {
        type: Sequelize.STRING,
    },
    pengarang: {
        type: Sequelize.STRING,
    },
    sekilas_isi: {
        type: Sequelize.STRING,
    },
    tanggal_masuk: {
        type: Sequelize.DATE,
    },
    stok: {
        type: Sequelize.INTEGER,
    },
    foto: {
      type: Sequelize.STRING // Anda bisa menyimpan path foto atau url gambar
    },
    },{
        tableName: 'data_buku' // Mengatur nama tabel menjadi 'data_buku'
    });

db.sync()
    .then(() => {
    console.log('Tabel "data_buku" telah dibuat.');
    })
    .catch(err => {
    console.error('Gagal membuat tabel:', err);
    });

module.exports = DataBuku;
