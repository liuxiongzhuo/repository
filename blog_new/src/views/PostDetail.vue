<template>
    <component :is="background"></component>
    <div class="detail-container">
        <Sidebar class="detail-sidebar"></Sidebar>
        <div class="detail-main">
            <div class="detail-title-box">
                <div class="detail-title">{{ post.title }}</div>
            </div>
            <div class="detail-date-box">
                <div class="detail-date">{{ post.date }}</div>
            </div>
            <div class="detail-brief">{{ post.brief }}</div>
            <!-- <div class="detail-content">{{ post.content }}</div> -->
             <div v-viewer class="detail-content-markdown" v-html="markdown"></div>
        </div>
    </div>
</template>

<script setup>
import {marked} from 'marked'
import axios from 'axios';
import { ref,computed } from 'vue';
import { useRoute } from 'vue-router';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css'

const route = useRoute()
const post = ref({
    title: '',
    content: '',
    date: '',
    brief: ''
})
const background=computed(()=>'Backgroud'+localStorage.getItem('backgroud'))
axios.get('https://0031400.xyz/api/blog/query?id=' + route.query.id).then(response => {
    post.value = response.data.data[0];
})
const markdown=computed(()=>marked(post.value.content))
</script>

<style scoped>
*{
    color: rgba(255, 255, 255, .7);
}
.detail-container {
    width: 100vw;
    display: flex;
}
.detail-main {
    padding: 20px;
}

@media screen and (min-width:1000px) {
    .detail-container {
        justify-content: center;
        height: 100vh;
        flex-direction: row;
    }
    .home-sidebar {
        border-right: 1px solid black;
    }
    .detail-main {
        overflow-y: auto;
        max-width: 800px;
    }

    .detail-date-box {
        padding-right: 80px;
    }
}

@media screen and (max-width:1000px) {
    .detail-container {
        flex-direction: column-reverse;
        align-items: center;
    }

    .detail-main {
        display: flex;
        flex-direction: column;
        padding: 30px;
    }

    .detail-date-box {
        padding-right: 20px;
    }
}

.detail-title-box {
    margin-top: 60px;
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.detail-title {
    font-size: 45px;
}

.detail-date-box {
    margin-top: 12px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    font-size: 18px;
}

.detail-brief,
.detail-content {
    font-size: 24px;
    line-height: 30px;
    letter-spacing: 2px;
    background-color: rgba(0, 0, 0, .5);
}

.detail-brief {
    margin-top: 20px;
}

.detail-content {
    margin-top: 15px;
}
.detail-content-markdown{
    margin-top: 20px;
}
::v-deep(.detail-content-markdown h1){
    font-size: 32px;
    line-height: 32px;
    letter-spacing: 2px;
    background-color: rgba(0, 0, 0, .5);
}
::v-deep(.detail-content-markdown h2){
    font-size: 30px;
    line-height: 30px;
    letter-spacing: 2px;
    background-color: rgba(0, 0, 0, .5);
}
::v-deep(.detail-content-markdown h3){
    font-size: 28px;
    line-height: 28px;
    letter-spacing: 2px;
    background-color: rgba(0, 0, 0, .5);
}
::v-deep(.detail-content-markdown h4){
    font-size: 26px;
    line-height: 26px;
    letter-spacing: 2px;
    background-color: rgba(0, 0, 0, .5);
}
::v-deep(.detail-content-markdown h5){
    font-size: 24px;
    line-height: 24px;
    letter-spacing: 2px;
    background-color: rgba(0, 0, 0, .5);
}
::v-deep(.detail-content-markdown h6){
    font-size: 22px;
    line-height: 22px;
    letter-spacing: 2px;
    background-color: rgba(0, 0, 0, .5);
}
::v-deep(.detail-content-markdown p){
    text-indent: 2rem;
    font-size: 24px;
    line-height: 30px;
    letter-spacing: 2px;
    background-color: rgba(0, 0, 0, .5);
}
::v-deep(.detail-content-markdown code){
    font-size: 24px;
    line-height: 30px;
    letter-spacing: 2px;
    background-color: rgba(0, 0, 0, .5);
}
::v-deep(.detail-content-markdown img){
    width: 200px;
    height: 200px;
    object-fit: cover;
    background-color: rgba(0, 0, 0, .5);
}
::v-deep(.detail-content-markdown a){
    color: rgba(255, 165, 0, .5);
    object-fit: cover;
    background-color: rgba(0, 0, 0, .5);
}
</style>