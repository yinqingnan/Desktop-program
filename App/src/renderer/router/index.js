import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('../components/login/login.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../components/home/home.vue'),
      children: [
        {path: '/home/discover',
          name: 'discover',
          component: () => import('../views/Discover/Discover.vue'),
          children: [
            {path: '/home/discover/personality', name: 'personality', component: () => import('../views/Discover/personality.vue')},
            {path: '/home/discover/songlist', name: 'songlist', component: () => import('../views/Discover/songlist.vue')},
            {path: '/home/discover/anchorstation', name: 'anchorstation', component: () => import('../views/Discover/anchorstation.vue')},
            {path: '/home/discover/leaderboard', name: 'leaderboard', component: () => import('../views/Discover/leaderboard.vue')},
            {path: '/home/discover/singer', name: 'singer', component: () => import('../views/Discover/singer.vue')},
            {path: '/home/discover/newmusic', name: 'newmusic', component: () => import('../views/Discover/newmusic.vue')}
          ]
        }
      ]
    }
    // {
    //   path: '*',
    //   redirect: '/'
    // }
  ]
})
