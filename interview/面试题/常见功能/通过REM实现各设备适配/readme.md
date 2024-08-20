# CSS适配
    - PC lp pad 横竖屏切换 phone(安卓，苹果，鸿蒙)
    - 在要适配的适配上体验一致
  ## 等比例 vw/vh 相对单位
        % 无法解决问题
        div
            div
                div 10%
        px 绝对单位
  ## rem html根元素字体大小做比例
      - 移动适配用 vw/vh
      - % 因为dom层级关系不好用
      - rem 兼容性更好
      - script 阻塞效果在dom + css并发渲染之前设置好 html fontSize
      - 1rem = 屏幕宽度十分之一
      - 移动端(phone pad) 横竖屏切换