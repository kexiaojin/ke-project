// pages/index/index.js
const app = getApp();
const urlPath = app.globalData.urlPath;
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // 是否已全部加载完
        allLoaded: false,
        // 职位
        jobList: [
            {
                jobOrderId: "1",
                positionName: "JAVA工程师",
                salaryCNName: "5K-6K",
                workYears: "3-5年",
                needDegreeCNName: "本科",
                recruitNumber: '5',
                addressPost: "桂林市",
                rewardMoney: "500.00",
                companyLogo: '/images/no-logo.png',
                companyName: '广西道尔大数据科技有限公司'
            },
            {
                jobOrderId: "2",
                positionName: "JAVA工程师",
                salaryCNName: "5K-6K",
                workYears: "3-5年",
                needDegreeCNName: "本科",
                recruitNumber: '5',
                addressPost: "桂林市",
                rewardMoney: "500.00",
                companyLogo: '/images/no-logo.png',
                companyName: '广西道尔大数据科技有限公司'
            },
            {
                jobOrderId: "3",
                positionName: "JAVA工程师",
                salaryCNName: "5K-6K",
                workYears: "3-5年",
                needDegreeCNName: "本科",
                recruitNumber: '5',
                addressPost: "桂林市",
                rewardMoney: "500.00",
                companyLogo: '/images/no-logo.png',
                companyName: '广西道尔大数据科技有限公司'
            },
            {
                jobOrderId: "4",
                positionName: "JAVA工程师",
                salaryCNName: "5K-6K",
                workYears: "3-5年",
                needDegreeCNName: "本科",
                recruitNumber: '5',
                addressPost: "桂林市",
                rewardMoney: "500.00",
                companyLogo: '/images/no-logo.png',
                companyName: '广西道尔大数据科技有限公司'
            }
        ]
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
        wx.showLoading({
            title: '加载中',
            mask: true
        })
        // 模拟1S延迟后加载完全部数据
        setTimeout(function(){
            this.setData({
                "allLoaded": true
            })
            // 关闭加载中提示
            wx.hideLoading();
        }.bind(this),1000)
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})