import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/film'
    },
    {
      path: '/film',
      name: 'film',
      component: (resolve) => {
        require(['pages/Film'], resolve)
      },
      children: [
        {
          path: 'hot',
          name: 'hotFilm',
          component: (resolve) => {
            require(['components/HotFilm'], resolve)
          }
        },
        {
          path: 'todo',
          name: 'todoFilm',
          component: (resolve) => {
            require(['components/TodoFilm'], resolve)
          }
        },
        {
          path: 'find',
          name: 'findFilm',
          component: (resolve) => {
            require(['components/FindFilm'], resolve)
          }
        }
      ]
    },
    {
      path: '/cinema',
      name: 'cinema',
      component: (resolve) => {
        require(['pages/Cinema'], resolve)
      }
    },
    {
      path: '/discover',
      name: 'discover',
      component: (resolve) => {
        require(['pages/Discover'], resolve)
      }
    },
    {
      path: '/mine',
      name: 'mine',
      component: (resolve) => {
        require(['pages/Mine'], resolve)
      }
    },
    {
      path: '/city-select',
      name: 'citySelect',
      component: (resolve) => {
        require(['pages/CitySelect'], resolve)
      }
    }
  ]
})

export default router
