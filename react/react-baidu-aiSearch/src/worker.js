self.addEventListener('message', (event) => {
  console.log(event);
  self.postMessage({
    text: "完成"
  })
})