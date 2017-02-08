<template>
  <div class="container dashboard">
    <div class="panel panel-default hidden-xs">
      <div class="panel-body">
        <div class="media" style="width: 480px; margin:0px auto; text-align: left;">
          <div class="media-left">
            <img src="https://twemoji.b0.upaiyun.com/2/svg/1f381.svg" style="width: 55px;">
          </div>
          <div class="media-body" style="line-height: 200%; text-align: center;">
            <div style="font-size: 15px">
            Ruby China 官方 <a href="https://gems.ruby-china.org" target="_blank">RubyGems 镜像</a>、<router-link to="/wiki/ruby-mirror">Ruby 镜像</router-link> 正式上线！
            </div>
            <div>
              <code style="padding: 4px 10px;">gem source -a https://gems.ruby-china.org</code>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row hidden-sm hidden-xs">
      <div class="col-md-3">
        <div class="item">
          <router-link to="/topics">
            <div class="icon">
              <i class="fa fa-comments-o" style="color: #F86334;"></i>
            </div>
            <div class="text">
              Ruby 社区 <i class="pull-right fa fa-arrow-right"></i>
            </div>
          </router-link>
        </div>
      </div>
      <div class="col-md-3">
        <div class="item">
          <router-link to="/wiki">
            <div class="icon">
              <i class="fa fa-support" style="color: #FFD52F;"></i>
            </div>
            <div class="text">
              技术文档 <i class="pull-right fa fa-arrow-right"></i>
            </div>
          </router-link>
        </div>
      </div>
      <div class="col-md-3">
        <div class="item">
          <router-link to="/jobs">
            <div class="icon">
              <i class="fa fa-users" style="color: #317DDA;"></i>
            </div>
            <div class="text">
              招聘与求职 <i class="pull-right fa fa-arrow-right"></i>
            </div>
          </router-link>
        </div>
      </div>
      <div class="col-md-3">
        <div class="item">
          <router-link to="/topics/popular">
            <div class="icon">
              <i class="fa fa-diamond" style="color: #3BD54E;"></i>
            </div>
            <div class="text">
              精华文章 <i class="pull-right fa fa-arrow-right"></i>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading">
        社区精华帖
      </div>
      <div class="panel-body row">
        <div v-for="topic in topics" class="col-md-6 topics_group">
          <Topic :key="topic.id" :item="topic" />
        </div>
      </div>
      <div class="panel-footer">
        <router-link to="/topics/excellent">查看更多精华帖...</router-link>
      </div>
    </div>
    <NodesList home="true" :nodes="nodes" />
    <div class="index-locations panel panel-default">
      <div class="panel-heading">热门城市</div>
      <div class="panel-body location-list" style="text-align:center;">
          <span v-for="city in hotCities" class="name"><router-link :to="'/users/city/' + city">{{city}}</router-link></span>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapState } from 'vuex';
import NodesList from '../components/NodeList';
import Topic from '../components/Item';

export default {
  name: 'dashboard-view',
  components: {
    NodesList,
    Topic,
  },
  data() {
    const data = {
      hotCities: ['北京', '上海', '深圳', '杭州', '成都', '广州', '武汉', '西安', '南京', '大连', '长沙', '苏州'],
    };
    return data;
  },
  computed: {
    nodes() {
      return this.$store.getters.groupNodes;
    },
    ...mapState({
      /*eslint-disable*/
      loading: state => state.topic.lists['excellent'].isFetching,
      topics: state => state.topic.lists['excellent'].items,
      /*eslint-disable*/
    }),
    ...mapGetters([
      'groupNodes',
    ]),
  },
  beforeMount() {
    this.fetchNodes();
    this.fetchTopics();
  },
  methods: {
    fetchNodes() {
      this.$store.dispatch('fetchNodesIfNeeded');
    },
    fetchTopics() {
      this.$store.dispatch('refreshTopics', { tab: 'excellent' });
      this.$store.dispatch('fetchTopicsIfNeeded', { tab: 'excellent', options: 'limit=20' });
    },
  },
};
</script>
<style lang="scss">
.dashboard{
  .media{
    overflow: hidden;
    zoom: 1;
    .media-left{
      display: table-cell;
      vertical-align: top;
      padding-right: 10px;
    }
    .media-body{
      @extend .media;
      @extend .media-left;
      padding-right: 0;
      width: 10000px;
      overflow: hidden;
      zoom: 1;
    }

  }
  .item {
    a{
      display: block;
      &:hover{
        text-decoration: none;
        background-color: #fafafa;
      }
    }
    text-align: center;
    margin-bottom: 15px;
    border-radius: 3px;
    background: #FFF;
    border: 1px;
    border-color: #e5e6e9 #dfe0e4 #d0d1d5 #dfe0e4;
    .icon {
      display: block;
      padding: 20px 15px;
      .fa {
        font-size: 60px;
      }
    }
    .text {
      display: block;
      text-align: left;
      background: #F5F5F5;
      border-top: 1px solid #E9E9E9;
      font-size: 14px;
      font-weight: bold;
      border-radius: 0 0 3px 3px;
      color: #666;
      padding: 6px 15px;
      .fa{
        margin-top: 3px;
      }
      .pull-right{
        margin-left: .3em;
      }
    }
  }

  .panel{
    .panel-heading {
      padding: 6px 15px;
      border-bottom-color: #eee;
      color: #777;
      background: #fafafa;
      border-color: #ddd;
      border-bottom: 1px solid transparent;
      border-top-left-radius: 3px;
      border-top-right-radius: 3px;
    }
    .location-list{
      .name{
        a {
          color: #666;
          margin: 6px;
          display: inline-block;
        }
      }
    }
  }
  @media (min-width: 992px) {
    .topics_group{
      &:last-child, &:nth-last-child(2){
        .topic{
          border-bottom: 0
        }
      }
    }
  }
  @media (max-width: 992px) {
    .topics_group{
      &:last-child{
        .topic{
          border-bottom: 0
        }
      }
    }
  }
  .panel{
    .topics_group{
      .topic{
        .topic-infos{
          height: 45px;
          .topic-title{
            height: 30px;
          }
        }
      }
    }
  }
  
  img {
    vertical-align: middle;
  }
  a {
    color: #333;
    &:hover{
      color: #333;
      text-decoration: underline;
    }
  }

}

</style>
