import Mock from 'mockjs'
const userSet = [
  { username: 'admin', password: '123456' }
]
// 用mock模拟一个'/userlogin/login'的post请求，请求参数从req.body得到
Mock.mock('/userLogin/login', 'post', (res) => {
  // 解析请求体，前端传的可能是JSON字符串
  const body = JSON.parse(res.body)
  const username = body.username
  const password = body.password
  // 遍历模拟数据，检查该用户是否存在，并比对密码
  for (const user of userSet) {
    if (user.username === username) {
      if (user.password !== password) {
        return 'password error'
      } else {
        return '登录成功'
      }
    }
  }
  // 用户不存在
  return 'user not exist'
})

// this.$axios
// .post(
//   "/userLogin/login",
//   JSON.stringify({ username: 'carter', password: 123 })
// )
// .then((res) => {
//     console.log(res)
//   if (res.data === "password error") {
//     //使用的是element-ui的message组件
//     this.$message({
//       message: "密码错误！",
//       type: "error",
//     });
//   } else if (res.data === "user not exist") {
//     this.$message({
//       message: "用户不存在！",
//       type: "error",
//     });
//   } else {
//     //登陆成功
//   }
// })
// .catch((err) => {
//   //请求异常
//   console.log(err);
// });
