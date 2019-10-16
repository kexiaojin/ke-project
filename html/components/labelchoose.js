// 选择印象标签组件
var labelchoose = {
    data: function(){
        return {
            labelType: '',
            // 原始数据
            companyInfo: [{"id":701,"name":"带薪年假"},{"id":702,"name":"包吃"},{"id":703,"name":"包住"},{"id":704,"name":"包吃住"},{"id":705,"name":"餐补"},{"id":706,"name":"房补"},{"id":707,"name":"话补"},{"id":708,"name":"社会保险"},{"id":728,"name":"住房公积金"},{"id":709,"name":"交通补助"},{"id":710,"name":"加班补助"},{"id":711,"name":"周末双休"},{"id":712,"name":"年底双薪"},{"id":713,"name":"员工体检"},{"id":714,"name":"上班便利"},{"id":715,"name":"福利好"},{"id":716,"name":"竞争力强"},{"id":717,"name":"员工旅游"},{"id":718,"name":"高温补贴"},{"id":719,"name":"节日福利"},{"id":720,"name":"好的晋升通道"},{"id":721,"name":"工作环境好"},{"id":722,"name":"团队氛围好"},{"id":723,"name":"美女多"},{"id":724,"name":"帅哥多"},{"id":725,"name":"员工培训"},{"id":726,"name":"上市公司"},{"id":727,"name":"国内500强"}],
            personalInfo: [{"id":641,"name":"学生"},{"id":642,"name":"技术控"},{"id":643,"name":"外貌协会"},{"id":644,"name":"文艺青年"},{"id":645,"name":"2B青年"},{"id":646,"name":"小清新"},{"id":647,"name":"小鲜肉"},{"id":648,"name":"宅男"},{"id":649,"name":"宅女"},{"id":650,"name":"御姐"},{"id":651,"name":"理工男"},{"id":652,"name":"月光族"},{"id":653,"name":"工作狂"},{"id":654,"name":"乐活族"},{"id":655,"name":"天真开朗"},{"id":656,"name":"老实敦厚"},{"id":657,"name":"内向寡语"},{"id":658,"name":"踏实敢干"},{"id":659,"name":"话痨"},{"id":660,"name":"屌丝"},{"id":661,"name":"单纯"},{"id":662,"name":"斯文人"},{"id":663,"name":"长得抽象"},{"id":664,"name":"阳光"},{"id":665,"name":"个性化"},{"id":666,"name":"非主流"},{"id":667,"name":"淡妆"},{"id":668,"name":"领导力"},{"id":669,"name":"成熟稳重"},{"id":670,"name":"能吃苦"},{"id":671,"name":"服从性强"},{"id":672,"name":"责任心强"},{"id":673,"name":"幽默"},{"id":674,"name":"乐观"},{"id":675,"name":"执着"},{"id":676,"name":"已婚"},{"id":677,"name":"已育"}],
            positionInfo: [{"id":751,"name":"年底双薪"},{"id":752,"name":"发展空间大"},{"id":753,"name":"绩效奖金"},{"id":754,"name":"带薪年假"},{"id":755,"name":"交通补助"},{"id":756,"name":"通讯津贴"},{"id":757,"name":"午餐补助"},{"id":758,"name":"定期体检"},{"id":759,"name":"弹性工作"},{"id":760,"name":"年度旅游"},{"id":761,"name":"节日礼物"},{"id":762,"name":"免费班车"},{"id":763,"name":"领导好"},{"id":764,"name":"扁平管理"},{"id":765,"name":"管理规范"},{"id":766,"name":"技能培训"},{"id":767,"name":"岗位晋升"},{"id":768,"name":"社会保险"},{"id":783,"name":"住房公积金"},{"id":769,"name":"团队聚餐"},{"id":770,"name":"生育补贴"},{"id":771,"name":"公司规模大"},{"id":772,"name":"休闲餐点"},{"id":773,"name":"包吃"},{"id":774,"name":"包住"},{"id":775,"name":"包吃住"},{"id":776,"name":"全勤奖"},{"id":777,"name":"服装补助"},{"id":778,"name":"书本津贴"},{"id":779,"name":"优秀员工奖"},{"id":780,"name":"年终分红"},{"id":781,"name":"股票期权"},{"id":782,"name":"加班补助"}],
            // 当前选择
            checked: [],
            // 自定义标签
            inputOne: '',
            inputTwo: ''
        }
    },
    template:   '<div class="modal fade choose-modal" id="labelChooseModal">\
                    <div class="modal-dialog">\
                        <div class="modal-content">\
                            <div class="modal-header">\
                                <h4 class="modal-title">选择印象标签<span class="choose-multi-tips">（最多可选八项，加两项自定义）</span></h4>\
                                <button type="button" class="close" data-dismiss="modal">&times;</button>\
                            </div>\
                            <div class="modal-body">\
                                <div class="form-inline mb-4">\
                                    <div class="form-group mr-4">\
                                        <div class="input-group">\
                                            <div class="input-group-prepend">\
                                                <span class="input-group-text">\
                                                    自定义标签一\
                                                </span>\
                                            </div>\
                                            <input type="text" class="form-control" v-model="inputOne"/>\
                                        </div>\
                                    </div>\
                                    <div class="form-group">\
                                        <div class="input-group">\
                                            <div class="input-group-prepend">\
                                                <span class="input-group-text">\
                                                    自定义标签二\
                                                </span>\
                                            </div>\
                                            <input type="text" class="form-control" v-model="inputTwo"/>\
                                        </div>\
                                    </div>\
                                </div>\
                                <div class="label-list">\
                                    <ul class="list-inline" v-if="labelType==\'company\'">\
                                        <li class="label-item" v-for="(labelItem,index) in companyInfo" v-bind:key="\'label\'+index">\
                                            <label class="custom-control custom-checkbox">\
                                                <input type="checkbox" name="label" class="custom-control-input" v-model="checked" v-bind:value="labelItem.id">\
                                                <span class="custom-control-label">{{labelItem.name}}</span>\
                                            </label>\
                                        </li>\
                                    </ul>\
                                    <ul class="list-inline" v-if="labelType==\'personal\'">\
                                        <li class="label-item" v-for="(labelItem,index) in personalInfo" v-bind:key="\'label\'+index">\
                                            <label class="custom-control custom-checkbox">\
                                                <input type="checkbox" name="label" class="custom-control-input" v-model="checked" v-bind:value="labelItem.id">\
                                                <span class="custom-control-label">{{labelItem.name}}</span>\
                                            </label>\
                                        </li>\
                                    </ul>\
                                    <ul class="list-inline" v-if="labelType==\'position\'">\
                                        <li class="label-item" v-for="(labelItem,index) in positionInfo" v-bind:key="\'label\'+index">\
                                            <label class="custom-control custom-checkbox">\
                                                <input type="checkbox" name="label" class="custom-control-input" v-model="checked" v-bind:value="labelItem.id">\
                                                <span class="custom-control-label">{{labelItem.name}}</span>\
                                            </label>\
                                        </li>\
                                    </ul>\
                                </div>\
                            </div>\
                            <div class="modal-footer">\
                                <button type="button" class="btn btn-primary" v-on:click="goChoose">确定</button>\
                            </div>\
                        </div>\
                    </div>\
                </div>',
    computed: {
        // 根据当前选择来计算已选
        selected: function(){
            var interim = [];
            if(this.labelType=="company"){
                for(var i=0;i<this.companyInfo.length;i++) {
                    for(var j=0;j<this.checked.length;j++) {
                        if(this.companyInfo[i].id == this.checked[j]){
                            interim.push({name:this.companyInfo[i].name,id:this.companyInfo[i].id})
                        }
                    };
                };
            }else if(this.labelType=="personal"){
                for(var i=0;i<this.personalInfo.length;i++) {
                    for(var j=0;j<this.checked.length;j++) {
                        if(this.personalInfo[i].id == this.checked[j]){
                            interim.push({name:this.personalInfo[i].name,id:this.personalInfo[i].id})
                        }
                    };
                };
            }else if(this.labelType=="position"){
                for(var i=0;i<this.positionInfo.length;i++) {
                    for(var j=0;j<this.checked.length;j++) {
                        if(this.positionInfo[i].id == this.checked[j]){
                            interim.push({name:this.positionInfo[i].name,id:this.positionInfo[i].id})
                        }
                    };
                };
            }
            if(this.inputOne != ''){
                interim.push({name:this.inputOne,id:0})
            };
            if(this.inputTwo != ''){
                interim.push({name:this.inputTwo,id:0})
            };
            return interim;
        }
    },
    methods: {
        // 打开弹窗
        labelChooseModal: function(selected,labelType){
            this.labelType = labelType;
            this.checked = [];
            this.inputOne = '';
            this.inputTwo = '';
            if(selected){
                for(var i=0;i<selected.length;i++) {
                    if(selected[i].id == 0){
                        if(this.inputOne == ''){
                            this.inputOne = selected[i].name;
                        }else{
                            this.inputTwo = selected[i].name;
                        }
                    }else{
                        this.checked.push(JSON.parse(JSON.stringify(selected[i].id)));
                    }
                }
            }
            $("#labelChooseModal").modal('show');
        },
        // 打包数据返回给父组件
        goChoose: function(){
            if(this.selected.length > 0 && this.checked.length <= 8){
                var backData = {
                    selected: this.selected
                };
                $("#labelChooseModal").modal('hide');
                this.$emit('labelchooseclick',backData);
            }else if(this.checked.length > 8){
                $.toast("最多可选八项","cancel")
            }else{
                $.toast("未选择任何内容","cancel")
            }
        }
    },
    mounted: function(){
        
    }
};