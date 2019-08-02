const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
  res.render('index',{
      title: 'My WebStore'
  })
});

router.get('/products', (req, res, next) =>{
  res.render('products',{
    title: 'list of products'
  })
})

module.exports = router;