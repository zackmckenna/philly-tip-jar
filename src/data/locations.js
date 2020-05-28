const jarData = require('./tipjardata')
const uuid = require('uuid')
// let locations = ['test']

const parseLocations = () => {
  let locations = []
  jarData.map(person => {
    locations = [...locations, `${person.Location}`]
  })
  return locations.reduce(function(a,b){if(a.indexOf(b)<0)a.push(b);return a;},[]);
}

parseLocations()
//  jarData.map(person => {
//   if (person.Location === `Barnaby’s of West Chester` || `Bud and Marylyn's`){
//     return
//   } else if (locations.includes(`${person.Location}`)) {
//     return
//   } else {
//     console.log(locations)
//     locations = [...locations, `${person.Location}`]
//   }
// })


module.exports = parseLocations()
