// components/select/degreetype.js
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
    list: [{"id":61,"level":1,"name":"其他"},{"id":73,"level":1,"name":"小学"},{"id":62,"level":1,"name":"初中"},{"id":63,"level":1,"name":"高中"},{"id":74,"level":1,"name":"职高"},{"id":64,"level":1,"name":"中专"},{"id":65,"level":1,"name":"中技"},{"id":66,"level":1,"name":"大专"},{"id":67,"level":1,"name":"本科"},{"id":68,"level":1,"name":"MBA"},{"id":69,"level":1,"name":"EMBA"},{"id":70,"level":1,"name":"硕士"},{"id":71,"level":1,"name":"博士"}],
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
