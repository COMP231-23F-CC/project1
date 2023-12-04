// src/api/axios.js
import axios from 'axios';

const API_KEY = 'AAztAHKI9cUnlVHzxDqtY1g43aLr4FyrJJkGAbhQTBmDfm94';
const API_BASE_URL1 = '/api'
const API_BASE_URL2 = 'http://192.168.2.10:8306/api'
const API_BASE_URL3 = 'https://34.128.145.217.nip.io/bnb_v1/api';
const API_BASE_URL4 = 'https://34.128.145.217.nip.io/bnb_auth_v1/api';

const BEARER_TOKEN = 'your_bearer_token'; // 可能需要动态获取


const serverFlag = 1;


const instance = axios.create({
    baseURL:  API_BASE_URL1
});

// 添加请求拦截器
instance.interceptors.request.use(config => {
    // 添加 Bearer 令牌到请求头
    // config.headers['Authorization'] = `Bearer ${BEARER_TOKEN}`;

    // 添加 API 密钥到 URL 的查询参数中
    const separator = config.url.includes('?') ? '&' : '?';
        // config.url = `${config.url}${separator}apikey=${API_KEY}`;

    return config;
});

export default instance;
