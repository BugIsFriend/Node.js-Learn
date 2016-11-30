var net = require("net");
var Player = require("./GameObject/player")


var server = net.createServer();
var player_list = new Array();

server.on("connection", function(connection){

})