const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  Category.findAll({
    include: [{ model: Product}]
  }).then((catData) =>{
    res.json(catData)
  })
  // find all categories-----------
  // be sure to include its associated Products-----
 
});

router.get('/:id', (req, res) => {
 Category.findByPk(req.params.id, {
 include: [{ model: Product }]
 }).then((catData) => {
  res.json(catData);
 })
});

   // find one category by its `id` value-------
  // be sure to include its associated Products-----

router.post('/', (req, res) => {
   // create a new category-------
  Category.create(req.body)
  .then((newCat) => {
    res.json(newCat);
  })
  .catch((err) => {
    res.json(err)
  })
 
});

router.put('/:id', (req, res) => {
   // update a category by its `id` value------
  Category.create(req.body, {
    where: {
      id: req.params.id,
    }
  })
  .then((newCat) => {
    res.json(newCat);
  })
  .catch((err) => {
    res.json(err)
  })
 
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value-------
  Category.destroy(req.body, {
    where: {
      id: req.params.id,
    }
  })
  .then((delCat) => {
    res.json(delCat);
  })
  .catch((err) => {
    res.json(err)
  })
});

module.exports = router;
