'use strict'

let numbers = [7, 8, 9, 10, 11]
let roots = []


let square = function(numbers){

    numbers.forEach(function (element) {
        element *= element
        roots.push(element)
        })
}

const map = function (functionToApply, array){
    functionToApply(array)
}

map(square,numbers)

console.log(roots)