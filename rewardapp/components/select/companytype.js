// components/select/companytype.js
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
    list: [{"id":11,"level":1,"name":"国企"},{"id":12,"level":1,"name":"民营"},{"id":13,"level":1,"name":"合资"},{"id":14,"level":1,"name":"外商独资"},{"id":15,"level":1,"name":"股份制企业"},{"id":16,"level":1,"name":"上市公司"},{"id":17,"level":1,"name":"国家机关"},{"id":18,"level":1,"name":"事业单位"},{"id":19,"level":1,"name":"代表处"},{"id":20,"level":1,"name":"其它"}],
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
