const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');

// Add slug to mongoose
mongoose.plugin(slug);

// Create a new mongoose schema
const Schema = mongoose.Schema;

// Create a new schema is Course
const Course = new Schema(
    {
        name: { type: String, required: true, maxLength: 255 },
        description: { type: String, maxLength: 600 },
        image: { type: String, maxLength: 255 },
        videoId: { type: String, maxLength: 255 },
        slug: { type: String, slug: 'name', unique: true },
    },
    {
        // Auto create createdAt & updatedAt fields
        timestamps: true,
    },
);

// Export model 'Course' to use in other files
module.exports = mongoose.model('Course', Course);
