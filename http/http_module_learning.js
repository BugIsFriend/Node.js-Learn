// 
//  Author: myerselee
//  Date: 2016-06-26 23:55:26
// 

const http = require("http")
const net = require("net")
const url = require("url")

/*
	http.agent：http代理用于套接字池的request请求
	可以手动创建一个活着的http agent，已被需要使用时，
	这个代理会保存在套接字池里，该套接字会在套接字发送"close" 或者 "agentRemove"
	被销毁， 或者直接调Destroy() 方法
*/

var keepAliveAgent =  http.Agent({   // 创建一个http代理
	keepAlive: true, 
	// keepAliveMsecs :1000
	// maxSockets 
	// maxFreeSockets 
});

// options.agent = keepAliveAgent;
// http.request(options, ()=>{

// });


/*
	ClientRequest 对象: 该对象被内部创建，通过http.request(), 该对象先的请求头已被加入
					    到请求队列，请求头仍以被改变
    为了得到响应，需要为为响应添加监听，当响应头备受到时，相应监听器就会被从request对象中被调用

	request: 对象实现了写入流接口，可以触发一下几种事件
			request.on("eventname", callback)
			Event: 
				  "abort"  		function(){} : 当客户端终止请求的时候被调用
				  "connect"     function(response,socket, head){}		
				  "continue"    function(){ }
				  "response"    function(response){   当request接收到相应的时候被触发
					  				response: 是http.InComingMessage对象，给消息之被触发一次
					  						  有以下可选操作
					  				          host: 服务器域名或者IP
					  				          port: 服务器的端口
					  				          socketPath: Unix域名Socket
				 				} 
				  "socket":     function(socket): request对象的Socket被设置之后触发
			Function：
			    request.abort(): 标记请求为停止状态，socket将被被销毁
			    request.end(data, coding, callback): 结束请
			    request.flushHeaders():  为了效率，node.js 只有在request.end()的时候才会刷新
			    request.setNoDelay(noDelay): 一旦request的socket不设置，就是链链接状态， 该函数就会调用
			    request.setSocektKeepAlive(enable, initialDelay): request的socket保持活跃状态
			    request.setTimeout(timeout, callback): 一旦requestsocket被设置，该函数就会被调用
*/		


