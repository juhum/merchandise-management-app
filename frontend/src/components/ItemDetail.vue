<template>
  <div v-if="item">
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