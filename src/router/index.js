import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import SubjectView from "../views/gradeSetting/subject/SubjectView.vue";
import GradeView from "../views/gradeSetting/grade/GradeView.vue";
import AddGrade from "../views/gradeSetting/grade/AddGrade.vue";
import Dashboard from "../views/Dashboard.vue";
import EditGrade from "../views/gradeSetting/grade/EditGrade.vue";
// import App from "../App.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      { path: "", name: "dashboard", component: Dashboard },
      { path: "/subjects", name: "subjects", component: SubjectView },
      { path: "/grades", name: "grades", component: GradeView },
      { path: "/grade/add", name: "addgrade", component: AddGrade },
      { path: "/grade/edit/:id", name: "editGrade", component: EditGrade },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
