// main.mjs 代替main.js 成为主入口
// mjs 使用的模块化方案为es6 module
import OpenAI from 'openai'
import { add, getSaleReport } from './common.mjs'

const client = new OpenAI({
  apiKey: 'sk-dfX0BbaQIc6iC3pIqgmYoHTRHczPanxLhKhfFMcvsaVNR3Fg',
  // api接口地址
  baseURL: 'https://api.302.ai/v1'
})

// python csv格式·数据分析（用，隔开）
const saleData = `
  销售数据
  日期，产品，销量，单价，总收入
  2023-01-01，iPhone 13，100，6000，600000
  2023-01-01，iPhone 14，50，8000，400000
  2023-01-02，iPhone 13，80，6000，480000
  2023-01-02，iPhone 14，60，8000，4800000
  2023-01-03，iPhone 13，120，5800，696000
  2023-01-04，iPhone 14，80，7800，6240000
`

const res = await getSaleReport(client, saleData, '分析销售数据，计算iPhone 13和iPhone 14的总销量和总收入,哪个产品总收入更高？')
console.log(res)