<template>
    <div class="dash-detail-container">
        <DashSidebar class="dash-detail-sidebar"></DashSidebar>
        <div class="dash-detail-main">
            <div class="dash-detail-title-box">
                <input v-model="post.title" class="dash-detail-title-input"></input>
            </div>
            <div class="dash-detail-brief-box">
                <textarea v-model="post.brief" class="dash-detail-brief-input"></textarea>
            </div>
            <div class="dash-detail-content-box">
                <textarea v-model="post.content" class="dash-detail-content-input"></textarea>
            </div>
            <div class="dash-detail-buttons">
                <button class="dash-detail-button" @click="updatePost">提交</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const route = useRoute()
const router=useRouter()
const post = ref({
    title: '',
    content: '',
    date: '',
    brief: ''
})
const updatePost=()=>{
    axios.post('https://0031400.xyz/api/blog/newpost',{
        title:post.value.title,
        brief:post.value.brief,
        content:post.value.content
    },{headers:{'Authorization':localStorage.getItem('Authorization')}}).then(res=>{
        if (res.data.status) {
            console.log(res.data);
            alert('提交失败')
        }else{
            alert('提交成功')
            router.push('/dash')
        }
    })
}
</script>

<style scoped>
.dash-detail-container {
    width: 100vw;
    display: flex;
}

.dash-detail-sidebar {
    width: 350px;
    box-sizing: border-box;
}

@media screen and (min-width:800px) {
    .dash-detail-sidebar {
        border-right: 1px solid black;
    }

    .dash-detail-container {
        flex-direction: row;
        justify-content: center;
        height: 100vh;
        overflow-y: auto;
    }

    .dash-detail-title-input,
    .dash-detail-date-input,
    .dash-detail-brief-input,
    .dash-detail-content-input {
        margin-left: 20px;
        width: 600px;
    }
}

@media screen and (max-width:800px) {
    .dash-detail-container {
        flex-direction: column;
        align-items: center;
    }

    .dash-detail-main {
        width: 100%;
    }

    .dash-detail-title-box,
    .dash-detail-date-box,
    .dash-detail-brief-box,
    .dash-detail-content-box {
        margin: 0 20px;
    }

    .dash-detail-title-input,
    .dash-detail-date-input,
    .dash-detail-brief-input,
    .dash-detail-content-input {
        width: 100%;
    }
}

input {
    border-bottom: 1px solid black;
}

.dash-detail-title-input,
.dash-detail-date-input,
.dash-detail-brief-input,
.dash-detail-content-input {
    font-size: 24px;
    margin-top: 10px;
}

.dash-detail-title-input,
.dash-detail-date-input {
    text-align: center;
}

.dash-detail-brief-input,
.dash-detail-content-input {
    border-left: 1px solid black;
    padding-left: 10px;
}

.dash-detail-brief-input {
    height: 80px;
}

.dash-detail-content-input {
    height: 450px;
}

.dash-detail-buttons {
    margin-top: 15px;
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.dash-detail-button {
    font-size: 24px;
    margin: 0 10px;
}
</style>