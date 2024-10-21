const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');
const mongooseDelete = require('mongoose-delete');

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

// Custom query helpers
Course.query.sortable = function (req) {
    if (req.query.hasOwnProperty('_sort')) {
        const isValidType = ['asc', 'desc'].includes(req.query.type);
        return this.sort({
            [req.query.column]: isValidType ? req.query.type : 'desc',
        });
    }
    return this;
};

// Add slug to mongoose
mongoose.plugin(slug);

// Add mongoose-delete to Course
Course.plugin(mongooseDelete, {
    deletedAt: true, // Add a time deletedAt field to Course
    overrideMethods: 'all',
});

// Export model 'Course' to use in other files
module.exports = mongoose.model('Course', Course);
