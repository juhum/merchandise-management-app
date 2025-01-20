import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ItemView from '../views/ItemView.vue';
import EditNoteView from '../views/EditNoteView.vue';

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/items/:id', name: 'ItemView', component: ItemView },
  { path: '/items/:id/edit', name: 'EditNoteView', component: EditNoteView }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;