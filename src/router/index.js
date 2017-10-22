import Vue from 'vue'
import Router from 'vue-router'

// Containers
import Full from '@/containers/Full'

// Views
import Dashboard from '@/views/Dashboard'
import Charts from '@/views/Charts'

// Views - Components
// import Buttons from '@/views/components/Buttons'
// import SocialButtons from '@/views/components/SocialButtons'
// import Cards from '@/views/components/Cards'
// import Forms from '@/views/components/Forms'
// import Modals from '@/views/components/Modals'
// import Switches from '@/views/components/Switches'
// import Tables from '@/views/components/Tables'

// // Views - Icons
// import FontAwesome from '@/views/icons/FontAwesome'
// import SimpleLineIcons from '@/views/icons/SimpleLineIcons'

// // Views - Pages
// import Page404 from '@/views/pages/Page404'
// import Page500 from '@/views/pages/Page500'
// import Login from '@/views/pages/Login'
// import Register from '@/views/pages/Register'

// Views - Select2
import Select2 from '@/views/Select2'

Vue.use(Router)

export default new Router({
  mode: 'hash', // Demo is living in GitHub.io, so required!
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
      name: 'Home',
      component: Full,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard
        },
        {
          path: 'charts',
          name: 'Charts',
          component: Charts
        },
        {
          path: 'select2',
          name: 'Select2',
          component: Select2
        }
      ]
    }
  ]
})
