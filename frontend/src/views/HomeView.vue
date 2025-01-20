<template>
  <div class="home">
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

<style scoped>
.home {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  color: #42b983;
}
</style>