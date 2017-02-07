<template>
  <div class="replies panel panel-default">
    <div class="panel-heading">
      共收到<strong>{{count}}</strong>条回复
    </div>
    <div class="panel-body">
      <ReplyItem v-for="(reply, index) in replies" :reply="reply" :key="reply.id" :floor="index+1" v-if="reply.action === null"/>
    </div>
  </div>
</template>
<script>
import ReplyItem from './ReplyItem';

export default {
  name: 'replies-list',
  components: {
    ReplyItem,
  },
  props: {
    replies: Array,
    count: Number,
  },
};
</script>
<style lang="scss">
.replies{
  .panel-heading{
    background: #fafafa;
    padding: 6px 15px;
    border-bottom-color: #eee;
    color: #777;
  }
}

</style>
