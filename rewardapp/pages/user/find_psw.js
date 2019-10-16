// pages/user/find_psw.js
const app = getApp();
const urlPath = app.globalData.urlPath;
Page({

    /**
     * 页面的初始数据
     */
    data: {
        info: {
            phoneNumber: '',
            psw: '',
            code: '',
            getSuccess: false,
            second: 60
        }
    },
    // 60S计数
    goCount: function(e){
        var time = this.data.info.second;
        if(time==0){
            // 清除倒计时
            clearInterval(this.timer)
            this.setData({
                "info.getSuccess": false,
                "info.second": 60
            })
        }else{
            this.setData({
                "info.second": time-1
            })
        }
    },
    // 监控手机号输入
    getPhoneNumber: function(e){
        this.setData({
            "info.phoneNumber": e.detail.value
        })
    },
    // 监控密码输入
    getPsw: function(e){
        this.setData({
            "info.psw": e.detail.value
        })
    },
    // 监控短信验证码输入
    getCode: function(e){
        this.setData({
            "info.code": e.detail.value
        })
    },
    // 获取验证码
    getMsg: function(e){
        // 倒计时开始
        this.timer = setInterval(function(){
            this.goCount()
        }.bind(this),1000);
        this.setData({
            "info.getSuccess": true
        })
    },
    // 点击确定
    getBind: function(e){
        // 清除倒计时
        clearInterval(this.timer)
        wx.reLaunch({
            url: '/pages/index/index'
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})