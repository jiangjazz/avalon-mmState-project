define([], function(){
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
});