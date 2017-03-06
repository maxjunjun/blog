/**
 * http工具类
 */

import axios from 'axios'

// axios 配置
axios.defaults.timeout = 5000
axios.defaults.baseURL = 'https://api.github.com'

export default axios
