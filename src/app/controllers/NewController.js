class NewController {
  // [GET] /news
  index(req, res) {
    res.render("news");
  }

  // [GET] /news/:slug
  show(req, res) {
    res.send("NEWS DETAIL");
  }

  // [GET] /news/:slug/xyz
  showOne(req, res) {
    const slug = req.params.slug;
    res.send(`NEWS DETAIL for ${slug} with XYZ`);
  }
}

module.exports = new NewController();
