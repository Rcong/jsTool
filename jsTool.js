var jsTool = (function(){
    return  {
        /* 判断类型 */
        type:function(obj){
            return Object.prototype.toString.call(obj).slice(8,-1).toLowerCase();
        },
        isNumber:function(value){
            return this.type(value)==='number';
        },
        isString:function(value){
            return this.type(value)==='string';
        },
        isNull:function(value){
            return value===null;
        },
        isUndefined:function(value){
            return value===undefined;
        },
        isObject:function(value){
            return this.type(value)==='object';
        },
        isBoolean:function(value){
            return this.type(value)==='boolean';
        },
        isFunction:function(value){
            return this.type(value)==='function';
        },
        isArray:function(value){
            return this.type(value)==='array';
        },
        isDate:function(value){
            return this.type(value)==='date';
        },
        isRegExp:function(value){
            return this.type(value)==='regexp';
        },

        /* 克隆 */
        clone: function(obj) {

        }

        /* DOM操作 */
        //去除字符串的空白字符
        trim: function(str, trimMode) {
            switch (trimMode) {
                case 'left':
                    return str.replace(/(^\s+)/g, '');
                case 'right':
                    return str.replace(/(\s+$)/g, '');
                case 'all':
                    return str.replace(/(^\s+)|\s|(\s+$)/g, '');
                default:
                    return str.replace(/(^\s+)|(\s+$)/g, '');
            }
        },
        hasClass:function(el,cls){
            cls = this.trim(cls);
            return new RegExp('\\b'+cls+'\\b','g').test(el.className);
        },
        addClass:function(el,cls){
            var clsArray = this.trim(cls).split(/\s+/);
            for (var i = 0, length = clsArray.length; i < length; i++) {
                if(!this.hasClass(el, clsArray[i])){
                    el.className += (' ' + clsArray[i]);
                    console.log(el.className);
                }
            }
        },
        removeClass:function(el,cls){
            var removeClassArray = this.trim(cls).split(/\s+/),
                elClassArray = el.className.split(/\s+/);
            for (var i = 0, length = removeClassArray.length; i < length; i++) {
                var index = elClassArray.indexOf(removeClassArray[i]);
                if(!(index === -1)){
                    elClassArray.splice(index, 1);
                }
            }
            el.className = elClassArray.join(' ');
        },

        /* ajax */
        ajax: function(opts){

            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function(){
                if (xmlhttp.readyState === 4 && xmlhttp.status === 200){
                	var json = JSON.parse(xmlhttp.responseText);
                	opts.success(json);
                }
                if(xmlhttp.readyState === 4 && xmlhttp.status === 404){
                	opts.error();
                }
            }

            var dataStr = '';
            for(var key in opts.data){
            	dataStr += key + '=' + opts.data[key] + '&';
            }
            dataStr = dataStr.substr(0, dataStr.length-1);

            if(opts.type.toLowerCase() === 'post'){
            	xmlhttp.open(opts.type, opts.url, true);
            	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
            	xmlhttp.send(dataStr);
            }
            if(opts.type.toLowerCase() === 'get'){
            	xmlhttp.open(opts.type, opts.url + '?'+dataStr, true);
            	xmlhttp.send();
            }
		},

        /* Event */
        //跨浏览器addEvent
        addEvent: function(node, type, handler) {
            if (!node) return false;
            if (node.addEventListener) {
                node.addEventListener(type, handler, false);
                return true;
            } else if (node.attachEvent) {
                node['e' + type + handler] = handler;
                node[type + handler] = function() {
                    node['e' + type + handler](window.event);
                };
                node.attachEvent('on' + type, node[type + handler]);
                return true;
            }
            return false;
        },
        removeEvent: function(node, type, handler) {
            if (!node) return false;
            if (node.removeEventListener) {
                node.removeEventListener(type, handler, false);
                return true;
            } else if (node.detachEvent) {
                node.detachEvent('on' + type, node[type + handler]);
                node[type + handler] = null;
            }
            return false;
        }
    }
})();
