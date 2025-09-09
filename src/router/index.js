import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory('/sub-directory/'),
  routes: [
    {
      path: '/',
      name: 'Main',
      component: () => import('../components/main.vue')
    },
    {
      path: '/Canon',
      name: 'Canon',
      component: () => import('../camera/canon.vue')
    },
    {
      path: '/Fujifilm',
      name: 'Fujifilm',
      component: () => import('../camera/fujifilm.vue')
    },
    {
      path: '/Nikon',
      name: 'Nikon',
      component: () => import('../camera/nikon.vue')
    },
    {
      path: '/Sony',
      name: 'Sony',
      component: () => import('../camera/sony.vue')
    },
    {
      path: '/Olympus',
      name: 'Olympus',
      component: () => import('../camera/olympus.vue')
    },
    {
      path: '/WideAngle',
      name: 'WideAngle',
      component: () => import('../lens/wideAngle.vue')
    },
    {
      path: '/Standard',
      name: 'Standard',
      component: () => import('../lens/standard.vue')
    },
    {
      path: '/Telephoto',
      name: 'Telephoto',
      component: () => import('../lens/telephoto.vue')
    },
    {
      path: '/NatLight',
      name: 'NatLight',
      component: () => import('../light/natLight.vue')
    },
    {
      path: '/PhotoLight',
      name: 'PhotoLight',
      component: () => import('../light/photoLight.vue')
    },
    {
      path: '/Landscape',
      name: 'Landscape',
      component: () => import('../environment/landscape.vue')
    },
    {
      path: '/Thing',
      name: 'Thing',
      component: () => import('../environment/thing.vue')
    },
    {
      path: '/Human',
      name: 'Human',
      component: () => import('../portrait/human.vue')
    },
    {
      path: '/HumanH',
      name: 'HumanH',
      component: () => import('../portrait/humanH.vue')
    },
    {
      path: '/CoserH',
      name: 'CoserH',
      component: () => import('../portrait/coserH.vue')
    },
    {
      path: '/Coser',
      name: 'Coser',
      component: () => import('../portrait/coser.vue')
    }
    
  ]
})

export default router
