// pages/user/wallet.js
const app = getApp();
const urlPath = app.globalData.urlPath;
Page({

    /**
     * 页面的初始数据
     */
    data: {
        info: {
            headFileName: '/images/headpic.png',
            realName: '曾莉娜',
            money: '500.00',
            withdraw: '',
            withdrawAble: '495.00',
            charges: '5.00'
        },
        // 是否显示密码输入弹窗
        showPswInput: false,
        // 输入的密码
        pswVal: '',
        // 文本框聚焦
        inputFocus: false,
    },
    // 监控提现金额输入
    getWithdraw: function(e){
        this.setData({
            "info.withdraw": e.detail.value
        })
    },
    // 全部
    getAll: function(e){
        this.setData({
            "info.withdraw": this.data.info.withdrawAble
        })
    },
    // 提现
    saveWithdraw: function(e){
        // wx.showModal({
        //     title: '请先设置提现密码',
        //     content: '为了保障账号安全，提现需要密码',
        //     confirmColor: '#e69422',
        //     confirmText: '去设置',
        //     success: (res) => {
        //         if(res.confirm) {
        //             wx.navigateTo({
        //                 url: '/pages/user/withdraw_psw'
        //             })
        //         }
        //     },
        // })
        this.setData({
            "showPswInput": true,
            "inputFocus": true
        });
    },
    // 输完了密码之后
    confirmWithdraw: function(e){
        var val = this.data.pswVal;
        this.setData({ 
            "showPswInput": false, 
            "inputFocus": false, 
            "pswVal": '' 
        },()=>{
            wx.showToast({
                title: val,
                icon: 'none',
                mask: true
            })
        });
    },
    // 关闭密码输入弹窗
    close: function(e){
        this.setData({ 
            "showPswInput": false, 
            "inputFocus": false, 
            "pswVal": '' 
        });
    },
    // 获取焦点
    getFocus: function(e){
        this.setData({
            "inputFocus": true
        });
    },
    // 监控密码输入
    getPsw: function(e){
        this.setData({
            "pswVal": e.detail.value
        });
        if(e.detail.value.length>=6){
            this.confirmWithdraw();
        }
    },
    // 忘记密码
    forgetPsw: function(e){
        wx.navigateTo({
            url: '/pages/user/withdraw_psw'
        })
    },
    // 查看明细
    getDetail: function(e){
        wx.navigateTo({
            url: '/pages/user/money_detail'
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