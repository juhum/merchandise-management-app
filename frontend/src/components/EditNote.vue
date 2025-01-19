<template>
    <div v-if="item">
      <h2>Edit Notes for {{ item.name }}</h2>
      <form @submit.prevent="updateNotes">
        <textarea v-model="notes"></textarea>
        <button type="submit">Save</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'EditNote',
    props: ['id'],
    data() {
      return {
        item: null,
        notes: ''
      };
    },
    created() {
      this.fetchItem();
    },
    methods: {
      async fetchItem() {
        const response = await axios.get(`/api/items/${this.id}`);
        this.item = response.data;
        this.notes = this.item.notes;
      },
      async updateNotes() {
        await axios.put(`/api/items/${this.id}/notes`, { notes: this.notes });
        this.$router.push(`/items/${this.id}`);
      }
    }
  };
  </script>