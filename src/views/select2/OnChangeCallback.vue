<template>
  <div>
    <article class="doc-row" id="ex-vuex">
      <h3 class="page-header">Change Event <small>Vuex Compatibility</small></h3>
      <div class="row">
        <div class="col-md-6">
          <p>vue-select provides an <code>change</code> event. This function is passed the currently selected value(s) as it's only parameter.</p>
          <p>This is very useful when integrating with Vuex, as it will allow your to trigger an action to update your vuex state object. Choose a callback and see it in action.</p>

          <div class="form-inline">
            <div class="radio">
              <label>
                <input type="radio" v-model="callback" value="console"> <code>console.log(val)</code>
              </label>
            </div>

            <div class="radio">
              <label>
                <input type="radio" v-model="callback" value="alert"> <code>alert(val)</code>
              </label>
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <pre><v-code lang="markup">&#x3C;v-select v-on:change=&#x22;consoleCallback&#x22; :options=&#x22;countries&#x22;&#x3E;&#x3C;/v-select&#x3E;</v-code></pre>
          <pre><v-code lang="javascript">methods: {
            consoleCallback(val) {
            console.dir(JSON.stringify(val))
          },

          alertCallback(val) {
            alert(JSON.stringify(val))
           }
          }</v-code></pre>
          <v-select :options="countries" :on-change="getCallback"></v-select>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import vSelect from 'vue-select'

export default {
  components: {vSelect},
  data () {
    return {
      countries: ['China', 'ChinaTaiwan', 'Batie'],
      callback: 'console'
    }
  },
  methods: {
    consoleCallback (val) {
      console.dir(JSON.stringify(val))
    },

    alertCallback (val) {
      alert(JSON.stringify(val))
    }
  },
  computed: {
    getCallback () {
      if (this.callback === 'alert') {
        return this.alertCallback
      }
      return this.consoleCallback
    }
  }
}
</script>
