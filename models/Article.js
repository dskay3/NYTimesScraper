// NPM dependencies
const mongoose = require("mongoose");

// Create Schema Class
const Schema = mongoose.Schema;

// Create Article Schema
const ArticleSchema = new Schema({
  // Article title
  title: {
    type: String,
    required: true
  },
  
  // Article url
  url: {
    type: String,
    required: true
  },

  // Scrape time
  date: {
    type: Date
  },

  save_date: {
    type: Date
  }

});

// Create Article model with ArticleSchema
const Article = mongoose.model("Article", ArticleSchema);

// Exports Article Model
module.exports = Article;