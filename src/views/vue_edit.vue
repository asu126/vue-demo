<template>
  <div>
     <editor id="javascript-editor" lang="html" theme="chrome" height="500">
     </editor>
  </div>
</template>

<script>
require('brace')
require('brace/mode/javascript')
require('brace/theme/monokai')
require('brace/mode/html')

// var editor = ace.edit('javascript-editor')
// editor.getSession().setMode('ace/mode/javascript')
// editor.setTheme('ace/theme/monokai')

export default {
  name: 'AceEdit',
  data: {
    content: '111'
  },
  components: {
    editor: require('vue2-ace-editor')
  }
  // methods: {
  //   initEditor: function (editor) {
  //     ace.require('brace/mode/html')
  //     ace.require('brace/mode/php')
  //     ace.require('brace/theme/chrome')
  //     ace.require('brace/theme/twilight')
  //   }
  // }
}
</script>