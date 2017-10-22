<template>
  <div id="select2">
    <h5>demo</h5>
    <v-select :value.sync="selected" :options="options"></v-select>

    <!-- Multiple Option Select -->
    <h5>Multiple Option Select</h5>
    <v-select multiple :options="countries"></v-select>

    <h5>Custom Labels</h5>
    <v-select label="value" :options="countries1"></v-select>

    <h5>On-Change Callback</h5>
    <v-select on-change="consoleCallback" :options="countries2"></v-select>

    <h5>AJAX Remote Option Loading</h5>
    <v-select
	:debounce="250"
	:on-search="getOptions"
	:options="search"
	placeholder="Search GitHub Repositories..."
	label="full_name"
    > </v-select>

  </div>
</template>
<script>
import vSelect from 'vue-select'
export default {
  components: {vSelect},
  data () {
    return {
      selected: 'foo',
      options: ['foo', 'bar', 'baz'],
      countries: ['China', 'ChinaTaiwan', 'Batie'],
      countries1: [{value: 'CA', label: 'Canada'}],
      countries2: [{value: 'CA', label: 'Canada'}, {value: 'Cn', label: 'China'}],
      search: null
    }
  },
  methods: {
    consoleCallback (val) {
      console.dir(JSON.stringify(val))
    },

    alertCallback (val) {
      alert(JSON.stringify(val))
    },

    getOptions (search, loading) {
      loading(true)
      this.$http.get('https://api.github.com/search/repositories', {
        q: search
      }).then(resp => {
        this.options = resp.data.items
        loading(false)
      })
    }
  }
}
</script>
