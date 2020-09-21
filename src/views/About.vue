<template>
  <div class="about">
    <!-- <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree> -->
    <my-tree :items="data" default-expand-all @handleClick="callBack" @addItem="addItem"/>
  </div>

</template>
<script>
import '../components/tree/tree.less'
export default {
  data () {
    return {
      data: [
        {
          label: '一级 1',
          children: [
            {
              label: '二级 1-1',
              children: [
                {
                  label: '三级 1-1-1'
                },
                {
                  label: '三级 1-1-2'
                },
                {
                  label: '三级 1-1-3'
                },
                {
                  label: '三级 1-1-4'
                }
              ]
            }
          ]
        },
        {
          label: '一级 2',
          children: [
            {
              label: '二级 2-1',
              children: [
                {
                  label: '三级 2-1-1'
                },
                {
                  label: '三级 2-1-2'
                }
              ]
            },
            {
              label: '二级 2-2',
              children: [
                {
                  label: '三级 2-2-1'
                }
              ]
            }
          ]
        },
        {
          label: '一级 3',
          children: [
            {
              label: '二级 3-1',
              children: [
                {
                  label: '三级 3-1-1'
                }
              ]
            },
            {
              label: '二级 3-2',
              children: [
                {
                  label: '三级 3-2-1',
                  children: [
                    {
                      label: '三级 3-2-4'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  methods: {
    handleNodeClick (data) {
      console.log(data)
    },
    callBack(data) {
      console.log(data)
    },
    addItem(fn) {
      const item = { label: 'addItem', children: [] }
      fn(item)
    }
  },
  mounted() {
    // this.data = addLevel(this.data, 1)
  }
}
</script>

<style lang="less" scoped>
.about {
  margin-left: 20px;
}
/deep/ .el-tree {
  position: relative;
  .el-tree-node {
    position: relative;
    .el-tree-node__content {
      position: relative;
      > .el-tree-node__label::after{
          content: ' ';
          position: absolute;
          top: 20px;
          left: -45px;
          width: 45px;
          border: none;
          border-top: 1px dashed #ddd;
      }
      > .el-tree-node__label:not(:last-child)::before {
          content: ' ';
          position: absolute;
          top: 0;
          left: -45px;
          height: 100%;
          border: none;
          border-left: 1px dashed #ddd;
      }
      > .el-tree-node__label:last-child::before {
        content: ' ';
        position: absolute;
        top: 0;
        left: -45px;
        height: 20px;
        border: none;
        border-left: 1px dashed #ddd;
      }
    }
  }
}
</style>
