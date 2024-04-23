const express = require('express');
const router = express.Router();
const bookController = require('../controller/DataBukuController');

// GET all books
router.get('/databuku', bookController.getDataBuku);

// GET a book by ID
router.get('/databuku/:id', bookController.getDataBukuById);

// POST a new book
router.post('/databuku', bookController.createDataBuku);

// PUT update a book by ID
router.patch('/databuku/:id', bookController.updateDataBuku);

// DELETE a book by ID
router.delete('/databuku/:id', bookController.deleteDataBuku);

module.exports = router;
