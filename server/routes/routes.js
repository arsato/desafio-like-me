const express = require("express");
const router = express.Router();
const { getPosts, addPost } = require("../queries");

router.use(express.json());

router.get("/posts", async (req, res) => {
  const post = await getPosts();
  res.json(post);
});

router.post("/posts", async (req, res) => {
  const { titulo, img, descripcion, likes } = req.body;
  await addPost(titulo, img, descripcion, likes);
  res.send(`Post agregado con exito`);
});

module.exports = router;
