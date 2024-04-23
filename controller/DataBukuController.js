const Book = require('../models/DataBukuModel');

const getDataBuku = async (req, res) => {
    try {
        const response = await Book.find();
        res.status(200).json(response);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const getDataBukuById = async (req, res) => {
    try {
        const response = await Book.findById(req.params.id);
        if (!response) {
            return res.status(404).json({ error: "Data not found" });
        }
        res.status(200).json(response);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const createDataBuku = async (req, res) => {
    try {
        const newBook = new Book(req.body);
        await newBook.save();
        res.status(201).json({ msg: "Data buku telah dibuat.", data: newBook });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const updateDataBuku = async (req, res) => {
    try {
        const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedBook) {
            return res.status(404).json({ error: "Data not found" });
        }
        res.status(200).json({ msg: "Data buku telah diubah.", data: updatedBook });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const deleteDataBuku = async (req, res) => {
    try {
        const deletedBook = await Book.findByIdAndDelete(req.params.id);
        if (!deletedBook) {
            return res.status(404).json({ error: "Data not found" });
        }
        res.status(200).json({ msg: "Data buku telah dihapus.", data: deletedBook });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { getDataBuku, getDataBukuById, createDataBuku, updateDataBuku, deleteDataBuku };
