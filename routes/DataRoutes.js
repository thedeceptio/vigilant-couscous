const express = require("express");
const DataRouter = express.Router();
const {DataController} = require('../controllers')

DataRouter.route('/compensation_data').get(DataController.GetCompensationData);


module.exports = DataRouter