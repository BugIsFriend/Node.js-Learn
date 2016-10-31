-- 对于数据库的操作
	CREATE DATABASE db_name    -- 创建数据库
	DROP   DATABASE db_name    -- 删除数据库


-- 表的操作
	CREATE TABLE table_name(   -- 创建表
		field_1  FIELD_TYPE,
		field_2  FILED_TYPE,
		.......  .......
	);
		example:
			   -- 对于表的操作
			   CREATE TABLE test SELECT * FROM table_name

-- 修改表的结构：
	ALTER TABLE table_name add    field_name field_type    -- 添加一列
	ALTER TABLE table_name drop   field_name 		       -- 删除一列
	ALTER TABLE table_name modify field_name field_type    -- 修改的类型	


-- 向表中插入数据：
	-- 1.插入语句
	INSERT INTO table_name(field_name_1, field_name_2, field_name_3,.....)     
		   VALUES(value_11,value_12,.....),   				 -- 表中插入第一个值
		   		 (value_21,value_22,.....) 					 -- 表中插入第二个值
    
    -- 2. insert into .. select .. from 句型
    INSERT INTO .... SELECT field_name_1..... FROM table_name
 		   --查询语句不能出现 ordy by 子句
 		   --查询语句不能插入


-- 替换语句：replace, replace..... select

