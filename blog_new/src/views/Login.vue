<template>
    <div class="login-container">
        <div class="login-username-box">
            <div class="login-username-text">账号: </div>
            <div class="login-username-input-box">
                <input v-model="username" type="text" class="login-username-input">
            </div>
        </div>
        <div class="login-password-box">
            <div class="login-password-text">密码: </div>
            <div class="login-password-input-box">
                <input v-model="password" type="password" class="login-password-input"></input>
            </div>
        </div>
        <button @click="login" class="login-button">登录</button>
    </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()
const username = ref()
const password = ref()
const login = () => {
    axios.post('https://0031400.xyz/api/authen/login', { username: username.value, password: password.value }).then((res) => {
        if (res.data.status == 0) {
            localStorage.setItem('Authorization', res.data.data)
            username.value = ''
            password.value = ''
            alert('登录成功')
            router.push('/dash')
        } else {
            password.value = ''
            alert('账号密码错误')
        }
    })
}
</script>

<style scoped>
.login-container {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

* {
    font-size: 24px;
}

.login-username-box,
.login-password-box {
    display: flex;
    flex-direction: row;
    padding-left: 15px;
}
.login-username-input-box,
.login-password-input-box{
    flex: 1;
}
.login-username-input,
.login-password-input {
    margin-left: 20px;
    border-bottom: 1px solid black;
    width: 100%;
}

.login-button {
    margin-top: 10px;
}
</style>