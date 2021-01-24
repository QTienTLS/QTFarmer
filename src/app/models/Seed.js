const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);
const Seed = new Schema({
    name: {
        type: String,
        required: true,
    },
    type: { type: String, required: true },

    description: { type: String, default: 'admin lười quá chưa viết gì !' },
    image: { type: String, default: 'img/lua.jpg' },
    source: { type: String },
    tips: { type: String },
});

module.exports = mongoose.model('Seed', Seed);
