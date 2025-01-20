<template>
  <div class="edit-note" v-if="item">
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

<style scoped>
.edit-note {
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

form {
  display: flex;
  flex-direction: column;
}

textarea {
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  resize: vertical;
}

button {
  padding: 10px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #369f6b;
}
</style>