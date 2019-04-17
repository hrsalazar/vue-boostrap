import Vue from 'vue';
import Router from 'vue-router';
import Layout from '../layout/Layout';
import Home from '../sections/Home';
import Section2 from '../sections/Section2';
import _Header from '../layout/_Header';
import Section3 from '../sections/Section3';
import _Footer from '../layout/_Footer';


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Layout,
      props(route) {
        const matched = route.matched;
        
        let header = null;
        let footer = null;
        
        if (matched.length > 1) {
          
          console.log(matched[1]);
          if ('header' in matched[1].meta) {
            header = matched[1].meta.header;
          }
          if ('footer' in matched[1].meta) {
            footer = matched[1].meta.footer;
          }
          
          return matched[1].meta;
        }
        return {};
      },
      children: [
        {
          path: '/',
          name: 'home',
          component: Home,
          meta: {
            header: _Header,
            footer: _Footer,
          },
        },
        {
          path: 'section-2',
          name: 'section-2',
          component: Section2,
          meta: {
            header: _Header,
            footer: _Footer,
          },
        },
        {
          path: 'section-3',
          name: 'section-3',
          component: Section3,
          meta: {
            header: _Header,
            footer: _Footer,
          },
        },
      ],
    },
  ],
});
