<template>
  <div class="container">
    <vue-tree
      style="width: 800px; height: 600px; border: 1px solid gray;"
      :dataset="sampleData"
      :config="treeConfig"
    >
    </vue-tree>
  </div>
</template>

<script>
import VueTree from '@ssthouse/vue-tree-chart'
import Vue from 'vue'
Vue.component('vue-tree', VueTree)
export default {
  name: 'treemap',
  data() {
    return {
      sampleData: {
        value: '1',
        children: [
          { value: '2', children: [{ value: '4' }, { value: '5' }] },
          { value: '3' }
        ]
      },
      treeConfig: { nodeWidth: 120, nodeHeight: 80, levelHeight: 200 }
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>