import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import SubjectView from "../views/gradeSetting/subject/SubjectView.vue";
import GradeView from "../views/gradeSetting/grade/GradeView.vue";
import AddSubject from "../views/gradeSetting/subject/AddSubject.vue";
import AddGrade from "../views/gradeSetting/grade/AddGrade.vue";
// import App from "../App.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      { path: "/subjects", name: "subjects", component: SubjectView },
      { path: "/grades", name: "grades", component: GradeView },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
