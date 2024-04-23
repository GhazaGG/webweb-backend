const express = require('express');
const cors = require('cors');
const DataBukuRoute = require('./routes/DataBukuRoute');
const mongoose = require('./config/database');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use(DataBukuRoute);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
