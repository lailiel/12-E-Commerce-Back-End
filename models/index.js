// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

Product.belongsTo(Category)

Category.hasMany(Product)

Product.belongsToMany(Tag)

Tag.belongsToMany(Product)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
