// 分页组件
var doerPage = {
    props: {
        pagelist: Object
    },
    data: function(){
        return {
            // 跳转输入框
            pageInput: ""
        }
    },
    template:   '<div class="doerpage d-flex" v-bind:class="[pagelist.countShow?\'justify-content-between\':\'justify-content-center\']" v-if="pagelist.totalPageCount>1">\
                    <div class="d-flex" v-if="pagelist.countShow">\
                        <div class="flex-shrink-0 mr-4 pt-1">\
                            每页{{pagelist.pageSize}}条/共<span class="color-red">{{pagelist.totalCount}}</span>条数据\
                        </div>\
                        <div class="input-group">\
                            <div class="input-group-prepend">\
                                <span class="input-group-text">到</span> \
                            </div>\
                            <input class="form-control" type="text" size="4" v-model="pageInput">\
                            <div class="input-group-append">\
                                <span class="input-group-text">页</span> \
                                <button type="button" class="btn btn-primary" v-on:click="page(pageInput)">GO</button>\
                            </div>\
                        </div>\
                    </div>\
                    <ul class="pagination" v-bind:class="{\'pagination-sm\':pagelist.small}">\
                        <li class="page-item" v-bind:class="{disabled: pagelist.currentPageNo == 1}" v-on:click="prevPage" v-if="pagelist.totalPageCount > 1">\
                            <a href="javascript:;" class="page-link" v-if="pagelist.small">&lt;</a>\
                            <a href="javascript:;" class="page-link" v-else>上一页</a>\
                        </li>\
                        <li class="page-item" v-bind:class="{active: pagelist.currentPageNo == 1}" v-on:click="page(1)">\
                            <a href="javascript:;" class="page-link">1</a>\
                        </li>\
                        <li class="page-item disabled" v-show="pagelist.currentPageNo > 5 && pagelist.totalPageCount >= 10">\
                            <a href="javascript:;" class="page-link">...</a>\
                        </li>\
                        <li class="page-item" v-bind:class="{active: pagelist.currentPageNo == index+offset}" v-for="(item,index) in middlePages" v-on:click="page(index+offset)">\
                            <a href="javascript:;" class="page-link">{{index+offset}}</a>\
                        </li>\
                        <li class="page-item disabled" v-show="pagelist.currentPageNo < bigLimit && pagelist.totalPageCount >= 10">\
                            <a href="javascript:;" class="page-link">...</a>\
                        </li>\
                        <li class="page-item" v-bind:class="{active: pagelist.currentPageNo == pagelist.totalPageCount}" v-on:click="page(pagelist.totalPageCount)" v-if="pagelist.totalPageCount > 1">\
                            <a href="javascript:;" class="page-link">{{pagelist.totalPageCount}}</a>\
                        </li>\
                        <li class="page-item" v-bind:class="{disabled: pagelist.currentPageNo == pagelist.totalPageCount}" v-on:click="nextPage" v-if="pagelist.totalPageCount > 1">\
                            <a href="javascript:;" class="page-link" v-if="pagelist.small">&gt;</a>\
                            <a href="javascript:;" class="page-link" v-else>下一页</a>\
                        </li>\
                    </ul>\
                </div>',     
    computed:{
        // 计算中间页数
        middlePages: function(){
            if(this.pagelist.totalPageCount <= 2){
                return 0;
            }else if(this.pagelist.totalPageCount> 2 && this.pagelist.totalPageCount < 10){
                return this.pagelist.totalPageCount-2;
            }else{
                return 5;
            }
        },
        bigLimit: function(){
            return this.pagelist.totalPageCount -3;
        },
        offset: function(){
            if(this.pagelist.totalPageCount >= 10){
                if(this.pagelist.currentPageNo <= 5){
                    return 2;
                }else if(this.pagelist.currentPageNo >= this.bigLimit){
                    return this.bigLimit-2;
                }else{
                    return this.pagelist.currentPageNo-2;
                }
            }else{
                return 2;
            }
        }
    },
    methods: {
        // 点击页数
        page: function(indexPage){
            indexPage = Number(indexPage);
            if(indexPage <= this.pagelist.totalPageCount && /(^[1-9]\d*$)/.test(indexPage)){
                this.$emit('pageclick',indexPage);
            }else{
                $.toast("请输入有效页数","cancel")
            }
        },
        // 上一页
        prevPage: function(){
            if(this.pagelist.currentPageNo != 1){
                this.page(this.pagelist.currentPageNo-1);
            }
        },
        // 下一页
        nextPage: function(){
            if(this.pagelist.currentPageNo != this.pagelist.totalPageCount){
                this.page(this.pagelist.currentPageNo+1);
            }
        }
    },
    mounted: function(){
        
    }
};