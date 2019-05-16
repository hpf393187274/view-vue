export default {
  props: {
    /**
     * 是否展开的
     */
    expanded: Boolean,
    /**
     * 展开级别：默认：0 表示不限制
     */
    expandedLevel: { type: Number, default: 0 },
    /**
     * 点击节点是否展开
     */
    clickNodeExpanded: { type: Boolean, default: true },
    /**
     * 视图显示统计
     */
    statistics: Boolean,
    /* 是否存在复选框 */
    checkbox: { type: Boolean, default: false },
    /* 是否默认选中 */
    checked: { type: Boolean, default: false },
    /**
     * 懒加载模式
     */
    lazy: Boolean,
    /**
     * 操作功能
     */
    action: Boolean,
    /**
     * 每个树节点用来作为唯一标识的属性，整棵树应该是唯一的
     */
    nodeKey: { type: String, default: 'id' }
  },
  methods: {
    /**
     * 获取节点数据
     */
    getData({ deep = false, exclude = ['children'] } = {}) {
      return this.$tools.clone(this.data, { deep, exclude })
    },
    getCheckedChildren({ leaf = true, tree = false, ...param } = {}) {
      const childrenList = []
      for (const node of this.getNodeList()) {
        if (node.notViewChecked()) { continue }
        if (tree === false) {
          childrenList.push(...node.getCheckedData({ leaf, tree, ...param }))
          continue
        }

        if (leaf === false && node.isLeaf()) { continue }

        childrenList.push(node.getCheckedTreeData({ leaf, tree, ...param }))
      }
      return childrenList
    },
    clearCheckedNode() {
      for (const node of this.getNodeList()) {
        if (node.notViewChecked()) { continue }
        node.clearCheckedNode()
        node.setChecked(false)
      }
    },
    isLeaf() { return this.nodeLeaf },
    isBranch() { return this.nodeBranch },
    /**
     * 移除选中的节点
     */
    removeCheckedNode() {
      for (const node of this.getNodeList()) {
        if (node.notViewChecked()) { continue }
        if (node.isChecked()) {
          node.$emit('remove-children-node', node)
          continue
        }
        node.removeCheckedNode()
      }
    },
    /**
     * 获取 TreeNode
     * @param {Function} filter 过滤函数
     */
    findTreeNode(filter) {
      if (this.$type.isNotFunction(filter)) { return }
      return this.getNodeList().find(node => filter(node.getData()))
    },
    /**
     * 获取 TreeNode
     * @param {String} key 实体 key
     * @param {*} value 
     */
    findTreeNodeByKey(key = this.nodeKey, value) {
      return this.findTreeNode(item => item[key] === value)
    },
    /**
     * 获取默认过滤器
     * @param {*} value 比对值
     */
    defaultFilter(value) {
      if (this.$type.isObjectOrArray(value)) {
        return item => item[this.nodeKey] === value[this.nodeKey]
      }
      return item => item[this.nodeKey] === value
    },
    getNodeList() {
      const treeNode = this.$refs.treeNode
      if (this.$tools.isEmpty(treeNode)) { return [] }
      return [treeNode].flat()
    },
    pushData(data) {
      if (this.$tools.isEmpty(data)) { return }
      for (const item of [data].flat()) {
        const itemNode = this.findTreeNode(this.defaultFilter(item))
        if (this.$tools.isEmpty(itemNode)) {
          if (this.$tools.isEmpty(this.level)) {
            // TreeRoot
            this.data.push(item)
            continue
          }
          // TreeNode
          if (this.$tools.isEmpty(this.data.children)) {
            this.data.children = []
          }
          this.data.children.push(item)
          continue
        }
        if (this.$type.isArray(item.children) && item.children.length != 0) {
          // 存在子节点
          itemNode.pushData(item.children)
        }
      }
    }
  }
}
