define([], function() {
    return {
        views: {
            "": {
                template: require("./settingLayout.html"), // 指定模板地址
                controller: require("./settingLayout") // 指定控制器地址
            }
        }
    }
})