<template>
  <div class="dash-sidebar-container">
    <div class="dash-sidebar-self">
      <div class="logo-image-box">
        <img src="https://www.helloimg.com/i/2024/11/29/6749d5af2b628.png" alt="" class="logo-image">
      </div>
      <div class="name-box">
        <div class="name">0031400</div>
      </div>
      <div class="motto-box">

        <div class="motto">我爱数学 数学爱我</div>
      </div>
    </div>
    <div class="dash-sidebar-links-box">
      <div class="link-box">
        <router-link to="/dash" class="link">文章列表</router-link>
      </div>
      <div class="link-box">
        <router-link to="/newpost" class="link">撰写文章</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
a{
  color: black;
}
.dash-sidebar-container {
  padding: 20px;
    width: 350px;
    box-sizing: border-box;
}
.dash-sidebar-self {
  margin-top: 60px;
}

.logo-image-box {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.logo-image {
  width: 200px;
  height: 200px;
}

.name-box {
  margin-top: 20px;
}

.motto-box {
  margin-top: 10px;
}
.link-box,
.name-box,
.motto-box {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.name {
  font-size: 36px;
}

.motto {
  font-size: 24px;
}

.link {
  font-size: 24px;
}

.links-box {
  margin-top: 20px;
}

.link-box {
  margin-top: 8px;
}
</style>