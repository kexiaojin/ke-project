// components/select/workyear.js
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
    list: [{"id":251,"name":"无经验"},{"id":252,"name":"1年以下"},{"id":253,"name":"1-3年"},{"id":254,"name":"3-5年"},{"id":255,"name":"5-10年"},{"id":256,"name":"10年以上"}],
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
