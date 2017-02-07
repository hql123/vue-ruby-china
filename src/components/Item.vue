<template>
  <div class='topic'>
    <div class='topic-avatar'>
      <router-link :to="'/users/' + item.user.id"><img :alt="item.user.login" :src="item.user.avatar_url" style="width: 48px; height: 48px; border-radius: 24px;"/></router-link>
    </div>
    <div class='topic-infos'>
      <div class='topic-title'>
        <router-link :to="'/topics/' + item.id">
          <span class="topic-node">{{item.node_name}}</span>
          {{item.title}}
          <i v-if="item.excellent === 1" title="" class="fa fa-diamond" style="color: red;" data-toggle="tooltip" data-original-title="精华帖"></i>
        </router-link>
      </div>
      <div class='topic-info'>
        <router-link :to="'/users/' + item.user.id">{{item.user.login}}</router-link>
        <span v-if="item.replies_count === 0"> · 发布于 {{ publishTime }} </span>
        <span v-else> · 最后由 <router-link :to="'/users/' + item.last_reply_user_id">{{item.last_reply_user_login}}</router-link> 回复于 {{ replyTime }} </span>
      </div>
    </div>
    <div class='topic-replies-count'>
      <span class='span-replies'>{{item.replies_count}}</span>
    </div>
  </div>
</template>

<script>
import moment from 'moment';

moment.locale('zh-CN');

export default {
  name: 'item',
  props: {
    item: Object,
  },
  data() {
    const data = {
      publishTime: moment(this.item.updated_at).fromNow(),
      replyTime: moment(this.item.replied_at).fromNow(),
    };
    return data;
  },
};

</script>
<style lang="scss">
.topic {
  min-height: 68px;
  border-bottom: 1px solid #F0F0F0;
  padding: 10px 15px;
  margin: 0 -15px;
  vertical-align: top;
  overflow: hidden;
  font-size: 15px;
  a{
    text-decoration: none !important;
    outline:none !important;
    color: #000;
  }
  .topic-avatar{
    float: left;
    padding-right: 10px;
  }

  .topic-infos{
    display: table-cell;
    vertical-align: top;
    overflow: hidden;
    width: 10000px;
    .topic-title {
      overflow: hidden;
      .topic-node{
        margin-right: 3px;
        color: #777;
        font-weight: 400;
        line-height: 30px;
      }
      a{
        &:hover{
          color: #777 !important;
        }
      }
    }
    .topic-info{
      color: #ABA8A6;
      font-size: 12px;
      margin-top: 0;
      a{
        color: #ABA8A6 !important;
        &:hover{
          text-decoration: underline !important;
        }
      }
    }

  }
  .topic-replies-count{
    display: table-cell;
    text-align: right;
    padding: 15px;
    padding-right: 0;
    width: 100px;
    .span-replies{
      background-color: #CFD3E6;
      color: #fff;
      min-width: 40px;
      border-radius: 80px;
      padding: 3px 8px 3px 8px;
      text-align: center;
    }
  }
}
</style>
