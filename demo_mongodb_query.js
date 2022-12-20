var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017'

MongoClient.connect(
    url,
    function(err, db){
        if (err) throw err
        var dbo = db.db('nodejs')
        var query = {
            name : "Praxis inc"
        }
        dbo.collection('customers').find(query).toArray(function(err, res){
            if (err) throw err
            console.log(res)
            db.close()
        })
    }
)