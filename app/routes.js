// External dependencies

const express = require('express');

const router = express.Router();

const radioButtonRedirect = require('radio-button-redirect')
router.use(radioButtonRedirect)

var fs = require('fs');
var path = require('path');
var process = require('process');

const filesArray = fs.readdirSync("./app/views/v005/")
const workingD = process.cwd();

// Add your routes here - above the module.exports line

router.get('/', (req, res) => {
      res.render('index', {workingD: workingD, filesArray:filesArray})

});

router.get('/clear-data', (req, res) => {
  req.session.data = {}
  res.redirect('/')
});


router.post('/filterSelection', function (req, res) {
    var att = req.session.data['selectedAttrib'];
    console.log(att)
  if (att == "Select standard filters and suppressions from a library"){
    res.redirect('v005/add-filter-library')
} else if (att == "age" || att == "location"){
    res.redirect('v005/add-filter?sel='+att)
    console.log(att)
} else {
   // do nothing
}
})


router.post('/dupeHandler', function (req, res) {
   res.redirect('v005/name?dupe=true')
})




router.get("/grabCohorts", function (req, res) {
   let val = {}
   val = req.session.data;
   res.render('v005/select-cohorts', {val: val});
   console.log(val)
});


router.post("/summary-cohorts", function (req, res) {
   res.redirect('v005/summary-cohorts');
});


// router.get("/goToTL", function (req, res) {
//    vals1 = req.session.data['cohorts'];
//    vals2 = req.session.data['cohorts-drop'];
//    res.redirect('v005/task-list-govuk', {vals1: vals1, vals2: vals2});
// });

router.get("/home", function (req, res) {
   res.redirect('v005/home');
});

router.get("/create-iteration", function (req, res) {
   res.redirect('v005/create-iteration');
});

router.get("/sign-in", function (req, res) {
   res.redirect('v005/sign-in');
});

module.exports = router;


// router.post("/filterSelection", function (req, res) {
//     var att = req.session.data['selectedAttrib'];
//
//     switch (att) {
//       case "age":
//          res.redirect('v005/add-filter-age');
//       break;
//       case "location":
//          res.redirect('v005/add-filter-location');
//       break;
//       case "vaccine recently given":
//          res.redirect('v005/add-filter-vaccine-given');
//       break;
//       case "Select standard filters and suppressions from a library":
//          res.redirect('v005/add-filter-library');
//       break;
//     }
// })
