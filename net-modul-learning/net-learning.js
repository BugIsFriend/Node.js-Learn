// 
// Author: myerselee
// Date: 2016-07-03 17:38:04
// 

/*
	net：模块提供了对于异步网络的包装
		 require("net")
*/



/*
	class net.Server: 用于创建一个 TCP 或者 本地Server
		  
		event: net.Server是一个事件发射器，提供一下事件
       		   "close" :     但server关闭的时候触发 
       		   "connection": connection 是 net.Socket 的一个实例对象
       		                 当新的 connection对象创建的时候，触发事件
       		    "error":     异常时触发改时间
       		    "listening": 调用server.listening之后已经绑定的server时触发

       	function:
       			server.address():  返回绑定的地址 例如{ port: 12346, family: 'IPv4', address: '127.0.0.1' }    
								   该函数在server.listen()调用之后调用该方法
				server.close(callback) : 将触发"close"事件
				server.connections： server当前的链接数目  




*/