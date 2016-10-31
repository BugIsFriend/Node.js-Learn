查询语句：
		 SELECT (属性列表,,,,,) FROM (表) WHERE (条件l列表......) :

		    example: SELECT * FROM pet WHERE name = "....."    --  从表pet中查找名字为“...”的宠物

		    ***条件语句: 
		    			1.  AND,OR:(多个条件)
		    			2.  ORDY BY(属性列) DESC/ASC: 对选择属性进行降序/升序排列
		    			   
		    			3.  IS/IS NOT: 是/不是 
		    					such as:  IS NULL/IS NOT NULL：
		    			   		NULL: 是一个比较特殊的值，NULL和任何值比较结果都是NULL
		    			   			  SELECT 1=NULL,1<>NULL,1<NULL,1>NULL
		    			4.  LIKE: 包含某个匹配符号
		    					  name LIKE “a％”: 名字以a开头的
		    					  name LIKE “％a”: 名字以a结尾的
		    					  name LIKE "%a%": 名字中包涵a  
		    			5.  >,<,=,<>(不等于), 大小比较 <>

插入语句:
		INSERT INTO table_name(field_1, field_2, field_4)  VALUES(value_1, value_2,........)

更新语句:
	UPDATE table_name SET field_1=new_value1, field_2=new_value2  WHERE Clause		    			


2. DATE:
 		获取当前时间
 			CURDATE() : 获取当前时间： “2010-09-01”

 		计算两个日期的时间差：	
 			TIMESTAMPDIFF(YEAR/MONTH, date_1, data_2 )   :以年为单位计算date_1和data_2时间差
 		 			
 		 			TIMESTAMPDIFF(YEAR, birth_date, CURDATE() ) :计算年龄：

 		抽取时间的摸个部分：
 			YEAR( birth_date ) : 抽取出生的年份
 			MONTH( birth_date ): 抽取出生的月份

3. COUNT(*): 通常和GROUP BY 搭配使用：计算当前分组的个数：
			 如果没有GROUP BY：当前表的所有数据当作一个分组：
			 such as: 
			 		 SELECT COUNT(*) FROM pet; 			   	   --获取当前pet表的纪录个数
			 		 SELECT ower, COUNT(*) FROM pet GROUP BY owner;  --每个主任所拥有的宠物个数






