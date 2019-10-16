// pages/user/user_center.js
const app = getApp();
const urlPath = app.globalData.urlPath;
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // 是否已经登录
        isLogin: false,
        base: {
            realName: '吕国红',
            sex: '女',
            headFileName: '/images/headpic.png',
            birthDate: '37',
            workyears: '5年',
            lastDegree: '本科',
            memo: '我的优势就是高大威猛，英俊潇洒，人见人爱，花见花开，车见车爆胎！'
        },
        spiritPercent: "40"
    },
    // 退出账号
    getSignOut: function(e){

    },
    // 点击登录账号打开授权弹窗
    getAuthorize: function(e){
        this.selectComponent('#authorize').onshow()
    },
    // 点击授权手机号
    weixinLogin: function(e){
        console.log(e)
        this.setData({
            "isLogin": true
        })
    },
    // 点击手机号登录/注册
    userLogin: function(e){
        wx.navigateTo({
          url: '/pages/user/user_login'
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