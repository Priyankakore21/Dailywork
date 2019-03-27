var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";
MongoClient.connect(url, function (err, db) {
    if (err)
        throw err;
    var dbo = db.db('mydb');
    console.log("Connected...Dtabase created....");

    // dbo.createCollection('myCollection', function (err, res) {
    //     if (err)
    //         throw err;

    //     console.log("Collection created....");
    var myobj = [{ name: "Piya", address: "Pune" },
    { name: "Gayatri", address: "Kolhapur" },
    { name: "Kirthi", address: "Kerla" }];
    // var query = { address: "Pune" };
    var query = { address: /^P/ };
    var mysort = { name: 1 };
    // dbo.collection('myCollection').insertMany(myobj, function (err, res) {
    //     if (err)
    //         throw err;
    //     console.log("documents inserted");
    //     console.log("Number of documents inserted: " + res.insertedCount);
    // dbo.dropCollection('myCollection');
    // console.log(res);
    // dbo.collection("myCollection").find((query), { projection: { _id: 0, address: 1 } }).toArray(function (err, result) {
    dbo.collection("myCollection").find().sort(mysort).toArray(function (err, res) {
        if (err) throw err;
        console.log(res);
        db.close();
    });
});
//});
// });