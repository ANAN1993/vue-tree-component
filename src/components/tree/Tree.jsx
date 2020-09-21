import { addLevel } from './utils'
export default {
  name: 'MyTree',
  data() {
    return {
      treeList: []
    }
  },
  props: {
    items: {
      type: Array,
      default: () => []
    },
    defaultExpandAll: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    items: {
      deep: true,
      immediate: true,
      handler: function (val) {
        const options = {
          defaultExpandAll: this.defaultExpandAll,
          level: 1
        }
        this.treeList = addLevel(JSON.parse(JSON.stringify(val)), options)
      }
    }
  },
  methods: {
    expendHandle(e, item) {
      e.stopPropagation()
      item.isShow = !item.isShow
      item.iconName = item.isShow ? 'filer_open' : 'filer_close'
      this.$emit('handleClick', item)
    },
    addItem(e, item) {
      e.stopPropagation()
      item.isShow = true
      item.iconName = 'filer_open'
      if (!item.children) item.children = []
      this.$emit('addItem', (data) => {
        data.level = item.level + 1
        data.iconName = 'filer_close'
        data.isShow = false
        item.children.push(data)
      })
    },
    createTree(treeList) {
      return treeList.map((item, index) =>
        <div class={ ['tree-list', `tree-level-${item.level}`] } onClick={(e) => this.expendHandle(e, item)}>
          <div class="tree-label">
            <icon name={item.iconName} w={18} h={18}></icon>
            <span class="text">{item.label}</span>
            { item.level < 4 ? <span onClick={(e) => this.addItem(e, item)}><icon class="icon-add" name="add" w={15} h={15}></icon></span> : null}
          </div>
          { (item.children && item.isShow) ? <div class="child-item">{ this.createTree(item.children)}</div> : null }
        </div>
      )
    }
  },
  render(h, context) {
    return <div class="my-tree">{this.createTree(this.treeList)}</div>
  }
}
