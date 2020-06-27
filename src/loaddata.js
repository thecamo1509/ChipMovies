const data = require('./processdata');
const axios = require('axios');
const { title } = require('process');
const { setInterval } = require('timers');

console.log(data)
data.forEach(test)

function test(data) {
    var title = data.title
    var location = data.locations
    if (data.locations === undefined) {
        location = "";
    }
    /* console.log("title: " + title + " | " + "location: " + location); */
    const body = {
        query: `
          mutation Movie{
            createMovie (
              title: "${title}",
              locations: "${location}"
            ) {
              title
            }
          }
        `}
        setTimeout(() => {
          axios.post(`http://localhost:4000`, body)
        .catch(err => {
            console.error(err)
        })
        .then(res => {
            console.log(res)
        })
        }, 100);
}
