const Product = require('../models/product');

//add-product in admin
exports.getAddProduct = (req, res, next) => {
    //res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    res.render('add-product', { 
      pageTitle: 'Add Product', 
      path: '/admin/add-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
  };

  exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
  };

  exports.getProducts = (req, res, next) => {
    const products = Product.fetchAll();
    res.render('shop', {
      prods: products, 
      pageTitle: "Shop", 
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });
  };