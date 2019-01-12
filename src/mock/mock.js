var Mock = require('mockjs');

const menus = function () {
    let ms = [{
        index: "/",
        name: '首页',
    }, {
        index: "/chapters?topicId=1&subjectId=1",
        name: '初级职称',
    }, {
        index: "/chapters?topicId=1&subjectId=2",
        name: '中级考试',
    }, {
        index: "/chapters?topicId=1&subjectId=3",
        name: '税务师',
    }];

    return {resultCode: "0", data: ms};
}

Mock.mock("/api/edu/meuns",/post|get/i,menus);