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
