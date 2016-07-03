//
// Author: myerselee
// Date: 2016-06-05 22:55:28
//

/* 
	Buffer 是全局对象，不再需要require，通常用于TCP流和文件操作
	Buffer 的存储: 对于数组，和字符串按照字节存储
	               如： var buff_array  = new Buffer([16,3,15]) 
	               		存储为：[10,03,0f], 十六进制表示，
*/

/* Buffer 创建，buffer一经过创建，不能重置大小, buffer里面都是二进制，*/

    var buff_size   = new Buffer(10);       // 创建一个长度为10的Buffer 
    var buff_array  = new Buffer([16,3,15])  // 通过数组创建buffer
    var buff_string = new Buffer("hello, world")   // 通过字符串创建Buffer，编码方式
    
    // buff_array[0] = 1      // 可以取到buffer中的每一个东西
      // 对于数组中的每一个元素 可通过 for( b of buffer ) 取出数据元素
     
      
    console.log(buff_size.toString())
    buff_size.fill(0)
    console.log(buff_size.toString())
    
    console.log(buff_array)
    console.log( buff_string.toString())


    // 不同编码之间的转换
    var buff_t = new Buffer("hello world,today is learning ","utf8")
    var str = buff_t.toString("base64")  //
    console.log(str)
    var buff_r = new Buffer(str,"base64")
    var str1 = buff_r.toString("utf8")
    console.log(str1)

/* Buffer的填充 */
    buff_size.fill(1, 3,4)
    console.log("buf.fill(value[, offset[, end]]): ",buff_size )

/*
 Buffer的静态方法: 
                  1. Buffer.isBuffer( buffer )	
                  2. Buffer.compare( buf1, buf2 )  比较buffer的大小，返回-1, 0, 1 
                  3. Buffer.concat( buf_array, totalLenght )   totalLenght: 链接后的buffer的总字节数
                  4. Buffer.isEncoding( buffer )   判断buff是否支持某种编码
*/
	
	if ( Buffer.isBuffer( buff_size) ){
		console.log("buff_size is buffer")
	}else{
		console.log("buff_size is not buffer")
	}

	
/* buffer的读写 */ 




























