var fs = require('fs');
var path = require('path');
var walk = function(dir) {
    let results = [], err = null, list;
    try {
        list = fs.readdirSync(dir)
    } catch(e) {
        err = e.toString();
    }
    if (err) return err;
    var i = 0;
    return (function next() {
        var file = list[i++];

        if(!file) return results;
        file = path.resolve(dir, file);
        let stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
          let res = walk(file);
          results = results.concat(res);
          return next();
        } else {
          results.push(file);
           return next();
        }

    })();

};

console.log(
    walk("v003/")
)