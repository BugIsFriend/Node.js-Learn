var net = require("net")
var chat_server = net.createServer();
var	client_list = [];

chat_server.on("connection", function(client){
	client.write("hello, connected server!! \n")
	client.end()
	
	console.log(client_list.length);
	client_list.push(client);
	client.on("data", function(data){
		for (var i = 0; i < client_list.length; i++) {
			if(client_list[i] != client )
				client_list[i].write("recieve message!!!")
		}
	});
})


chat_server.listen(8080)