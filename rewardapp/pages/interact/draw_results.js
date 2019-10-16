// pages/interact/draw_results.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // awardType表示奖励类型，0为其他礼券类，1为金豆，2为零钱
        resultInfo: {
            // 是否已全部加载完
            allLoaded: false,
            companyName: '广西道尔人力资源有限公司',
            companyLogo: '/images/no-logo.png',
            awardType: 2,
            awardNumber: '0.01',
            luckDrawNumber: 5,
            list: [
                {
                    userId: '001',
                    realName: '吕国红',
                    headFileName: '/images/headpic.png',
                    getTime: '2018-10-01 15:30',
                    awardType: 0,
                    awardNumber: '礼券碎片'
                },
                {
                    userId: '002',
                    realName: '柯小金',
                    headFileName: '/images/headpic.png',
                    getTime: '2018-10-01 15:30',
                    awardType: 1,
                    awardNumber: '5'
                },
                {
                    userId: '002',
                    realName: '柯小金',
                    headFileName: '/images/headpic.png',
                    getTime: '2018-10-01 15:30',
                    awardType: 2,
                    awardNumber: '0.01'
                },
                {
                    userId: '001',
                    realName: '吕国红',
                    headFileName: '/images/headpic.png',
                    getTime: '2018-10-01 15:30',
                    awardType: 0,
                    awardNumber: '礼券碎片'
                },
                {
                    userId: '002',
                    realName: '柯小金',
                    headFileName: '/images/headpic.png',
                    getTime: '2018-10-01 15:30',
                    awardType: 1,
                    awardNumber: '5'
                },
                {
                    userId: '002',
                    realName: '柯小金',
                    headFileName: '/images/headpic.png',
                    getTime: '2018-10-01 15:30',
                    awardType: 2,
                    awardNumber: '0.01'
                }
            ]
        }
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
        wx.showLoading({
            title: '加载中',
            mask: true
        })
        // 模拟1S延迟后加载完全部数据
        setTimeout(function(){
            this.setData({
                "resultInfo.allLoaded": true
            })
            // 关闭加载中提示
            wx.hideLoading();
        }.bind(this),1000)
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})