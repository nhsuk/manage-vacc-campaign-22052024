// External dependencies
const express = require('express');

const router = express.Router();


var fs = require('fs');
var path = require('path');
var process = require('process');

const filesArray = fs.readdirSync("./app/views/v005/")
const workingD = process.cwd();


//
// var walk = function(dir) {
//     let results = [], err = null, list;
//     try {
//
//
//         list = fs.readdirSync(dir)
//
//
//
//     } catch(e) {
//         err = e.toString();
//     }
//     if (err) return err;
//     var i = 0;
//     return (function next() {
//         var file = list[i++];
//
//         if(!file) return results;
//         file = path.resolve(dir, file);
//         let stat = fs.statSync(file);
//         if (stat && stat.isDirectory()) {
//           let res = walk(file);
//           results = results.concat(res);
//
//
//           return next();
//         } else {
//           results.push(file);
//            return next();
//         }
//
//     })();
//
// };
// const listArray = walk("./app/views/v003");

// Add your routes here - above the module.exports line

router.get('/clear-data', (req, res) => {
  req.session.data = {}
  res.redirect('/')
})

router.get('/', (req, res) => {

  res.render('index', {workingD: workingD, filesArray:filesArray})

})


router.post('/filterSelection', function (req, res) {
    var att = req.session.data['selectedAttrib'];
    console.log(att)
  if (att == "Select standard filters and suppressions from a library"){
    res.redirect('v005/add-filter-library')
  } else {
    res.redirect('v005/add-filter?sel='+att)
  }
})


router.get("/grabCohorts", function (req, res) {
   let val = {}
   val = req.session.data;
   res.render('v005/select-cohorts', {val: val});
   console.log(val)
});


router.post("/cohortSummary", function (req, res) {
   res.redirect('v005/summary-cohorts');
});


router.get("/goToTL", function (req, res) {
   vals1 = req.session.data['cohorts'];
   vals2 = req.session.data['cohorts-drop'];
   res.render('v005/task-list-govuk', {vals1: vals1, vals2: vals2});
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
