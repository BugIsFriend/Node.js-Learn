module.exports = Room


function Room(){
	this.id = 0;
	this.players = new Array();

	this.room_state = 0 
}

Room.prototype = {}

Room.prototype.addOnePlayer = function(player){
	this.player.push(player)
}

Room.prototype.getRoomState = function(){
	return this.room_state
}

Room.prototype.setRoomState = function(){

}