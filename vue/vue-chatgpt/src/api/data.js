import axios from 'axios'

export const getData = async (APIkey) => {
  try {
    const res = await axios({
      method: 'GET',
      timeout: (180 * 1000),
      url: `https://apichat.rfym.codes/users?APIkey=${APIkey}`,
      headers: {
        "Content-Type": "application/json",
      },
    })

    const data = res.data
    console.log("获取用户数据: =>   ", res)
    return data
  } catch (error) {
    return false
  }
}

export const postData = async (APIkey, Setting) => {

  const res = await axios({
    method: 'POST',
    timeout: (180 * 1000),
    url: `https://apichat.rfym.codes/users`,
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify({
      "APIkey": APIkey,
      "Setting": Setting
    })
  })

  console.log("提交用户数据: =>   ", res)
}

export const updateData = async (id, APIkey, Setting) => {
console.log("执行前检查: =>   ", id, APIkey, Setting);
  const res = await axios({
    method: 'PATH',
    timeout: (180 * 1000),
    url: `https://apichat.rfym.codes/users/${id}`,
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify({
      "APIkey": APIkey,
      "Setting": Setting
    })
  })

  console.log("更新用户数据: =>   ", res)
}