const express = require('express')
const {getDataBuku, getDataBukuById, createDataBuku,UpdateDataBuku,DeleteDataBuku} = require("../controller/DataBukuController")


const router = express.Router();

router.get('/databuku', getDataBuku);
router.get('/databuku/:id', getDataBukuById);
router.post('/databuku', createDataBuku);
router.patch('/databuku/:id', UpdateDataBuku);
router.delete('/databuku/:id', DeleteDataBuku);

module.exports = router;