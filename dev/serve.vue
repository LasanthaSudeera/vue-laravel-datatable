<script>
import Vue from 'vue';
import VueLaravelDatatable from '@/vue-laravel-datatable.vue';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    VueLaravelDatatable
  }
});
</script>

<template>
  <div id="app">
    <vue-laravel-datatable />
  </div>
</template>
