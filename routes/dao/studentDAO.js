const mongodb = require('mongodb');
const getDB = require('../../common/getdb');

async function getStudentDAO(){
    try {
        console.log('getstudentdao')
        const db = await getDB()
        const collection = db.collection('students');
        const result = await collection.find({}).toArray();
        return result
    } catch (error) {
        console.error(error)
    }
}

async function regStudentDAO(data){
    try {
        // connect with db
        const db = await getDB()
        const collection = db.collection("students");

        //perform required operation 
        const result = await collection.insertOne(data)

        // send response to service
        return result
    } catch (error) {
        
    }
}

async function loginDAO(data){
    try {
        console.log(data)
        const db = await getDB()
        const collection = db.collection("students")
        return await collection.find(data).toArray()
    } catch (error) {
        console.error(error)
    }
}

module.exports = {getStudentDAO, regStudentDAO, loginDAO}