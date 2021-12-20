// 引入第三方套件
const express = require('express')
const exphbs = require('express-handlebars')

// 引入自建套件
require('./config/mongoose')
const routes = require('./routes')

// 啟動 express
const app = express()

// 設定連接阜
const port = 3000

// 設定模板引擎
app.engine('hbs', exphbs.engine({defaultLayout: 'main', extname: 'hbs'}))
app.set('view engine', 'hbs')

app.use(express.urlencoded({ extended: true }))
app.use(routes)


app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`)
})