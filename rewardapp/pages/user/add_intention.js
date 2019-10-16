// pages/user/add_intention.js
const app = getApp();
const urlPath = app.globalData.urlPath;
Page({

    /**
     * 页面的初始数据
     */
    data: {
        positionData: [],
        tradeData: [],
        cityData: [{province: "不限", provinceId: "-1", city: "不限", cityId: "-1", county: "不限", countyId: "-1"}],
        info: {
            positionType: '',
            positionId: '',
            tradeType: '',
            tradeId: '',
            salaryType: '',
            salaryTypeId: '',
            addressPost: '不限',
            addressPostId: ['-1', '-1', '-1']
        }
    },
    salaryTypeSave: function(e){
        this.setData({
            "info.salaryType": e.detail.name,
            "info.salaryTypeId": e.detail.id
        })
    },
    positionSave: function(e){
        if (e.detail == 'close') {
            return;
        }
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
            "positionData": pickerArray,
            "info.positionType": nameText,
            "info.positionId": idText
        })
    },
    tradeSave: function(e){
        if (e.detail == 'close') {
            return;
        }
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
            "tradeData": pickerArray,
            "info.tradeType": nameText,
            "info.tradeId": idText
        })
    },
    citySave: function(e){
        if (e.detail == 'close') {
            return;
        }
        var pickerArray = e.detail,
            pickerId = [],
            nameText = '';
        if(pickerArray[0].countyId==-1){
            this.setData({
                "cityData": pickerArray,
                "info.addressPost": '不限',
                "info.addressPostId": '-1'
            })
        }else{
            for(var i=0;i<pickerArray.length;i++){
                nameText = pickerArray[i].province + '-' + pickerArray[i].city + '-'  + pickerArray[i].county;
                pickerId.push(pickerArray[i].provinceId);
                pickerId.push(pickerArray[i].cityId);
                pickerId.push(pickerArray[i].countyId);
            }
            this.setData({
                "cityData": pickerArray,
                "info.addressPost": nameText,
                "info.addressPostId": pickerId
            })
        }
    },
    getPositionType: function(e){
        this.selectComponent('#position').onshow()
    },
    getTradeType: function(e){
        this.selectComponent('#trade').onshow()
    },
    getRegion: function(e){
        this.selectComponent('#city').onshow()
    },
    saveIntention: function(e){
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