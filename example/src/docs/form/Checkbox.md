
# Checkbox 复选框

### 基础用法

::: demo `type` 按钮类型
```html
<template>
  <div>
    <me-checkbox v-model="value">备选项</me-checkbox>
  </div>
</template>
<script>
export default {
  data() {
    return { 
      value: false,
      types: [
        'default', 'primary', 'info', 'success', 'warning', 'error'
      ]
    }
  }
}
</script>
```
:::

### Button Attributes
| 名称     | 描述             |  类型   | 默认值  | 可选值                                                        |
| -------- | ---------------- | :-----: | :-----: | ------------------------------------------------------------- |
| type     | 按钮类型         | String  | default | default、primary、dashed、text、info、success、warning、error |
| disabled | 是否禁用状态     | Boolean |  false  | true、false                                                   |
| plain    | 普通的           | Boolean |  false  | true、false                                                   |
| icon     | 图标库：按钮图标 | String  |    -    | 图标库                                                        |
| shape    | 形状             | String  | default | default、circle、round                                        |

### Button Events
| 名称  | 描述     | 参数  |
| ----- | -------- | :---: |
| click | 点击事件 |   -   |
