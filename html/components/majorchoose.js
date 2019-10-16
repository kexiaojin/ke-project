// 选择专业组件
var majorchoose = {
    data: function(){
        return {
            // 选择类型
            chooseType: '',
            // 作用于这个组件的数据名称
            triggerName: '',
            // 原始数据
            info: [{"id":4001,"middleList":[{"id":4021,"level":2,"name":"哲学类","detailList":{"idList":["4031","4032","4033","4034"],"nameList":["哲学","伦理学","逻辑学","宗教学"]}}],"level":1,"name":"哲学"},{"id":4002,"middleList":[{"id":4101,"level":2,"name":"经济学类","detailList":{"idList":["4111","4112","4113","4114","4115","4116","4117","4118","4119","4120","4121","4122","4123","4124","4125","4126"],"nameList":["经济学","国际经济与贸易","财政学","经济管理","经济信息管理","贸易经济","国际金融","投资学","统计学","经济与金融","金融工程","保险","税务","信息管理","网络经济学","技术经济"]}}],"level":1,"name":"经济学"},{"id":4003,"middleList":[{"id":4201,"level":2,"name":"管理科学与工程类","detailList":{"idList":["4211","4212","4213","4214","4215","4216"],"nameList":["管理科学","信息管理和信息系统","工业工程","工程管理","产品质量工程","项目管理"]}},{"id":4202,"level":2,"name":"工商管理类","detailList":{"idList":["4221","4222","4223","4224","4225","4226","4227","4228","4229","4230","4231","4232","4233","4234","4235","4236","4237","4238","4239","4240","4241"],"nameList":["工商管理","市场营销","商品学","会计学","审计学","涉外会计","会计信息系统","财务管理","财政金融","资产评估","企业管理","商务策划管理","国际商务","电子商务","房地产经营管理","物业管理","物流管理","旅游管理","酒店管理","连锁经营管理","人力资源管理"]}},{"id":4203,"level":2,"name":"行政管理、公共管理类","detailList":{"idList":["4251","4252","4253","4254","4255","4256","4257","4258","4259","4260","4261","4262","4263","4264","4265","4266"],"nameList":["行政管理","公共关系学","文秘","公共事业管理","公共政策学","国防教育与管理","劳动关系","劳动与社会保障","城市规划与管理","土地资源管理","农业经济管理","食品经济管理","会展经济与管理","文化产业管理","体育产业管理","航运管理"]}},{"id":4204,"level":2,"name":"图书档案学类","detailList":{"idList":["4271","4272"],"nameList":["信息资源管理","图书档案学"]}}],"level":1,"name":"管理学"},{"id":4004,"middleList":[{"id":4301,"level":2,"name":"语言文学类","detailList":{"idList":["4311","4312","4313","4314","4315","4316","4317","4318","4319","4320","4321","4322","4323"],"nameList":["汉语言文学","对外汉语","英语","商务英语","外贸英语","俄语","德语","法语","日语","西班牙语","阿拉伯语","朝鲜语","其他外语"]}},{"id":4302,"level":2,"name":"新闻传播学类","detailList":{"idList":["4331","4332","4333","4334","4335","4336"],"nameList":["新闻学","广播电视新闻","广告学","编辑出版学","传播学","媒体创意"]}},{"id":4303,"level":2,"name":"艺术类","detailList":{"idList":["4341","4342","4343","4344","4345","4346","4347","4348","4349","4350","4351","4352","4353","4354","4355"],"nameList":["音乐，作曲","艺术设计","戏剧，表演","导演，广播电视编导","戏剧影视文学","戏剧影视美术设计","摄影，动画","播音，主持，录音","服装设计","舞蹈","绘画","美术学","绘画","雕塑","影视学"]}}],"level":1,"name":"文学"},{"id":4005,"middleList":[{"id":4401,"level":2,"name":"电气信息类","detailList":{"idList":["4421","4422","4423","4424","4425","4426","4427","4428","4429"],"nameList":["电气工程及其自动化","电气信息工程","通信工程","自动化","电子信息工程","电子科学与技术","集成电路设计与集成系统","影视艺术技术","广播电视工程"]}},{"id":4402,"level":2,"name":"计算机科学与技术类","detailList":{"idList":["4431","4432","4433","4434","4435","4436","4437"],"nameList":["计算机科学与技术","计算机科学","计算机工程","计算机网络","计算机应用","软件工程","计算机信息管理"]}},{"id":4403,"level":2,"name":"机械类","detailList":{"idList":["4441","4442","4443","4444","4445","4446","4447","4448","4449","4450","4451","4452","4453"],"nameList":["机械设计制造及其自动化","机械电子工程/机电一体化","机械工程及自动化","机械制造工艺与设备","制造工程","制造自动化与测控技术","材料成型及控制工程","工业设计","过程装备与控制工程","模具设计与制造","微机电系统工程","车辆工程","汽车服务工程"]}},{"id":4404,"level":2,"name":"土建类","detailList":{"idList":["4461","4462","4463","4464","4465","4466","4467","4468","4469","4470","4471","4472","4473"],"nameList":["土木工程","道路与桥梁","建筑学","建筑工程","工业与民用建筑","工程造价管理","建筑环境与设备工程","给排水科学与工程","供热通风与空调设计","室内装潢设计","城市规划","历史建筑保护工程","景观学"]}},{"id":4405,"level":2,"name":"材料类","detailList":{"idList":["4481","4482","4483","4484","4485","4486","4487","4488"],"nameList":["冶金工程","金属材料工程","无机非金属材料工程","高分子材料与工程","材料物理","材料化学","材料科学与工程","电子封装技术"]}},{"id":4406,"level":2,"name":"仪器仪表类","detailList":{"idList":["4490"],"nameList":["测控技术与仪器"]}},{"id":4407,"level":2,"name":"能源动力类","detailList":{"idList":["4491","4492","4493","4494"],"nameList":["热能与动力工程","核工程与核技术","电力系统及自动化","制冷与低温技术"]}},{"id":4408,"level":2,"name":"水利类","detailList":{"idList":["4501","4502","4503"],"nameList":["水利水电工程","水文与水资源工程","港口航道与海岸工程"]}},{"id":4409,"level":2,"name":"测绘类","detailList":{"idList":["4511","4512","4513"],"nameList":["测绘工程","遥感科学与技术","空间信息与数字技术"]}},{"id":4410,"level":2,"name":"制药工程类","detailList":{"idList":["4515"],"nameList":["制药工程"]}},{"id":4411,"level":2,"name":"交通运输类","detailList":{"idList":["4521","4522","4523","4524","4525","4526","4527","4528"],"nameList":["交通运输类","交通工程","油气储运工程","飞行技术","航海技术","轮机技术","物流工程","海事管理"]}},{"id":4412,"level":2,"name":"船舶与海洋工程类","detailList":{"idList":["4530"],"nameList":["船舶与海洋工程"]}},{"id":4413,"level":2,"name":"航空航天类","detailList":{"idList":["4531","4532","4533","4534"],"nameList":["飞行器设计与工程","飞行器动力工程","飞行器制造工程","飞行器环境与生命保障工程"]}},{"id":4414,"level":2,"name":"轻工纺织食品类","detailList":{"idList":["4541","4542","4543","4544","4545","4546"],"nameList":["食品科学与工程","轻化工程","包装工程","印刷工程","纺织工程","服装设计与工程"]}},{"id":4415,"level":2,"name":"武器类","detailList":{"idList":["4551","4552","4553","4554","4555","4556"],"nameList":["武器系统与发射工程","探测制导与控制技术","弹药工程与爆炸技术","特种能源工程与烟火技术","地面武器激动工程","信息对抗技术"]}},{"id":4416,"level":2,"name":"公安技术类","detailList":{"idList":["4558"],"nameList":["公安技术"]}},{"id":4417,"level":2,"name":"生物医学工程类","detailList":{"idList":["4560"],"nameList":["生物医学工程"]}}],"level":1,"name":"工学"},{"id":4006,"middleList":[{"id":4601,"level":2,"name":"法学类","detailList":{"idList":["4611","4612","4613","4614","4615","4616","4617","4618","4619","4620"],"nameList":["法学","马克思主义理论","政治学与行政学","思想政治教育","国际政治","国际经济法","经济法","社会学","外交学","公安学"]}}],"level":1,"name":"法学"},{"id":4007,"middleList":[{"id":4621,"level":2,"name":"历史学类","detailList":{"idList":["4631","4632","4633"],"nameList":["历史学","考古学","博物馆学"]}}],"level":1,"name":"历史学"},{"id":4008,"middleList":[{"id":4701,"level":2,"name":"数学类","detailList":{"idList":["4711","4712"],"nameList":["数学与应用数学","信息与计算科学"]}},{"id":4702,"level":2,"name":"物理学类","detailList":{"idList":["4715","4716"],"nameList":["物理学","应用物理学"]}},{"id":4703,"level":2,"name":"化学类及化学工程类","detailList":{"idList":["4721","4722","4723","4724","4725","4726"],"nameList":["化学","应用化学","化学工程与工艺","精细化工","化工设备与机械","生物化工"]}},{"id":4704,"level":2,"name":"生物科学及生物技术类","detailList":{"idList":["4728","4729","4730"],"nameList":["生物工程","生物科学，技术","生物信息学"]}},{"id":4705,"level":2,"name":"天文地质地理类","detailList":{"idList":["4731","4732","4733","4734","4735","4736","4737","4738","4739","4740","4741","4742","4743"],"nameList":["天文学","地质学","地理科学","地球物理学","大气科学","海洋科学","地矿","宝石鉴定与加工","石油工程","地球化学","地球与空间科学","地理信息系统","地理信息科学与技术"]}},{"id":4706,"level":2,"name":"力学类","detailList":{"idList":["4746","4747"],"nameList":["力学","应用力学"]}},{"id":4707,"level":2,"name":"电子信息科学类","detailList":{"idList":["4751","4752","4753","4754","4755","4756","4757"],"nameList":["电子信息科学与技术","光信息科学与技术","光电子技术科学","微电子学","信息科学技术","信息安全","科技防卫"]}},{"id":4708,"level":2,"name":"系统科学类","detailList":{"idList":["4761","4762"],"nameList":["系统理论","系统科学与工程"]}},{"id":4709,"level":2,"name":"环境科学与安全类","detailList":{"idList":["4771","4772","4773","4774"],"nameList":["环境科学","环境工程","安全工程","生态学"]}}],"level":1,"name":"理学"},{"id":4009,"middleList":[{"id":4781,"level":2,"name":"教育学类","detailList":{"idList":["4783","4784","4785","4786","4787","4788"],"nameList":["教育学","体育教育","学前教育","职业技术教育","特殊教育","教育技术学"]}}],"level":1,"name":"教育学"},{"id":4010,"middleList":[{"id":4801,"level":2,"name":"医学类","detailList":{"idList":["4811","4812","4813","4814","4815","4816","4817","4818","4819","4820","4821","4822","4823","4824","4825"],"nameList":["基础医学","预防医学","临床医学与医学技术","口腔医学","中医学","法医学","护理学","药学","医学检验","营养学家","麻醉学","放射医学","眼视光学","针灸推拿学","中药学"]}},{"id":4802,"level":2,"name":"心理学类","detailList":{"idList":["4831","4832"],"nameList":["心理学","应用心理学"]}}],"level":1,"name":"医学"},{"id":4011,"middleList":[{"id":4901,"level":2,"name":"农业类","detailList":{"idList":["4911","4912","4913","4914","4915","4916","4917","4918","4919","4920","4921","4922","4923","4924"],"nameList":["农学","园艺","植物保护学","茶学","草叶科学","森林资源","环境生态","动物科学","动物医学","水产科学","农业工程","林业工程","植物生产","园林"]}}],"level":1,"name":"农学"}],
            // 当前点击的二级菜单
            midId: '',
            // 当前选择
            picked: '',
            checked: [],
            // 搜索内容
            input: ''
        }
    },
    template:   '<div class="modal fade choose-modal" id="majorChooseModal">\
                    <div class="modal-dialog">\
                        <div class="modal-content">\
                            <div class="modal-header">\
                                <h4 class="modal-title">选择专业<span class="choose-multi-tips" v-if="chooseType==\'multi\'">（最多可选五项）</span></h4>\
                                <button type="button" class="close" data-dismiss="modal">&times;</button>\
                            </div>\
                            <div class="modal-body relative">\
                                <div class="choose-modal-header d-flex">\
                                    <div class="flex-shrink-0 pt-1">当前选择：</div>\
                                    <div class="flex-fill">\
                                        <div class="choose-modal-selected" v-for="(selectItem,index) in selected">\
                                            {{selectItem.name}}\
                                            <a href="javascript:;" class="text-danger" v-on:click="chooseDel(selectItem.id)"><i class="fa fa-fw fa-times"></i></a>\
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
                                                <li class="choose-modal-item" v-bind:id="\'major\'+m.id" v-for="(m,index) in r.middleList" v-bind:key="\'midList\'+index">\
                                                    <a href="javascript:;" class="dark-link" v-on:click="getMid(m.id)">\
                                                        <i class="fa fa-plus fa-fw"></i>\
                                                        {{m.name}}\
                                                    </a>\
                                                    <div class="choose-modal-bg" v-show="m.id==midId">\
                                                        <div class="choose-modal-item-item">\
                                                            <div class="d-flex pb-2">\
                                                                <div class="flex-fill font-weight-bold">{{m.name}}</div>\
                                                                <button type="button" class="close" v-on:click="closeMid">&times;</button>\
                                                            </div>\
                                                            <div class="row">\
                                                                <div class="col-6 pt-2" v-for="(d,index) in m.detailList.nameList" v-bind:key="\'detailList\'+index">\
                                                                    <label class="custom-control custom-radio" v-if="chooseType==\'single\'">\
                                                                        <input type="radio" name="major" class="custom-control-input" v-model="picked" v-bind:value="m.detailList.idList[index]">\
                                                                        <span class="custom-control-label">{{d}}</span>\
                                                                    </label>\
                                                                    <label class="custom-control custom-checkbox" v-else>\
                                                                        <input type="checkbox" name="major" class="custom-control-input" v-model="checked" v-bind:value="m.detailList.idList[index]">\
                                                                        <span class="custom-control-label">{{d}}</span>\
                                                                    </label>\
                                                                </div>\
                                                            </div>\
                                                        </div>\
                                                    </div>\
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
        // 根据当前选择来计算已选
        selected: function(){
            var interim = [];
            if(this.chooseType == "single" && this.picked !== '-1'){
                for(var i=0;i<this.info.length;i++) {
                    for(var j=0;j<this.info[i].middleList.length;j++) {
                        for(var k=0;k<this.info[i].middleList[j].detailList.idList.length;k++) {
                            var id = this.info[i].middleList[j].detailList.idList[k];
                            var name = this.info[i].middleList[j].detailList.nameList[k];
                            if(id == this.picked){
                                interim.push({name:name,id:id})
                            }
                        }
                    }
                };
            }else if(this.chooseType == "multi" && this.checked[0] !== '-1'){
                for(var i=0;i<this.info.length;i++) {
                    for(var j=0;j<this.info[i].middleList.length;j++) {
                        for(var k=0;k<this.info[i].middleList[j].detailList.idList.length;k++) {
                            for(var l=0;l<this.checked.length;l++) {
                                var id = this.info[i].middleList[j].detailList.idList[k];
                                var name = this.info[i].middleList[j].detailList.nameList[k];
                                if(id == this.checked[l]){
                                    interim.push({name:name,id:id})
                                }
                            };
                        }
                    }
                };
            }else{
                interim.push({name:'不限',id:'-1'})
            }
            return interim;
        }
    },
    methods: {
        // 打开弹窗
        majorChooseModal: function(selected,triggerName,chooseType){
            this.midId = '';
            this.picked = '';
            this.checked = [];
            if(selected){
                if(chooseType == "single"){
                    this.picked = JSON.parse(JSON.stringify(selected.id));
                }else if(chooseType == "multi"){
                    for(var i=0;i<selected.length;i++) {
                        this.checked.push(JSON.parse(JSON.stringify(selected[i].id)));
                    }
                }
            }
            this.chooseType = chooseType;
            this.triggerName = triggerName;
            $("#majorChooseModal").modal('show');
        },
        // 当前点击的二级菜单
        getMid: function(midId){
            this.midId = midId;
        },
        // 关闭当前点击的二级菜单
        closeMid: function(){
            this.midId = '';
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
                $("#majorChooseModal").modal('hide');
                this.$emit('majorchooseclick',backData);
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
            $("#majorChooseModal").modal('hide');
            this.$emit('majorchooseclick',backData);
        },
        // 删除当前选择
        chooseDel: function(selectedId){
            if(this.chooseType == "single"){
                this.picked = '';
            }else if(this.chooseType == "multi"){
                for(var i=0;i<this.checked.length;i++) {
                    if(this.checked[i] == selectedId){
                       this.checked.splice(i,1);
                       break;
                    }
                };
            }
        },
        // 搜索内容
        searchList: function(){
            var idHide=[],
                idShow=[];
            for(var i=0;i<this.info.length;i++) {
                for(var j=0;j<this.info[i].middleList.length;j++) {
                    for(var k=0;k<this.info[i].middleList[j].detailList.idList.length;k++) {
                        var id = this.info[i].middleList[j].detailList.idList[k];
                        var name = this.info[i].middleList[j].detailList.nameList[k];
                        if(name.indexOf(this.input) == -1){
                            if(idHide.indexOf(this.info[i].middleList[j].id) == -1){
                                idHide.push(this.info[i].middleList[j].id);
                            }
                        }else{
                            if(idShow.indexOf(this.info[i].middleList[j].id) == -1){
                                idShow.push(this.info[i].middleList[j].id);
                            }
                        }
                    }
                }
            }
            for(var i=0; i<idHide.length; i++){
                $("#major"+idHide[i]).addClass("choose-modal-item-hide");
            }
            for(var i=0; i<idShow.length; i++){
                $("#major"+idShow[i]).removeClass("choose-modal-item-hide");
            }
        }
    },
    mounted: function(){
        
    }
};