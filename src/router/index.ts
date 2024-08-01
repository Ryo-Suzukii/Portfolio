import { createRouter, createWebHistory } from 'vue-router';
import Top from '../components/AppTop.vue';
import Profile from '../components/AppProfile.vue';
import Works from '../components/AppWorks.vue';
import Contact from '../components/AppContact.vue';
import Map from '../components/AppMap.vue';

const routes = [
  { path: '/', component: Top },
  { path: '/profile', component: Profile },
  { path: '/works', component: Works },
  { path: '/contact', component: Contact },
  { path: '/map', component: Map },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
