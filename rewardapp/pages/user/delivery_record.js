// pages/user/delivery_record.js
const app = getApp();
const urlPath = app.globalData.urlPath;
Page({

    /**
     * 页面的初始数据
     */
    data: {
        jobInfo: {
            jobOrderId: "1",
            companyLogo: '/images/no-logo.png',
            positionName: "JAVA工程师",
            companyName: '广西道尔大数据科技有限公司'
        },
        // 入职
        enrolledInfo: {
            // state表示入职状态，0为没有入职，1为已入职
            state: 1,
            entryAward: '200.00',
            positionName: "JAVA工程师",
            companyName: '广西道尔大数据科技有限公司'
        },
        // 面试邀请函
        interviewInfo: {
            // state表示面试邀请函状态，0为没有面试邀请函，1为普通状态，2为已接受，3为已拒绝
            state: 2,
            invitee: '柯小金先生',
            interviewTime: '2019-10-01 10:30',
            interviewPlace: '广西省桂林市象山区蔚思大厦4楼道儿工作网',
            remarks: '请带上简历与作品',
            contactMan: '曾女士',
            contactPhone: '15295955803',
            inviter: '广西道尔大数据科技有限公司',
            invitationTime: '2019-08-10'
        },
        // 记录详情
        recordInfo: [
            {
                time: '2019-10-02 09:00',
                title: '您已入职'
            },
            {
                time: '2019-10-02 09:00',
                title: '企业评定不合适'
            },
            {
                time: '2019-10-02 09:00',
                title: '您拒绝了面试邀请'
            },
            {
                time: '2019-10-02 09:00',
                title: '您接受了面试邀请'
            },
            {
                time: '2019-10-02 09:00',
                title: '企业向您发送了面试邀请'
            },
            {
                time: '2019-10-01 08:00',
                title: '企业查看了您的简历'
            },
            {
                time: '2019-10-01 06:00',
                title: '您成功投递了简历'
            }
        ]
    },
    // 拒绝面试邀请
    refuse: function(e){
        wx.showModal({
            title: '确定拒绝面试邀请？',
            content: '如有变动，请与企业联系',
            confirmColor: '#e69422',
            success: (res) => {
                // res.confirm 为 true 时，表示用户点击了确定按钮
                if(res.confirm) {
                    this.setData({
                        "interviewInfo.state": 3
                    })
                }
            },
        })
    },
    // 接受面试邀请
    accept: function(e){
        this.setData({
            "interviewInfo.state": 2
        })
        wx.showToast({
            title: '接受成功',
            icon: 'success',
            mask: true
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