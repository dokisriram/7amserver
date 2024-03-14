var mongodb = require('mongodb')

async function getDB(){
    try {
        const mongoClient = mongodb.MongoClient;
        const url = "mongodb+srv://u1:p1@7am.pgy1yqr.mongodb.net/"
        const server = await mongoClient.connect(url)
        const db = server.db("school");
        return db;
    } catch (error) {
        console.error(error)
    }
}

module.exports = getDB