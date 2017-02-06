<template>
  <div class="node media">
    <label class="media-left">{{node.section}}</label>
    <span class="nodes media-body">
      <span v-for="item in node.data" :key="item.id" class="name"><router-link :title="item.name" :to="'/topics?node_id=' + item.id">{{item.name}}</router-link></span>
    </span>
  </div>
</template>

<script>

export default {
  name: 'node-item',
  props: {
    node: Object,
  },
};

</script>
<style lang="scss">
.node-list{
  .node {
    margin-bottom: 10px;
    margin-top: 0px;
    .media-left {
      min-width: 130px;
      display: table-cell;
      vertical-align: top;
      padding-right: 10px;
    }
    label {
      font-weight: normal;
      color: #aaa;
      text-align: right;
    }
    .name {
       margin-bottom: 10px;
       width: 100px;
       display: block;
       float: left;
       text-align: left;
       a{
         color: #333;
         text-decoration: none;
         &:hover{
           text-decoration: underline;
         }
       }
    }
  }
  .media{
    .media-body {
      overflow: hidden;
      zoom: 1;
      display: table-cell;
      vertical-align: top;
      width: 10000px;
      overflow: hidden;
      zoom: 1;
    }
  }
}
</style>
