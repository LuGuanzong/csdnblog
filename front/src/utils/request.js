// 对于axios进行二次封装
import axios from "axios";

// axios.defaults.withCredentials = true

// 1.利用axios对象的方法create，去创建一个axios实例
const request = axios.create({
    // 配置对象
    // 基础路径，发请求的时候
    baseURL:`http://lgz.charviki.cn/`,
    // 代表请求超时的时间5s
    timeput:5000,
})

// 对外暴露
export default request;