

/*
	1. 载入事件模块： const event_emitter = require("events"); 
	2. 创建时间对象： var event = new event_emitter()
	3. 添加具体事件： event.on("events", callback)
	4. 发射事件：     event.emit("events")
 */ 


const event_emitter = require("events");
var event = new event_emitter()
event.on("test", (a,b)=> {
	console.log("test emite event : %d" , a+b);
});
event.emit("test",1,2);


/*
   同步 vs 异步 事件 
   Node.js 中的事件都是同步的，但可以使用 setImmediate()  process.nextTick() 
   转换为异步
*/
	var a = 10;
	var b = 5
	var callback2 = function (){
		console.log("callback2:", a,b );  
	}
	var callback1 = function (){
		//异步事件
		setImmediate(callback2);
		console.log("callback1: " ,a,b);
		a += a;
		b += b; 
	}
	// 事件触发之后，callback2，callback1 是异步的不能同时调用(即没有嵌套)，
	// callbakc2，总是在callback1 调用完之后调用
	event.on("events", callback1)
	event.emit("events")

/*
	使用event.once() 注册事件，事件只会调用一次
	多次调用自动忽略调用
*/

	event.once("once",()=>{
		console.log("event call once ");
	});
	event.emit("once")
	event.emit("once")


/*
	删除事件监听器
	event.removeListener()
*/



/*
	设置事件监听器的个数，
	 eventEmitter.setMaxListners()  一经设置将影响所有的事件发射器的实例
	 eventEmitter.getMaxListners() 
*/ 
console.log("max event listener ",event.getMaxListeners()) 


/*
	eventEmitter.addListener(eventName, listener) === eventEmitter.on(eventName, listner)
*/
event.addListener("test on", ()=>{
	console.log("test on");
});
event.emit("test on")


/*
    触发事件：参数是回掉函数的参数
	eventEmitter.emit( eventName, arg1, arg2, arg3 )
*/

/* 
    获取监听器的所有监听事件的名字，返回数组
	eventEmitter.eventNames()
*/

var allEventName = event.eventNames()
for( var a in allEventName )
	console.log(a);












  


