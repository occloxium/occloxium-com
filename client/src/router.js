import Vue from 'vue';
import Router from 'vue-router';

import {
  Home,
  CaseStudy,
} from '@/views';

import {
  CaseStudyList,
  CaseStudySeminar
} from '@/views/case-study';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/case-study',
      name: 'Case Study',
      component: CaseStudy,
      children: [
        {
          path: '/',
          name: 'Case Study',
          component: CaseStudyList,
        },
        {
          path: 'seminar',
          name: 'Seminar',
          component: CaseStudySeminar,
        },
      ]
    }
  ]
});
