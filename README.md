# jsTool(持续更新和修缮)
原生JS封装的通用函数库

##API

### ```jsTool.type(value)```
返回value的类型。
```javascript
jsTool.type('javascript'); 

// "string"


jsTool.type(123); 

// "number"
```

### ```jsTool.isNumber(value)```
```javascript
jsTool.isNumber(123); 

// true

jsTool.isNumber('str')

//false
```

### ```jsTool.isString(value)```
```javascript
jsTool.isString('I am Rcong'); 

// true
```

### ```jsTool.isNull(value)```
```javascript
jsTool.isNull(undefined); 

//false

jsTool.isNull(null); 

// true
```

### ```jsTool.isUndefined(value)```
```javascript
jsTool.isUndefined(undefined); 

//true

jsTool.isUndefined(null); 

// false
```

### ```jsTool.isObject(value)```
```javascript
jsTool.isObject({}); 

//true

jsTool.isObject('str'); 

// false
```

### ```jsTool.isBoolean(value)```
```javascript
jsTool.isBoolean(false); 

//true

jsTool.isBoolean(123); 

// false
```

### ```jsTool.isFunction(value)```
```javascript
jsTool.isFunction(document.getElementById);

//true

jsTool.isFunction('111'); 

// false
```

### ```jsTool.isArray(value)```
```javascript
jsTool.isArray([]);

//true

jsTool.isArray(new Array());

//true

jsTool.isArray({}); 

// false
```

### ```jsTool.isDate(value)```
```javascript
jsTool.isDate(new Date());

//true

jsTool.isArray(Date.now());

//false
```

### ```jsTool.isValidDate(value, userFormat)```
根据给定格式验证日期是否合规。
```javascript

jsTool.isValidDate('2016-07-12', 'yyyy-mm-dd');

//true

jsTool.isValidDate('2016.07.32', 'yyyy.mm.dd');

//根据yyyy.mm.dd格式来验证日期,因为没有32号而返回false
```

### ```jsTool.isRegExp(value)```
```javascript
jsTool.isRegExp(/^abc/);

//true

jsTool.isRegExp(new RegExp('abc'));

//true

jsTool.isRegExp('abc');

//false
```

### ```jsTool.limitStr(str, length)```
根据length来限制给定的字符串str的长度,如超出,超出部分使用省略号替换
```javascript
jsTool.limitStr('javascript', 2);

//"ja…"

jsTool.limitStr('javascript', 12);

//"javascript"
```

### ```jsTool.isBreakPoint(bp)```
目前很多设计已经采用了响应式布局来适配网站或应用在不同设备上的显示。所以经常需要在代码中判断当前处于哪一个屏幕适配度下。目前断点分别断在```320px```、```480px```、```768px```、```1024px```、```1366px```、```1440px```、```1600px```、```1920px```。
```javascript
//当前屏幕宽度1389px
jsTool.isBreakPoint(1366);

//false

jsTool.isBreakPoint(1440);

//true

//使用方法
if ( jsTool.isBreakPoint(320) ) {
  // 小于320px所做的操作
}
if ( jsTool.isBreakPoint(480) ) {
  // 在320px ~ 480px之间的操作
}
…
```

### ```jsTool.trim(str, trimMode)```
去除去除字符串的空白字符,第二个参数```trimMode```为```trim```模式,有三个取值:```left```、```right```、```all```。
* ```left```

```javascript
jsTool.trim('  javascript html css  ', 'left');
//"javascript html css  "
```

* ```right```

```javascript
jsTool.trim('  javascript html css  ', 'right');
//"  javascript html css"
```

* ```all```

```javascript
jsTool.trim('  javascript html css  ', 'all');
//"javascripthtmlcss"
```

## jsTool.uniqueArray(arr)
数组去重
```javascript
var arr = [1, 2, 3, 'a', '1', 'a', 2];
jsTool.uniqueArray(arr);
//[1, 2, 3, "a", "1"]
```

## jsTool.isEmptyObject(obj)
判断是否是空对象
```javascript
var obj = {};
jsTool.isEmptyObject(obj);
//true

obj[1] = 'Hello Js';
jsTool.isEmptyObject(obj);
//false
```
