// pages/user/my_share.js
const app = getApp();
const urlPath = app.globalData.urlPath;
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // tabId表示tab切换，0为已分享，1为已推荐投递，2为已推荐入职
        tabId: 0,
        // 已分享
        shared: {
            // 是否已全部加载完
            allLoaded: false,
            list: [
                {
                    shareTime: "2018-10-02",
                    jobOrderId: "1",
                    positionName: "JAVA工程师",
                    salaryCNName: "5K-6K",
                    rewardMoney: "500.00",
                    companyLogo: '/images/no-logo.png',
                    companyName: '广西道尔大数据科技有限公司'
                },
                {
                    shareTime: "2018-10-02",
                    jobOrderId: "2",
                    positionName: "JAVA工程师",
                    salaryCNName: "5K-6K",
                    rewardMoney: "500.00",
                    companyLogo: '/images/no-logo.png',
                    companyName: '广西道尔大数据科技有限公司'
                }
            ]
        },
        // 已推荐投递
        recommendDelivery: {
            // 是否已全部加载完
            allLoaded: false,
            list: [
                {
                    shareTime: "2018-10-02",
                    jobOrderId: "3",
                    positionName: "JAVA工程师",
                    salaryCNName: "5K-6K",
                    rewardMoney: "500.00",
                    companyLogo: '/images/no-logo.png',
                    companyName: '广西道尔大数据科技有限公司',
                    deliveryNumber: '2'
                },
                {
                    shareTime: "2018-10-02",
                    jobOrderId: "4",
                    positionName: "JAVA工程师",
                    salaryCNName: "5K-6K",
                    rewardMoney: "500.00",
                    companyLogo: '/images/no-logo.png',
                    companyName: '广西道尔大数据科技有限公司',
                    deliveryNumber: '1'
                }
            ]
        },
        // 已推荐入职
        recommendEntry: {
            // 是否已全部加载完
            allLoaded: false,
            list: [
                {
                    shareTime: "2018-10-02",
                    jobOrderId: "5",
                    positionName: "JAVA工程师",
                    salaryCNName: "5K-6K",
                    rewardMoney: "500.00",
                    companyLogo: '/images/no-logo.png',
                    companyName: '广西道尔大数据科技有限公司',
                    entryNumber: '1'
                },
                {
                    shareTime: "2018-10-02",
                    jobOrderId: "6",
                    positionName: "JAVA工程师",
                    salaryCNName: "5K-6K",
                    rewardMoney: "500.00",
                    companyLogo: '/images/no-logo.png',
                    companyName: '广西道尔大数据科技有限公司',
                    entryNumber: '1'
                },
                {
                    shareTime: "2018-10-02",
                    jobOrderId: "7",
                    positionName: "JAVA工程师",
                    salaryCNName: "5K-6K",
                    rewardMoney: "500.00",
                    companyLogo: '/images/no-logo.png',
                    companyName: '广西道尔大数据科技有限公司',
                    entryNumber: '1'
                }
            ]
        },
    },
    // tab切换
    topbarTap: function(e){
        this.setData({
            "tabId": e.currentTarget.dataset.id
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
        wx.showLoading({
            title: '加载中',
            mask: true
        })
        // 模拟1S延迟后加载完全部数据
        setTimeout(function(){
            if(this.data.tabId==0){
                this.setData({
                    "shared.allLoaded": true
                })
            }else if(this.data.tabId==1){
                this.setData({
                    "recommendDelivery.allLoaded": true
                })
            }else if(this.data.tabId==2){
                this.setData({
                    "recommendEntry.allLoaded": true
                })
            }
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