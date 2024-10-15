// Description: Site controller for handling site pages.
// Includes home page, search page, contact page, etc.
class SiteController {
  // [GET] /
  index(req, res) {
    res.render("home");
  }

  // [GET] /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
