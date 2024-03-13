const {getStudentDAO, regStudentDAO} = require('../dao/studentDAO')

function getStudentService(req){
    console.log('getstudentservie')
    const data = req.query
    const response = getStudentDAO()
    return response
}

async function regStudentService(req){
    const data = req.body.data;
    const result = await regStudentDAO(data)
    return result;
}

module.exports = {getStudentService, regStudentService}