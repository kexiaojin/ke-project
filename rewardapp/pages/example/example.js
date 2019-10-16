// pages/example/example.js
import WxValidate from '../../utils/WxValidate.js';
var timer;
const app = getApp();
const urlPath = app.globalData.urlPath;
Page({

    /**
     * 页面的初始数据
     */
    data: {
        warnTips: {
            msg: '',
            show: false
        },
        info: {
            validateInput: ''
        }
    },
    getValidateInput: function(e){
        this.setData({
            "info.validateInput": e.detail.value
        })
    },
    getValidate: function(e){
        var that = this;
        // 验证表单
        var params = this.data.info
        if (!this.WxValidate.checkForm(params)) {
            var error = this.WxValidate.errorList[0]
            if(timer){
                clearTimeout(timer);
            }
            that.setData({
                "warnTips": {
                    msg: error.msg,
                    show: true
                }
            })
            timer = setTimeout(function(){
                that.setData({
                    "warnTips": {
                        msg: '',
                        show: false
                    }
                })
            },2000)
        }else{
            wx.showToast({
                title: '验证通过',
                icon: 'success',
                mask: true
            })
        }
    },

    // 表单验证规格
    initValidate: function(){
        var rules = {
            validateInput: {
                required: true
            }
        };
        var messages = {
            validateInput: {
                required: '表单不能为空'
            }
        };
        this.WxValidate = new WxValidate(rules,messages)
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.initValidate()
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