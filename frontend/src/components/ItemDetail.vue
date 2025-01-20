<template>
  <div class="item-detail" v-if="item">
    <h2>{{ item.name }}</h2>
    <p>{{ item.notes }}</p>
    <p>Status: {{ item.state }}</p>
    <router-link :to="'/items/' + item.id + '/edit'" v-if="item.state !== 'free'">Edit Notes</router-link>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ItemDetail',
  props: ['id'],
  data() {
    return {
      item: null
    };
  },
  created() {
    this.fetchItem();
  },
  methods: {
    async fetchItem() {
      const response = await axios.get(`/api/items/${this.id}`);
      this.item = response.data;
    }
  }
};
</script>

<style scoped>
.item-detail {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
}

h2 {
  color: #42b983;
}

p {
  margin: 10px 0;
}

a {
  color: #42b983;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>