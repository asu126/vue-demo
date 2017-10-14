// import Vue from 'vue'
// import App from './App.vue'

// new Vue({
//   el: '#app',
//   render: h => h(App)
// })

import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import VueResource from 'vue-resource'

import jQuery from 'jquery';
// expose common libraries as globals (TODO: remove these)
window.jQuery = jQuery;
window.$ = jQuery;
import select2 from 'select2';


//开启debug模式
Vue.config.debug = true;

Vue.use(VueRouter);
Vue.use(VueResource);

// 定义组件, 也可以像教程之前教的方法从别的文件引入
const First = { template: '<div><h2>我是第 1 个子页面</h2></div>' }
import secondcomponent from './components/secondcomponent.vue'

// A route component can also contain <router-view> to render
// nested children route components
const Parent = {
  template: `
    <div class="parent">
      <h2>Parent</h2>
      <router-view class="child"></router-view>
    </div>
  `
}

const Default = { template: '<div>default</div>' }
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
const Baz = { template: '<div>baz</div>' }

const Qux = {
  template: `
    <div class="nested-parent">
      <h3>qux</h3>
      <router-link :to="{ name: 'quux' }">/quux</router-link>
      <router-view class="nested-child"></router-view>
    </div>
  `
}
const Quy = {
  template: `
    <div class="nested-parent-other">
      <h3>quy</h3>
      <pre>{{ JSON.stringify(Object.keys($route.params)) }}</pre>
    </div>
  `
}
const Quux = { template: '<div>quux</div>' }
const Zap = { template: '<div><h3>zap</h3><pre>{{ $route.params.zapId }}</pre></div>' }

// 创建一个路由器实例
// 并且配置路由规则
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/first',
      component: First
    },
    {
      path: '/second',
      component: secondcomponent
    },
    {
      path: '/home',
      title: 'home',
      component (resolve) {
        require(['./views/index.vue'], resolve)
      }
    },
    {
      path: '/auth/login',
      title: '用户登录',
      icon: 'fa fa-sign-in',
      component (resolve) {
        require(['./views/auth/login.vue'], resolve)
      },
      forbidAuthed: true
    },
    { path: '/parent', component: Parent,
      children: [
        // an empty path will be treated as the default, e.g.
        // components rendered at /parent: Root -> Parent -> Default
        { path: '', component: Default },

        // components rendered at /parent/foo: Root -> Parent -> Foo
        { path: 'foo', component: Foo },

        // components rendered at /parent/bar: Root -> Parent -> Bar
        { path: 'bar', component: Bar },

        // NOTE absolute path here!
        // this allows you to leverage the component nesting without being
        // limited to the nested URL.
        // components rendered at /baz: Root -> Parent -> Baz
        { path: '/baz', component: Baz },

        {
          path: 'qux/:quxId',
          component: Qux,
          children: [{ path: 'quux', name: 'quux', component: Quux }]
        },

        { path: 'quy/:quyId', component: Quy },

        { name: 'zap', path: 'zap/:zapId?', component: Zap }
      ]
    }
  ]
})

// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
const app = new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')
