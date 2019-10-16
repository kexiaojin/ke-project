// 选择行业组件
var tradechoose = {
    data: function(){
        return {
            // 选择类型
            chooseType: '',
            // 作用于这个组件的数据名称
            triggerName: '',
            // 原始数据
            info: [{"id":1001,"middleList":{"idList":["1051","1052","1053","1054","1055","1056","1057","1058","1059"],"nameList":["计算机软件","计算机硬件","计算机服务（系统、数据服务、维修）","通信/电信/网络设备","通信/电信运营、增值服务","互联网/电子商务","网络游戏","电子技术/半导体/集成电路","仪器仪表/工业自动化"]},"level":1,"name":"计算机|互联网|通信|电子"},{"id":1002,"middleList":{"idList":["1101","1102","1103","1104","1105"],"nameList":["会计/审计","金融/投资/证券","银行","信托/担保/拍卖/典当","保险"]},"level":1,"name":"会计|金融|银行|保险"},{"id":1003,"middleList":{"idList":["1151","1152","1153","1154","1155","1156","1157","1158","1159"],"nameList":["贸易/进出口","批发/零售","快速消费品（食品、饮料、化妆品）","服装/纺织/皮革","家具/家电/工艺品/玩具/珠宝","奢侈品/收藏品","办公用品及设备","机械/设备/重工业","汽车及零配件"]},"level":1,"name":"贸易|消费|制造|营运"},{"id":1004,"middleList":{"idList":["1201","1202","1203"],"nameList":["制药/生物工程","医疗/护理/卫生","医疗设备/器械"]},"level":1,"name":"制药|医疗"},{"id":1005,"middleList":{"idList":["1251","1252","1253","1254","1255"],"nameList":["广告","公关/市场推广/会展","影视/媒体/艺术/文化传播","文字媒体/出版","印刷/包装/造纸"]},"level":1,"name":"广告|媒体"},{"id":1006,"middleList":{"idList":["1301","1302","1303","1304"],"nameList":["房地产开发","建筑/建材/工程","家居/室内设计/装潢","物业管理/商业中心"]},"level":1,"name":"房地产|建筑"},{"id":1007,"middleList":{"idList":["1351","1352","1353","1354","1355","1356","1357"],"nameList":["中介服务","专业服务（咨询、人力资源、财会）","外包服务","检验/检测/认证","法律","教育/培训/院校","学术/科研"]},"level":1,"name":"专业服务|教育|培训"},{"id":1008,"middleList":{"idList":["1401","1402","1403","1404","1405"],"nameList":["餐饮业","酒店/旅游","娱乐/休闲/体育","美容/保健","生活服务"]},"level":1,"name":"服务业"},{"id":1009,"middleList":{"idList":["1451","1452","1453"],"nameList":["物流/仓储","交通/运输","航天/航空"]},"level":1,"name":"物流|运输"},{"id":1010,"middleList":{"idList":["1501","1502","1503","1504","1505"],"nameList":["石油/化工/矿产/地质","采掘业/冶炼","电力/水利","新能源","原材料和加工"]},"level":1,"name":"能源|原材料"},{"id":1011,"middleList":{"idList":["1551","1552","1553","1554","1555","1556"],"nameList":["政府/公共事业","非盈利机构","环保","农/林/渔/牧","多元化业务集团公司","其他行业"]},"level":1,"name":"政府|非赢利机构|其他"}],
            // 当前选择
            selected: [],
            // 搜索内容
            input: ''
        }
    },
    template:   '<div class="modal fade choose-modal" id="tradeChooseModal">\
                    <div class="modal-dialog">\
                        <div class="modal-content">\
                            <div class="modal-header">\
                                <h4 class="modal-title">选择行业<span class="choose-multi-tips" v-if="chooseType==\'multi\'">（最多可选五项）</span></h4>\
                                <button type="button" class="close" data-dismiss="modal">&times;</button>\
                            </div>\
                            <div class="modal-body relative">\
                                <div class="choose-modal-header d-flex">\
                                    <div class="flex-shrink-0 pt-1">当前选择：</div>\
                                    <div class="flex-fill">\
                                        <div class="choose-modal-selected" v-for="(selectItem,index) in selected">\
                                            {{selectItem.name}}\
                                            <a href="javascript:;" class="text-danger" v-on:click="chooseDel(index)"><i class="fa fa-fw fa-times"></i></a>\
                                        </div>\
                                    </div>\
                                    <div class="flex-shrink-0">\
                                        <button type="button" class="btn btn-secondary" v-on:click="unlimit">不限</button>\
                                        <button type="button" class="btn btn-primary" v-on:click="goChoose">确定</button>\
                                    </div>\
                                </div>\
                                <div class="choose-modal-body">\
                                    <div class="choose-modal-search">\
                                        <div class="input-group">\
                                            <input type="text" class="form-control" v-model.lazy="input" placeholder="请输入内容"/>\
                                            <div class="input-group-append">\
                                                <button type="button" class="btn btn-danger" v-on:click="searchList"><i class="fa fa-fw fa-search"></i></button>\
                                            </div>\
                                        </div>\
                                    </div>\
                                    <div class="choose-modal-item-box d-flex" v-for="(r,index) in info" v-bind:key="\'rootList\'+index">\
                                        <div class="choose-modal-item-left flex-shrink-0">{{r.name}}</div>\
                                        <div class="choose-modal-item-right flex-fill">\
                                            <ul class="list-inline">\
                                                <li class="choose-modal-item" v-bind:id="\'trade\'+d" v-for="(d,index) in r.middleList.idList" v-bind:key="\'detailList\'+index">\
                                                    <a href="javascript:;" class="dark-link" v-on:click="getDetail(d,r.middleList.nameList[index])">\
                                                        {{r.middleList.nameList[index]}}\
                                                    </a>\
                                                </li>\
                                            </ul>\
                                        </div>\
                                    </div>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                </div>',
    computed: {
        
    },
    methods: {
        // 打开弹窗
        tradeChooseModal: function(selected,triggerName,chooseType){
            this.selected = [];
            if(selected){
                if(chooseType == "single"){
                    this.selected.push(selected);
                }else if(chooseType == "multi"){
                    for(var i=0;i<selected.length;i++) {
                        this.selected.push(selected[i]);
                    }
                }
            }
            this.chooseType = chooseType;
            this.triggerName = triggerName;
            $("#tradeChooseModal").modal('show');
        },
        // 选择行业
        getDetail: function(detailId,detailName){
            if(this.chooseType == "single"){
                this.selected = [{
                    name: detailName,
                    id: detailId
                }];
            }else if(this.chooseType == "multi"){
                var newSelected = [];
                for(var i=0;i<this.selected.length;i++) {
                    if(this.selected[i].id != detailId){
                        newSelected.push({name:this.selected[i].name,id:this.selected[i].id})
                    }
                };
                newSelected.push({name:detailName,id:detailId});
                this.selected = newSelected;
            }
        },
        // 打包数据返回给父组件
        goChoose: function(){
            if(this.selected.length > 0 && this.selected.length <= 5){
                if(this.chooseType == "single"){
                    var backData = {
                        triggerName: this.triggerName,
                        selected: this.selected[0]
                    };
                }else if(this.chooseType == "multi"){
                    var backData = {
                        triggerName: this.triggerName,
                        selected: this.selected
                    };
                };
                $("#tradeChooseModal").modal('hide');
                this.$emit('tradechooseclick',backData);
            }else if(this.selected.length > 5){
                $.toast("最多可选五项","cancel")
            }else{
                $.toast("未选择任何内容","cancel")
            }
        },
        // 不限按钮
        unlimit: function(){
            if(this.chooseType == "single"){
                var backData = {
                    triggerName: this.triggerName,
                    selected: {
                        name: '不限',
                        id: '-1'
                    }
                };
            }else if(this.chooseType == "multi"){
                var backData = {
                    triggerName: this.triggerName,
                    selected: [
                        {
                            name: '不限',
                            id: '-1'
                        }
                    ]
                };
            };
            $("#tradeChooseModal").modal('hide');
            this.$emit('tradechooseclick',backData);
        },
        // 删除当前选择
        chooseDel: function(index){
            this.selected.splice(index,1);
        },
        // 搜索内容
        searchList: function(){
            var idHide=[],
                idShow=[];
            for(var i=0;i<this.info.length;i++) {
                for(var j=0;j<this.info[i].middleList.idList.length;j++) {
                    var id = this.info[i].middleList.idList[j];
                    var name = this.info[i].middleList.nameList[j];
                    if(name.indexOf(this.input) == -1){
                        if(idHide.indexOf(id) == -1){
                            idHide.push(id);
                        }
                    }else{
                        if(idShow.indexOf(id) == -1){
                            idShow.push(id);
                        }
                    }
                }
            }
            for(var i=0; i<idHide.length; i++){
                $("#trade"+idHide[i]).addClass("choose-modal-item-hide");
            }
            for(var i=0; i<idShow.length; i++){
                $("#trade"+idShow[i]).removeClass("choose-modal-item-hide");
            }
        }
    },
    mounted: function(){
        
    }
};