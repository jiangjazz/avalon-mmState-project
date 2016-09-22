define([], function(){
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
});