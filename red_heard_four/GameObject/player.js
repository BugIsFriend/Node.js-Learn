
module.exports = Player;

function Player(){
	//基本信息
	this.id = 0;
	this.name = "";
	this.gender = false;
	this.money = 0;

	// 打牌信息
	this.player_state = 0;
	this.player_card = [];
	this.player_friend = [];

}

Player.prototype.printName = function(){
	// todo 查询数据库获取数据玩家相关数据
	this.name = "cerse"
}








