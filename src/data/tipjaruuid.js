const jarData = require('./tipjardata')
const uuid = require('uuid')
let locations = []
const newData = jarData.map(person => {
  person.id = uuid.v4()
  return person
})

module.exports = newData
// const updatedData = (data) => {

//   data.map(person => {
//     console.log(person)
//     person.id = uuid.v4()
//     return person
//   })
// }

// const test = updatedData(jarData)
// module.export = updatedData(jarData)
// // module.exports = updatedData(jarData)
// console.log('test',test)
