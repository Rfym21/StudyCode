import {
  pipeline,
  env
} from 'https://cdn.jsdmirror.com/npm/@xenova/transformers@2.6.0'
env.allowLocalModels = false

/* 
** @func 翻译nlp任务派发单例类
** 
*/
class MyTranslationPipeline {
  // 静态属性
  static task = 'translation'
  static model = 'Xenova/nllb-200-distilled-600M'
  static instance = null

  static async getInstance(progress_callback = null) {
    if (this.instance === null) {
      this.instance = pipeline(this.task, this.model, {
        progress_callback
      })
    }
    return this.instance
  }

}


self.addEventListener('message', async (event) => {
  let translator = await MyTranslationPipeline.getInstance(x => {
    console.log(x)
    self.postMessage(x)
  })
  self.postMessage({
    text: "完成"
  })
})