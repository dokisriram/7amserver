const mongodb = require('mongodb')

function getStudentDAO(data){
    console.log('getstudentdao')
    return "get call"
}

async function regStudentDAO(data){
    try {
        // connect with db
        const mongoClient = mongodb.MongoClient;
        const url = "mongodb+srv://u1:p1@7am.pgy1yqr.mongodb.net/"
        const server =await mongoClient.connect(url)
        const db = server.db("school")
        const collection = db.collection("students");

        //perform required operation 
        const result = await collection.insertOne(data)

        // send response to service
        return result
    } catch (error) {
        
    }


}

module.exports = {getStudentDAO, regStudentDAO}