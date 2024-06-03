module.exports = function (env) { /* eslint-disable-line no-unused-vars */
  /**
   * Instantiate object used to store the methods registered as a
   * 'filter' (of the same name) within nunjucks. You can override
   * gov.uk core filters by creating filter methods of the same name.
   * @type {Object}
   */
  const filters = {};
  var moment = require('moment'); // require
  // moment().format();

  filters.formatDate = string => {
    return moment(string).format("ddd DD MMM YYYY");
  }


  filters.subtract = function(string,varia){
     return moment(string).subtract(varia,'years');
  }


  filters.lastUpdated = string => {
    return moment().format("dddd DD MMMM YYYY");
  }

  filters.statusDateTime = string => {
    return moment().format("HH:MM, ddd DD MMMM YYYY");
  }

  filters.generateUUID = string => {
     return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
       (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +c / 4).toString(16)
     );
  }

  filters.thouCommaNum = string => {
     return string.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
  };




//   {% set regExp = r/^£?[1-9]{1,3}(,\d{3})*(\.\d{2})?$/g %}
//
// {% set dry = ['rwerew 124,552','12,422','1,224,555'] %}
//
//   {% for items in dry  %}
//   {{items}} {{regExp.test(items) }}
//
//   {% for item in items %}
//  {% for i in item | slice(1) %}
// {{i}} {{regExp.test(i) }}
//  {% if regExp.test(i) %}
// {% set size = regExp.test(i)  %}
// {{regExp.test(i) }}
// {% else %}

  return filters;
};

//
//
// function uuidv4() {
//   return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
//     (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +c / 4).toString(16)
//   );
// }
//
