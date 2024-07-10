export const chat = async (messages, APIhost,APIkey) => {

  var raw = JSON.stringify({
    "model": "gpt-3.5-turbo",
    // "model": "deepseek-chat",
    "messages": messages
  })

  try {
    // const res = await fetch("https://api.chatanywhere.tech/v1/chat/completions", {
    // const res = await fetch("https://api.302.ai/v1/chat/completions", { 
    const res = await fetch(`${APIhost}/v1/chat/completions`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${APIkey}`,
      },
      body: raw
    })

    const data = await res.json()
    console.log(data)
    return data.choices[0].message.content
  } catch (e) {
    return false
  }

}