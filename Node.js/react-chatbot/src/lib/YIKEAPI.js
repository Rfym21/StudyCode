const axios = require("axios")
const dotenv = require("dotenv")

dotenv.config()

class YikeAPI {
  constructor() {
    this.apiKey = process.env.apiKey
    this.apiUrl = process.env.baseUrl
  }

  async completions(messages) {

    if (!messages) {
      return {
        status: 400,
        response: "Prompt is required"
      }
    }

    try{
    const response = await axios.post(`${this.apiUrl}/chat/completions`, {
      model: "Zijie/deepseek-reasoner",
      stream: false,
      messages: messages,
      max_tokens: 4096,
      thinking: true
    }, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.apiKey}`
      }
    })

    return {
      status: 200,
      response: response.data
    }

  }catch(error){
    return {
      status: 500,
      response: error.message
    }
  }

  }

}

module.exports = new YikeAPI()