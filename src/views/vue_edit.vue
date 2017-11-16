<template>
  <div>
    <editor v-model="content" lang="html" theme="chrome" height="300" ></editor>
    </editor>
    <button v-on:click="testFunc">点我打印输入内容</button>
  </div>
</template>

<script>
import AceEdit from './ace/ace_index.js'
require('brace')
require('brace/mode/javascript')
require('brace/theme/monokai')
require('brace/theme/chrome')
require('brace/mode/html')

export default {
  name: 'AceEdit',
  data () {
    return {
      content: '111'
    }
  },
  components: {
    editor: AceEdit
  },
  methods: {
    testFunc: function () {
      console.log(this.content)
    }
  }
}
</script>