// pages/public/preview.js
const app = getApp();
const urlPath = app.globalData.urlPath;
Page({

    /**
     * 页面的初始数据
     */
    data: {
        title: {
            // 0是正常，1是+，2是-
            type: 2,
            amount: '240.00',
            text: '购买礼券'
        },
        info: [
            {
                label: '类型',
                text: '支出'
            },
            {
                label: '时间',
                text: '2019-05-15 19:02'
            },
            {
                label: '交易单号',
                text: '54613216549846516496135'
            },
            {
                label: '余额',
                text: '100.00'
            },
            {
                label: '备注',
                text: '我是很长的很长的很长的很长的备注'
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

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})