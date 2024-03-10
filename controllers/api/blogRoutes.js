const router = require("express").Router();
const { Blog, User } = require("../../models");

router.post("/", async (req, res) => {
  try {
    console.log('in blog api');
    const addBlog = await Blog.create({
      ...req.body,
    });
    res.status(200).json(addBlog);
  } catch (err) {
    res.status(500).json({ message: "Blog creation failed", error: err });
  }
});

router.post('/comment', async (req, res) => {
  try {
      // console.log(req.session.user_id);
      console.log('in comment api');
      const addComment = await Comment.create({
          ...req.body,
          user_id: req.session.user_id,
          blog_id: req.body.blog_id,
      });
      res.status(200).json(addComment);
  } catch (error) {
       res.status(500).json(error);
       console.log(error);
  }
});


module.exports = router;
