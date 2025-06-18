const router = require('express').Router()

router.get('/userInfo', (req, res) => {
  res.status(200).json({
    message: 'userInfo'
  })
})


module.exports = router