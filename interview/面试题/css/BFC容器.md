# BFC容器

    - BFC(Block Formatting Context)块级格式化上下文
    - 规则
        1. BFC容器中的子元素依然是按照正常容器的渲染规则
        2. BFC容器在计算高度时,会将内部浮动的元素高度也计算在内
        3. BFC容器中子容器margin-top不会和父容器margin-top重叠 
    - 转为BFC容器的方法
        1. overflow:hidden / auto / scroll / overlay
        2. float: left / right
        3. display: inline-block / table-cell / table-xxx / flex / inline-flex
        4. position: absolute / fixed
