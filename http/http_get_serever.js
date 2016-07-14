var http = require("http")
var url = require("url")

http.createServer(function(req,res){

	/* 
		if(){    // todo 判断当前的是不是有效
	        res.writeHead(404, {'Content-Type': 'text/plain;charset=utf-8'});
	        res.write("{'errcode':404,'errmsg':'404 页面不见啦'}");
	        res.end();
		}else{
			
        	res.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'});

			if(req.method.toUpperCase() == 'POST'){
				// todo 处理POST请求
				   todo request监听data事件
				   todo request监听end事件，获取保存数据
				   todo response.wirte()写入数据，
				   todo responde.end() 响应客户端请求
			}else if(req.method.toUpperCase() == 'GET'){
				// todo 处理GET请求
			       todo 解析参数  url.parse(req.url,true).query;
			       todo response.wirte()写入数据，
			       todo responde.end() 响应客户端请求
			else{
				// todo 别的请求方法 delect
			}
			

		}
	*/


	// todo 解析url,获取参数
	{
		console.log(" print req ",req.url);
		var param = url.parse(req.url,true).query;
		console.log(param);

		// todo response request
		res.writeHead(200, {
	        'Content-Type': 'text/plain;charset=utf-8'
	    });
	    console.log("JSON-- ",JSON.stringify(param) );
		res.write(JSON.stringify(param));
		res.end();
	}
}).listen(8000,"192.168.3.112");