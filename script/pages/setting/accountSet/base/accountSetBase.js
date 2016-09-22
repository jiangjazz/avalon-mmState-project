define([], function(){

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
});