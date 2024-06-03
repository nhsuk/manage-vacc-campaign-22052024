// External dependencies
const express = require('express');
const router = express.Router();

// Add your routes here - above the module.exports line

router.get('/cleared-data', (req, res) => {
  req.session.data = {}
  res.redirect('/')
})

router.get('/filter', (req, res) => {
      res.redirect('add-filter-library');
      // const filterSelected = req.session.data['selectedAttrib'];
      // console.log(selectedAttrib)
      // req.session.data = {}
      // res.redirect('/')
})

router.all('/user', function (req, res) {
    console.log("User Page Called");
    res.end();
});


router.post('/pickFilter', function (req, res) {
    var att = req.session.data['selectedAttrib'];
    console.log(att)
  if (att == "Select standard filters and suppressions from a library"){
    res.redirect('add-filter-library')
  } else {
    res.redirect('add-filter?sel='+att)
  }
})

module.exports = router;
