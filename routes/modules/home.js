const express = require('express')
const router = express.Router()

const login = require('../../models/login')

router.get('/', (req, res) => {
  res.render('index')
})

router.post('/login', (req, res) => {
  const email = req.body.email
  const password = req.body.password

  login.find({ email })
  .lean()
  .then(data => {    
    if (data.length !== 0 && password === data[0].password) {  // 如果email、密碼都正確，將畫面導向成功登入的個人畫面
      firstName = data[0].firstName
      res.render('success', { firstName })
    } else {                                                   // email或密碼錯誤，導回首頁並加上錯誤訊息
      res.redirect('/error')
    }
  })
})

router.get('/error', (req, res) => {
  res.render('index', { error: true})
})

module.exports = router
