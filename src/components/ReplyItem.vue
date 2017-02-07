<template>
  <div v-if="reply.deleted" class="reply reply-deleted">
    <div class="deleted text-center">{{floor}}楼 已删除</div>
  </div>
  <div v-else class="reply">
    <div class="avatar">
      <router-link :to="'/users/' + (reply.user !== undefined ? reply.user.id : 0)">
        <img :src="reply.user !== undefined ? reply.user.avatar_url : ''" alt="avatar_url" />
      </router-link>
    </div>
    <div class="infos">
      <div class="info">
        <span class="name">
          <router-link :to="'/users/' + (reply.user !== undefined ? reply.user.id : 0)" class="user-name">
            {{reply.user !== undefined ? reply.user.login : ''}}
          </router-link>
        </span> ·
        <span class="time">
          <a class="reply-floor" :href="'#reply'+ floor" >#{{floor}}</a> · <span>{{replyTime}}</span>
        </span>
        <span class="opts pull-right">
          <a href="#"><i class="fa fa-heart"></i> <span v-if="reply.likes_count > 0">{{reply.likes_count}} 个赞</span></a>
        </span>
      </div>
      <div class="markdown" v-html="reply.body_html"></div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';

export default{
  name: 'reply-detail',
  props: {
    reply: Object,
    floor: Number,
  },
  data() {
    const data = {
      replyTime: moment(this.reply.created_at).fromNow(),
    };
    return data;
  },
};
</script>
<style lang="scss">
.reply{
  margin: 0 -15px;
  padding: 15px 15px;
  position: relative;
  border-bottom: 1px solid #eee;
  padding-left: 74px;
  .avatar{
    position: absolute;
    top: 15px;
    left: 15px;
    img{
      width: 48px;
      height: 48px;
      border-radius: 120px;
    }
  }
  .infos{
    min-height: 48px;
    .info{
      color: #999;
      margin-bottom: 6px;
      font-size: 12px;
      .name {
        font-weight: bold;
        font-size: 13px;
      }
      .reply-floor {
        color: #7AA87A;
      }
      .opts{
        color: #666;
        a{
          display: inline-block;
          vertical-align: baseline;
          line-height: 22px;
          padding: 2px 5px;
          height: 22px;
          min-width: 22px;
          text-align: center;
          font-size: 13px;
          margin-left: 5px;
          color: #999;
          &:hover{
            text-decoration: none;
          }
        }
      }
    }
  }
  .markdown pre {
    margin-right: 0px;
    margin-left: 0px;
  }
}
.reply-deleted {
  padding: 8px 15px;
  font-size: 12px;
  color: #666;
  border-bottom: 1px solid #F0F0F0;
  .deleted {
    text-decoration: line-through;
    color: #e0e0e0;
  }
  .text-center {
    text-align: center;
  }
}
</style>
