import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/sections/Home';
import Section2 from '@/components/sections/Section2';
import Section3 from '@/components/sections/Section3';


Vue.use(Router);

export default new Router({
  mode: history,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/2',
      name: 'Section2',
      component: Section2,
    },
    {
      path: '/3',
      name: 'Section3',
      component: Section3,
    },
  ],
});
/* Check out https://codesandbox.io/s/jzr5nojn39 */
