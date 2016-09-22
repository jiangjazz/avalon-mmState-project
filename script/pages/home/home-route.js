define([], function() {
    return {
        views: {
            "": {
                template: require("./home.html"), // 指定模板地址
                controller: require("./home") // 指定控制器地址
            }
        }
    }
})