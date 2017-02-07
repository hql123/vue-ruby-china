<template>
  <footer class="footer" id="footer" data-turbolinks-permanent="">
    <div class="container">
      <div class="media">
        <div class="media-left" style="margin-right:20px;">
          <img class="media-object" src="//ruby-china-files.b0.upaiyun.com/photo/2016/c309db0b49cab85a32f756541ea0e2b0.png" style="width: 64px;">
        </div>

        <div class="media-body">
          <div class="links">
            <a href="/wiki/about">关于</a> / <a href="http://rubyconfchina.org" target="_blank" title="RubyConf China 大会">RubyConf</a> / <a href="/wiki/ruby-mirror" title="Ruby 镜像">Ruby 镜像</a> / <a href="https://&#10;gems.ruby-china.org" target="_blank" title="RubyGems 镜像">RubyGems 镜像</a> / <a href="/status" target="_blank">Status</a> / <a href="/users">活跃会员</a> / <a href="/teams">组织</a> / <a href="/api">API</a> / <a href="/wiki/contributors">贡献者</a>
          </div>
          <div class="copyright">
          中国 Ruby 社区，由众多爱好者共同维护，致力于构建完善的 Ruby 中文社区。
          </div>
      <div class="supports" style="margin: 10px 0;">
          <span style="margin-right: 20px">服务器由 <a href="http://www.ucloud.cn/?utm_source=zanzhu&amp;utm_campaign=rubychina&amp;utm_medium=display&amp;utm_content=yejiao&amp;ytag=rubychina_logo" target="_blank" rel="twipsy" title="" data-original-title="本站服务器由 UCloud 赞助"><img src="//ruby-china-files.b0.upaiyun.com/photo/2016/e1eb47a05578576bf134da65736cc5b4.png" style="height: 20px; margin-top: -2px"></a> 赞助</span>
          <span style="margin-right: 20px">CDN 由 <a href="https://www.upyun.com/?utm_source=ruby-china&amp;utm_medium=ad&amp;utm_campaign=upyun&amp;md=ruby-china" target="_blank" style="display:inline-block;" rel="twipsy" title="" data-original-title="CDN, Ruby Mirror, RubyGems CDN 由又拍云赞助"><img src="//ruby-china-files.b0.upaiyun.com/photo/2016/3ad734d65891632fb049ba97044ba5a4.png" style="height: 20px; margin-top: -2px"></a> 赞助</span>
          <span>Gem 服务器由
          <a href="http://www.qcloud.com?ref=ruby-china" target="_blank" rel="twipsy" title="" data-original-title="腾讯云为 RubyGems 镜像提供国外服务器支持"><img src="//ruby-china-files.b0.upaiyun.com/photo/2016/1977b4bcf6589a03fb4d21139955aa6a.png" style="height: 20px; margin-top: -3px"></a> 赞助</span>
         </div>
         <div class="links" style="margin-top:8px">
           <span class="socials">
           <a href="http://github.com/ruby-china" target="_blank" rel="nofollow" title="本站在 GitHub 上面的开源内容"><i class="fa fa-github"></i></a>
           <a href="http://twitter.com/ruby_china" target="_blank" rel="nofollow" title="本站的 Twitter 账号"><i class="fa fa-twitter"></i></a>
           <a href="http://weibo.com/u/3168836987" target="_blank" rel="nofollow" title="本站的 Weibo 账号"><i class="fa fa-weibo"></i></a>
           <a href="https://www.youtube.com/channel/UCOLKFS_uA7nX26_u8z9V9og/feed" target="_blank" rel="nofollow" title="本站在 YouTube 上面的视频内容"><i class="fa fa-youtube"></i></a>
           <a href="/topics/feed" target="_blank" rel="nofollow"><i class="fa fa-rss"></i></a>
           </span>

           <span style="margin-left:20px;"><a href="https://itunes.apple.com/us/app/ruby-china/id1072028763">iOS 客户端</a> / <a href="https://play.google.com/store/apps/details?id=org.ruby_china.android">Android 客户端</a></span>

           <a href="?locale=zh-CN" rel="nofollow" style="margin-left: 20px">简体中文</a> / <a href="?locale=zh-TW" rel="nofollow">正體中文</a> / <a href="?locale=en" rel="nofollow">English</a>
         </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
  export default{
    name: 'footer-component',
  };
</script>
<style lang="scss">
#footer{
  .media-body{
    text-align: left;
    color: #9CA4A9;
    .links {
      color: #ddd;
    }
    a{
      color: #666;
    }
  }
}

</style>
