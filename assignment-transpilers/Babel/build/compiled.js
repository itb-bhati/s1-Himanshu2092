"use strict";function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}var Profile=/*#__PURE__*/function(){function a(b,c){var d=this;_classCallCheck(this,a),_defineProperty(this,"getUserName",function(){return"".concat(d.firstName," ").concat(d.lastName)}),this.firstName=b,this.lastName=c}return _createClass(a,[{key:"userName",get:function a(){return this.getUserName()}}]),a}(),profile=new Profile("Himanshu","Chawla");console.log(profile.userName);
"use strict";function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var Rectangle=/*#__PURE__*/function(){function a(b,c){_classCallCheck(this,a),this.height=b,this.width=c}// Getter
return _createClass(a,[{key:"calcArea",// Method
value:function a(){return this.height*this.width}},{key:"area",get:function a(){return this.calcArea()}}]),a}(),square=new Rectangle(10,10);console.log(square.area);
