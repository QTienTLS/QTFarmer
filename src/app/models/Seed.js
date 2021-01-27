const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);
const Seed = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        type: { type: String },

        description: { type: String, default: 'admin lười quá chưa viết gì !' },
        image: { type: String, default: 'img/lua.jpg' },
        source: { type: String },
        tips: { type: String },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('Seed', Seed);
