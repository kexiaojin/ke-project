// pages/user/money_detail.js
const app = getApp();
const urlPath = app.globalData.urlPath;
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // 开始时间
        startDate: '',
        // 结束时间
        endDate: '',
        // 明细列表，orderState代表正负，0是正常，1是+，2是-，state代表交易状态，0为交易关闭，1为正常
        item: [
            {
                month: '2018-12',
                order: [
                    {
                        orderId: '201812001', 
                        orderState: 1, 
                        state: 1, 
                        orderDate: '2018-12-08 20:30', 
                        orderType: '推荐奖励', 
                        orderMoney: '100'
                    },
                    {
                        orderId: '201812002', 
                        orderState: 2, 
                        state: 1, 
                        orderDate: '2018-12-05 12:00', 
                        orderType: '提现', 
                        orderMoney: '200',
                    }
                ]
            },
            {
                month: '2018-11',
                order: [
                    {
                        orderId: '201811001', 
                        orderState: 0, 
                        state: 0, 
                        orderDate: '2018-11-30 10:30', 
                        orderType: '提现', 
                        orderMoney: '300'
                    },
                    {
                        orderId: '201811002', 
                        orderState: 1, 
                        state: 1, 
                        orderDate: '2018-11-01 20:30', 
                        orderType: '入职奖励', 
                        orderMoney: '400'
                    }
                ]
            }
        ]
    },
    getStartDate: function(e){
        this.setData({
            "startDate": e.detail.value
        })
    },
    getEndDate: function(e){
        this.setData({
            "endDate": e.detail.value
        })
    },
    search: function(e){
        wx.showLoading({
            title: '加载中',
            mask: true
        })
        setTimeout(function () {
            wx.hideLoading()
        }, 2000)
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