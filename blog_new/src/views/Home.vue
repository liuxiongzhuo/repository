<template>
    <component :is="background"></component>
    <div class="home-container">
        <Sidebar class="home-sidebar"></Sidebar>
        <div class="home-main">
            <div class="home-posts-box">
                <div v-for="post in posts" class="home-post-box">
                    <div class="home-post-title-box">
                        <div @click="goToPostDetail(post.id)" class="home-post-title">{{ post.title }}</div>
                    </div>
                    <div class="home-post-date">{{ post.date }}</div>
                    <div class="home-post-brief">{{ post.brief }}</div>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
import axios from 'axios';
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router';
const router = useRouter()
const background=computed(()=>'Backgroud'+localStorage.getItem('backgroud'))
const posts = ref()
axios.get('https://0031400.xyz/api/blog/list?category=0').then((res) => {
    posts.value = res.data.data
})
const goToPostDetail = (id) => {
    router.push('/post?id=' + id)
}
</script>

<style scoped>
* {
    color: rgba(255, 255, 255, .7);
}

.home-container {
    width: 100vw;
    display: flex;
}
.home-main {
    padding: 20px;
}

@media screen and (min-width:1000px) {
    .home-sidebar {
        border-right: 1px solid black;
    }

    .home-container {
        justify-content: center;
        height: 100vh;
        flex-direction: row;
    }
    
    .home-main {
        overflow-y: auto;
        max-width: 800px;
    }

    .home-post-box {
        margin-left: 60px;
    }
}

@media screen and (max-width:1000px) {
    .home-container {
        flex-direction: column;
        align-items: center;
    }
}

.home-post-box {
    background-color: rgba(0, 0, 0, .5);
    margin-top: 30px;
    padding-left: 20px;
}

.home-post-title {
    font-size: 30px;
}

.home-post-date {
    margin-top: 5px;
}

.home-post-brief {
    margin-top: 5px;
    font-size: 20px;
}
</style>