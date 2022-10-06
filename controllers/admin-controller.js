const Product = require('../models/product');

//add-product in admin
exports.getAddProduct = (req, res, next) => {
    //res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    res.render('admin/admin-add-product', { 
      pageTitle: 'Add Product', 
      path: '/admin/admin-add-product',
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
    Product.fetchAll((products) => {
        res.render('admin/admin-product-list', {
          prods: products, 
          pageTitle: "Shop", 
          path: '/admin/admin-product-list',
        });
      });
  }