

/*
 原型链继承
 		缺点: 对于没有引用类型对象使用原型继承
 			  父类有应用类型的对象，导致子类共性父类共享同一个应用对象

*/
function SuperObj(){
	this.name = "hello"
	this.friends = {count:3}  //["milisandre", "Jone Snow", "Sansa Stark"]
}
SuperObj.prototype.printName = function(){
	console.log(this.name);
}
SuperObj.prototype.printFriend = function (){
 	console.log(this.friends)
}
function SubObj(){
}

SubObj.prototype = new SuperObj()

var obj1 = new SuperObj();
var obj4 = new SuperObj();

var obj2 = new SubObj();
var obj3 = new SubObj();

obj1.printName();
obj4.printName();
obj2.printName();
obj3.printName();
obj1.name = "nil";
obj2.name = "tom";
obj1.printName();
obj4.printName();
obj2.printName();
obj3.printName();

// obj1.friends.push("myerselee");
// obj2.friends.push("lucy");
obj1.friends.count += 2
obj2.friends.count += 3
obj3.friends.count += 4


obj1.printFriend();
obj4.printFriend();
obj2.printFriend();
obj3.printFriend();
if( obj1.printName == obj2.printName ){
	console.log(" share function ")
}

/*
	借用构造函数继承：
				缺点；无法继承原型上的共享属性
*/

function SuperObjL(){
	this.name = "Cindy"
	this.colors = {"count":3}
}

SuperObjL.prototype.printColors = function(){
	console.log( this.colors )
}

function SubObjL(){
	SuperObjL.call(this)
}

var sub_obj_1 = new SubObjL()
// sub_obj_1.printColors()      // 超类原型上的属性没法共享


/*   
	组合继承方式：借用构造+原型链继承方式
			优点：弥补了借用和原型的缺点 
			缺点：调用两次超类上的构造函数，覆盖原型上的属性 
				  instanceof/ isPrototypeOf()
	最常用的继承方式
*/

function SuperObjC(){
	this.name = "SuperObj_compoment"
	this.color = {"count":3}
}

SuperObjC.prototype.printColors = function(){
	console.log( this.colors )
}


function SubObjC(){
	SuperObjC.call(this)    // 拷贝超类上的属性
}

SubObjC.prototype = new SuperObjC()   // 共享超类原型链上的属性


/*
	原型式继承：
		要求：必须有一个对象作为另一个对象的基础
		缺点：超类是引用类型，还是会被子类实例共享
*/

function object(o){
	function F(){}     // object每次调用都会创建一次F函数，F.prototype 都是一个副本
	F.prototype = o;   // 设置原型: 如何O 是引用类型，还是会被共享
					   //  如果o是函数类型： 则可共享o.prototype 上的属性
	return new F()
}


/*
	寄生式是继承：寄生+组合继承
				  通过借用函数来构造函数来继承属性，通过原型链的混合来继承方法，
				  
*/

function  inheritPrototype( subType, superType){
	var prototype = object(superType.prototype);   //创建对象
	prototype.constructor = subType;
	subType.prototype = prototype;
}

function SuperType_PC(){
	this.name = "SuperType_PC"
	this.colors = {count:3}
}

SuperType_PC.prototype.printColors =  function(){
	console.log(this.colors)
}

function SubType_PC(){
	SuperType_PC.call(this);      // 拷贝超类的属性
}

inheritPrototype( SubType_PC, SuperType_PC )


































