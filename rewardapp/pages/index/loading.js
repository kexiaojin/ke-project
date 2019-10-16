// pages/index/loading.js
const app = getApp();
const urlPath = app.globalData.urlPath;
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // 动画
        animation: {}
    },
    // 授权回调
    bindGetUserInfo: function(e){
        var that = this;
        if(e.detail.encryptedData){
            wx.reLaunch({
                url: '/pages/index/index'
            })
        }else{
            console.log("您拒绝了授权")
        }
    },
    // 微信小程序基础库版本号对比
    compareVersion: function(v1,v2){
        v1 = v1.split('.')
        v2 = v2.split('.')
        const len = Math.max(v1.length, v2.length)
        while (v1.length < len) {
            v1.push('0')
        }
        while (v2.length < len) {
            v2.push('0')
        }
        for (let i = 0; i < len; i++) {
            const num1 = parseInt(v1[i])
            const num2 = parseInt(v2[i])
            if (num1 > num2) {
                return 1
            } else if (num1 < num2) {
                return -1
            }
        }
        return 0
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var that = this;
        // 判断微信小程序基础库版本
        const version = wx.getSystemInfoSync().SDKVersion;
        if (this.compareVersion(version, '2.4.0') >= 0) {
            
        } else {
            wx.showModal({
                title: '温馨提示',
                content: '当前微信版本过低，部分功能将无法使用，请升级到最新版本后重试',
                confirmColor: '#e69422',
                success: (res) => {
                    // res.confirm 为 true 时，表示用户点击了确定按钮
                    if(res.confirm) {
                        wx.reLaunch({
                            url: '/pages/help/help'
                        })
                    }
                },
            })
        }
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
        // 创建连续动画
        var animation = wx.createAnimation({
                duration: 500
            })
        this.timer = setInterval(function(){
            animation.rotate(10).step().rotate(0).step().rotate(-10).step().rotate(0).step();
            this.setData({
                "animation": animation.export()
            })
        }.bind(this),2000)
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {
        // 清除连续动画
        clearInterval(this.timer)
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