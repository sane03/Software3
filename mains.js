'use strict'

let fs = require('fs')

fs.readFile('./ELEN4010.txt', 'utf8', (err, data) => {
  // utf8 is the encoding of the file
  if (err) throw err
  // console.log(data)
})