// pages/index/job_info.js
const app = getApp();
const urlPath = app.globalData.urlPath;
const device = wx.getSystemInfoSync();
const width = device.windowWidth;
const height = device.windowHeight;
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // 获奖提示弹窗
        drawTips: {
            showModal: false,
            content: ''
        },
        // 是否已投递
        hasDeliver: false,
        // 简历是否完善
        perfectResume: false,
        // 生成朋友圈分享图
        longImgData: {
            iconFile: '/images/no-logo.png',
            realName: "曾莉娜",
            companyName: '道尔大数据科技有限公司',
            positionName: "高级Web前端工程师",
            salaryCNName: "50K-68K",
            workYears: "3-5年",
            needDegreeCNName: "本科",
            personsNum: '5',
            addressPost: "桂林市",
            qrCode: '/images/no-pic.png',
            positionDesc: '1、负责Web前端、移动应用研发工作。<br/>2、不怕加班，因为公司经常加班。<br/>3、不怕加班，因为公司经常加班。<br/>4、负责Web前端、移动应用研发工作。'
        },
        // 地图坐标
        markers: [{
            latitude: 25.26029,
            longitude: 110.28013
        }],
        // 分享给好友
        shareConfig: {
            title: '',
            imgPath: '',
            urlPath: ''
        },
        // 公司信息
        companyInfo: {
            companyId: '001',
            companyName: '广西道尔人力资源有限公司',
            iconFile: '/images/no-logo.png',
            tradeType: '所属行业',
            companyTypeName: '单位性质',
            companySizeName: '公司规模'
        },
        // 职位信息
        jobInfo: {
            jobOrderId: "1",
            positionName: "JAVA工程师",
            salaryCNName: "5K-6K",
            workYears: "3-5年",
            needDegreeCNName: "本科",
            recruitNumber: '5',
            addressPost: "桂林市",
            entryAward: "200.00",
            recommendAward: "500.00",
            luckDrawed: false,
            positionDesc: '1、负责Web前端、移动应用研发工作。',
            address: '桂林市翠竹路2号'
        },
        // 相似职位
        jobList: [
            {
                jobOrderId: "1",
                positionName: "JAVA工程师",
                salaryCNName: "5K-6K",
                workYears: "3-5年",
                needDegreeCNName: "本科",
                recruitNumber: '5',
                addressPost: "桂林市",
                rewardMoney: "500.00",
                companyLogo: '/images/no-logo.png',
                companyName: '广西道尔大数据科技有限公司'
            },
            {
                jobOrderId: "2",
                positionName: "JAVA工程师",
                salaryCNName: "5K-6K",
                workYears: "3-5年",
                needDegreeCNName: "本科",
                recruitNumber: '5',
                addressPost: "桂林市",
                rewardMoney: "500.00",
                companyLogo: '/images/no-logo.png',
                companyName: '广西道尔大数据科技有限公司'
            },
            {
                jobOrderId: "3",
                positionName: "JAVA工程师",
                salaryCNName: "5K-6K",
                workYears: "3-5年",
                needDegreeCNName: "本科",
                recruitNumber: '5',
                addressPost: "桂林市",
                rewardMoney: "500.00",
                companyLogo: '/images/no-logo.png',
                companyName: '广西道尔大数据科技有限公司'
            },
            {
                jobOrderId: "4",
                positionName: "JAVA工程师",
                salaryCNName: "5K-6K",
                workYears: "3-5年",
                needDegreeCNName: "本科",
                recruitNumber: '5',
                addressPost: "桂林市",
                rewardMoney: "500.00",
                companyLogo: '/images/no-logo.png',
                companyName: '广西道尔大数据科技有限公司'
            },
            {
                jobOrderId: "5",
                positionName: "JAVA工程师",
                salaryCNName: "5K-6K",
                workYears: "3-5年",
                needDegreeCNName: "本科",
                recruitNumber: '5',
                addressPost: "桂林市",
                rewardMoney: "500.00",
                companyLogo: '/images/no-logo.png',
                companyName: '广西道尔大数据科技有限公司'
            }
        ]
    },
    // 互动抽奖
    luckDraw: function(e){
        this.setData({
            "drawTips.showModal": true,
            "drawTips.content": '获得xxx奖励'
        })
        // wx.showModal({
        //     title: '恭喜您',
        //     content: '获得xxx奖励',
        //     showCancel: false,
        //     confirmColor: '#e69422',
        //     success: (res) => {
        //         if(res.confirm) {
        //             this.setData({
        //                 "jobInfo.luckDrawed": true
        //             })
        //         }
        //     },
        // })
    },
    // 互动抽奖确定
    getDraw: function(e){
        this.setData({
            "drawTips.showModal": false,
            "jobInfo.luckDrawed": true
        })
    },
    // 查看结果
    drawResults: function(e){
        wx.navigateTo({
            url: '/pages/interact/draw_results'
        })
    },
    // 打开地图
    getMap: function(e){
        var latitude = this.data.markers[0].latitude,
            longitude = this.data.markers[0].longitude,
            name = this.data.companyInfo.companyName,
            address = this.data.jobInfo.address;
        wx.openLocation({
            latitude: latitude,
            longitude: longitude,
            name: name,
            address: address,
            fail: function(e){
                wx.showToast({
                    title: '获取地图失败，请稍后再试',
                    icon: 'none',
                    mask: true
                })
            }
        })
    },
    // 分享
    share: function(e){
        this.selectComponent('#share').onshow()
    },
    // 生成分享小图
    getTempFile: function(e){
        const that = this;
        wx.canvasToTempFilePath({
            canvasId: 'imgCanvas',
            success: function(res) {
                that.setData({
                    "shareConfig.imgPath": res.tempFilePath
                })
            }
        })
    },
    // 投递简历
    keepDelivery: function(e){
        this.setData({
            "hasDeliver": true
        })
        wx.showToast({
            title: '投递成功',
            icon: 'success',
            mask: true
        })
    },
    delivery: function(e){
        var that = this;
        if(that.data.perfectResume == true){
            that.keepDelivery();
        }else{
            wx.showModal({
                title: '请完善简历后投递',
                content: '目前简历完善度40%',
                cancelText: '继续投递',
                confirmText: '去完善',
                confirmColor: '#e69422',
                success: (res) => {
                    // res.confirm 为 true 时，表示用户点击了确定按钮
                    if(res.confirm) {
                        wx.navigateTo({
                            url: '/pages/user/resume_edit'
                        })
                    }else if(res.cancel){
                        that.keepDelivery();
                    }
                },
            })
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
        // 生成分享小图
        const that = this;
        const shareTitle = '招聘【' + this.data.jobInfo.positionName + '】';
        const sahreUrlPath = '/pages/index/job_info?id=' + this.data.jobInfo.jobOrderId;
        this.setData({
            "shareConfig.title": shareTitle,
            "shareConfig.urlPath": sahreUrlPath
        })

        const context = wx.createCanvasContext('imgCanvas');
        context.setFillStyle('#fff')
        context.fillRect(0, 0, 300, 240)
        context.drawImage('/images/share-pic.png', 0, 0, 300, 240)
        context.setFontSize(22)
        context.setFillStyle('#e69422')
        context.fillText('￥'+that.data.jobInfo.salaryCNName,0,22)
        context.setFontSize(14)
        context.setFillStyle('#999')
        context.setTextAlign('right')
        context.fillText(that.data.jobInfo.addressPost+' | '+that.data.jobInfo.recruitNumber+'人 | '+that.data.jobInfo.needDegreeCNName+' | '+that.data.jobInfo.workYears,300,22)
        
        context.draw(false,function(){
            setTimeout(function(){
                that.getTempFile();
            },200)
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
        const shareTitle = this.data.shareConfig.title;
        const shareImgPath = this.data.shareConfig.imgPath;
        const shareUrlPath = this.data.shareConfig.urlPath;
        
        return {
            title: shareTitle,
            imageUrl: shareImgPath,
            path: shareUrlPath
        }
    }
})