define([], function(){
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
});