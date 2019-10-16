// components/navbar/navbar.js
const device = wx.getSystemInfoSync();
const width = device.windowWidth;
const height = device.windowHeight;
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        moveView: {
            areaWidth: width,
            areaHeight: height,
            x: width/2,
            y: height,
        },
    },

    /**
     * 组件的方法列表
     */
    methods: {
        jumpLink: function(e) {
            wx.switchTab({
                url: '/pages/index/index',
            });
        }
    }
})
