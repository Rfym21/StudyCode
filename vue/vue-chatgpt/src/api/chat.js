import axios from 'axios'

export default async (messages = [], APIhost, APIkey, Model, Token) => {

  if (messages.length === 0 || !APIhost || !APIkey) {
    return false
  }

  let raw = JSON.stringify({
    "model": Model || "gpt-3.5-turbo",
    "max_tokens": Token || 4096,
    "messages": messages
  })

  try {
    const res = await axios({
      method: 'POST',
      timeout: (180 * 1000),
      url: `${APIhost}/v1/chat/completions`,
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${APIkey}`,
      },
      data: raw
    })

    const data = await res.data
    console.log("响应数据: =>   ", res)
    return data.choices[0].message.content

  } catch (e) {
    // 如果请求失败，返回false
    console.log("请求失败: =>   ", e)
    return false
  }

}
