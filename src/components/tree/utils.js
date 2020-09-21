
export function addLevel(data, { defaultExpandAll, level }) {
  return data.map(item => {
    item.level = level
    item.loading = false
    item.isShow = defaultExpandAll
    item.iconName = defaultExpandAll ? 'filer_open' : 'filer_close'
    if (item.children && item.children.length > 0) {
      addLevel(item.children, { defaultExpandAll, level: level + 1 })
    }
    return item
  })
}
