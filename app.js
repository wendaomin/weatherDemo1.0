const express = require("express");
const app = express();
//cors 跨域资源共享系统
const cors = require("cors");
app.use(express.json());
app.use(cors())
require('./routes/weather.js')(app)
//监听端口
app.listen(3003, async (req, res) => {
  console.log('服务器已经启动！')
  console.log("http://localhost:3003");
});