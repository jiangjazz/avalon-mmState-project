define(["./mmRouter/mmState", "./mmRequest/mmRequest", "./animation/avalon.animation" ], function() {
    //初始化token
    // $.cookie('token', $.cookie('_token'));
    // 定义一个顶层的vmodel，用来放置全局共享数据
    var root = avalon.define({
            $id: "root",
            page: ""
        })

    //配置
    avalon.config({
        debug: false,
        //interpolate: ["{&", "&}"]
    });

    //设置路由
    /**
     * 首页
     *
     */
    avalon.state('home', {
        url: '/',
        stateUrl: './home-route'
    })
    /**
     * 设置模块
     *
     */
    avalon.state('setting', {
        url: '/setting',
        abstract: true, // 抽象状态，不会对应到url上
        stateUrl: './settingLayout-route'
    })
    //accountSet
    avalon.state('setting.accountSet', {
        url: '/accountSet',
        abstract: true, // 抽象状态，不会对应到url上
        stateUrl: './accountSet-route'
    }).state('setting.accountSet.base', {
        url: '/',
        stateUrl: './accountSetBase-route'
    }).state('setting.accountSet.remind', {
        url: '/remind',
        stateUrl: './accountSetRemind-route'
    })


    //引入组件
    require('./pages/components/components');


    avalon.controller.loader = function(url, callback) {
        if (url.join) {
            __webpack_require__.e(url[1], function(r) {
                callback(r(url[0]))
            })
        } else {
            var msg = url + '没有打包进来'
            window.console && console.log(msg)
            throw Error(msg)
        }
    }

    avalon.state.config({
        onError: function() {
            console.log("错误信息：" + arguments[0].message)
        }, // 强烈打开错误配置
        onLoad: function() {
            var curState = mmState.currentState.stateName;
            root.page = curState.split(".")[1]? curState.split(".")[1]: curState;
            console.log(root.page+'加载完成');
        }
    })

    avalon.router.errorback = function(){
        console.log(123213123);
        avalon.router.go('home');
    };

    avalon.history.start({
        fireAnchor: false
    })
    //go!!!!!!!!!
    avalon.scan()
})