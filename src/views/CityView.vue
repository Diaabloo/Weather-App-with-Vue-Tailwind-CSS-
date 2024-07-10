<template>
  <div>
    <Suspense>
      <template #default>
        <AsyncCity />
      </template>
    </Suspense>
  </div>
</template>

<script setup>
import AsyncCity from '../components/AsyncCity.vue';

</script>
