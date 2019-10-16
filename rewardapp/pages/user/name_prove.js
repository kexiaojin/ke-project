// pages/user/name_prove.js
const app = getApp();
const urlPath = app.globalData.urlPath;
Page({

    /**
     * 页面的初始数据
     */
    data: {
        proveInfo: {
            realName: '',
            cardId: '',
            positivePic: '',
            oppositePic: ''
        }
    },
    showBig: function(e){
        var that = this,
            src = e.currentTarget.dataset.src;
        wx.previewImage({
            current: src,
            urls: [that.data.proveInfo.positivePic,that.data.proveInfo.oppositePic]
        })
    },
    delImage: function(e){
        var that = this,
            id = e.currentTarget.dataset.id;
        if(id=="positive"){
            this.setData({
                "proveInfo.positivePic": ''
            })
        }else if(id=="opposite"){
            this.setData({
                "proveInfo.oppositePic": ''
            })
        }
    },
    getImage: function(e){
        var that = this,
            id = e.currentTarget.dataset.id;
        wx.chooseImage({
            count: 1,
            sizeType: ['compressed'],
            sourceType: ['album', 'camera'],
            success: function(res){
                var tempFilePaths = res.tempFilePaths[0];
                if(id == "positive"){
                    that.setData({
                        "proveInfo.positivePic": tempFilePaths
                    })
                }else if(id == "opposite"){
                    that.setData({
                        "proveInfo.oppositePic": tempFilePaths
                    })
                }
            }
        })
    },
    getRealName: function(e){
        this.setData({
            "proveInfo.realName": e.detail.value
        })
    },
    getCardId: function(e){
        this.setData({
            "proveInfo.cardId": e.detail.value
        })
    },
    saveProveInfo: function(e){
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