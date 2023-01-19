<template>
  <div>
    <app-bar/>
   <div class="pt-16">
    <router-view/>
   </div>
  </div>
</template>
<script lang="ts" setup>
import AppBar from './components/AppBar.vue';
</script>