/*
	Class http.Server: 继承自net.Server
			event：有以下事件：
				    "checkContinue"   (request, response)=>{}
			    	"clientError"     (exception,socket)=>{}  如果客户端发送一个错误事件，就会触发改事件
			    	"close"           ()=>{} 				 服务器被关闭时调用
                	"connect"         (request,socket,head){} 客户端的每次链接请求，都会触发该事件
               							  request: http请求的一些参数
               							  socket： 服务器和客户端之间的网络套接字
               							  head:    一个buffer的实例，可能为空
					"connection"	  (socket)=>{} 			  socket是net.socketd对象，
					"request"         (request,response)=>{}  每次request请求都会触发
											request:  是http.InComingMessage一个实例
											response: 是http.ServerResponse的一个实例
					"upgrade"         (request,socket,head)=>() 当客户端发起一个http upgrade时触发
		
			Function:
		        	server.close():   当接受一个新请求时，停止服务器
		        	server.listen(handle,callback):    
		        			return server
		       		 	    handle: handle对象可以被设置为server或者socket(_handle的成员)，
		       			  	     	这是server接受特定的handle的的链接,这个特定的handle或者file 
		       			  		    descpritor一经别绑定到特定的端口或者domain socket
		       			    callback:是"listening"事件的监听器
					server.listen(path,callback): 
							开启一个对指定路径 类 UNIX socket server
                	server.listen(port,hostName,backlog,callback)：  
                			对于指定的hostname(ip/域名)的监听
               		server.maxHeaderCount(): 限制输入消息头的数量
               		server.setTimeout(msecs,callback): 设置超时时间
               							   ：服务器默认超时时间为两分钟，当超时时，
               							   	 socket将自动被删除 

   Class http.ServerResponse:       
   				该类对象直接为httpServer 对象直接创建，而不是用户创建
   				其实现类Writeable Stream的接口，可以发射以下事件
		    Event: 
		    	    "close" :在链接结束前，和response.end()被调用
		    	    "finish":当response被发送的时候被触发，该事件触发后，reponse不再有事件被触发
		   	Function:
					response.addTrailers(headers)
							 该函数是对和http的response的header添加尾部
					response.end(data,encoding,callback)
							  该方法告诉服务器相应头和相应体都是发送，服务器应该考虑
							  这个消息已完成，每个response必须调用该函数
					response.finished： boolean value, 判断相应是否完成，response.end()之后设置为true
					response.getHeader(name): 读取被加入对立，但没有发送到客户端的消息头
					response.headSent: boolean value,消息头是否被发送
					response.removeHeader(name): 删除消息头
					response.sendDate
					response.setHeader(name,value)：设置消息投的名字和value，如果该消息头已存在将
													要发送的消息头队列中，其值将会被替代
					response.setTimeout(msecs,callback)
					response.stateCode
					response.stateMessage
					response.write(data,encoding,callback)
						     1.如果reponse.writeHead()已经被调用，并且该函数也被调用，其将被转换为隐士
						       header，该函数可能被调用多次以至于提供连续的消息提
						     2.当response.write() 第一次被调用时，服务器会发送消息头(header)和第一个
						       消息体，当第二次调用response.write()node.js假定为数据流进行传送数据，接下来的
						       数据将缓冲到一个消息体中(body)
						     3.如果所有的数据成功的缓冲到核心buffer，则返回true，
					response.writeContinue():发送客户端 100状态码: 暗示客户端请求体没有发送需要继续发送
					response.writeHead(statusCode,statusMessage,headers)
							 response.writeHead(200, {'Content-Length': body.length,'Content-Type': 'text/plain' });
							 该函数必须调用一次，并且必须在response.end()之前被调用
 
   Class http.InComingMessage:
   							  一个InComingMessage对象被http.Server or http.ClientRequest
   							  该类是实现了Readable Stream接口，有以下event, methods, properties
			event: 
				  "close":

			properties：
					message.header：	
					message.httpVersion:
					message.method: 只用服务器捕获的request该方法才有效
					message.rawHeaders:
					message.rawTrailer: 只有相应到event事件后，request/response的rawTrailer才会有值 
					message.setTimeout: response/request 超时处理
					message.statusCode: 只用http.ClientRequest的response有效
					message.url    --require('url').parse(request.url) 解析url获取参数
										require('url').parse('/status?name=ryan')
										{
										  href: '/status?name=ryan',
										  search: '?name=ryan',
										  query: 'name=ryan',
										  pathname: '/status'
										}
	


*/	

// http get 请求服务器，带有参数的服务器；
var redis = require("redis");
var http = require('http');
var url = require("url");
var info = "通过HTTPGet方式成功加入队列";
http.createServer(function (req, res) {
    var params = url.parse(req.url, true).query;//解释url参数部分name=zzl&email=zzl@sina.com
    var client = redis.createClient();
    client.lpush("topnews", params.info);
    res.writeHead(200, {
        'Content-Type': 'text/plain;charset=utf-8'
    });
    client.lpop("topnews", function (i, o) {
        console.log(o);//回调，所以info可能没法得到o的值，就被res.write输出了
    })
    client.quit();
    res.write(info);
    res.end();
}).listen(8000, "127.0.0.1");
console.log('Server running at http://127.0.0.1:8000/');


// http pos 请求的服务器，
var redis = require('redis');
var http = require('http');
var url = require("url");
var querystring = require("querystring");
http.createServer(function (req, res) {
    // 设置接收数据编码格式为 UTF-8
    req.setEncoding('utf-8');
    var postData = ""; //POST & GET ： name=zzl&email=zzl@sina.com
    // 数据块接收中
    req.addListener("data", function (postDataChunk) {
        postData += postDataChunk;
    });
    // 数据接收完毕，执行回调函数
    req.addListener("end", function () {
        console.log('数据接收完毕');
        var params = querystring.parse(postData);//GET & POST  ////解释表单数据部分{name="zzl",email="zzl@sina.com"}
        console.log(params);
        console.log(params["name"]);
        PushToRedis(params["name"]);
        res.writeHead(500, {
            "Content-Type": "text/plain;charset=utf-8"
        });
        res.end("数据提交完毕");
    });
}).listen(8000, "127.0.0.1");
console.log('Server running at http://127.0.0.1:8000/');

//表单接收完成后，再处理redis部分
function PushToRedis(info) {
    var client = redis.createClient();
    client.lpush("topnews", info);
    console.log("PushToRedis:" + info);
    client.lpop("topnews", function (i, o) {
        console.log(o);//回调，所以info可能没法得到o的值，就被res.write输出了
    })
    client.quit();
}















