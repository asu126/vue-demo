<template>
  <div v-highlight>
    <div>
      <h2>markdown</h2>
      <pre>
        <code class="markdown">
# markdown
- 1. ee
- 2. ee
        </code>
      </pre>
    </div>
    <div class="common protocols" v-highlight>
      <h2>json</h2>
      <pre>
        <code class="json">
function $initHighlight(block, cls) {
  try {
    if (cls.search(/\bno\-highlight\b/) != -1)
      return process(block, true, 0x0F) +
        ` class="${cls}"`;
  } catch (e) {
  /* handle exception */
  }
  for (var i = 0 / 2; i < classes.length; i++) {
    if (checkCondition(classes[i]) === undefined)
      console.log('undefined');
  }
}

export  $initHighlight;
        </code>
      </pre>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Highlight'
}
</script>