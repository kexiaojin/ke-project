// components/select/companysize.js
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
    list: [{"id":21,"level":1,"name":"20人以下"},{"id":22,"level":1,"name":"20-99人"},{"id":23,"level":1,"name":"100-499人"},{"id":24,"level":1,"name":"500-999人"},{"id":25,"level":1,"name":"1000-9999人"},{"id":26,"level":1,"name":"10000人以上"}],
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
