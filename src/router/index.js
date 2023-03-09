import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import SubjectView from "../views/gradeSetting/subject/SubjectView.vue";
import GradeView from "../views/gradeSetting/grade/GradeView.vue";
import AddGrade from "../views/gradeSetting/grade/AddGrade.vue";
import Dashboard from "../views/Dashboard.vue";
import EditGrade from "../views/gradeSetting/grade/EditGrade.vue";
import AddSubject from "../views/gradeSetting/subject/AddSubject.vue";
import EditSubject from "../views/gradeSetting/subject/EditSubject.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      { path: "", name: "dashboard", component: Dashboard },
      { path: "/subject", name: "subject", component: SubjectView },
      { path: "/subject/add", name: "addSubject", component: AddSubject },
      { path: "/subject/edit/:id", name: "editSubject", component: EditSubject },
      { path: "/grade", name: "grade", component: GradeView },
      { path: "/grade/add", name: "addGrade", component: AddGrade },
      { path: "/grade/edit/:id", name: "editGrade", component: EditGrade },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
