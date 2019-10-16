// pages/user/add_education.js
const app = getApp();
const urlPath = app.globalData.urlPath;
Page({

    /**
     * 页面的初始数据
     */
    data: {
        majorData: [],
        info: {
            schoolName: '',
            positionName: '',
            lastDegreeName: '',
            lastDegreeId: '',
            majorType: '',
            majorId: '',
            startDate: '',
            endDate: '',
            now: false
        }
    },
    getSchoolName: function(e){
        this.setData({
            "info.projectName": e.detail.value
        })
    },
    degreeTypeSave: function(e){
        this.setData({
            "info.lastDegreeName": e.detail.name,
            "info.lastDegreeId": e.detail.id
        })
    },
    getMajorType: function(e){
        this.selectComponent('#major').onshow()
    },
    majorSave: function(e){
        var pickerArray = e.detail,
            pickerName = [],
            pickerId = [],
            nameText = '',
            idText = '';
        for(var i=0;i<pickerArray.length;i++){
            pickerName.push(pickerArray[i].name);
            pickerId.push(pickerArray[i].id);
        }
        nameText = pickerName.join();
        idText = pickerId.join();
        this.setData({
            "majorData": pickerArray,
            "info.majorType": nameText,
            "info.majorId": idText
        })
    },
    getStartDate: function(e){
        this.setData({
            "info.startDate": e.detail.value
        })
    },
    getEndDate: function(e){
        this.setData({
            "info.endDate": e.detail.value
        })
    },
    getNow: function(e){
        var value = e.detail.value;
        if(value.length>0){
            this.setData({
                "info.now": true
            })
        }else{
            this.setData({
                "info.now": false
            })
        }
    },
    saveEducation: function(e){
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