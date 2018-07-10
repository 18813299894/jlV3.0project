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
import recordDetails from '@/views/recordDetails'
import alarmRecord from '@/views/alarmRecord'
import alarmDetails from '@/views/alarmDetails'
import noResult from '@/views/noResult'
import noRecord from '@/views/noRecord'
import inquiries from '@/views/inquiries'
import resultList from '@/views/resultList'
import resultDetails from '@/views/resultDetails'
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
    },
    {
      path: '/recordDetails',
      name: 'recordDetails',
      component: recordDetails
    },
    {
      path: '/alarmRecord',
      name: 'alarmRecord',
      component: alarmRecord
    },
    {
      path: '/alarmDetails',
      name: 'alarmDetails',
      component: alarmDetails
    },
    {
      path: '/noResult',
      name: 'noResult',
      component: noResult
    },
    {
      path: '/noRecord',
      name: 'noRecord',
      component: noRecord
    },
    {
      path: '/inquiries',
      name: 'inquiries',
      component: inquiries
    },
    {
      path: '/resultList',
      name: 'resultList',
      component: resultList
    },
    {
      path: '/resultDetails',
      name: 'resultDetails',
      component: resultDetails
    }
  ]
})
