// pages/public/error_404.js
const device = wx.getSystemInfoSync();
const width = device.windowWidth;
const height = device.windowHeight;
Page({

    /**
     * 页面的初始数据
     */
    data: {
        pageHeight: height,
        countDown: 10
    },
    goReward: function(e){
        // 清除倒计时
        clearInterval(this.timer)
        wx.reLaunch({
            url: '/pages/index/index'
        })
    },
    goCount: function(e){
        var time = this.data.countDown;
        if(time==0){
            // 清除倒计时
            clearInterval(this.timer)
            wx.reLaunch({
                url: '/pages/index/index'
            })
        }else{
            this.setData({
                "countDown": time-1
            })
        }
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
        // 倒计时开始
        this.timer = setInterval(function(){
            this.goCount()
        }.bind(this),1000);
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {
        // 清除倒计时
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