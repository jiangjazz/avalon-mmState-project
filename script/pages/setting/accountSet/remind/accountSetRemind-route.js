define([], function() {
    return {
        views: {
            "ct": {
                template: require("./accountSetRemind.html"), // 指定模板地址
                controller: require("./accountSetRemind") // 指定控制器地址
            }
        }
    }
})