import Vue from "vue";
import VueRouter from "vue-router";
import FirstPage from "../components/FirstPage";
import JuniorLevelAccountant from "../components/JuniorLevelAccountant";
import MediumLevelAccountant from "../components/MediumLevelAccountant";
import CertifiedTaxAgents from "../components/CertifiedTaxAgents";
import ChaptersExam from "../components/ChaptersExam";
Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        component: FirstPage
    },
    {
        path: "/juniorLevelAccountant",
        component: JuniorLevelAccountant,
        children:[
            {
                path:"chaptersExam",
                component:ChaptersExam,
            }
        ]
    },
    {
        path: "/mediumLevelAccountant",
        component: MediumLevelAccountant
    },
    {
        path: "/certifiedTaxAgents",
        component: CertifiedTaxAgents
    }
]

var router = new VueRouter({
    routes
})
export default router;