-- 使用LOAD语句批量录入数据：
	LOAD DATA INFILE  "file_name" INTO TABLE database_name.table_name
       FIELDS TERMINATED BY','  ENCLOSED BY'''' LINES TERMINATED BY '\n'
       -- 再入数据：field 以‘,’结尾
       --         line 以 '\n'结尾


-- 查询数据表中的纪录：
	SELECT  	 field_name_1, field_name_, field_name_3...    	-- 选择属性列
	FROM  		 database_name.table_name     				  	-- 从哪个表中选择
	WHERE		 cond_1(AND,OR,>,< <>,!=,<=,>=,LIKE.... ),cond_2 -- 条件
	GROUP BY     field_name_1, field_name_, field_name_3...    	-- 进行分组
	HAVING      												-- 必须满足的第二个条件
	ORDER BY     field_name_1....... 							-- 排序
	LIMIT        count  											-- 限定结果
	BETWEEN AND

		1. WHERE: 条件从句
			such as:   SELECT * FROM pet WHERE name = "kitty"
				       SELECT * FROM pet WHERE name = "kitty" AND/OR sex = FALSE -- 多个条件下的，逻辑链接谓词
		
		2. ORDER By:  排序从句
			such as:   SELECT * FROM pet ORDER BY birth DESC --- 进行排序，ASC/DESC 升序／降序排序
					   SELECT * FROM pet ORDER BY birth, weight.......(/*可以是多个属性进行分组*/)

		4. COUNT() : 计算非NULL结果的数目d
			such as:
					 SELECT count(*) FROM pet    -- 取得宠物的数量
					 SELECT count(sex) FROM pet  -- 取得有性别的宠物的数量
					 							 -- 如果不是计算某个列示非空的必需和GROUP BY 搭配使用
		3. GROUP BY: 分组排序，对查询结果进行分组   -- 
			such as: SELECT * FROM pet GROUP BY species -- 更具物种类别进行分组
					 SELECT ower, count(*) FROM pet GROUP BY ower  

-- 修改删除数据：
		1. UPDATE table_name  SET  field_name_1 = '', field_name_2 = ,,,, WHERE id = 1122   --更新表

		2. DELETE FROM table_name WHERE id = 12111    -- 删除表的数据

-- 集合函数的:  通常和GROUP BY 搭配使用
	COUNT() :
			1. 计算查询语句返回的纪录函数:
			    SELECT COUNT(*) FROM table_name WHERE field_name_1 = ''; 
			   	 such as: SELECT COUNT(*) FROM pet WHERE species = 'cat'  -- 统计宠物表中的是猫的数量
			2. 统计字段值的数目：
				SELECT COUNT(species) FROM pet  --  统计species不是空的数量
			3. 查询不同种类的数量：
				SELECT COUNT(DISTINCT sepcies) FROM pet	-- 统计有多少不同种类宠物
			4. COUNT() 和 GROUP BY从句搭配使用：
				SELECT species, COUNT(*) FROM pet GROUP BY species -- 统计某种分组下的数据

	AVG():计算平均值
			SELECT species, AVG( CURDATE() - birth) FROM pet GROUP BY species
	SUM():总和
	MAX(): 
		 	SELECT species, MAX(birth) FROM pet GROUP BY species;
	MIN():
			SELECT species, MIN(birth) FROM pet GROUP BY species;

-- 对于时间的操作：
		1.时间接口
			GETDATE(): 取得当前的时间和日期
			CURDATE(): 取得当前的日期
			CURTIME(): 取得当前的时间
			NOW() 	   取得当前的日期和时间 YYYY-MM-DD HH:MM:SS
			TIMESTAMP(): 自动纪录数据改变的时间
			TO_DAYS(..): 将日期转换为时间“960501”
						  SELECT TO_DAYS(NEW()) - TO_DAYS("20010101")   -- 相差多少天
			DAYOFWEEK(date): 当前日期为星期几(1= 星期天,,,,,,,)
			WEEKDAY(date):   当前日期为星期几(0= 星期一,,,,,,,)
			DAYOFMONTH(date): 返回date中这一月份中的天数(1 到 31)
			DAYOFYEAR(date): 返回date中这一年的日数(1 到 366)
			MONTH(date): 返回date当前的月份
			
		2.使用关系运算符和逻辑运算符来限定时间

-- 字符串模式匹配
    SQL的匹配模式准许使用“_”匹配单个字符, "%"匹配任意个字符 
		SELECT * FROM pet WHERE name LIKE "b%"   --查找名字开头是b的宠物
		SELECT * FROM pet WHERE name LIKE "%fy"  --查找名字以fy结尾的宠物
		SELECT * FROM pet WHEre name LIKE "%w%"  --查找名字中有w字符的宠物

-- 在字句中使用列的别名
	GROUP BY, ORDER BY, HAVING --从句可以使用列的别名，
	WHERE -- 从句中不能使用别名
    	such as: SELECT species, COUNT(*) AS total FROM pet GROUP BY species HAVING total>1;

-- 使用DISTINCT去除查询结构完全相同的行
	SELECT DISTINCT species,name FROM pet

-- NULL 表示“没有值”, 和任何值(包括NULL)用关系运算符比较 返回NULL
	对NULL的比较用 IS NULL, IS NOT NULL, 而不是用关系运算符(<,>,<>,!=,=,<=,>=)等
	任何值都不是NULL,


-- 索引语句与多个表的连接：
	1.全联接： table_name_1表的每个纪录连接table_name_2表的每个纪录
		  SELECT＊ FROM table_name_1,table_nam_2  WHERE 连接条件
		  	-- 缺点导致数据量非常大
	2.左连接：将左边的每个纪录，与右表进行连接；右边没有符合条件的连接属性都设置为NULL
		such as: 
				SELECT * FROM first, last WHERE first.id = last.id;    --- 全连接
				    -- output 
						| id 	| first_name | id | last_name | 
						| 2 	| Marry 	 | 2  | Stone     |
						| 3 	| Jarry 	 | 3  | White     | 
				SELECT * FROM first LEFT JOIN last on first.id = last.id; -- 左连接
				    -- output
						| id | first_name | id 	 | last_name |
						| 1	 | Tom        | NULL | NULL 	 |
						| 2  | Marry 	  | 2    | Stone     |
						| 3  | Jarry 	  | 3    | White     | 
	    显示左边属性列, 符合条件的显示有变的属性列；不符合条件有变所有的属性列显示为空

    3.索引属性


























