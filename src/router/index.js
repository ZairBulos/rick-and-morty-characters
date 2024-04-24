import { createRouter, createWebHistory } from 'vue-router';
import CharactersView from '../views/CharactersView.vue';

const routes = [
  { path: '/', component: CharactersView },
  { path: '/character/:id', component: () => import('../views/CharacterView.vue') },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
