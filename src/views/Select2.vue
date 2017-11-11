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
    <OnChangeCallback></OnChangeCallback>


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
import OnChangeCallback from './select2/OnChangeCallback'

export default {
  props: {

    /**
     * Contains the currently selected value. Very similar to a
     * `value` attribute on an &lt;input&gt;. In most cases, you'll want
     * to set this as a two-way binding, using :value.sync. However,
     * this will not work with Vuex, in which case you'll need to use
     * the onChange callback property.
     * @type {Object||String||null}
     */
    value: {
      default: null
    },

    /**
     * An array of strings or objects to be used as dropdown choices.
     * If you are using an array of objects, vue-select will look for
     * a `label` key (ex. [{label: 'This is Foo', value: 'foo'}]). A
     * custom label key can be set with the `label` prop.
     * @type {Array}
    */
    // options: {
    //   type: Array,
    //   default () { return [] }
    // },

    /**
     * Enable/disable filtering the options.
     * @type {Boolean}
    */
    searchable: {
      type: Boolean,
      default: true
    },

    /**
     * Equivalent to the `multiple` attribute on a `<select>` input.
     * @type {Boolean}
    */
    multiple: {
      type: Boolean,
      default: false
    },

    /**
     * Equivalent to the `placeholder` attribute on an `<input>`.
     * @type {String}
    */
    placeholder: {
      type: String,
      default: ''
    },

    /**
     * Sets a Vue transition property on the `.dropdown-menu`. vue-select
     * does not include CSS for transitions, you'll need to add them yourself.
     * @type {String}
    */
    transition: {
      type: String,
      default: 'expand'
    },

    /**
      * Enables/disables clearing the search text when an option is selected.
     * @type {Boolean}
    */
    clearSearchOnSelect: {
      type: Boolean,
      default: true
    },

    /**
     * Tells vue-select what key to use when generating option labels when
     * `option` is an object.
     * @type {String}
    */
    label: {
      type: String,
      default: 'label'
    }

    /**
     * An optional callback function that is called each time the selected
     * value(s) change. When integrating with Vuex, use this callback to trigger
     * an action, rather than using :value.sync to retreive the selected value.
     * @type {Function}
     * @default {null}
    */
    // onChange: Function
  },
  components: {vSelect, OnChangeCallback},
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
    getOptions (search, loading) { // 71f482f783aaf36a5a06690ab404c9fb12948a09 
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
