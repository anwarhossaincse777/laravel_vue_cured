
import {createRouter,createWebHistory} from "vue-router";

import List from "../crud/List.vue";
import Add from "../crud/AddNew.vue";
import StudentEdit from "../crud/EditData.vue";



const routes=[

    { path: '/', name:"List",component:List},
    { path: '/add-new', name:"Add",component:Add},
    { path: '/student/edit/:id', name:"StudentEdit",component:StudentEdit},

];

const router = createRouter({
    history: createWebHistory(),
    routes,
    strict: true, // applies to all routes
})

export default router;
