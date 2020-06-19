// 引入mockjs
import Mock from 'mockjs'

// 导入login.js和message.js，这样只需导入index.js，
// 即可使用这两个mock文件
import './login/login.js'
import './nav/navlist.js'
import './menulist/menulist.js'

// 启动mock，timeout表示模拟的请求延迟

Mock.setup({ timeout: '200-800' })
