// pages/user/share_record.js
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
        // 推荐入职
        recommendEntryInfo: {
            // state表示推荐入职状态，0为没有人入职，1为有人入职
            state: 1,
            entryNumber: 2,
            positionName: "JAVA工程师",
            companyName: '广西道尔大数据科技有限公司',
            recommendAward: "500.00",
            recommendAwardTotal: "1000.00",
            list: [
                {
                    userId: '001',
                    realName: "柯小金",
                    headFileName: "/images/headpic.png"
                },
                {
                    userId: '002',
                    realName: "柯大金",
                    headFileName: "/images/headpic.png"
                }
            ]
        },
        // 推荐投递
        recommendDeliveryInfo: {
            // state表示推荐投递状态，0为没有人投递，1为有人投递
            state: 1,
            deliveryNumber: 5,
            list: [
                {
                    userId: '003',
                    realName: "柯小金",
                    headFileName: "/images/headpic.png"
                },
                {
                    userId: '004',
                    realName: "柯大金",
                    headFileName: "/images/headpic.png"
                },
                {
                    userId: '005',
                    realName: "柯大金",
                    headFileName: "/images/headpic.png"
                },
                {
                    userId: '006',
                    realName: "柯大金",
                    headFileName: "/images/headpic.png"
                },
                {
                    userId: '007',
                    realName: "柯大金",
                    headFileName: "/images/headpic.png"
                }
            ]
        },
        // 记录详情
        recordInfo: [
            {
                time: '2019-10-02 09:00',
                title: 'YYY通过您的推荐入职成功'
            },
            {
                time: '2019-10-02 09:00',
                title: 'XXX通过您的推荐入职成功'
            },
            {
                time: '2019-10-02 09:00',
                title: 'YYY通过您的推荐投递了简历'
            },
            {
                time: '2019-10-01 08:00',
                title: 'XXX通过您的推荐投递了简历'
            },
            {
                time: '2019-10-01 06:00',
                title: '您成功分享了职位'
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