// pages/index/search_job.js
const app = getApp();
const urlPath = app.globalData.urlPath;
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // 搜索输入框
        inputVal: "",
        // 地区
        cityData: [{province: "不限", provinceId: "-1", city: "不限", cityId: "-1", county: "不限", countyId: "-1"}],
        // 行业
        positionData: [{name: "不限", id: "-1"}],
        // 要求
        requireData: {
            degreeType: {name: "不限", id: "-1"},
            salaryType: {name: "不限", id: "-1"},
            workYear: {name: "不限", id: "-1"}
        },
        // 是否显示推荐搜索关键词
        searchRecommend: true,
        // 历史搜索
        historySearch: [],
        // 热门搜索
        hotSearch: ['前端','java工程师','清洁工'],
        // 是否已全部加载完
        allLoaded: false,
        // 职位
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
    // 清空搜索输入框内容
    clearInput: function(e){
        this.setData({
            "inputVal": ""
        });
    },
    // 获取搜索输入框内容
    getInputVal: function(e){
        this.setData({
            "inputVal": e.detail.value
        });
    },
    // 点击搜索
    goSearch: function(e){
        if(this.data.inputVal==""){
            // 显示推荐搜索关键词
            this.setData({
                "searchRecommend": true
            });
            wx.showToast({
                title: '请输入搜索内容',
                icon: 'none',
                mask: true
            })
        }else{
            wx.showLoading({
                title: '加载中',
                mask: true
            })
            var item = this.data.inputVal,
                historySearch = this.data.historySearch,
                historySet = true;
            for(var i=0; i<historySearch.length; i++){
                if(historySearch[i] == item){
                    historySet = false;
                }
            }
            if(historySet){
                if(historySearch.length > 9){
                    historySearch.splice(0,1);
                }
                historySearch = historySearch.concat(item);
                var newHistory = JSON.stringify(historySearch);
                wx.setStorage({
                    key: 'reward_history_search',
                    data: newHistory
                })
                this.setData({
                    "historySearch": historySearch
                });
            }
            // 加载后台数据
            setTimeout(function(){
                // 隐藏推荐搜索关键词
                this.setData({
                    "searchRecommend": false
                });
                // 关闭加载中提示
                wx.hideLoading();
            }.bind(this),1000)
        }
    },
    // 删除历史搜索
    historyDel: function(e){
        wx.showModal({
            title: '确定删除？',
            content: '即将删除全部搜索历史',
            confirmColor: '#e69422',
            success: (res) => {
                if(res.confirm) {
                    wx.removeStorage({
                        key: 'reward_history_search'
                    })
                    this.setData({
                        "historySearch": []
                    });
                }
            }
        })
    },
    // 快速搜索
    fastSearch: function(e){
        this.setData({
            "inputVal": e.currentTarget.dataset.item
        },()=>{
            this.goSearch();
        });
    },
    // 选择地区
    getCity: function(e){
        this.selectComponent('#city').onshow()
    },
    citySave: function(e){
        if (e.detail == 'close') {
            return;
        }
        var pickerArray = e.detail,
            pickerId = [],
            nameText = '';
        for(var i=0;i<pickerArray.length;i++){
            nameText = pickerArray[i].province + '-' + pickerArray[i].city + '-'  + pickerArray[i].county;
            pickerId.push(pickerArray[i].provinceId);
            pickerId.push(pickerArray[i].cityId);
            pickerId.push(pickerArray[i].countyId);
        }
        this.setData({
            "cityData": pickerArray
        },()=>{
            this.goSearch();
        })
    },
    // 选择行业
    getPosition: function(e){
        this.selectComponent('#position').onshow()
    },
    positionSave: function(e){
        if (e.detail=='close'){
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
            "positionData": pickerArray
        },()=>{
            this.goSearch();
        })
    },
    // 选择要求
    getRequire: function(e){
        this.selectComponent('#require').onshow()
    },
    requireSave: function(e){
        if (e.detail=='close'){
            return;
        }
        var pickerArray = e.detail;
        this.setData({
            "requireData": pickerArray
        },()=>{
            this.goSearch();
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        // 获取缓存中的历史搜索
        wx.getStorage({
            key: 'reward_history_search',
            success: (res) => {
                this.setData({
                    "historySearch": JSON.parse(res.data)
                });
            }
        });
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
                "allLoaded": true
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