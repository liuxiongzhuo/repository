<template>
  <router-view></router-view>
</template>

<script setup>
if (!localStorage.getItem('backgroud')) {
  localStorage.setItem('backgroud',1)
}
</script>

<style scoped>

</style>