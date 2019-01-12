<template>
    <div>
        <el-carousel :interval="5000" type="card" height="300px">
            <el-carousel-item v-for="item in carouselImgUrls" :key="item">
                <img height="300px" width="900px" :src="item"/>
            </el-carousel-item>
        </el-carousel>
        <h1 class="title"><span class="title-prefix">-</span>会计类题库<span class="title-prefix">-</span></h1>
        <el-row :gutter="18" v-for="(value,index) in questionTypesRows" :key="value" style="margin-bottom: 20px">
            <el-col :span="6" :key="itemIndex" v-for="(item,itemIndex) in questionTypesCols(index)">
                <el-card :body-style="{ padding: '0px' }" shadow="hover">
                    <router-link :to="item.routerName">

                        <img :src="item.backImgUrl" class="my-img">

                        <div style="padding: 14px;">
                            <div class="bottom clearfix">

                                <el-button type="text" class="my-button" size="medium">{{item.name}}</el-button>

                            </div>
                        </div>
                    </router-link>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "FirstPage",
        data() {
            return {
                carouselImgUrls: [require("../assets/b1.png"),
                    require("../assets/b2.png"), require("../assets/b3.png")],
                questionTypes: [{
                    backImgUrl: require("../assets/cjtk.png"),
                    name: "会计初级题库",
                    routerName: "/juniorLevelAccountant"
                },
                    {
                        backImgUrl: require("../assets/zjtk.png"),
                        name: "会计中级题库",
                        routerName: "/mediumLevelAccountant"
                    }, {
                        backImgUrl: require("../assets/zckjs.png"),
                        name: "注册会计师",
                        routerName: "/mediumLevelAccountant"
                    }, {
                        backImgUrl: require("../assets/sws.png"),
                        name: "税务师",
                        routerName: "/mediumLevelAccountant"
                    }, {
                        backImgUrl: require("../assets/kjjc.png"),
                        name: "会计基础",
                        routerName: "/mediumLevelAccountant"
                    }]
            };
        },
        computed: {
            questionTypesRows: function () {
                var length = parseInt(this.questionTypes.length / 4, 10);
                var length1 = this.questionTypes.length % 4;
                length1 = (length1 == 0 ? 0 : 1);
                return length + length1;
            }
        },
        methods: {
            questionTypesCols: function (index) {
                var begin = index * 4;
                var end = begin + 4;
                if (end >= this.questionTypes.length) {
                    end = this.questionTypes.length;
                }
                return this.questionTypes.slice(begin, end);
            }
        }
    }
</script>

<style scoped>
    .el-carousel__item h3 {
        color: #475669;
        font-size: 18px;
        opacity: 0.75;
        line-height: 300px;
        margin: 0;
    }

    .el-carousel__item {
        background-color: #99a9bf;
    }

    h1.title {
        font-size: 25px;
    }

    .title-prefix {
        font-size: 25px;
        padding-left: 20px;
        padding-right: 20px;
    }

    .my-button {
        font-size: 16px;
        font-weight: 600;
    }


    .my-img {
        width: auto;
        height: auto;
        max-width: 100%;
        max-height: 100%;
    }

    .el-card.is-hover-shadow:hover {
        -webkit-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.48);
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.48)
    }

</style>