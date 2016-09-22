define([], function(){
    //空方法
    var _emptyFn = function(){};
    //分页组件
    avalon.component("ms:pagination", {
        //当前页
        curPage: '',//传参
        pageUrl: 'javascript:;',//传参
        maxPage: '',//传参
        goPage: '',
        //手动输入页码
        setGoPage: _emptyFn,
        $replace: 1,
        $dispose: function (vm, elem) {
            elem.innerHTML = elem.textContent = ""
        },
        $init: function(vm){
            //手动输入页码
            vm.setGoPage = function(){
                var _this = this,
                    pageUrl = vm.pageUrl,
                    max = parseInt($(_this).attr('max')),
                    goPage;
                //设置只允许输入整数
                Public.checkNumberMax($(_this), event, true);
                goPage = !_this.value? '': parseInt(_this.value);
                //重置跳转页码
                if (!!max) {
                    if (goPage > max) {
                        vm.goPage = max;
                    } else if (goPage !== '' && goPage < 1) {
                        vm.goPage = 1;
                    } else {
                        vm.goPage = goPage;
                    }
                }
                //console.log(vm.goPage);
                //快捷跳转
                if (event.keyCode == 13 && !!$(_this).val()) {
                    location.href = vm.pageUrl + $(_this).val();
                    return false;
                }
            };
            //初始化goPage
            vm.goPage = vm.curPage;
        },
        $ready: function(vm) {
        },
        $template: require('./pagination.html')
    })

});