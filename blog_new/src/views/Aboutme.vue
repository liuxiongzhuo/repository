<template>
    <Backgroud></Backgroud>
<div class="about-container">
    <Sidebar class="about-sidebar"></Sidebar>
    <div class="about-main"></div>
</div>
</template>

<script setup>

</script>

<style scoped>
.about-container {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.about-sidebar {
    width: 350px;
    box-sizing: border-box;
}

.about-main {
    padding: 20px;
    overflow-y: auto;
}
</style>