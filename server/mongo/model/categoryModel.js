const mongoose = require('mongoose')
const CategoryDataSchema = require('./../schema/categorySchema')


mongoose.model('CategoryDataSchema', CategoryDataSchema)
module.exports = mongoose.model('CategoryDataSchema')