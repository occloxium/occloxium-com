import Vue from 'vue';
import Router from 'vue-router';

import {
  Home,
  Work,
  Contact,
} from '@/views';

import {
  CaseStudySeminar,
} from '@/views/case-study';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/work',
      name: 'Work',
      component: Work,
      alias: ['/projects']
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
      alias: ['/projects']
    },
    {
      path: '/case-study/seminar',
      name: 'Seminar',
      component: CaseStudySeminar,
    },
  ]
});
