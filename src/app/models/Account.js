const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Acc = new Schema(
    {
        user: { type: String, required: true },
        password: { type: String, required: true },
        modder: { type: Boolean, default: false },
        avatar: { type: String, default: '/img/1.jpg' },
        display: { type: String, required: true },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('Account', Acc);
