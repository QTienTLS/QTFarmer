const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);
const Crop = new Schema(
    {
        type: { type: String, required: true },
        description: { type: String, default: 'admin lười quá chưa viết gì !' },
        image: { type: String, default: 'admin lười quá chưa update ảnh !' },
        slug: { type: String, slug: 'type', unique: true },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('Crop', Crop);
