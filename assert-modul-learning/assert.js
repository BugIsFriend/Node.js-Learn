const assert = require('assert')

// assert(bool , message )  :断言 
	var is_true = false
	assert(true, "message, log")


// assert.deepEqual(actual, expected, message);   等价于  带有值 == 
// a对象和b对象的键必须相同，并且值相等；
// 这里的判断不包含a,b的原型链上的属性，
	const obj1 = { a:{ b:2 } }
	const obj2 = { a:{ b:3 } }
	const obj3 = { a:{ c:2 } }
	const obj5 = { a:{ b:2 } }
	// assert.deepEqual( obj1, obj2, "对象各自的属性相等，属性值不等")
	// assert.deepEqual( obj2, obj3, "对象的属性不想等")
	assert.deepEqual( obj1, obj5, "")
	// const obj4 = Object.create(obj2)  // obj4 继承自obj2，
	// assert.deepEqual(obj1, obj3,"a and b 相等")    // 检测obj4 是否等于obj2


// assert.deepStrictEqual(actual, expected, message)
// 严格意义深度上相等，对象的属性个数，属性名相等，属性值相等属性的类型必须相等
	// assert.deepStrictEqual({a:1}, {a:'1'});
	// AssertionError: { a: 1 } deepStrictEqual { a: '1' }
	// because 1 !== '1' using strict equality



// assert.equal(actual, expected, message)  //相当于等号操作
