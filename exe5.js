'use strict'

let course = {
    courseCode: 'Elen4010'
}

const addYear = function (theCourse, yearOffered){
    theCourse.yearOffered = yearOffered
}

addYear(course,4)

console.log(`${course.courseCode} is offered in year ${course.yearOffered}`)

