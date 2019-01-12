<template>
    <div>ChaptersExam{{bookId}}</div>
</template>

<script>
    export default {
        name: "ChaptersExam",
        data() {
            return {
                bookId:""
            }
        },
        beforeRouteUpdate(to, from, next) {
            this._initVue(to);
            next();
        },
        mounted() {
            this._initVue(this.$route);
        },
        methods:{
            _initVue(route){
                this.bookId = route.query.bookId;
            }
        }
    }
</script>

<style scoped>

</style>