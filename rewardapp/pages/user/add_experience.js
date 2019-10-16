// pages/user/add_experience.js
const app = getApp();
const urlPath = app.globalData.urlPath;
Page({

    /**
     * 页面的初始数据
     */
    data: {
        textNumber: 0,
        info: {
            positionName: '',
            companyName: '',
            startDate: '',
            endDate: '',
            now: false,
            memo: ''
        }
    },
    textNumber: function(e){
        this.setData({
            "textNumber": e.detail.value.length
        })
    },
    getPositionName: function(e){
        this.setData({
            "info.positionName": e.detail.value
        })
    },
    getCompanyName: function(e){
        this.setData({
            "info.companyName": e.detail.value
        })
    },
    getStartDate: function(e){
        this.setData({
            "info.startDate": e.detail.value
        })
    },
    getEndDate: function(e){
        this.setData({
            "info.endDate": e.detail.value
        })
    },
    getNow: function(e){
        var value = e.detail.value;
        if(value.length>0){
            this.setData({
                "info.now": true
            })
        }else{
            this.setData({
                "info.now": false
            })
        }
    },
    getMemo: function(e){
        this.setData({
            "info.memo": e.detail.value
        })
    },
    saveExperience: function(e){
        wx.navigateBack({
            delta: 1
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