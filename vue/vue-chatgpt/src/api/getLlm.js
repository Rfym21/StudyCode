import axios from 'axios'

export default async (APIhost, APIkey) => {

  if (!APIhost || !APIkey) {
    return false
  }

  try {
    const res = await axios({
      method: 'GET',
      timeout: (180 * 1000),
      url: `${APIhost}/v1/models`,
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${APIkey}`,
      }
    })

    const data = await res.data.data
    console.log("获取模型列表: =>   ", data)
    return data.map(item => item.id)
  } catch (e) {
    // 如果请求失败，返回false
    console.log("请求失败: =>   ", e)
    return false
  }

}
