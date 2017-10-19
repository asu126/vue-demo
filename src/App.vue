<template>
  <div>
    <router-view></router-view>
    <navbar></navbar>

    <div class="row m-0 p-5">
      <div class="col-md-2 col-sm-3 col-xs-12">
        <sidebar></sidebar>
      </div>
    </div>
    <div v-if="type === 'A'">
      A
    </div>
    <div v-else-if="type === 'B'">
      B
    </div>
    <div v-else-if="type === 'C'">
      C
    </div>
    <div v-else>
      Not A/B/C
    </div>

    <div>
      <ul id="example-1">
        <li v-for="item in items">
          {{ item.message }}
        </li>
      </ul>
    </div>

    <span v-for="n in 10">{{ n }} </span>

    <div id="example-2">
      <button v-on:click="counter += 1">增加 1</button>
      <p>这个按钮被点击了 {{ counter }} 次。</p>
    </div>

    <div id="example-3">
      <!-- `greet` 是在下面定义的方法名 -->
      <button v-on:click="greet">Greet</button>
    </div>

    <div>
      <input v-model="message" placeholder="edit me">
      <p>Message is: {{ message }}</p>
    </div>

    <!-- 复选框 -->
    <div>
      <input type="checkbox" id="checkbox" v-model="checked">
      <label for="checkbox">{{ checked }}</label>
    </div>

    <!-- 复选框 -->
    <div id='example-3'>
      <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
      <label for="jack">Jack</label>
      <input type="checkbox" id="john" value="John" v-model="checkedNames">
      <label for="john">John</label>
      <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
      <label for="mike">Mike</label>
      <br>
      <span>Checked names: {{ checkedNames }}</span>
    </div>

    <!-- 单选按钮 -->
    <div id="example-4">
      <input type="radio" id="one" value="One" v-model="picked">
      <label for="one">One</label>
      <br>
      <input type="radio" id="two" value="Two" v-model="picked">
      <label for="two">Two</label>
      <br>
      <span>Picked: {{ picked }}</span>
    </div>

    <!-- 选择列表 -->
    <div id="example-5">
      <select v-model="selected">
        <option disabled value="">请选择</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
      <span>Selected: {{ selected }}</span>
    </div>

    <div id="example-6">
      <select v-model="selecteds" multiple style="width: 50px;">
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
      <br>
      <span>Selected: {{ selecteds }}</span>
    </div>

    <div id="example-10">
      <my-component></my-component>
    </div>

  </div>
</template>
<script>
/* 根组件就像是 AngularJS 的 $rootScope，同时也负责全局布局 */
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar/index.vue'
import Breadcrumb from './components/Breadcrumb.vue'

export default {
  // 路由会自动将该组件挂载到 #app 上
  // el: () => '#app',

  components: { Navbar, Sidebar, Breadcrumb },

  // 注意：顶级变量必须设置默认值方能引入 observer
  data: () => ({
    showInNavbar: { exact: true },
    showInSidebar: true,
    type: 'A',
    counter: 0,
    name: 'Vue.js',
    message: "",
    checked: true,
    checkedNames: [],
    picked: '',
    selected: '',
    selecteds: [],
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ],
    userData: null
  }),
  // 在 `methods` 对象中定义方法
  methods: {
    greet: function (event) {
      // `this` 在方法里指当前 Vue 实例
      alert('Hello ' + this.name + '!')
      // `event` 是原生 DOM 事件
      if (event) {
        alert(event.target.tagName)
      }
    }
  }
}
</script>
<style>
.p-5 {
  padding: 5px;
}
.p-15 {
  padding: 15px;
}
.main-content {
  min-height: 300px;
  background-color: #f7f7f7;
  border-radius: 5px;
}
/* 全局通用的 router-view 过渡效果 */
.fade-transition {
  transition: opacity .1s ease;
}
.fade-enter, .fade-leave {
  opacity: 0;
}
</style>
