<template>
  <div>
    <h1>Goods Management</h1>
    <ItemList />
  </div>
</template>

<script>
import ItemList from '../components/ItemList.vue';

export default {
  name: 'HomeView',
  components: {
    ItemList
  }
};
</script>