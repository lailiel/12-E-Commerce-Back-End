const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", (req, res) => {
  Tag.findAll({
    include: [{ model: Product }],
  }).then((tagData) => {
    res.json(tagData);
  });
  // find all tags--------
  // be sure to include its associated Product data----
});

router.get("/:id", (req, res) => {
  Tag.findByPk(req.params.id, {
    // where: {
    //   id: req.params.id},
    include: [{ model: Product }],
  }).then((tagData) => {
    res.json(tagData);
  });
  // find a single tag by its `id`-----
  // be sure to include its associated Product data-----
});

router.post("/", (req, res) => {
  Tag.create(req.body)
    .then((newTag) => {
      res.json(newTag);
    })
    .catch((err) => {
      res.json(err);
    });
  // create a new tag-----
});

router.put("/:id", (req, res) => {
  Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((updateID) => {
      if(!updateID) {
        res.status(404).json({message: 'No Tag with this ID'})
        return;
      }
      res.json(updateID);
    })
    .catch((err) => {
      res.json(err);
    });
  // update a tag's name by its `id` value-----
});

router.delete("/:id", (req, res) => {
  Tag.destroy(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((delTag) => {
      if (!delTag) {
        res.status(404).json({message: 'No Tag with this ID'})
      }
      res.json(delTag);
    })
    .catch((err) => {
      res.json(err);
    });
  // delete on tag by its `id` value-----
});

module.exports = router;
