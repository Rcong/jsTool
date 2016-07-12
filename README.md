# jsTool
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
目前很多设计已经采用了响应式布局来适配网站或应用在不同设备上的显示。所以经常需要在代码中判断当前处于哪一个屏幕适配度下。
