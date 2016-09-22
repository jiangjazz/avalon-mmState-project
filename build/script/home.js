webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(13);


/***/ },

/***/ 13:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	    return {
	        views: {
	            "": {
	                template: __webpack_require__(14), // 指定模板地址
	                controller: __webpack_require__(15) // 指定控制器地址
	            }
	        }
	    }
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))

/***/ },

/***/ 14:
/***/ function(module, exports) {

	module.exports = "<div ms-controller=\"home\" class=\"m-logBody page-home\">\n    home\n</div>\n";

/***/ },

/***/ 15:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function(){
	    //视图
	    var content = avalon.define({
	        $id: 'home'
	    });

	    return avalon.controller(function($ctrl){
	         // 视图渲染后，意思是avalon.scan完成
	        $ctrl.$onRendered = function() {

	        }
	        // 进入视图
	        $ctrl.$onEnter = function() {

	        }
	        // 对应的视图销毁前
	        $ctrl.$onBeforeUnload = function() {
	            console.log(3);
	        }
	        // 指定一个avalon.scan视图的vmodels，vmodels = $ctrl.$vmodels.concact(DOM树上下文vmodels)
	        $ctrl.$vmodels = []
	    });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }

});