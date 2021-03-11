<template>
  <div id="app">
    <div class="container">
      <vue-tree
        style="width: 1400px; height: 1000px;"
        :dataset="richMediaData"
        :config="treeConfig"
      >
        <template v-slot:node="{ node, collapsed }">
          <div
            class="node"
            :style="{ border: collapsed ? '2px solid grey' : '' }"
          >
            <h4 class="node__title">{{ node.nome }}</h4>
            <p>{{ node.cargo }}</p>
            <span>{{ node.equipe }}</span>
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
  min-height: 100vh;
  height: 100%;
}

.node {
  width: 80px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: #232436;
  border-radius: 4px;

  &__title {
      text-align: center;
      padding: 8px 0;
  }
}
</style>
