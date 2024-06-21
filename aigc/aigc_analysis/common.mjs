// 功能封装

/**
 * func 销售数据分析
 * @param client openai client
 * @param {csv} data 
 * @param {String} query 问题
 * @returns 数据分析的结果
 * author: rfym21 2024-6-22
 */
export const getSaleReport = async (client, data, query) => {
  const prompt = `
    你是一个专业的数据分析师，你的任务是分析以下销售数据
    这里有一份销售数据，包含了日期，产品，销量，单价，总收入。\n
    ${data}
    \n\n
    根据这份数据，${query}
  `
  let response = await client.completions.create({
    // gpt-3.5-turbo 适合聊天
    model: 'gpt-3.5-turbo-instruct',
    prompt,
    // llm自由度 数据分析 严格0-1
    temperature: 0,
    // 控制响应条数
    n: 1,
    // 控制生成长度
    max_tokens: 1000,
  })
  // 响应的数据，只选择第一个
  return response.choices[0].text;
}

/**
 * func 多数相加
 * @param  {...any} agrs 
 * @returns 多数之和
 */
export const add = (...agrs) => {
  return agrs.reduce((a, b) => a + b, 0)
}
