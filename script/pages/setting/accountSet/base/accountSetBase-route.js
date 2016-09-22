define([], function() {
    return {
        views: {
            "ct": {
                template: require("./accountSetBase.html"), // 指定模板地址
                controller: require("./accountSetBase") // 指定控制器地址
            }
        }
    }
})