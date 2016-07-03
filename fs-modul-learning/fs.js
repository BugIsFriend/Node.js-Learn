// 
//  Author: myerselee
//  Date: 2016-06-25 15:45:25
// 

/*
	文件模块所有的接口提供异步和同步两种方式对文件进行操作
*/
const fs = require("fs")

/*
   异步修改文件名字或者路径名字
*/ 
// fs.rename("test.txt", "tst.txt",(err)=>{
// 	if(err){
// 		console.log("rename fail");
// 	}else{
// 		console.log("rename success");
// 		setTimeout(fs.rename("tst.txt", "test.txt", (err)=>{} ), 2000);
// 	}
// });


/*
   异步检测文件的权限 fs.F_OK, fs.R_OK, fs.W_OK, fs.X_OK: 可见，可读，可写， 
*/
fs.access("test.txt", fs.R_OK|fs.W_OK, (err)=>{
	console.log(err?"access fail":"access success");
})


/*
	想文件中微博添加数据
*/
fs.appendFile("tst.txt", "this'is myerselee coding","utf8", (err)=>{
	console.log(err?"append data fail":"append data success")
});

var buff = new Buffer(100)

// fs.read("tst.txt", buff,0,20,0,(err, byteRead, buff)=>{
// 	if(err){
// 		console.log(" read file error")
// 	}else{
// 		console.log(byteRead, buff)
// 	}
// })


console.log(__dirname)












