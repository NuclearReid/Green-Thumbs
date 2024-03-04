const router = require("express").Router();
const { Blog, User } = require("../../models");

router.post("/", async (req, res) => {
  try {
    const addBlog = await Blog.create({
      ...req.body,
    });
    res.status(200).json(addBlog);
  } catch (err) {
    res.status(500).json({ message: "Blog creation failed", error: err });
  }
});


module.exports = router;
