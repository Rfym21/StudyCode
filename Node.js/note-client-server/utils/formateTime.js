function formatDate(date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // 月份从0开始，需要加1
  const day = date.getDate();

  // 格式化为 "2023年6月1日"
  return `${year}年${month}月${day}日`;
}

module.exports = {
  formatDate
}