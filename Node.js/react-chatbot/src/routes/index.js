const express = require("express")
const router = express.Router()
const YikeAPI = require("../lib/YIKEAPI")

router.post("/chat",async (req, res) => {
  const { messages } = req.body
  console.log(messages)
  const response = await YikeAPI.completions(messages)
  // console.log(response.response)
  res.json(response.response)
})

module.exports = router
