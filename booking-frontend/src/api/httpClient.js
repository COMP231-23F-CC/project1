// src/api/axios.js
import axios from 'axios';

// const API_KEY = 'AAztAHKI9cUnlVHzxDqtY1g43aLr4FyrJJkGAbhQTBmDfm94';
//s0pmF8BeyVCc45oImM783j60XP3VCFHYoMQIXdrDXHZwekZ6

//
const API_BASE_URL1 = '/api'
const API_BASE_URL2 = 'http://192.168.2.10:8306/api'
const API_BASE_URL3 = 'https://34.128.145.217.nip.io/bnb_v1/api';
const API_BASE_URL4 = 'https://34.128.145.217.nip.io/bnb_auth_v1/api';
//
// const BEARER_TOKEN = 'your_bearer_token'; // 可能需要动态获取

const isProduction = process.env.NODE_ENV === 'production';
const isDevelopment = process.env.NODE_ENV === 'development';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const API_KEY =  import.meta.env.VITE_API_KEY;


const instance = axios.create({
    baseURL:  API_BASE_URL1
});

// 添加请求拦截器
instance.interceptors.request.use(config => {
    //load user from local storage
    try {
        let userData = localStorage.getItem('user');
        if (userData) {
            let user = JSON.parse(localStorage.getItem('user'));
            if (user && user.id) {
                config.headers.UserId = user.id;
            }
        }

    } catch (e) {

    }



    // 添加 Bearer 令牌到请求头
    // config.headers['Authorization'] = `Bearer ${BEARER_TOKEN}`;

    // 添加 API 密钥到 URL 的查询参数中
    //if apikey is not null, add apikey to url

        const separator = config.url.includes('?') ? '&' : '?';
        config.url = `${config.url}${separator}apikey=${API_KEY}`;


    //print API_BASE_URL in console
    console.log('API_BASE_URL: ', API_BASE_URL);
    console.log('API_KEY: ', API_KEY);
    //show full url in console
    console.log('Full request URL: ', config.url);
    //show full request config in console
    console.log('Full request config: ', config);
    return config;
});

export default instance;
