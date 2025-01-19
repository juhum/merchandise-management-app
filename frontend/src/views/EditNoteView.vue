<template>
    <div>
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