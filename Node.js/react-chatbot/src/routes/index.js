const express = require("express")
const router = express.Router()
const YikeAPI = require("../lib/YIKEAPI")

router.post("/chat",async (req, res) => {
  const { prompt } = req.body
  console.log(prompt)
  const response = await YikeAPI.completions(prompt)
  // console.log(response.response)
  res.json(response.response)
})

module.exports = router
