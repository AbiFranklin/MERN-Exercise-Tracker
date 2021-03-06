const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Exercise table username, description, duration, date
const exerciseSchema = new Schema({
    username: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    date: { type: Date, required: true },
    pic: { type: String, required: true }
}, {
    timestamps: true
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;