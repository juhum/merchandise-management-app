<template>
    <div>
      <ul>
        <li v-for="item in items" :key="item.id">
          <router-link :to="'/items/' + item.id">{{ item.name }}</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { mapState, mapActions } from 'vuex';
  
  export default {
    name: 'ItemList',
    computed: {
      ...mapState(['items'])
    },
    created() {
      this.fetchItems();
    },
    methods: {
      ...mapActions(['fetchItems'])
    }
  };
  </script>