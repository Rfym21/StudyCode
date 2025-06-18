import pxtorem from 'postcss-pxtorem'


export default {
  plugins: [
    pxtorem({
      rootValue: 37.5,
      propList: ['*'],
      selectorBlackList: ['.norem']
    })
  ]
}