// Dependencies
import axios from "axios";

// API Key
const APIKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

export default {
  // Get all articles
  getArticles: function(term, startDate, endDate) {
    return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json", {
      params: {
        "api-key": APIKey,
        "q": term,
        "begin_date": startDate,
        "end_date": endDate
      }
    })
      .then(function(results) {
        return results.data.response;
      })
  },

  // Post saved articles
  saveArticles: function(title, date, url, save_date) {
    const newArticle = {
      title,
      date,
      url,
      save_date
    };

    return (
      axios.post("/api/articles/saved", newArticle)
        .then(results => {
          console.log(results);
          return results._id
        })
    );
  },

  // Get saved articles
  getSavedArticles: function() {
    return axios.get("/api/articles/");
  },

  // Delete saved articles
  deleteArticles: function(id) {
    return axios.delete("/api/articles/saved/" + id);
  }
}