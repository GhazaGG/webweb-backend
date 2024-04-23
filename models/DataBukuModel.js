const mongoose = require('../config/database');

const bookSchema = new mongoose.Schema({
    kode_buku: String,
    isbn: String,
    judul_buku: String,
    pengarang: String,
    sekilas_isi: String,
    tanggal_masuk: Date,
    stok: Number,
    foto: String
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
