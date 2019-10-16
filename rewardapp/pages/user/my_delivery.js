// pages/user/my_delivery.js
const app = getApp();
const urlPath = app.globalData.urlPath;
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // tabId表示tab切换，0为已投递，1为面试中，2为已入职，3为不合适
        tabId: 0,
        // deliveryType表示投递状态，0为投递成功，1为面试邀请待确认，2为面试中，3为已拒绝面试，3为已入职，4为不合适
        delivered: {
            // 是否已全部加载完
            allLoaded: false,
            list: [
                {
                    deliveryType: 0,
                    deliveryTime: "2018-10-02",
                    jobOrderId: "1",
                    positionName: "JAVA工程师",
                    salaryCNName: "5K-6K",
                    rewardMoney: "500.00",
                    companyLogo: '/images/no-logo.png',
                    companyName: '广西道尔大数据科技有限公司'
                },
                {
                    deliveryType: 0,
                    deliveryTime: "2018-10-02",
                    jobOrderId: "2",
                    positionName: "JAVA工程师",
                    salaryCNName: "5K-6K",
                    rewardMoney: "500.00",
                    companyLogo: '/images/no-logo.png',
                    companyName: '广西道尔大数据科技有限公司'
                }
            ]
        },
        // 面试中
        interview: {
            // 是否已全部加载完
            allLoaded: false,
            list: [
                {
                    deliveryType: 1,
                    deliveryTime: "2018-10-02",
                    jobOrderId: "3",
                    positionName: "JAVA工程师",
                    salaryCNName: "5K-6K",
                    rewardMoney: "500.00",
                    companyLogo: '/images/no-logo.png',
                    companyName: '广西道尔大数据科技有限公司'
                },
                {
                    deliveryType: 2,
                    deliveryTime: "2018-10-02",
                    jobOrderId: "4",
                    positionName: "JAVA工程师",
                    salaryCNName: "5K-6K",
                    rewardMoney: "500.00",
                    companyLogo: '/images/no-logo.png',
                    companyName: '广西道尔大数据科技有限公司'
                },
                {
                    deliveryType: 3,
                    deliveryTime: "2018-10-02",
                    jobOrderId: "5",
                    positionName: "JAVA工程师",
                    salaryCNName: "5K-6K",
                    rewardMoney: "500.00",
                    companyLogo: '/images/no-logo.png',
                    companyName: '广西道尔大数据科技有限公司'
                }
            ]
        },
        // 已入职
        enrolled: {
            // 是否已全部加载完
            allLoaded: false,
            list: [
                {
                    deliveryType: 4,
                    deliveryTime: "2018-10-02",
                    jobOrderId: "6",
                    positionName: "JAVA工程师",
                    salaryCNName: "5K-6K",
                    rewardMoney: "500.00",
                    companyLogo: '/images/no-logo.png',
                    companyName: '广西道尔大数据科技有限公司'
                },
                {
                    deliveryType: 4,
                    deliveryTime: "2018-10-02",
                    jobOrderId: "7",
                    positionName: "JAVA工程师",
                    salaryCNName: "5K-6K",
                    rewardMoney: "500.00",
                    companyLogo: '/images/no-logo.png',
                    companyName: '广西道尔大数据科技有限公司'
                }
            ]
        },
        // 不合适
        improper: {
            // 是否已全部加载完
            allLoaded: false,
            list: [
                {
                    deliveryType: 5,
                    deliveryTime: "2018-10-02",
                    jobOrderId: "8",
                    positionName: "JAVA工程师",
                    salaryCNName: "5K-6K",
                    rewardMoney: "500.00",
                    companyLogo: '/images/no-logo.png',
                    companyName: '广西道尔大数据科技有限公司'
                },
                {
                    deliveryType: 5,
                    deliveryTime: "2018-10-02",
                    jobOrderId: "9",
                    positionName: "JAVA工程师",
                    salaryCNName: "5K-6K",
                    rewardMoney: "500.00",
                    companyLogo: '/images/no-logo.png',
                    companyName: '广西道尔大数据科技有限公司'
                },
                {
                    deliveryType: 5,
                    deliveryTime: "2018-10-02",
                    jobOrderId: "10",
                    positionName: "JAVA工程师",
                    salaryCNName: "5K-6K",
                    rewardMoney: "500.00",
                    companyLogo: '/images/no-logo.png',
                    companyName: '广西道尔大数据科技有限公司'
                },
                {
                    deliveryType: 5,
                    deliveryTime: "2018-10-02",
                    jobOrderId: "11",
                    positionName: "JAVA工程师",
                    salaryCNName: "5K-6K",
                    rewardMoney: "500.00",
                    companyLogo: '/images/no-logo.png',
                    companyName: '广西道尔大数据科技有限公司'
                },
                {
                    deliveryType: 5,
                    deliveryTime: "2018-10-02",
                    jobOrderId: "12",
                    positionName: "JAVA工程师",
                    salaryCNName: "5K-6K",
                    rewardMoney: "500.00",
                    companyLogo: '/images/no-logo.png',
                    companyName: '广西道尔大数据科技有限公司'
                }
            ]
        }
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
                    "delivered.allLoaded": true
                })
            }else if(this.data.tabId==1){
                this.setData({
                    "interview.allLoaded": true
                })
            }else if(this.data.tabId==2){
                this.setData({
                    "enrolled.allLoaded": true
                })
            }else if(this.data.tabId==3){
                this.setData({
                    "improper.allLoaded": true
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