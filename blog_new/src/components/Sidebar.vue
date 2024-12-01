<template>
  <div class="sidebar-container">
    <div class="sidebar-self">
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
    <div class="links-box">
      <div class="link-box">
        <router-link class="link" to="/">文章列表</router-link>
      </div>
      <div class="link-box">
        <router-link class="link">分类</router-link>
      </div>
      <div class="link-box">
        <router-link class="link">关于我</router-link>
      </div>
      <div class="link-box">
        <div class="link" @click="changeBackgroud">改变背景</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router=useRouter()
const changeBackgroud=()=>{
  const backgroud=localStorage.getItem('backgroud')
  if (backgroud<3) {
    localStorage.setItem('backgroud',parseInt(backgroud)+1)
  }else{
    localStorage.setItem('backgroud',0)
  }
  router.go(0)
}
</script>

<style scoped>
*{
  color: rgba(255, 255, 255, .7);
}
.sidebar-container{
  padding: 20px;
  width: 350px;
  box-sizing: border-box;
}
.sidebar-self{
  margin-top: 60px;
}
.logo-image-box{
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.logo-image{
  width: 200px;
  height: 200px;
}
.name-box{
  margin-top: 20px;
}
.motto-box{
  margin-top: 10px;
}
.link-box,.name-box,.motto-box{
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.name{
  font-size: 36px;
}
.motto{
  font-size: 24px;
}
.link{
  font-size: 24px;
}
.links-box{
  margin-top: 20px;
}
.link-box{
  margin-top: 8px;
}
</style>