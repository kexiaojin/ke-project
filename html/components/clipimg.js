// 图片剪裁组件
var clipimg = {
    data: function(){
        return {
            active: false,
            fileSrc: '',
            // 作用于这个组件的数据名称
            triggerName: ''

        }
    },
    template:   '<div class="modal fade" id="clipimgModal">\
                    <div class="modal-dialog">\
                        <div class="modal-content">\
                            <div class="modal-header">\
                                <h4 class="modal-title">图片剪裁</h4>\
                                <button type="button" class="close" data-dismiss="modal">&times;</button>\
                            </div>\
                            <div class="modal-body">\
                                <div class="row">\
                                    <div class="col-9">\
                                        <div class="input-group">\
                                            <div class="input-group-prepend">\
                                                <span class="input-group-text">\
                                                    选择图片\
                                                </span>\
                                            </div>\
                                            <div class="flex-fill">\
                                                <label class="custom-file">\
                                                    <input type="file" class="custom-file-input" id="clipFile" accept="image/*" v-on:change="getPic">\
                                                    <span class="custom-file-label">{{fileSrc}}</span>\
                                                </label>\
                                            </div>\
                                        </div>\
                                    </div>\
                                </div>\
                                <div class="row">\
                                    <div class="col-9">\
                                        <div class="avatar-wrapper"></div>\
                                    </div>\
                                    <div class="col-3">\
                                        <div class="avatar-preview"></div>\
                                    </div>\
                                </div>\
                                <div class="row">\
                                    <div class="col-5">\
                                        <div class="btn-group">\
                                            <button type="button" class="btn btn-less" v-on:click="rotate(\'-90\')">\
                                                <i class="fa fa-fw fa-undo"></i>向左旋转\
                                            </button>\
                                            <button type="button" class="btn btn-less" v-on:click="rotate(\'90\')">\
                                                <i class="fa fa-fw fa-repeat"></i>向右旋转\
                                            </button>\
                                        </div>\
                                    </div>\
                                    <div class="col-4 text-right">\
                                        <div class="btn-group">\
                                            <button type="button" class="btn btn-less" v-on:click="zoom(\'0.1\')">\
                                                <i class="fa fa-fw fa-search-plus"></i>\
                                            </button>\
                                            <button type="button" class="btn btn-less" v-on:click="zoom(\'-0.1\')">\
                                                <i class="fa fa-fw fa-search-minus"></i>\
                                            </button>\
                                        </div>\
                                    </div>\
                                </div>\
                            </div>\
                            <div class="modal-footer">\
                                <button type="button" class="btn btn-primary" v-on:click="goClip">剪裁并上传</button>\
                            </div>\
                        </div>\
                    </div>\
                </div>',
    computed: {
        fileText: function(){
            var fullText = this.fileSrc;
            var text = fullText.substring(fullText.lastIndexOf("\\")+1);
            return text;
        }
    },
    methods: {
        // 打开弹窗
        clipimgModal: function(triggerName){
            this.triggerName = triggerName;
            $("#clipimgModal").modal('show');
        },
        // 选择图片
        getPic: function(ev){
            var that = this;
            that.fileSrc = ev.target.value.substring(ev.target.value.lastIndexOf("\\")+1);
            var files = !!ev.target.files ? ev.target.files : [];
            var size = ev.target.files[0].size / 1024;
            if (!files.length || !window.FileReader) return;
            if(size > 1024) {
                $.toast("单张图片不能大于1MB","cancel");
                return
            };
            if (/^image/.test( files[0].type)){
                var reader = new FileReader();
                reader.readAsDataURL(files[0]);
                reader.onloadend = function(){
                    var imgSrc = this.result
                    that.initCropper(imgSrc);
                }
            }else{
                $.toast("所选文件并非图片格式","cancel");
            }
        },
        // 生成视图
        initCropper: function(imgSrc){
            if(this.active) {
                $(".avatar-wrapper").children(".avatar-img").cropper('replace', imgSrc);
            }else{
                var wrapperImg = $('<img src="' + imgSrc + '" class="avatar-img">');
                $(".avatar-wrapper").html(wrapperImg);
                $(".avatar-img").cropper({
                    aspectRatio: 1,
                    viewMode: 1,
                    dragMode: "move",
                    toggleDragModeOnDblclick: false,
                    preview: $('.avatar-preview').selector
                });
                this.active = true;
            }
        },
        // 旋转
        rotate: function(pram){
            if(this.active) {
                $(".avatar-img").cropper('rotate', pram);
            }
        },
        // 放大缩小
        zoom: function(pram){
            if(this.active) {
                $(".avatar-img").cropper('zoom', pram);
            }
        },
        // 打包数据返回给父组件
        goClip: function(){
            if(this.active) {
                var imgCanvas = $(".avatar-img").cropper('getCroppedCanvas');
                var imgData = imgCanvas.toDataURL('image/png'); 
                $("#clipimgModal").modal('hide');
                var backData = {
                    triggerName: this.triggerName,
                    selected: imgData
                };
                this.$emit('clipimgclick',backData);
            }else{
                $.toast("未选择任何图片","cancel");
            }
        }
    },
    mounted: function(){
        
    }
};