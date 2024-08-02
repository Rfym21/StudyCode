const getCurrency = (price: number) => {
  return '¥' + price.toFixed(2)
}

export {
  getCurrency
}