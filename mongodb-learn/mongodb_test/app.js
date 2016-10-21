var MongoClient = require('mongodb').MongoClient
	,assert = require('assert');



// connection url  // ip, port, 对应的数据库
var url = 'mongodb://localhost:27017/mongodb_test';

var insertDocuments = function (db, callback){
	var collection = db.collection("document");   // collection 相当于 table
												  // document  相当于 record纪录

	collection.insertMany( [{a:1},{a:2},{a:3}],
		function(err, result){
		    assert.equal(err, null);
		    assert.equal(3, result.result.n);
		    assert.equal(3, result.ops.length);
			console.log("insert 3 document int the collections")
		    callback(result);
	});
}



MongoClient.connect(url,function(err, db){

	assert.equal(null, err);
	console.log("connected to server succesfully ");
	insertDocuments(db, function(result) {
    	db.close();
  	});
})

