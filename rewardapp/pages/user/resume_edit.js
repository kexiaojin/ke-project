// pages/user/resume_edit.js
const app = getApp();
const urlPath = app.globalData.urlPath;
Page({

    /**
     * 页面的初始数据
     */
    data: {
        base: {
            realName: '吕国红',
            sex: '女',
            headFileName: '/images/headpic.png',
            birthDate: '37',
            workyears: '5年',
            lastDegree: '本科',
            memo: '我的优势就是高大威猛，英俊潇洒，人见人爱，花见花开，车见车爆胎！'
        },
        resume: {
            resumeOpen: true,
            state: '在职-考虑机会',
            intention: [
                {
                    intentionId: '001',
                    positionName: '茶艺师',
                    salaryCNName: '面议',
                    addressPost: '桂林市',
                    tradeName: '生活服务'
                },
                {
                    intentionId: '002',
                    positionName: 'IT工程师',
                    salaryCNName: '8K-10K',
                    addressPost: '桂林市',
                    tradeName: '移动互联网'
                }
              ],
            experience: [
                {
                    experienceId: '001',
                    positionName: '销售经理',
                    companyName: '广西道尔人力资源有限公司',
                    workTime: '2018-10至2019-02',
                    positionDesc: '做牛做马，非常的累，早就想辞职了，但是又没钱。'
                },
                {
                    experienceId: '002',
                    positionName: '客服人员',
                    companyName: '广西中汇劳务有限公司',
                    workTime: '2019-03至今',
                    positionDesc: '做牛做马，非常的累，早就想辞职了，但是又没钱。'
                }
              ],
            project: [
                {
                    projectId: '001',
                    projectName: '桂林天网子系统',
                    positionName: '项目经理',
                    workTime: '2018-10至2019-02',
                    projectDesc: '做牛做马，非常的累，早就想辞职了，但是又没钱。'
                }
              ],
            education: [
                {
                    educationId: '001',
                    university: '广西师范大学',
                    degree: '本科',
                    major: '电子信息工程',
                    studyTime: '2012-09至2016-06'
                }
            ],
            photo: ['https://www.doerjob.com/images/logo.png','https://www.doerjob.com/images/code.png']
        }
    },
    // 切换是否简历公开
    switchChange: function(e){
        this.setData({
            "resume.resumeOpen": e.detail.value
        })
    },
    // 编辑求职意向
    addIntention: function(e){
        var typeId = e.currentTarget.dataset.type
        wx.navigateTo({
            url: 'add_intention?typeId='+typeId
        })
    },
    // 编辑工作经历
    addExperience: function(e){
        var typeId = e.currentTarget.dataset.type
        wx.navigateTo({
            url: 'add_experience?typeId='+typeId
        })
    },
    // 编辑项目经验
    addProject: function(e){
        var typeId = e.currentTarget.dataset.type
        wx.navigateTo({
            url: 'add_project?typeId='+typeId
        })
    },
    // 编辑教育经历
    addEducation: function(e){
        var typeId = e.currentTarget.dataset.type
        wx.navigateTo({
            url: 'add_education?typeId='+typeId
        })
    },
    // 删除求职意向
    intentionDel: function(e){
        wx.showModal({
            title: '确定删除？',
            content: '完善的简历将更有竞争力',
            confirmColor: '#e69422',
            success: (res) => {
                // res.confirm 为 true 时，表示用户点击了确定按钮
                if(res.confirm) {
                    wx.showToast({
                        title: '删除成功',
                        icon: 'success',
                        mask: true
                    })
                }
            }
        })
    },
    // 删除工作经历
    experienceDel: function(e){
        wx.showModal({
            title: '确定删除？',
            content: '完善的简历将更有竞争力',
            confirmColor: '#e69422',
            success: (res) => {
                // res.confirm 为 true 时，表示用户点击了确定按钮
                if(res.confirm) {
                    wx.showToast({
                        title: '删除成功',
                        icon: 'success',
                        mask: true
                    })
                }
            }
        })
    },
    // 删除项目经验
    projectDel: function(e){
        wx.showModal({
            title: '确定删除？',
            content: '完善的简历将更有竞争力',
            confirmColor: '#e69422',
            success: (res) => {
                // res.confirm 为 true 时，表示用户点击了确定按钮
                if(res.confirm) {
                    wx.showToast({
                        title: '删除成功',
                        icon: 'success',
                        mask: true
                    })
                }
            }
        })
    },
    // 删除教育经历
    educationDel: function(e){
        wx.showModal({
            title: '确定删除？',
            content: '完善的简历将更有竞争力',
            confirmColor: '#e69422',
            success: (res) => {
                // res.confirm 为 true 时，表示用户点击了确定按钮
                if(res.confirm) {
                    wx.showToast({
                        title: '删除成功',
                        icon: 'success',
                        mask: true
                    })
                }
            }
        })
    },
    showBig: function(e){
        var that = this,
            src = e.currentTarget.dataset.src;
        wx.previewImage({
            current: src,
            urls: that.data.resume.photo
        })
    },
    delImage: function(e){
        var that = this,
            index = e.currentTarget.dataset.index,
            newPhoto = this.data.resume.photo;
        newPhoto.splice(index,1);
        that.setData({
            "resume.photo": newPhoto
        })
    },
    getImage: function(e){
        var that = this;
        wx.chooseImage({
            count: 1,
            sizeType: ['compressed'],
            sourceType: ['album', 'camera'],
            success: function(res){
                that.setData({
                    "resume.photo": that.data.resume.photo.concat(res.tempFilePaths)
                })
            }
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