const Student = require('../models/Student')

async function addStudent(req,res){
    try{
        console.log(req.body,'req.body');
        let student = new Student(req.body)
        await student.save()
        console.log('data saved successfully.....');
        res.end('data added....')
    }catch(err){
        console.log(err);
    }
}
const getStudents=function(req,res){
    try{
        let students=Student.find({}); //select * from tn


    }
    catch{
        console.log(err);
    }
}
module.exports = {
    addStudent
}