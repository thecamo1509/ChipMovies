var data = require('./data')

let newdata = []
for (var {title: n, locations: f } of data.data) {
    let object = {title: "", locations: ""};
    object.title = n;
    object.locations = f;
    newdata.push(object);
  }

module.exports = newdata;