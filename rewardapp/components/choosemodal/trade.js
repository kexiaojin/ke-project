// components/choosemodal/trade.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    pickerData: Array,
    multi: Boolean,
    unlimited: Boolean
  },

  /**
   * 组件的初始数据
   */
  data: {
    activeId: '',
    showDialog: false,
    newPicker: [],
    list: [{"id":1001,"middleList":{"idList":["1051","1052","1053","1054","1055","1056","1057","1058","1059"],"nameList":["计算机软件","计算机硬件","计算机服务（系统、数据服务、维修）","通信/电信/网络设备","通信/电信运营、增值服务","互联网/电子商务","网络游戏","电子技术/半导体/集成电路","仪器仪表/工业自动化"]},"level":1,"name":"计算机|互联网|通信|电子"},{"id":1002,"middleList":{"idList":["1101","1102","1103","1104","1105"],"nameList":["会计/审计","金融/投资/证券","银行","信托/担保/拍卖/典当","保险"]},"level":1,"name":"会计|金融|银行|保险"},{"id":1003,"middleList":{"idList":["1151","1152","1153","1154","1155","1156","1157","1158","1159"],"nameList":["贸易/进出口","批发/零售","快速消费品（食品、饮料、化妆品）","服装/纺织/皮革","家具/家电/工艺品/玩具/珠宝","奢侈品/收藏品","办公用品及设备","机械/设备/重工业","汽车及零配件"]},"level":1,"name":"贸易|消费|制造|营运"},{"id":1004,"middleList":{"idList":["1201","1202","1203"],"nameList":["制药/生物工程","医疗/护理/卫生","医疗设备/器械"]},"level":1,"name":"制药|医疗"},{"id":1005,"middleList":{"idList":["1251","1252","1253","1254","1255"],"nameList":["广告","公关/市场推广/会展","影视/媒体/艺术/文化传播","文字媒体/出版","印刷/包装/造纸"]},"level":1,"name":"广告|媒体"},{"id":1006,"middleList":{"idList":["1301","1302","1303","1304"],"nameList":["房地产开发","建筑/建材/工程","家居/室内设计/装潢","物业管理/商业中心"]},"level":1,"name":"房地产|建筑"},{"id":1007,"middleList":{"idList":["1351","1352","1353","1354","1355","1356","1357"],"nameList":["中介服务","专业服务（咨询、人力资源、财会）","外包服务","检验/检测/认证","法律","教育/培训/院校","学术/科研"]},"level":1,"name":"专业服务|教育|培训"},{"id":1008,"middleList":{"idList":["1401","1402","1403","1404","1405"],"nameList":["餐饮业","酒店/旅游","娱乐/休闲/体育","美容/保健","生活服务"]},"level":1,"name":"服务业"},{"id":1009,"middleList":{"idList":["1451","1452","1453"],"nameList":["物流/仓储","交通/运输","航天/航空"]},"level":1,"name":"物流|运输"},{"id":1010,"middleList":{"idList":["1501","1502","1503","1504","1505"],"nameList":["石油/化工/矿产/地质","采掘业/冶炼","电力/水利","新能源","原材料和加工"]},"level":1,"name":"能源|原材料"},{"id":1011,"middleList":{"idList":["1551","1552","1553","1554","1555","1556"],"nameList":["政府/公共事业","非盈利机构","环保","农/林/渔/牧","多元化业务集团公司","其他行业"]},"level":1,"name":"政府|非赢利机构|其他"}]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onshow: function(e){
      var picker = this.data.pickerData.concat();
      if(picker.length>0&&picker[0].id==-1){
        this.setData({
          'activeId': '',
          "showDialog": true,
          "newPicker": []
        })
      }else{
        this.setData({
          "showDialog": true,
          "newPicker": picker
        })
      }
    },
    del: function(e){
      var picker = this.data.newPicker;
      picker.splice(e.currentTarget.dataset.index,1);
      this.setData({
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
    getList: function(e){
      var name = e.currentTarget.dataset.name,
          id = e.currentTarget.dataset.id,
          picker = this.data.newPicker,
          has = false;
      if(picker.length>=5){
        wx.showToast({
          title: '最多可选择五项',
          icon: 'none'
        })
        return;
      }
      if(this.data.multi){
        for(var i=0;i<picker.length;i++){
          if(picker[i].name == name){
            has = true;
          }
        }
        if(!has){
          picker.push({name:name,id:id})
        }
      }else{
        picker = [{name:name,id:id}]
      }
      this.setData({
        "activeId": id,
        "newPicker": picker
      })
    },
    unlimited: function(e){
      var picker = [{name:'不限',id:'-1'}];
      this.setData({
        "showDialog": false
      })
      this.triggerEvent('save', picker);
    }
  }
})
