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
      try {
        const response = await axios.get(`/api/items/${this.id}`);
        this.item = response.data;
        this.notes = this.item.notes;
      } catch (error) {
        console.error('Error fetching item:', error);
      }
    },
    async updateNotes() {
      try {
        await axios.put(`/api/items/${this.id}/notes`, { notes: this.notes });
        this.$router.push(`/items/${this.id}`);
      } catch (error) {
        console.error('Error updating notes:', error);
      }
    }
  }
};
</script>