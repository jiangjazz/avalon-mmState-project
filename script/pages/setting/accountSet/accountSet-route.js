define([], function() {
    return {
        views: {
            "body": {
                template: require("./accountSet.html"), // 指定模板地址
                controller: require("./accountSet") // 指定控制器地址
            }
        }
    }
})