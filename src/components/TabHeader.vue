<template>
  <div>
    <div class="modal in" id="nodeModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <strong class="modal-title" id="myModalLabel">选择话题节点</strong>
          </div>
          <div class="modal-body">
            <NodesList :nodes="nodes"/>
          </div>
        </div>
      </div>
    </div>
    <div v-if="isTab" id="node-header">
      <div class="container">
        <ul class="nav nav-pills node-filter">
          <li><button type="button" class="node-button btn btn-default" data-toggle="modal" data-target="#nodeModal">所有节点<span aria-hidden="true" class="fa fa-caret-right"></span></button></li>
          <li :class="{ active: current[2] === undefined }"><router-link to="/topics">默认</router-link></li>
          <li :class="{ active: current[2] === 'popular' }"><router-link to="/topics/popular">优质帖子</router-link></li>
          <li :class="{ active: current[2] === 'no_reply' }"><router-link to="/topics/no_reply">无人问津</router-link></li>
          <li :class="{ active: current[2] === 'last' }"><router-link to="/topics/last">最新发布</router-link></li>
        </ul>
      </div>
    </div>
    <div v-else class="node-panel panel panel-default">
      <div class="panel-body">
        <div class="container">
          <div class="node-title">{{node ? node.name : ''}}<span style="font-size: 14px; color: rgb(153, 153, 153); margin-left: 10px;">共有{{node ? node.topics_count : ''}}个讨论主题</span></div>
          <div class="node-summry">
            <div v-html="summary"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import NodesList from './NodeList';

const marked = global.marked;

export default {
  name: 'tab-header',
  props: {
    current: Array,
    options: String,
    node: Object,
    nodes: Array,
  },
  components: {
    NodesList,
  },
  computed: {
    isTab() {
      return !(this.node !== undefined && this.node.id > 0);
    },
    summary() {
      return marked(this.node && this.node.summary ? this.node.summary : '');
    },
  },
};
</script>
<style lang="scss">
@media screen {
  #node-header{
    .node-filter{
      li{
        margin: auto 15px;
        padding: 3px;
        a{
         text-decoration: none;
         color: #606060 !important;
         font-weight: 400;
       }
      }
    }
  }
}
@media (min-width: 768px) {
  .modal .modal-dialog {
    width: 768px;
  }
}
@media (max-width: 768px) {
  #node-header{
    .node-filter{
      li{
        margin: auto 5px;
        padding: 2px;
        a{
          padding-left: 2px;
          padding-right:0;
          text-decoration: none;
          color: #606060 !important;
          font-weight: 400;
       }
      }
    }
  }
}
@media (max-width: 375px) {
  #node-header{
    .node-filter{
      li{
        margin: auto 5px;
        padding: 0;
        a{
          font-size: 12px;
       }
      }
    }
  }
}

#node-header{
  background: #f9f9f9;
  margin: -14px 0 15px;
  height: 50px;
  .node-filter{
    li{
      line-height: 20px;
      a{
        &:hover{
          color: #000 !important;
          padding-bottom: 5px;
          background-color: transparent;
        }
      }
      &:active{
        color: #000;
        border-bottom: 2px dotted #666666;
      }
      &:first-child{
        &:active{
          border: none;
        }
      }
    }
    .active{
      color: #000;
      border-bottom: 2px dotted #666666;
      a{
        color: #000 !important;
        padding-bottom: 5px;
        background-color: transparent;
      }
    }
    i{
      margin-right: 5px;
    }
    .node-button{
      margin: 6px 0;
      text-align: center;
      span{
        padding-left: 5px;
      }
    }
  }
}
.node-panel{
  background-color: #f9f9f9;
  margin-top: -15px;
  margin-bottom: 15px;
  box-shadow: 0 1px 0px rgba(0,0,0,0.02);
  .node-title{
    font-size: 24px;
    color: #000;
    margin-bottom: 8px;
  }
  .node-summry {
    a{
      color: #000;
      &:hover{
        text-decoration: underline;
      }
    }
    strong{
      font-weight: bold;
      color: #000;
    }
    p{
      &:first-child{
        padding-bottom: 5px;
      }
      &:last-child{
        padding-top: 5px;
      }
    }
  }
}
</style>
