// components/select/salarytype.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    pickerData: String,
  },

  /**
   * 组件的初始数据
   */
  data: {
    list: [{"id":121,"level":1,"name":"面议"},{"id":122,"level":1,"name":"2000元以下"},{"id":123,"level":1,"name":"2001-3000元"},{"id":124,"level":1,"name":"3001-4500元"},{"id":125,"level":1,"name":"4501-6000元"},{"id":126,"level":1,"name":"6001-8000元"},{"id":127,"level":1,"name":"8001-10000元"},{"id":128,"level":1,"name":"10001-15000元"},{"id":129,"level":1,"name":"15001-20000元"},{"id":130,"level":1,"name":"20001-30000元"},{"id":131,"level":1,"name":"30001-50000元"},{"id":132,"level":1,"name":"50000元以上"}],
    index: 0
  },
  ready: function () {
    var picker = this.data.pickerData;
    if(picker){
      for(var i=0;i<this.data.list.length;i++){
        if(this.data.list[i].name == picker){
          this.setData({
            "index": i
          })
        }
      }
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    save: function(e){
      var index = e.detail.value;
      var picker = {id: this.data.list[index].id, name: this.data.list[index].name};
      this.triggerEvent('save', picker);
      this.setData({
        "index":index
      })
    },
  }
})
