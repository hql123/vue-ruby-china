<template>
  <div class="container">
    <div class="row">
      <div class="col-md-9">
        <div class="topic-detail panel panel-default">
          <div class="panel-heading">
            <div class="topic-infos">
              <h1 class="topic-title">
                <router-link class="topic-node" :to="'/topics?node_id=' + topic.node_id">{{topic.node_name}}</router-link>
                {{topic.title}}
              </h1>
              <div class='topic-info'>
                <router-link :to="'/users/' + (topic.user !== undefined ? topic.user.id : 0)" class="user-name">{{topic.user !== undefined ? topic.user.login : ''}}</router-link>
                <span> · 发布于 {{ formatTime().publishTime }} </span>
                <span> · 最后由 <router-link :to="'/users/' + topic.last_reply_user_id">{{topic.last_reply_user_login}}</router-link> 回复于 {{ formatTime().replyTime }} </span>
                <span> · {{topic.hits}} 次阅读</span>
              </div>
            </div>
            <div class="topic-avatar">
              <router-link :to="'/users/' + (topic.user !== undefined ? topic.user.id : 0)">
                <img :src="topic.user !== undefined ? topic.user.avatar_url : ''" alt="avatar_url" />
              </router-link>
            </div>
          </div>
          <div v-if="topic.excellent === 1" class="label-awesome">
            <i class="fa fa-diamond awesome"></i> 本帖已被设为精华帖！
          </div>
          <div class="panel-body markdown"><article v-html="topic.body_html"></article></div>
          <div class="panel-footer">
            <div class="opts">
              <a class="likeable  tooltipstered" href="#"><i class="fa fa-heart"></i> <span>{{topic.likes_count}} 个赞</span></a>
            </span>
          </div>
          </div>
        </div>
        <RepliesList :replies="replies" :count="topic.replies_count" />
      </div>
      <div class="col-md-3"><sider/></div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapState } from 'vuex';
import moment from 'moment';
import Sider from '../components/Sider';
import RepliesList from '../components/RepliesList';

export default {
  name: 'topic-detail',
  components: {
    Sider,
    RepliesList,
  },
  beforeMount() {
    this.fetchTopicDetail();
  },
  computed: {
    ...mapState({
      topic: state => state.topic.detail.item,
      replies: state => state.reply.lists.items,
    }),
    ...mapGetters([
      'activeType',
    ]),
  },
  watch: {
    topic() {
      this.fetchReplyList();
    },
  },
  methods: {
    fetchTopicDetail() {
      const { topicId } = this.activeType;
      this.$store.dispatch('fetchTopicIfNeeded', { topic_id: topicId });
    },
    fetchReplyList() {
      const { topicId } = this.activeType;
      const options = `limit=${this.topic.replies_count * 2}`;
      this.$store.dispatch('fetchRepliesIfNeeded', { topic_id: topicId, options });
    },
    formatTime() {
      const publishTime = moment(this.topic.created_at).fromNow();
      const replyTime = moment(this.topic.replied_at).fromNow();
      return { publishTime, replyTime };
    },
  },
};
</script>
<style lang="scss">
@import "../assets/stylesheets/markdown.css";

.topic-detail{
  margin-bottom: 15px;
  .panel-heading{
    padding: 15px;
    transition: all .3s;
  }
  .topic-infos{
    width: 10000px;
    overflow: hidden;
    zoom: 1;
    display: table-cell;
    vertical-align: top;
    .topic-title{
      margin-top: 0;
      font-size: 20px;
      color: #333;
      text-align: left;
      line-height: 150%;
      margin-bottom: 8px;
      .topic-node{
        color: #777;
        margin-right: 3px;
      }
    }
    .topic-info{
      color: #c0c0c0;
      font-size: 12px;
      .user-name{
        color: #356DD0;
        font-size: 13px;
      }
    }
  }
  .topic-avatar{
    display: table-cell;
    vertical-align: top;
    img{
      width: 48px;
      height: 48px;
      border-radius: 120px;
    }
  }
  .label-awesome{
    font-size: 13px;
    background: #FCF8F7;
    padding: 5px 15px;
    border-bottom: 1px solid #f3f0f0;
    color: #eb5424;
  }
  .opts{
    color: #666;
    a{
      color: #666;
      padding: 3px;
      text-decoration: none;
      &:hover{
        text-decoration: none;
      }
    }
  }
}
</style>
