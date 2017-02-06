<template>
  <div class="panel panel-default" :class="{ 'index-sections': home, 'node-selector': !home }">
    <div v-if="home" class="panel-heading">讨论节点分类导航</div>
    <div class="panel-body">
      <div class="row node-list">
        <NodeItem v-for="node in nodes" :key="node.section" :node="node" />
      </div>
    </div>
  </div>
</template>
<script>
import NodeItem from './NodeItem';

export default {
  name: 'node-list',
  components: {
    NodeItem,
  },
  props: {
    nodes: Array,
    home: false,
  },
};
</script>

<style lang="scss">
.node-selector{
  box-shadow: 0 0 0;
  padding: 0;
  margin: 0;
  border: 0;
  .panel-body {
    padding: 0 20px;
    margin: 0;
  }
}
.index-sections{
  .panel-heading{
    background: #fafafa;
    padding: 6px 15px;
    border-bottom-color: #eee;
    color: #777;
  }

}
</style>
