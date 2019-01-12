<template>
    <el-container>
        <el-header>
            <el-row>
                <el-col :span="8" style="text-align: right">
                    <img src="../assets/logo.png" class="icon-img">
                </el-col>
                <el-col :span="8">
                    <el-menu :default-active="defaultRouter" :router="true" class="el-menu" mode="horizontal"
                    >
                        <el-menu-item index="/" route="/">首页</el-menu-item>
                        <el-menu-item index="/juniorLevelAccountant" route="/juniorLevelAccountant">初级职称</el-menu-item>
                        <el-menu-item index="/mediumLevelAccountant" route="/mediumLevelAccountant">中级考试</el-menu-item>
                        <el-menu-item index="/certifiedTaxAgents" route="/certifiedTaxAgents">税务师</el-menu-item>
                    </el-menu>
                </el-col>
                <el-col :span="8">

                </el-col>
            </el-row>
        </el-header>
        <el-main class="custom-el-main">
            <router-view></router-view>
        </el-main>
    </el-container>
</template>

<script>
    export default {
        name: "MainCompent",
        data() {
            return {
                menus: [],
            }
        },
        mounted() {
            this._initVue();
        },
        methods: {
            _initVue() {
                let that = this;
                this.$http.get("/api/edu/meuns").then(function (res) {
                   console.log(res);
                   that.menus = res.data.data;
                })
            },
        },
        computed: {
            defaultRouter: function () {
                if (null != this.$route.path) {
                    var last = this.$route.path.lastIndexOf("/");
                    if (last > 0) {
                        return this.$route.path.substring(0, last);
                    }
                }
                return this.$route.path;
            }
        },
    }
</script>

<style scoped>
    .el-header, .el-footer {
        color: #333;
        text-align: center;
        line-height: 60px;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        height: 100%;
    }

    .icon-img {
        width: 70px;
        height: 60px;
    }

    body > .el-container {
        margin-bottom: 40px;
        height: 100%;
    }

    .custom-el-main {
        padding-left: 15%;
        padding-right: 15%;
    }
</style>