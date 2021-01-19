const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Crop = new Schema({
    type: { type: String },
    description: { type: String, default: 'dev lười quá chưa viết gì !' },
    image: { type: String, default: 'dev lười quá chưa update ảnh !' },
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Crop', Crop);
