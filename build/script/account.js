webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(4);
	__webpack_require__(7);
	module.exports = __webpack_require__(10);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	    return {
	        views: {
	            "": {
	                template: __webpack_require__(2), // 指定模板地址
	                controller: __webpack_require__(3) // 指定控制器地址
	            }
	        }
	    }
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = "<div ms-controller=\"setting\">\n    <div class=\"m-slidebar\">\n        <a ms-repeat=\"links\" class=\"item\" ms-class=\"{{el.name == module ? el.icon+' active' : el.icon}}\" ms-attr-href=\"el.link\">\n            {{el.value}}\n        </a>\n    </div>\n    <div ms-view=\"body\" class=\"m-content\"></div>\n</div>";

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function(){
	    // 全局参数
	    var params = {
	            links: [{
	                name: 'accountSet',
	                icon: 'left-accountSet',
	                link: '/#!/setting/accountSet',
	                value: '账户设置'
	            }, {
	                name: 'qualification',
	                icon: 'left-qualification',
	                link: '/#!/setting/qualification',
	                value: '资质认证'
	            }, {
	                name: 'emailSet',
	                icon: 'left-emailSet',
	                link: '/#!/setting/emailSet',
	                value: 'Email设置'
	            }, {
	                name: 'messageSet',
	                icon: 'left-messageSet',
	                link: '/#!/setting/messageSet',
	                value: 'Message设置'
	            }, /*{
	                name: 'mrtbSet',
	                icon: 'left-mrtbSet',
	                link: '/#!/setting/mrtbSet',
	                value: 'MRTB设置'
	            }, */{
	                name: 'inviteReward',
	                icon: 'left-inviteReward',
	                link: '/#!/setting/inviteReward',
	                value: '邀请奖励'
	            }]
	        };
	    var content = avalon.define({
	        $id: 'setting',
	        module: 'accountSet'
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
	            //console.log(3);
	        }
	        // 指定一个avalon.scan视图的vmodels，vmodels = $ctrl.$vmodels.concact(DOM树上下文vmodels)
	        $ctrl.$vmodels = []
	    });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	    return {
	        views: {
	            "body": {
	                template: __webpack_require__(5), // 指定模板地址
	                controller: __webpack_require__(6) // 指定控制器地址
	            }
	        }
	    }
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = "<div ms-controller=\"accountSet\">\n    <div class=\"m-ct-header f-cb\">\n        <ul class=\"nav navbar-nav\">\n            <li ms-repeat=\"navLabs\" ms-class=\"{{el.name == activeLab ? 'active' : ''}}\">\n                <a ms-attr-href=\"{{el.link}}\">{{el.value}}</a>\n            </li>\n        </ul>\n    </div>\n\n    <div ms-view=\"ct\" class=\"m-ct\">\n    </div>\n</div>";

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function(){
	    var content = avalon.define({
	        $id: 'accountSet',
	        activeLab: 'base',
	        navLabs: [{
	            name: 'base',
	            link: '/#!/setting/accountSet/',
	            value: '基本设置'
	        }, {
	            name: 'remind',
	            link: '/#!/setting/accountSet/remind',
	            value: '提醒设置'
	        }]
	    });
	    return avalon.controller(function($ctrl){
	         // 视图渲染后，意思是avalon.scan完成
	        $ctrl.$onRendered = function(data) {
	        }
	        // 进入视图
	        $ctrl.$onEnter = function(data) {
	            avalon.vmodels.setting.module = 'accountSet';
	        }
	        // 对应的视图销毁前
	        $ctrl.$onBeforeUnload = function(data) {
	            //console.log(data);
	        }
	        // 指定一个avalon.scan视图的vmodels，vmodels = $ctrl.$vmodels.concact(DOM树上下文vmodels)
	        $ctrl.$vmodels = []
	    });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	    return {
	        views: {
	            "ct": {
	                template: __webpack_require__(8), // 指定模板地址
	                controller: __webpack_require__(9) // 指定控制器地址
	            }
	        }
	    }
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "<div ms-controller=\"accoundSetBase\" class=\"accoundSetBase\">\n    base\n\n</div>";

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function(){

	    //视图
	    var content = avalon.define({
	        $id: 'accoundSetBase'
	    });


	    return avalon.controller(function($ctrl){
	         // 视图渲染后，意思是avalon.scan完成
	        $ctrl.$onRendered = function(data) {
	        }
	        // 进入视图
	        $ctrl.$onEnter = function(data) {
	            avalon.vmodels.accountSet.activeLab = 'base';
	        }
	        // 对应的视图销毁前
	        $ctrl.$onBeforeUnload = function(data) {
	            //console.log(data);
	        }
	        // 指定一个avalon.scan视图的vmodels，vmodels = $ctrl.$vmodels.concact(DOM树上下文vmodels)
	        $ctrl.$vmodels = []
	    });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	    return {
	        views: {
	            "ct": {
	                template: __webpack_require__(11), // 指定模板地址
	                controller: __webpack_require__(12) // 指定控制器地址
	            }
	        }
	    }
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = "<div ms-controller=\"accoundSetRemind\" class=\"accoundSetRemind\">\n    remind\n</div>";

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function(){

	    //视图
	    var content = avalon.define({
	        $id: 'accoundSetRemind'
	    });

	    return avalon.controller(function($ctrl){
	         // 视图渲染后，意思是avalon.scan完成
	        $ctrl.$onRendered = function(data) {
	        }
	        // 进入视图
	        $ctrl.$onEnter = function(data) {
	            avalon.vmodels.accountSet.activeLab = 'remind';
	        }
	        // 对应的视图销毁前
	        $ctrl.$onBeforeUnload = function(data) {
	            //console.log(data);
	        }
	        // 指定一个avalon.scan视图的vmodels，vmodels = $ctrl.$vmodels.concact(DOM树上下文vmodels)
	        $ctrl.$vmodels = []
	    });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }
]);