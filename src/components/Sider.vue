<template>
  <div class="sider panel panel-default">
    <div class="panel-body">
      <div class="panel panel panel-default">
        <div class="panel-body">
          <button type="button" class="btn btn-primary">发布新话题</button>
        </div>
      </div>
      <div class="panel panel-default">
        <div class="panel-heading">小贴士</div>
        <div class="panel-body">本站是开源的哦，访问 http://gethomeland.com 获得更多信息</div>
      </div>
      <div class="panel panel-default">
        <div class="panel-heading">推荐Ruby资源</div>
        <div class="panel-body">
          <ul class="sider-ul">
            <li><a href="#/wiki/ruby-mirror">Ruby 镜像</a></li>
            <li><a href="https://gems.ruby-china.org" target="_blank">RubyGems 镜像</a></li>
            <li><a href="http://railscasts.com" target="_blank" rel="nofollow">Rails 视频教程</a></li>
            <li><a href="http://guides.ruby-china.org">Rails Guides 中文版</a></li>
            <li><a href="https://railstutorial-china.org">Ruby on Rails 教程</a></li>
          </ul>
        </div>
      </div>
      <div class="panel panel-default">
        <div class="panel-heading">友情社区</div>
        <div class="panel-body">
          <ul class="sider-ul">
            <li style="text-align: center;"><a href="http://cnodejs.org" rel="nofollow" title="CNode 社区" target="_blank"><img alt="1" src="//ruby-china-files.b0.upaiyun.com/photo/2016/d427ef3efd33b57721df152c2aa1735e.png" style="width: 130px;"></a></li>
            <li style="text-align: center;"><a href="http://golangtc.com/" rel="nofollow" title="Golang 中国" target="_blank"><img alt="2" src="//ruby-china-files.b0.upaiyun.com/photo/2016/3b0fc569b40157a397143d121fea7e6f.png" style="width: 130px;"></a></li>
            <li style="text-align: center;"><a href="https://laravel-china.org" target="_blank" rel="nofollow"><img alt="3" src="//ruby-china-files.b0.upaiyun.com/photo/2016/d7782871f3fac7e85a95d20c74046909.png" style="width: 130px;"></a></li>
            <li style="text-align: center;"><a href="http://elixir-cn.com" target="_blank" rel="nofollow"><img alt="4" src="//ruby-china-files.b0.upaiyun.com/photo/2015/f65fb5a10d3392a1db841c85716dd8f6.png" style="width: 130px;"></a></li>
            <li style="text-align: center;"><a href="http://ionichina.com/" target="_blank" rel="nofollow"><img alt="5" src="//ruby-china-files.b0.upaiyun.com/photo/2016/62e5d33d4f90ead9e798e3f8ae085f16.png" style="width: 130px;"></a></li>
            <li style="text-align: center;"><a href="https://testerhome.com/" target="_blank" rel="nofollow"><img alt="6" src="//ruby-china-files.b0.upaiyun.com/photo/2016/5cd78b730062ab3c768bcc2592c5c7fa.png" style="width: 130px;"></a></li>
          </ul>
        </div>
      </div>
      <div class="panel panel-default">
        <div class="panel-heading">统计信息</div>
        <div class="panel-body">
          <ul class="sider-ul">
            <li>社区会员: 30232 人</li>
            <li>帖子数: 32156 个</li>
            <li>回帖数: 313960 条</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@media screen {
  .sider{
    min-height: 500px;
    margin: -15px -30px 0;
    background-color: transparent;
    border: none;
  }
}
@media (max-width: 768px) {
  .sider{
    min-height: 500px;
    margin: -15px -15px 0;
    background-color: transparent;
    border: none;
  }
}
.sider{
  .panel{
    background-color: #fff;
    margin-bottom: 15px;
    border-radius: 3px;
    border: 1px;
    border-color: #e5e6e9 #dfe0e4 #d0d1d5;
  }
  .panel-title{
    color: #777;
    background-color: #fafafa;
    padding: 6px 15px;
    border: 1px solid #eee;
  }
  .panel-body{
    padding: 15px;
    word-break: break-all;
    button{
      text-align: center;
      width: 100%;
      height: 35px;
      font-size: 14px;
      font-weight: 400;
      padding: 5px 8px;
    }
  }
  .sider-ul{
    list-style: none;
    margin: -15px 0;
    li{
      border-bottom: 1px solid #eee;
      margin: 0 -15px 0 -55px;
      padding: 10px 15px;
      a{
        color: #000;
        &:hover{
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
