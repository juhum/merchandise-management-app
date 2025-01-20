<template>
  <div class="item-list">
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in paginatedItems" :key="item.id">
          <td>{{ item.name }}</td>
          <td>{{ item.state }}</td>
          <td>
            <router-link :to="'/items/' + item.id">View</router-link>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="pagination">
      <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
      <span>Page {{ currentPage }} of {{ totalPages }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
    </div>
    <div class="items-per-page">
      <label for="itemsPerPage">Items per page:</label>
      <select v-model="itemsPerPage" @change="changeItemsPerPage">
        <option v-for="option in itemsPerPageOptions" :key="option" :value="option">{{ option }}</option>
      </select>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'ItemList',
  data() {
    return {
      currentPage: 1,
      itemsPerPage: 5,
      itemsPerPageOptions: [5, 10, 20, 50]
    };
  },
  computed: {
    ...mapState(['items']),
    paginatedItems() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.items.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.items.length / this.itemsPerPage);
    }
  },
  created() {
    this.fetchItems();
  },
  methods: {
    ...mapActions(['fetchItems']),
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    changeItemsPerPage() {
      this.currentPage = 1;
    }
  }
};
</script>

<style scoped>
.item-list {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}

.pagination {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.items-per-page {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

label {
  margin-right: 10px;
}
</style>