var mysql = require("mysql")
var connection = mysql.createConnection({
	host 	:"localhost",
	user 	:"root",
	password:"z,mm6>6rHeqF",
	port 	:"3306",
	database:"test_mysql"
});

connection.connect(function(err){
	if(err){
		console.log("fail connect database :", err)
		return 
	}
	console.log("connect database success")
});

connection.query("select user_id,user_name,user_email from user ",function(err, rows, fields){
	if(err){
		console.log(" throw erron",err)
		return 
	}
	// console.log("field: ",fields)
	console.log("the result: ", rows)
	for( var i =0; i< rows.length; i++)
		console.log(rows[i].user_id,rows[i].user_name, rows[i].user_email)

})
console.log({});

connection.end()