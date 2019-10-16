// components/choosemodal/require.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        pickerData: Object
    },

    /**
     * 组件的初始数据
     */
    data: {
        degreeActiveId: '',
        salaryActiveId: '',
        workYearActiveId: '',
        showDialog: false,
        degreeTypeList: [{"id":"-1","level":1,"name":"不限"},{"id":61,"level":1,"name":"其他"},{"id":73,"level":1,"name":"小学"},{"id":62,"level":1,"name":"初中"},{"id":63,"level":1,"name":"高中"},{"id":74,"level":1,"name":"职高"},{"id":64,"level":1,"name":"中专"},{"id":65,"level":1,"name":"中技"},{"id":66,"level":1,"name":"大专"},{"id":67,"level":1,"name":"本科"},{"id":68,"level":1,"name":"MBA"},{"id":69,"level":1,"name":"EMBA"},{"id":70,"level":1,"name":"硕士"},{"id":71,"level":1,"name":"博士"}],
        salaryTypeList: [{"id":"-1","level":1,"name":"不限"},{"id":121,"level":1,"name":"面议"},{"id":122,"level":1,"name":"2000元以下"},{"id":123,"level":1,"name":"2001-3000元"},{"id":124,"level":1,"name":"3001-4500元"},{"id":125,"level":1,"name":"4501-6000元"},{"id":126,"level":1,"name":"6001-8000元"},{"id":127,"level":1,"name":"8001-10000元"},{"id":128,"level":1,"name":"10001-15000元"},{"id":129,"level":1,"name":"15001-20000元"},{"id":130,"level":1,"name":"20001-30000元"},{"id":131,"level":1,"name":"30001-50000元"},{"id":132,"level":1,"name":"50000元以上"}],
        workYearList: [{"id":"-1","name":"不限"},{"id":251,"name":"无经验"},{"id":252,"name":"1年以下"},{"id":253,"name":"1-3年"},{"id":254,"name":"3-5年"},{"id":255,"name":"5-10年"},{"id":256,"name":"10年以上"}],
        newPicker: {}
    },

    /**
     * 组件的方法列表
     */
    methods: {
        onshow: function(e){
            var orgPicker = this.data.pickerData;
            var picker = JSON.parse(JSON.stringify(orgPicker));
            this.setData({
                "degreeActiveId": picker.degreeType.id,
                "salaryActiveId": picker.salaryType.id,
                "workYearActiveId": picker.workYear.id,
                "showDialog": true,
                "newPicker": picker
            })
        },
        close: function(e){
            this.setData({
                "showDialog": false
            })
            this.triggerEvent('save', 'close');
        },
        save: function(e){
            var picker = this.data.newPicker;
            this.setData({
                "showDialog": false
            })
            this.triggerEvent('save', picker);
        },
        getDegreeActive: function(e){
            var name = e.currentTarget.dataset.name,
                id = e.currentTarget.dataset.id,
                picker = {name:name,id:id};
            this.setData({
                "degreeActiveId": id,
                "newPicker.degreeType": picker
            })
        },
        getWorkYearActive: function(e){
            var name = e.currentTarget.dataset.name,
                id = e.currentTarget.dataset.id,
                picker = {name:name,id:id};
            this.setData({
                "workYearActiveId": id,
                "newPicker.workYear": picker
            })
        },
        getSalaryActive: function(e){
            var name = e.currentTarget.dataset.name,
                id = e.currentTarget.dataset.id,
                picker = {name:name,id:id};
            this.setData({
                "salaryActiveId": id,
                "newPicker.salaryType": picker
            })
        },
    }
})
