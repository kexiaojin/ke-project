// pages/index/company_info.js
const app = getApp();
const urlPath = app.globalData.urlPath;
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // 地图坐标
        markers: [{
            latitude: 25.26029,
            longitude: 110.28013
        }],
        // 公司信息
        companyInfo: {
            companyId: '001',
            companyName: '广西道尔人力资源有限公司',
            iconFile: '/images/no-logo.png',
            tradeType: '所属行业',
            companyTypeName: '单位性质',
            companySizeName: '公司规模',
            workTimes: '08:00-18:00',
            restDate: '周末双休',
            overtime: '偶尔加班',
            companyImpression: ['五险一金','加班补贴'],
            memoUrl: 'http://www.doerjob.com',
            memo: '我们公司非常好，经常组织去打球和健身，平时加班都不觉得累了，特别精神！',
            mapLocation: '广西桂林市丽君路一号',
            productList: [
                {
                    productId: '001',
                    productImg: '/images/ai-pic.png',
                    productName: '福袋妖怪',
                    productIntro: '该产品是给小孩子玩的，培养智力和身体协调能力。',
                    productWebsite: 'http://www.yaoguai.com'
                },
                {
                    productId: '002',
                    productImg: '/images/reward-pic.png',
                    productName: '机器人大作战',
                    productIntro: '该产品是给大人玩的，消磨时光。',
                    productWebsite: 'http://www.jiqiren.com'
                }
            ]
        },
        // 在招职位
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
            },
            {
                jobOrderId: "5",
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
    // 打开地图
    getMap: function(e){
        var latitude = this.data.markers[0].latitude,
            longitude = this.data.markers[0].longitude,
            name = this.data.companyInfo.companyName,
            address = this.data.companyInfo.mapLocation;
        wx.openLocation({
            latitude: latitude,
            longitude: longitude,
            name: name,
            address: address,
            fail: function(e){
                wx.showToast({
                    title: '获取地图失败，请稍后再试',
                    icon: 'none',
                    mask: true
                })
            }
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