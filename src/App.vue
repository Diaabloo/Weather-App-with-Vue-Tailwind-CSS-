<template>
  <div  class="flex flex-col min-h-screen font-Roboto bg-weather-primary">
    <NavBar />
    <RouterView class="flex-1" v-slot="{ Component }">
      <Transition name="page">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </div>
</template>


<script setup>

  import { RouterView } from 'vue-router';
  import NavBar from './components/NavBar.vue';
</script>


<style scoped>

  /* .app{
    display: flex;
    flex-direction: column;
    min-height: screen;
    font-family: "Roboto", sans-serif;
    background: weather-primary;
  } */
  .page-enter-active {
  transition: 600ms ease all;
}

  .page-enter-from {
    opacity: 0;
  }
</style>
