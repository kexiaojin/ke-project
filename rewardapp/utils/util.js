// 日期时间格式化
const formatTime = date => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()

    return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}
const formatNumber = n => {
    n = n.toString()
    return n[1] ? n : '0' + n
}
// 斐波那契数列
const fibonacci = n => {
    if (n < 1) return 0
    if (n <= 2) return 1
    return fibonacci(n - 1) + fibonacci(n - 2)
}
// json转字符串
const toJsonStr = json => {
    return JSON.stringify(json)
}
// 字符串转Json
const toJsonObj = str => {
    return JSON.parse(str)
}
// 异步请求代理
const requestPromise = data => {
    new Promise((reslove, reject) => {
        wx.request({
            method: data.method?data.method:'post',
            url: data.url,
            header: data.header,
            data: data.data,
            success: function (res) {
                reslove(res)     
            },
            fail: function (res) {
                reject(res)
            }
        })
    }).then(function(res){
        data.success(res)
    }).catch(function(res){
        console.log(res)
        wx.showToast({
            title: '系统错误，请稍后再试',
            icon: 'none',
            mask: true
        })
    })
}
// 错误提示
const showError = config => {
    wx.showToast({
        title: config?config:'',
        icon: 'none',
        mask: true
    })
}
// 正确提示
const showSuccess = config => {
    wx.showToast({
        title: config?config:'',
        icon: 'success',
        mask: true
    })
}
// 加载中提示
const showLoading = config => {
    wx.showLoading({
        title: config?config:'加载中',
        mask: true
    })
}

module.exports = {
    formatTime: formatTime,
    fibonacci: fibonacci,
    toJsonStr: toJsonStr,
    toJsonObj: toJsonObj,
    requestPromise: requestPromise,
    showError: showError,
    showSuccess: showSuccess,
    showLoading: showLoading
}
