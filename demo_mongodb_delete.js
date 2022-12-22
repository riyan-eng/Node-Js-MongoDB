const { ObjectID } = require('bson')

let MongoClient = require('mongodb').MongoClient
let url = 'mongodb://localhost:27017'

MongoClient.connect(
    url,
    function(err, db){
        if(err) throw err
        let dbo = db.db('nodejs')
        let myquery = {
            _id: ObjectID('63a42c017499dc036c9a0cbd')
        }
        dbo.collection('customers').deleteOne(myquery, function(err, obj){
            if(err) throw err
            console.log('1 document deleted')
            console.log(obj)
            db.close()
        })

    }
)