const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a new schema is Course
const Course = new Schema({
    name: { type: String, maxLength: 255 },
    description: { type: String, maxLength: 600 },
    image: { type: String, maxLength: 255 },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

// Export model 'Course' to use in other files
module.exports = mongoose.model('Course', Course);
