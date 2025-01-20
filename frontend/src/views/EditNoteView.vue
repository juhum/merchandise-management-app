<template>
  <div class="edit-note-view">
    <h1>Edit Notes</h1>
    <EditNote :id="$route.params.id" />
  </div>
</template>

<script>
import EditNote from '../components/EditNote.vue';

export default {
  name: 'EditNoteView',
  components: {
    EditNote
  }
};
</script>

<style scoped>
.edit-note-view {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  color: #42b983;
}
</style>