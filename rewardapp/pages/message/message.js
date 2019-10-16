// pages/message/message.js
const app = getApp();
const urlPath = app.globalData.urlPath;
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // 是否已全部加载完
        allLoaded: false,
        // 是否已关注公众号
        concerned: false,
        // 消息列表，type表示消息类型，0为职位推荐，1为好友投递简历通知，2为推荐奖励到账，3为入职奖励到账，4为互动抽奖，5为面试通知
        messageList: [
            {
                messageId: '001',
                type: 0,
                time: '2019年08月10日 10:15',
                position: 'JAVA工程师',
                company: '广西道尔人力资源有限公公司',
                content: '1、负责Web前端、移动应用研发工作。',
                link: '/pages/index/job_info'
            },
            {
                messageId: '002',
                type: 1,
                time: '2019年08月10日 10:15',
                position: 'JAVA工程师',
                company: '广西道尔人力资源有限公公司',
                content: '您的好友通过您分享的职位，向广西道尔大数据科技有限公司投递了简历。如果他入职成功，您和对方将有机会获得公司承诺的入职奖励和推荐奖励。',
                link: '/pages/index/job_info'
            },
            {
                messageId: '003',
                type: 2,
                time: '2019年08月10日 10:15',
                position: 'JAVA工程师',
                company: '广西道尔人力资源有限公公司',
                content: '您的好友已入职，广西道尔大数据科技有限公司，人事经理曾女士兑现承诺，推荐奖励已存入您的钱包。',
                link: '/pages/index/job_info'
            },
            {
                messageId: '004',
                type: 3,
                time: '2019年08月10日 10:15',
                position: 'JAVA工程师',
                company: '广西道尔人力资源有限公公司',
                content: '您已入职，广西道尔大数据科技有限公司，人事经理曾女士兑现承诺，入职奖励已存入您的钱包。',
                link: '/pages/index/job_info'
            },
            {
                messageId: '005',
                type: 4,
                time: '2019年08月10日 10:15',
                position: 'JAVA工程师',
                company: '广西道尔人力资源有限公公司',
                content: '您参与互动抽奖，抽中5金豆点券，已存入您的钱包。',
                link: '/pages/index/job_info'
            },
            {
                messageId: '006',
                type: 5,
                time: '2019年08月10日 10:15',
                position: 'JAVA工程师',
                company: '广西道尔人力资源有限公公司',
                content: '蒋先生，您好！广西道尔大数据科技有限公司诚邀您于5月9日上午9:30，带上个人简历、身份证参加面试。',
                link: '/pages/index/job_info'
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
        // 删除未读消息数字
        app.removeUnread();
        // 滚动到最底部
        wx.pageScrollTo({
            scrollTop: 10000,
            duration: 0
        })
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
        var that = this;
        that.setData({
            "allLoaded": true
        },()=>{
            // 加载完成后停止下拉刷新动效
            wx.stopPullDownRefresh()
        })
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