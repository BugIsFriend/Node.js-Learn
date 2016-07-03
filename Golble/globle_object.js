// 
// Author: myerselee
// Date: 2016-06-26 23:32:23
// 


/*
	Buffer 是全局对象不需要 require 模块
*/

var buff = new Buffer("hello world , this myerselee coding")
console.log(buff.toString())


/*
	__dirname 当前运行的脚本文件的路径
	——filename 当前运行的文件名字
*/
console.log(__dirname)
console.log(__filename)


/*
    console 对象用于打印对象
*/

/*
	export  某个模块对外暴露的接口或者对象
*/

/*
	Globle: 对象，在浏览器中Globle对象是全局, 在 globle scope 中 var 对象该对象是全局对象
	但是在Node.js 中var对象还是某个模块的对象
*/

/* 
	setImmediate(callback, arg1, arg2, arg3);
	setTimeout(callback, after);
	setInterval(callback, repeat);
*/




