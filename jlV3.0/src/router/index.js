import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/views/home'
import noJurisdiction from '@/views/noJurisdiction'
import inspectionCode from '@/views/inspectionCode'
import success from '@/views/success'
import scavenging from '@/views/scavenging'
import attention from '@/views/attention'
import inspectionRecord from '@/views/inspectionRecord'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/noJurisdiction',
      name: 'noJurisdiction',
      component: noJurisdiction
    },
    {
      path: '/inspectionCode',
      name: 'inspectionCode',
      component: inspectionCode
    },
    {
      path: '/success',
      name: 'sueccess',
      component: success
    },
    {
      path: '/scavenging',
      name: 'scavenging',
      component: scavenging
    },
    {
      path: '/attention',
      name: 'attention',
      component: attention
    },
    {
      path: '/inspectionRecord',
      name: 'inspectionRecord',
      component: inspectionRecord
    }
  ]
})
