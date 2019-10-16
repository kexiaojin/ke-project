// 自定义事件触发
var eventToUpdate = function(element,event){
    var evt = document.createEvent( 'HTMLEvents' );
    evt.initEvent(event, false, false);
    return !element.dispatchEvent(evt);
};
// 点击小图看大图
Vue.directive('bigimg', {
    inserted: function (el, binding, vnode) {
        $(el).on("click",function(){
            var imgSrc;
            var gallery = '<div class="weui-gallery"><div class="weui-gallery__img"></div><div class="weui-gallery__opr"><a href="javascript:" class="weui-gallery__del" onclick="$(\'.weui-gallery\').remove();"><i class="fa fa-fw fa-times"></i></a></div></div>';
            $("body").append(gallery);
            imgSrc = $(this).attr("data-src");
            $(".weui-gallery__img").css("background-image","url("+imgSrc+")");
        })
    }
});
// select2的双向绑定
Vue.directive('select2', {
    inserted: function (el, binding, vnode) {
        $(el).select2().on("select2:select", function(e){
            eventToUpdate(el,'change');
        });
    },
    componentUpdated: function (el, binding, vnode) {
        for (var i = 0; i < vnode.data.directives.length; i++) {
            if (vnode.data.directives[i].name == "model") {
                $(el).val(vnode.data.directives[i].value);
            }
        }
        $(el).trigger("change");
    }
});
// tooltip提示信息
Vue.directive('tooltip', {
    inserted: function (el, binding, vnode) {
        $(el).tooltip({
            title: binding.value
        });
    },
    componentUpdated: function (el, binding, vnode) {
        $(el).attr('title',binding.value).tooltip('_fixTitle').tooltip({
            title: binding.value
        });
    }
});
// textarea输入数字监控
Vue.directive('textarea', {
    inserted: function (el, binding, vnode) {
        $(el).next(".textarea-number").children('span').text($(el).val().length);
        $(el).on("keyup",function(){
            $(el).next(".textarea-number").children('span').text($(el).val().length);
        });
    }
});
// 刷新页面
Vue.directive('refresh', {
    inserted: function (el, binding, vnode) {
        $(el).on("click",function(){
            location.reload();
        });
    }
});
// 重置表单
Vue.directive('reset', {
    inserted: function (el, binding, vnode) {
        $(el).next(".input-reset-btn").on("click",function(){
            $(el).val('');
            eventToUpdate(el,'input');
        });
    }
});
// 文章简介字数剪裁
Vue.directive('moreclip', {
    inserted: function (el, binding, vnode) {
        var cliptext = binding.value,
            clipNum = binding.arg;
        if(cliptext.length > clipNum){
            $(el).text(cliptext.substring(0,clipNum)+'…');
        }else{
            $(el).text(cliptext)
        }
    }
});
// 生成随机背景色
Vue.directive('bgcolor', {
    inserted: function (el, binding, vnode) {
        var color = '#'+('00000'+(Math.random()*0x1000000<<0).toString(16)).substr(-6);
        $(el).css("background-color",color);
    }
});
// 时分选择
var timePacker = function(dom,e) {
    var hours = null;//存储 "时"
    var minutes = null;//存储 "分"
    var clientY = dom.offset().top + dom.height() + 20;//获取位置
    var clientX = dom.offset().left;
    var date = new Date();
    var nowHours = date.getHours();
    var nowMinutes = date.getMinutes();
    var time_hm=/^(0\d{1}|\d{1}|1\d{1}|2[0-3]):([0-5]\d{1})$/; //时间正则，防止手动输入的时间不符合规范
    var inputText = dom.is("input") ? dom.val():dom.text();
    //插件容器布局
    var html = '';
    html += '<div class="timePacker">';
        html += '<div class="timePacker-hours" style="display: block;">';
            html += '<div class="timePacker-title"><span>小时</span></div>';
            html += '<div class="timePacker-content">';
                html += '<ul class="list-unstyled">';
                    var i = 0;
                    while (i < 24)
                    {
                        var text = i < 10 ? "0" + i : i;
                        if(inputText !== "" && Number(inputText.split(":")[0]) === text){
                            html += '<li class="hoursList timePackerSelect">'+text+'</li>';
                            hours = Number(inputText.split(":")[0]);
                        }else{
                            html += '<li class="hoursList">'+text+'</li>';
                        }
                        i++;
                    }
                html += '</ul>';
            html +=  '</div>';
        html += '</div>';
        html += '<div class="timePacker-minutes" style="display: none;">';
            html += '<div class="timePacker-title"><span>分钟</span><span class="timePacker-back-hours" title="返回小时选择"><i class="fa fa-fw fa-arrow-left"></i></span></div>';
            html += '<div class="timePacker-content">';
                html += '<ul class="list-unstyled">';
                    var m = 0;
                    while (m < 60)
                    {
                        var textM = m < 10 ? "0" + m : m;
                        if(inputText !== "" && Number(inputText.split(":")[1]) === textM){
                            html += '<li class="mList timePackerSelect">'+textM+'</li>';
                            minutes = Number(inputText.split(":")[1]);
                        }else{
                            html += '<li class="mList">'+textM+'</li>';
                        }
                        m++;
                    }
                html += '</ul>';
            html +=  '</div>';
        html += '</div>';
    html += '</div>';
    if($(".timePacker").length > 0){
        $(".timePacker").remove();
    }
    $("body").append(html);
    $(".timePacker").css({
        top:clientY,
        left:clientX
    });
    var _con = $(".timePacker"); // 设置目标区域,如果当前鼠标点击非此插件区域则移除插件
    $(document).mouseup(function(e){
        if(!_con.is(e.target) && _con.has(e.target).length === 0){ // Mark 1
            _con.remove();
        }
    });
    //小时选择
    $(".hoursList").bind('click',function () {
        $(this).addClass("timePackerSelect").siblings().removeClass("timePackerSelect");
        hours = $(this).text();
        var timer = setTimeout(function () {
            $(".timePacker-hours").css("display","none");
            $(".timePacker-minutes").fadeIn();
            if(minutes !== null){
                var getTime = hours + ":" + minutes;
                if(time_hm.test(getTime)){
                    dom.removeClass("errorStyle");
                }
                dom.is("input") ? dom.val(getTime):dom.text(getTime);
            }
            clearTimeout(timer);
        },100);
    });
    //返回小时选择
    $(".timePacker-back-hours").bind('click',function () {
        var timer = setTimeout(function () {
            $(".timePacker-minutes").css("display","none");
            $(".timePacker-hours").fadeIn();
            clearTimeout(timer);
        },100);
    });
    //分钟选择
    $(".mList").bind('click',function () {
        $(this).addClass("timePackerSelect").siblings().removeClass("timePackerSelect");
        minutes = $(this).text();
        var timer = setTimeout(function () {
            var getTime = hours + ":" + minutes;
            if(time_hm.test(getTime)){
                dom.removeClass("errorStyle");
            }
            dom.is("input") ? dom.val(getTime):dom.text(getTime);
            clearTimeout(timer);
            _con.remove();
            eventToUpdate(e.target,'input');
        },100);
    })
}
// 获取链接地址参数
function linkParameter(link,opts) {
    var reg = new RegExp("(^|&)"+opts+"=([^&]*)(&|$)");
    var r = link.match(reg);
    if (r!=null) return unescape(r[2]); return null;
}
// 换行符转换
function textBrFix(content) {
    var reg=new RegExp("<br/>","g");
    return content.replace(reg,"\r\n");
}
// 关闭动画
+ function($) {
    "use strict";
    $.fn.transitionEnd = function(callback) {
        var events = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'],
            i, dom = this;
        function fireCallBack(e) {
            if (e.target !== this) return;
            callback.call(this, e);
            for (i = 0; i < events.length; i++) {
                dom.off(events[i], fireCallBack);
            }
        }
        if (callback) {
            for (i = 0; i < events.length; i++) {
                dom.on(events[i], fireCallBack);
            }
        }
        return this;
    };
}(jQuery);
// $.toast简单提示
+ function($) {
    "use strict";
    var defaults;     
    var show = function(html, className) {
        className = className || "";
        var mask = $("<div class='weui-mask_transparent'></div>").appendTo(document.body);

        var tpl = '<div class="weui-toast ' + className + '">' + html + '</div>';
        var dialog = $(tpl).appendTo(document.body);

        dialog.addClass("weui-toast--visible");
        dialog.show();
    };
    var hide = function(callback) {
        $(".weui-mask_transparent").remove();
        $(".weui-toast--visible").removeClass("weui-toast--visible").transitionEnd(function() {
            var $this = $(this);
            $this.remove();
            callback && callback($this);
        });
    }
    $.toast = function(text, style, callback) {
        if(typeof style === "function") {
            callback = style;
        }
        var className, iconClassName = 'fa fa-check-circle text-success';
        var duration = toastDefaults.duration;
        if(style == "cancel") {
            className = "weui-toast_cancel";
            iconClassName = 'fa fa-times-circle text-danger'
        } else if(style == "forbidden") {
            className = "weui-toast--forbidden";
            iconClassName = 'fa fa-exclamation-circle text-warning'
        } else if(style == "text") {
            className = "weui-toast--text";
        } else if(typeof style === typeof 1) {
            duration = style
        }
        show('<i class="' + iconClassName + ' weui-icon_toast"></i><p class="weui-toast_content">' + (text || "服务器错误") + '</p>', className);

        setTimeout(function() {
            hide(callback);
        }, duration);
    }
    $.showLoading = function(text) {
        var html = '<div class="weui_loading">';
        html += '<i class="weui-loading weui-icon_toast"></i>';
        html += '</div>';
        html += '<p class="weui-toast_content">' + (text || "加载中") + '</p>';
        show(html, 'weui_loading_toast');
    }
    $.hideLoading = function() {
        hide();
    }
    var toastDefaults = $.toast.prototype.defaults = {
        duration: 2000
    }
}(jQuery);
// 对话框
+ function($) {
    "use strict";
    var defaults;  
    $.modal = function(params, onOpen) {
        params = $.extend({}, defaults, params);
        var buttons = params.buttons;
        var buttonsHtml = buttons.map(function(d, i) {
            return '<a href="javascript:;" class="btn ' + (d.className || "") + '">' + d.text + '</a>';
        }).join("");
        var iconHtml = params.icon?'<div class="weui-dialog__' + params.icon + '"></div>':'';
        var customHtml = params.customImg?'<div class="weui-dialog__custom"><img src="'+ params.customImg +'"></div>':'';
        var tpl = '<div class="weui-dialog">' + '<div class="weui-dialog__hd"><a href="javascript:;" class="weui-dialog__close"><i class="fa fa-fw fa-times"></i></a>'+iconHtml+customHtml+'<div class="weui-dialog__title">' + params.title + '</div></div>' + ( params.text ? '<div class="weui-dialog__bd">' + params.text+'</div>' : '') + '<div class="weui-dialog__ft">' + buttonsHtml + '</div>' + '</div>';
        var dialog = $.openModal(tpl, onOpen);
        dialog.find(".weui-dialog__close").click(function(){
            $.closeModal();
        })
        dialog.find(".btn").each(function(i, e) {
            var el = $(e);
            el.click(function() {
                if(params.autoClose) $.closeModal();
                if(buttons[i].onClick) {
                  buttons[i].onClick.call(dialog);
                }
            });
        });
        return dialog;
    };
    $.openModal = function(tpl, onOpen) {
        var mask = $("<div class='weui-mask'></div>").appendTo(document.body);
        mask.show();
        var dialog = $(tpl).appendTo(document.body);
        if (onOpen) {
          dialog.transitionEnd(function () {
            onOpen.call(dialog);
          });
        }   
        dialog.show();
        mask.addClass("weui-mask--visible");
        dialog.addClass("weui-dialog--visible");
        return dialog;
    }
    $.closeModal = function() {
        $(".weui-mask--visible").removeClass("weui-mask--visible").transitionEnd(function() {
            $(this).remove();
        });
        $(".weui-dialog--visible").removeClass("weui-dialog--visible").transitionEnd(function() {
            $(this).remove();
        });
    };
    $.alert = function(text, icon, title, onOK) {
        var config;
        if (typeof text === 'object') {
            config = text;
        } else {
            if (typeof title === 'function') {
                onOK = arguments[1];
                title = undefined;
            }
          config = {
              text: text,
              icon: icon,
              title: title,
              onOK: onOK
          }
        }
        return $.modal({
            text: config.text,
            icon: config.icon,
            title: config.title,
            buttons: [{
                text: defaults.buttonOK,
                className: "btn-primary",
                onClick: config.onOK
            }]
      });
    }
    $.confirm = function(text, icon, title, onOK, onCancel) {
        var config;
        if (typeof text === 'object') {
            config = text
        } else {
          if (typeof title === 'function') {
              onCancel = arguments[2];
              onOK = arguments[1];
              title = undefined;
          }
          config = {
              text: text,
              icon: icon,
              title: title,
              onOK: onOK,
              onCancel: onCancel
          }
        }
        return $.modal({
            text: config.text,
            icon: config.icon,
            title: config.title,
            buttons: [
            {
                text: defaults.buttonCancel,
                className: "btn-default",
                onClick: config.onCancel
            },
            {
                text: defaults.buttonOK,
                className: "btn-primary",
                onClick: config.onOK
            }]
        });
    };
    $.prompt = function(text, icon, title, onOK, onCancel, input) {
        var config;
        if (typeof text === 'object') {
            config = text;
        } else {
            if (typeof title === 'function') {
                input = arguments[3];
                onCancel = arguments[2];
                onOK = arguments[1];
                title = undefined;
            }
            config = {
                text: text,
                icon: icon,
                title: title,
                input: input,
                onOK: onOK,
                onCancel: onCancel,
                empty: false
            }
        }
        var modal = $.modal({
            text: '<p class="weui-prompt-text">'+(config.text || '')+'</p><input type="text" class="form-control form-control-lg" id="weui-prompt-input" value="' + (config.input || '') + '" />',
            icon: config.icon,
            title: config.title,
            autoClose: false,
            buttons: [
            {
                text: defaults.buttonCancel,
                className: "btn-default",
                onClick: function () {
                    $.closeModal();
                    config.onCancel && config.onCancel.call(modal);
                }
            },
            {
                text: defaults.buttonOK,
                className: "btn-primary",
                onClick: function() {
                    var input = $("#weui-prompt-input").val();
                    if (!config.empty && (input === "" || input === null)) {
                        modal.find('.form-control').focus()[0].select();
                        return false;
                    }
                    $.closeModal();
                    config.onOK && config.onOK.call(modal, input);
                }
            }]
        }, function () {
            this.find('.form-control').focus()[0].select();
        });
        return modal;
    };
    defaults = $.modal.prototype.defaults = {
        icon: "",
        title: "提示",
        text: undefined,
        buttonOK: "确定",
        buttonCancel: "取消",
        buttons: [{
            text: "确定",
            className: "btn-primary"
        }],
        autoClose: true
    };
}(jQuery);
