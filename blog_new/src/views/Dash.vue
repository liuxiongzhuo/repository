<template>
    <div class="dash-container">
        <DashSidebar class="dash-sidebar"></DashSidebar>
        <div class="dash-main">

            <div class="dash-posts-box">
                <div v-for="post in posts" class="dash-post-box">
                    <div class="dash-post-date">{{ post.date }}</div>
                    <div class="dash-post-title" @click="goToDashPostDetail(post.id)">{{ post.title }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const posts = ref()
const router = useRouter()
if (!localStorage.getItem('Authorization')) {
    alert('请登录')
    router.push('/login')
}
axios.get('https://0031400.xyz/api/blog/list?category=0').then((res) => {
    posts.value = res.data.data
    console.log(res.data);

})
const goToDashPostDetail = (id) => {
    console.log(id);
    router.push('/dashpostdetail?id=' + id)
}
</script>

<style scoped>
.dash-container {
    width: 100vw;
    display: flex;
}

.dash-main {
    padding: 10px;
}

@media screen and (min-width:800px) {
    .dash-sidebar {
        border-right: 1px solid black;
    }

    .dash-container {
        flex-direction: row;
        justify-content: center;
        height: 100vh;
        overflow-y: auto;
    }

    .dash-main {
        max-width: 800px;
    }
}

@media screen and (max-width:800px) {
    .dash-container {
        flex-direction: column;
    }
}

.dash-posts-box {
    padding-left: 20px;
}

.dash-posts-box {
    padding-top: 20px;
}

.dash-post-box {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
}

.dash-post-date,
.dash-post-title {
    font-size: 20px;
}
</style>