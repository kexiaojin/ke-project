// pages/user/user_info.js
const app = getApp();
const urlPath = app.globalData.urlPath;
Page({

    /**
     * 页面的初始数据
     */
    data: {
        textNumber: 0,
        baseItem: {
            sex: [
                {value: '男', id: 0},
                {value: '女', id: 1}
            ],
            state: {
                itemList: [{"id":1,"name":"离职，可快速到岗"},{"id":2,"name":"在职，看看新机会"},{"id":3,"name":"在职，急需新机会"},{"id":4,"name":"在职，暂不跳槽"},{"id":5,"name":"我是应届毕业生"}],
                index: 0
            }
        },
        baseInfo: {
            // 0为未认证，1为已认证
            nameProve: 0,
            headFileName: '/images/headpic.png',
            realName: '',
            sex: '',
            stateName: '',
            stateId: '',
            lastDegreeName: '',
            lastDegreeId: '',
            birthDate: '',
            workyears: '',
            memo: ''
        }
    },
    degreeTypeSave: function(e){
        this.setData({
            "baseInfo.lastDegreeName": e.detail.name,
            "baseInfo.lastDegreeId": e.detail.id
        })
    },
    getState: function(e){
        var index = e.detail.value;
        var name = this.data.baseItem.state.itemList[index].name;
        var id = this.data.baseItem.state.itemList[index].id;
        this.setData({
            "baseItem.state.index":index,
            "baseInfo.stateName":name,
            "baseInfo.stateId":id
        })
    },
    // 富文本字数监控
    textNumber: function(e){
        this.setData({
            "textNumber": e.detail.value.length
        })
    },
    // 基本信息
    getImage: function(e){
        var that = this;
        wx.chooseImage({
            count: 1,
            sizeType: ['compressed'],
            sourceType: ['album', 'camera'],
            success: function(res){
                var src = res.tempFilePaths[0];
                wx.navigateTo({
                    url: '/pages/public/cropper?src='+src
                })
            }
        })
    },
    saveImageBack: function(e){
        this.setData({
            "baseInfo.headFileName": e
        })
    },
    getRealName: function(e){
        this.setData({
            "baseInfo.realName": e.detail.value
        })
    },
    getSex: function(e){
        this.setData({
            "baseInfo.sex": e.detail.value
        })
    },
    getBirthDate: function(e){
        this.setData({
            "baseInfo.birthDate": e.detail.value
        })
    },
    getWorkyears: function(e){
        this.setData({
            "baseInfo.workyears": e.detail.value
        })
    },
    getMemo: function(e){
        this.setData({
            "baseInfo.memo": e.detail.value
        })
    },
    saveBaseInfo: function(e){
        wx.showToast({
            title: '保存成功',
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