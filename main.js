'use strict'

let fs = require('fs')
let randtext = require('dolor')

fs.readFile('./ELEN4010.txt', 'utf8', (err, data) => {
  // utf8 is the encoding of the file
  if (err) throw err
  // console.log(data)
})

fs.writeFile('./ELEN4017.txt', randtext.sentence(5), (err) => {
  if (err) throw err
  console.log('Saved!')
})

fs.readFile('./ELEN4017.txt', 'utf8', (err, data) => {
  if (err) throw err
  console.log(data)
})
