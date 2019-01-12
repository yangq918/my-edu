<template>
    <el-container>
        <el-header style="background-color: white;margin-bottom: 10px;">
            <div style="text-align: left;padding-top: 10px;">
                <el-radio-group @change="doSelectBook" size="medium" v-model="selectBook">
                    <el-radio-button  v-for="item in books" :key="item.name" :label="item">{{item.nameCN}}
                    </el-radio-button>
                </el-radio-group>
            </div>
        </el-header>
        <el-container>
            <el-main style="padding-left: 0px;padding-right: 10px;padding-top: 0px;">
                <el-row style="font-size: 15px;color: darkgray;background-color: white;padding-top: 40px;padding-bottom: 40px;">
                    <el-col :span="8" style="border-right:rgba(169,169,169,0.56) 1px solid">
                        <div><span class="title_number" style="color:red">{{errorNum}}</span>道</div>
                        <div>错题总数</div>
                    </el-col>
                    <el-col :span="8" style="border-right:rgba(169,169,169,0.56) 1px solid">
                        <div><span class="title_number" style="color:green">{{totoalNum}}</span>道</div>
                        <div>做题总数</div>
                    </el-col>
                    <el-col :span="8">
                        <div><span class="title_number" style="color: blue">{{finishRate}}</span>%</div>
                        <div>完成率</div>
                    </el-col>
                </el-row>
                <router-view></router-view>
            </el-main>
            <el-aside width="300px">
                <div class="bookTitle">{{selectBook.nameCN}}</div>
                <el-menu
                        default-active="/chaptersExam"
                        class="el-menu-vertical" @select="handSelect">
                    <el-menu-item index="/chaptersExam">
                        <i class="el-icon-document"></i>
                        <span slot="title">章节练习</span>
                    </el-menu-item>
                    <el-menu-item index="/errorsExam">
                        <i class="el-icon-error"></i>
                        <span slot="title">错题练习</span>
                    </el-menu-item>
                    <el-menu-item index="/collectsExam">
                        <i class="el-icon-star-on"></i>
                        <span slot="title">收藏题练习</span>
                    </el-menu-item>
                    <el-menu-item index="/selfExam">
                        <i class="el-icon-edit"></i>
                        <span slot="title">模拟自测</span>
                    </el-menu-item>
                    <el-menu-item index="/answerRecord">
                        <i class="el-icon-tickets"></i>
                        <span slot="title">答卷记录</span>
                    </el-menu-item>
                    <el-menu-item index="/fineTalkVideo">
                        <i class="el-icon-bell"></i>
                        <span slot="title">精讲视频</span>
                    </el-menu-item>
                </el-menu>
            </el-aside>
        </el-container>
    </el-container>
</template>

<script>
    export default {
        name: "JuniorLevelAccountant",
        data() {
            return {
                topPath: "/juniorLevelAccountant",
                errorNum: 0,
                totoalNum: 0,
                finishRate: 0,
                selectMenuKey:"chaptersExam",
                selectBook: {},
                books: [{
                    name: "BasicEconomicLaw",
                    nameCN: "经济法基础",
                    bookId: "1",
                },
                    {
                        name: "PrimaryAccountingPractice",
                        nameCN: "初级会计实务",
                        bookId: "2",
                    }],
            };
        },
        computed: {},
        mounted() {
           this._initVue(this.$route);
        },
        methods: {
            handSelect(key) {
                this.selectMenuKey = key;
                var path = this.topPath + key;
                console.log(this.selectBook);
                this.$router.push({path: path, query: {bookId: this.selectBook.bookId}})

            },
            doSelectBook() {
                console.log(this.selectBook);
                this.handSelect(this.selectMenuKey);
            },
            _initVue(route){
                var bookId = route.query.bookId;
                if(null!=bookId&&""!=bookId)
                {
                    for(var i=0;i<this.books.length;i++)
                    {
                        if(bookId==this.books[i].bookId)
                        {
                            this.selectBook = this.books[i];
                            break;
                        }

                    }
                }
                else{
                    this.selectBook = this.books[0];
                }
                this.handSelect("/chaptersExam");
            },

        },
        beforeRouteUpdate(to, from, next) {
            //this._initVue(to);
            next();
        },
    }
</script>

<style scoped>
    .title_number {
        font-size: 50px;
        padding-right: 10px;
    }

    .bookTitle {
        font-size: 20px;
        font-weight: 600;
        background-color: white;
        line-height: 50px;
    }

    .el-menu-vertical {
        margin-top: 10px;
        margin-bottom: 10px;
        text-align: left;
    }
</style>