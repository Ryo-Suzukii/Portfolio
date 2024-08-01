<script lang="ts">
import AppHeader from './components/AppHeader.vue';
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: {
    AppHeader,
  },
});
</script>

<template>
  <AppHeader class="bg-color1" />
</template>
