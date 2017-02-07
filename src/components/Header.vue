<template>
  <nav class="navbar navbar-fixed-top navbar-default" id="header">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <router-link class="header-brand navbar-brand" to="/"><b>Ruby</b>&nbsp;China</router-link>
      </div>
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav" id="nav-menu">
          <li v-bind:class="{'active': current == 0}"><router-link to="/topics">社区</router-link></li>
          <li v-bind:class="{'active': current == 1}"><router-link to="/wiki">Wiki</router-link></li>
          <li v-bind:class="{'active': current == 2}"><router-link to="/sites">酷站</router-link></li>
          <li v-bind:class="{'active': current == 3}"><router-link to="/homeland">Homeland</router-link></li>
          <li v-bind:class="{'active': current == 4}"><router-link to="/jobs">招聘</router-link></li>
          <li><a href="https://gems.ruby-china.org" target="_blank">Gems</a></li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li v-bind:class="{'active': current == 5}"><router-link to="/account/signin">登录</router-link></li>
          <li v-bind:class="{'active': current == 6}"><router-link to="/account/signup">注册</router-link></li>
        </ul>
        <form class="navbar-form navbar-right">
          <div class="header-search"><a href="#/"><span class="glyphicon glyphicon-search"></span></a><div class="form-group"><input type="text" placeholder="搜索本站内容" class="form-control"></div></div>
        </form>
      </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
  </nav>
</template>
<script>
export default {
  name: 'header-component',
  props: {
    tab: String,
  },
  computed: {
    current() {
      /*eslint-disable */
      const tabs = {
        'topics': 0,
        'wiki': 1,
        'sites': 2,
        'homeland': 3,
        'jobs': 4,
        'signup': 5,
        'signin': 6,
      };
      /*eslint-disable */
      return tabs[this.tab];
    },
  },
};
</script>
<style lang="scss">
#header {
  background-color: #fff;
  li{
    a{
      color: #333;
      padding-bottom: 12px;
      &:hover{
        color: #EB5424;
        padding-bottom: 12px;
      }
    }
  }
  .active{
    a{
      color: #EB5424;
      padding-bottom: 12px;
    }
  }
  #nav-menu{
    li{
      a{
        &:hover{
          color: #EB5424 !important;
          background-color: transparent !important;
          border-bottom: 3px solid #EB5424;
          padding-bottom: 12px;
        }
      }
    }
    .active{
      a{
        color: #EB5424 !important;
        background-color: transparent !important;
        border-bottom: 3px solid #EB5424 !important;
        padding-bottom: 12px;
      }
    }
  }
  .header-brand{
    border-bottom: 3px solid #fff;
    margin: 0;
    text-align: center;
    color: #666;
    line-height: 100%;
    padding: 15px;
    font-size: 18px;
    text-decoration: none;
    font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
    b {
      font-weight: 700;
      color: #eb5424;
    }
  }
  @media screen {
    .header-search{
      display: block;
    }
  }
  @media(max-width: 992px){
    .header-search{
      display: none;
    }
  }
  .header-search{
    input, input:hover, input:focus{
      background-color: transparent;
      border: none;
      box-shadow: none;
    }
    a{
      margin-right: 5px;
      color: #000;
      vertical-align: middle;
      &:hover{
        color: #000;
        vertical-align: middle;
      }
    }
  }

}

</style>
