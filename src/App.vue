<template>
  <div id="app">
    <div class="container">
      <vue-tree
        style="width: 1000px; height: 600px;"
        :dataset="richMediaData"
        :config="treeConfig"
      >
        <template v-slot:node="{ node, collapsed }">
          <div
            class="rich-media-node"
            :style="{ border: collapsed ? '2px solid grey' : '' }"
          >
            <span style="padding: 4px 0; font-weight: bold;">{{
              node.name
            }}</span>
          </div>
        </template>
      </vue-tree>
    </div>
  </div>
</template>

<script>
import api from "./data/organization.json";
export default {
  name: "treemap",
  data() {
    return {
      richMediaData: api,
      treeConfig: { nodeWidth: 120, nodeHeight: 80, levelHeight: 200 },
    };
  },
};
</script>

<style scoped lang="scss">
.container {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #14151f;
  height: 100vh;
}

.rich-media-node {
  width: 80px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: white;
  background-color: #232436;
  border-radius: 4px;
}
</style>
