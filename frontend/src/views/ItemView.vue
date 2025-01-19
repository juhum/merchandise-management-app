<template>
    <div>
      <h1>Item Details</h1>
      <ItemDetail :id="$route.params.id" />
    </div>
  </template>
  
  <script>
  import ItemDetail from '../components/ItemDetail.vue';
  
  export default {
    name: 'ItemView',
    components: {
      ItemDetail
    }
  };
  </script>