'use strict'

let students = [
    {
    name: 'Kwezi',
    studentNumber: 453528,
    yearOfStudy: 4
    },
    {
    name: 'Pieter',
    studentNumber: 454345,
    yearOfStudy: 3
    },
    {
    name: 'Jade',
    studentNumber: 678343,
    yearOfStudy: 4
    },
    {
    name: 'Kiren',
    studentNumber: 567893,
    yearOfStudy: 4
    }]

    let deleteStudent = function(_element,students)
    {
        let index = 0
        index = students.findIndex(function(element){  
        return  element.name === _element.name  &&
                element.studentNumber === _element.studentNumber &&
                element.yearOfStudy === _element.yearOfStudy
        })

         console.log(index)   
        if(index != 0)
        {
            students.splice(index,1)
            return students
        }
        else
        return students
        
    }

    
    const modifiedArray = deleteStudent({
        name:'Jade',
        studentNumber: 678343,
        yearOfStudy: 4
        }, students)
        
    console.log(modifiedArray)