import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import ItemView from '../views/ItemView.vue';
import EditNoteView from '../views/EditNoteView.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/items/:id', name: 'ItemView', component: ItemView },
  { path: '/items/:id/edit', name: 'EditNoteView', component: EditNoteView }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;