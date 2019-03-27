var mongoclient=require('mongodb');
var url="mongodb://localhost:37017/";
mongoclient.connect(url,{useNewUrlParser:true},function(err,db1){
    if(err) throw err;
    var dbo=db1.db("mydb");
    
    //find multiple documents
    dbo.collection("cities").find({}).toArray(function(err,result){
        if(err) throw err;
        console.log("Showing Multiple Documents\n");
        console.log(result);
        db1.close();
    });
});
