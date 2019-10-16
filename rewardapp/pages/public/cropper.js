// pages/public/cropper.js
import WeCropper from '../../wxCropper/we-cropper.js';
const device = wx.getSystemInfoSync();
const width = device.windowWidth;
const height = device.windowHeight;
Page({

    /**
     * 页面的初始数据
     */
    data: {
        cropperOpt: {
            id: 'cropper',
            targetId: 'targetCropper',
            pixelRatio: device.pixelRatio,
            width: width,
            height: height,
            scale: 2.5,
            zoom: 8,
            cut: {
                x: 20,
                y: (height-width) / 2,
                width: width-40,
                height: width-40
            }
        }
    },
    touchStart: function(e){
        this.cropper.touchStart(e)
    },
    touchMove: function(e){
        this.cropper.touchMove(e)
    },
    touchEnd: function(e){
        this.cropper.touchEnd(e)
    },
    getCancel: function(e){
        wx.navigateBack({
            delta: 1
        })
    },
    getCropperImage: function(e){
        this.cropper.getCropperImage((tempFilePath) => {
            if (tempFilePath) {
                var pages = getCurrentPages();
                var beforePage = pages[pages.length - 2];
                wx.navigateBack({
                    success: function() {
                        beforePage.saveImageBack(tempFilePath);
                    }
                });
            }else{
                wx.showToast({
                    title: '获取图片失败',
                    icon: 'none'
                })
            }
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.cropper = new WeCropper({
            id: 'cropper',
            targetId: 'targetCropper',
            pixelRatio: device.pixelRatio,
            width: width,
            height: height,
            scale: 2.5,
            zoom: 8,
            cut: {
                x: 20,
                y: (height-width) / 2,
                width: width-40,
                height: width-40
            },
            src: options.src
        }).on('ready', (ctx) => {
              
        })
        .on('beforeImageLoad', (ctx) => {
            wx.showLoading({
                title: '上传中',
            })
        })
        .on('imageLoad', (ctx) => {
                wx.hideLoading()
        })
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