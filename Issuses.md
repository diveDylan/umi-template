# Select

> 注意，如果发现下拉菜单跟随页面滚动，或者需要在其他弹层中触发 Select，请尝试使用 getPopupContainer={triggerNode => triggerNode.parentElement} 将下拉弹层渲染节点固定在触发器的父元素中

# Form

1. 如果出现 `Form.Item` 和 `Select` 在一行的样式错乱问题，可以尝试给 `label` 赋值宽度