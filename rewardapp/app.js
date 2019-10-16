//app.js
App({
    globalData: {
        urlPath: 'http://y8xqe3.natappfree.cc',
        header: {
            'content-type': 'application/x-www-form-urlencoded',
            'Cookie': ''
        }
    },
    onLaunch: function () {
        console.log('App Launch')
    },
    onShow: function () {
        console.log('App Show')
        this.unreadMessage()
    },
    onHide: function () {
        console.log('App Hide')
    },
    // 显示未读消息数字
    unreadMessage: function(){
        wx.setTabBarBadge({
            index: 2,
            text: '1'
        })
    },
    // 删除未读消息数字
    removeUnread: function(){
        wx.removeTabBarBadge({
            index: 2
        })
    }
})