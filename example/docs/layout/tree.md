
## Tree 树形控件

### 基础用法
::: demo `v-model` 绑定之值 `label` 设置标签 `placeholder` 提示语句
```html
<template>
  <me-tree :data="data"/>
</template>
<script>
export default {
  data() {
    return {
      data: [
        {
          id: '1', label: '陕西省', children: [
            {
              id: '1-1', label: '西安市', children: [
                { id: '1-1-1', label: '雁塔区' },
                { id: '1-1-2', label: '长安区' }
              ]
            }
          ]
        },
        {
          id: '2', label: '四川省', children: [
            { id: '2-1', label: '成都市' },
            { id: '2-2', label: '汶川市' }
          ]
        }
      ]
    }
  }
}
</script>
```
:::

### Checkbox 用法
::: demo `v-model` 绑定之值 `label` 设置标签 `placeholder` 提示语句
```html
<template>
  <me-tree :data="data" checkbox />
</template>
<script>
export default {
  data() {
    return {
      data: [
        {
          id: '1', label: '陕西省', children: [
            {
              id: '1-1', label: '西安市', children: [
                { id: '1-1-1', label: '雁塔区' },
                { id: '1-1-2', label: '长安区' }
              ]
            }
          ]
        },
        {
          id: '2', label: '四川省', children: [
            { id: '2-1', label: '成都市' },
            { id: '2-2', label: '汶川市' }
          ]
        }
      ]
    }
  }
}
</script>
```
:::


### 全部用法
::: demo `v-model` 绑定之值 `label` 设置标签 `placeholder` 提示语句
```html
<template>
  <me-tree :data="data" action checkbox expanded statistics />
</template>
<script>
export default {
  data() {
    return {
      data: [
        {
          id: '1', label: '陕西省', children: [
            {
              id: '1-1', label: '西安市', children: [
                { id: '1-1-1', label: '雁塔区' },
                { id: '1-1-2', label: '长安区' }
              ]
            }
          ]
        },
        {
          id: '2', label: '四川省', children: [
            { id: '2-1', label: '成都市' },
            { id: '2-2', label: '汶川市' }
          ]
        }
      ]
    }
  }
}
</script>
```
:::

### Tree Attributes
| 名称                | 描述                                 |  类型   | 默认值 | 可选值       |
| ------------------- | ------------------------------------ | :-----: | :----: | ------------ |
| expandable          | 可折叠的，false 展开全部节点         | Boolean |  true  | true, false  |
| statistics          | 是否显示统计                         | Boolean | false  | true, false  |
| checkbox            | 是否显示复选框                       | Boolean | false  | true, false  |
| checked-strict      | 是否严格模式- false 父子联动互不干涉 | Boolean |  true  | true, false  |
| checked             | 是否选中                             | Boolean | false  | true, false  |
| lazy                | 是否懒加载                           | Boolean | false  | true, false  |
| expanded            | 是否展开                             | Boolean | false  | true, false  |
| expanded-node-click | 点击节点是否展开                     | Boolean |  true  | true, false  |
| accordion           | 待实现 - 是否手风琴模式              | Boolean | false  | true, false  |
| node-key            | 唯一标识的属性                       | String  |   id   | id           |
| expanded-level      | 展开级别                             | Number  |   0    | 1, 2, 3, ... |
| action              | 是否显示功能                         | Boolean | false  | true, false  |


### Tree Methods

| 方法名            | 描述           | 参数 | 返回值 |
| ----------------- | -------------- | ---- | ------ |
| removeCheckedNode | 移除选中的节点 | -    | -      |
| clearCheckedNode  | 清除选中的节点 | -    | -      |