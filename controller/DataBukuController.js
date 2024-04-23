const { where } = require("sequelize");
const DataBuku = require("../models/DataBukuModel")

const getDataBuku = async(req, res) => {
    try {
        const response = await DataBuku.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message)
    };
};

const getDataBukuById = async(req, res) => {
    try {
        const response = await DataBuku.findOne({
            where: {
                id : req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message)
    };
};


const createDataBuku = async(req, res) => {
    try {
        await DataBuku.create(req.body);

        res.status(201).json({msg:"data buku telah dibuat."});
    } catch (error) {
        console.log(error.message)
    };
};

const UpdateDataBuku = async(req, res) => {
    try {
        await DataBuku.update(req.body,{
            where:{
                id: req.params.id
            }
        });

        res.status(200).json({msg:"data buku telah diubah."});
    } catch (error) {
        console.log(error.message)
    };
};

const DeleteDataBuku = async(req, res) => {
    try {
        await DataBuku.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({msg:"Data buku telah dihapus."});
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};


module.exports = {getDataBuku, getDataBukuById, createDataBuku, UpdateDataBuku, DeleteDataBuku};