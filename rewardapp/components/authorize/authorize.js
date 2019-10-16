// components/authorize/authorize.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        isLogin: Boolean
    },

    /**
     * 组件的初始数据
     */
    data: {
        showDialog: false
    },

    /**
     * 组件的方法列表
     */
    methods: {
        onshow: function(e){
            this.setData({
                "showDialog": true
            })
        },
        close: function(e){
            this.setData({
                "showDialog": false
            })
        },
        bindGetPhoneNumber: function(e){
            if(e.detail.encryptedData){
                this.triggerEvent('weixinlogin',e.detail);
            }else{
                console.log("您拒绝了授权")
            }
        },
        getToLogin: function(e){
            this.triggerEvent('userlogin',e.detail);
        }
    }
})
