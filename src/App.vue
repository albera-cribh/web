<template>
  <div id="app">
    <!-- 顶部横幅 -->
    <div class="top-banner">
      <div class="container">
        <div class="banner-left">
          <img
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjM1IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik01MCwxMEwxMCwyNUw1MCw0MEw5MCwyNUw1MCwxMCIgc3Ryb2tlPSIjMTU2NWMwIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9InVybCgjc3ZnX2xpbmVhcikiLz48dGV4dCB4PSI1MCIgeT0iMTgiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMCIgZmlsbD0iIzE1NjVjMCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+5q+U6Z+z55So6K+m5ZCI5p2D6YO95LiO5LiN5rW3PC90ZXh0Pjwvc3ZnPg=="
            alt="关注食品安全">
          <span>关注食品安全 共筑健康生活</span>
        </div>
      </div>
    </div>

    <!-- 网站头部 -->
    <header class="header">
      <div class="container">
        <div class="header-content">
          <div class="logo">
            <img src="@/assets/logo.jpg" alt="logo" loading="eager" width="800" height="125">
            <div class="site-info">
              <!--<h1>南宁市食品药品安全管理服务协会</h1>
              <p>Nanning Food and Drug Safety Management Service Association</p>-->
            </div>
          </div>
          <div class="search-box">
            <input type="text" placeholder="请输入关键词" class="search-input">
            <button class="search-btn">搜索</button>
          </div>
        </div>
      </div>
    </header>

    <!-- 导航菜单 -->
    <nav class="main-nav">
      <div class="container">
        <ul class="nav-menu">
          <li><a href="/" class="active">首页</a></li>
          <li><a href="/A/xhgk.html">协会概况</a></li>
          <li><a href="/A/zxyw.html">最新要闻</a></li>
          <li><a href="/A/tzgg.html">通知公告</a></li>
          <li><a href="/A/xhdt.html">协会动态</a></li>
          <li><a href="/A/hyfc.html">会员风采</a></li>
          <li><a href="/A/zzfg.html">政策法规</a></li>
          <li><a href="/A/fxgl.html">服务信息</a></li>
          <li><a href="/A/xyzh.html">消费指南</a></li>
          <li><a href="/A/zzfw.html">在线服务</a></li>
          <li><a href="/A/lxwm.html">联系我们</a></li>
        </ul>
      </div>
    </nav>





    <!-- 固定悬浮二维码模块 -->
    <div class="floating-qrcode">
      <div class="qrcode-container">
        <div class="qrcode-header">
          <h4>关注我们</h4>
          <span class="qrcode-close" @click="toggleQrcode">×</span>
        </div>
        <div class="qrcode-content">
          <img src="/A/lxwm/公众号.png" alt="微信公众号二维码" class="qrcode-img">
          <p class="qrcode-desc">扫码关注微信公众号<br>获取最新资讯</p>
        </div>
      </div>
    </div>
    <!-- 轮播图区域 -->
    <section class="banner-section">
      <div class="banner-carousel">
        <div class="main-carousel-wrapper" ref="carouselWrapper">
          <div class="carousel-items">
            <div class="carousel-item">
              <img src="/A/HOME-P/1.png" alt="轮播图1" loading="lazy" width="1200" height="400">
            </div>
            <div class="carousel-item">
              <img src="/A/HOME-P/2.jpg" alt="轮播图2" loading="lazy" width="1200" height="400">
            </div>
            <div class="carousel-item">
              <img src="/A/HOME-P/3.png" alt="轮播图3" loading="lazy" width="1200" height="400">
            </div>
            <!-- 复制第一个元素用于无缝循环 -->
            <div class="carousel-item">
              <img src="/A/HOME-P/1.png" alt="轮播图1" loading="lazy" width="1200" height="400">
            </div>
          </div>
        </div>
        <!-- 轮播图指示器 -->
        <div class="carousel-indicators" ref="carouselIndicators">
          <span class="indicator active" @click="goToSlide(0)"></span>
          <span class="indicator" @click="goToSlide(1)"></span>
          <span class="indicator" @click="goToSlide(2)"></span>
        </div>
      </div>
    </section>

    <!-- 主要内容区域 -->
    <section class="content-section">
      <div class="container">
        <!-- 第一行内容 -->
        <div class="content-grid">
          <!-- 最新要闻 -->
          <div class="content-column">
            <div class="section-header">
              <span class="section-icon"></span>
              <h3>最新要闻</h3>
              <a href="#more-news" class="more-link">MORE...</a>
            </div>
            <div class="news-feature">
              <!-- 图片轮播区域 -->
              <div class="news-carousel-container">
                <div class="news-carousel-wrapper">
                  <div class="news-carousel-items" ref="newsCarouselItems">
                    <a href="#" class="news-carousel-item">
                      <img src="/A/news/协会要闻1.jpg" alt="携手缅甸贸易中心" loading="lazy" width="300" height="200">
                    </a>
                    <a href="#" class="news-carousel-item">
                      <img src="/A/news/协会要闻2.jpg" alt="2025年全国食品安全宣传周南宁活动启动" loading="lazy" width="300" height="200">
                    </a>
                    <a href="#" class="news-carousel-item">
                      <img src="/A/news/协会要闻3.jpg" alt="2025年全国食品安全宣传周南宁活动启动" loading="lazy" width="300" height="200">
                    </a>
                  </div>
                  <!-- 轮播图指示器 -->
                  <div class="news-carousel-indicators">
                    <span class="news-indicator" :class="{ active: currentNewsSlide === 0 }"
                      @click="goToNewsSlide(0)"></span>
                    <span class="news-indicator" :class="{ active: currentNewsSlide === 1 }"
                      @click="goToNewsSlide(1)"></span>
                    <span class="news-indicator" :class="{ active: currentNewsSlide === 2 }"
                      @click="goToNewsSlide(2)"></span>
                  </div>
                </div>
              </div>
              <!-- 文字区域 -->
              <div class="news-items">
                <a href="#" class="news-item">携手缅甸贸易中心！南宁食药协会共筑中缅安全贸易新通道</a>
                <a href="#" class="news-item">2025年全国食品安全宣传周南宁活动启动</a>
                <a href="#" class="news-item">广西"放心月饼"暨特色食品中秋嘉年华·小红书联动计划启动！</a>
              </div>
            </div>
          </div>

          <!-- 视频播报 -->
          <div class="content-column">
            <div class="section-header">
              <span class="section-icon"></span>
              <h3>视频播报</h3>
              <a href="#more-videos" class="more-link">MORE...</a>
            </div>
            <div class="video-carousel-container">
              <div class="video-carousel-wrapper">
                <div class="video-carousel-items" ref="videoCarouselItems">
                  <a href="#" class="video-carousel-item">
                    <img src="/A/news/视频1.jpg" alt="食品安全培训视频" loading="lazy" width="300" height="200">
                    <div class="video-info">
                      <p>食品安全培训视频：食品生产规范</p>
                    </div>
                  </a>
                  <a href="#" class="video-carousel-item">
                    <img src="/A/news/视频2.jpg" alt="餐饮服务标准讲解" loading="lazy" width="300" height="200">
                    <div class="video-info">
                      <p>餐饮服务标准讲解：卫生管理要求</p>
                    </div>
                  </a>
                  <a href="#" class="video-carousel-item">
                    <img src="/A/news/视频3.jpg" alt="食品安全检测技术" loading="lazy" width="300" height="200">
                    <div class="video-info">
                      <p>食品安全检测技术：快速检测方法</p>
                    </div>
                  </a>
                </div>
              </div>
              <!-- 轮播图指示器 -->
              <div class="video-carousel-indicators">
                <span class="video-indicator" :class="{ active: currentVideoSlide === 0 }"
                  @click="goToVideoSlide(0)"></span>
                <span class="video-indicator" :class="{ active: currentVideoSlide === 1 }"
                  @click="goToVideoSlide(1)"></span>
                <span class="video-indicator" :class="{ active: currentVideoSlide === 2 }"
                  @click="goToVideoSlide(2)"></span>
              </div>
            </div>
          </div>
        </div>

        <!-- 新增图片链接区域 -->
        <div class="image-links-section">
          <div class="image-links-container">
            <a href="#" class="image-link-item">
              <img src="/A/HOME-P/会刊.png" alt="图片链接1" loading="lazy" width="200" height="150">
              <div class="image-link-title">南宁食品会刊</div>
            </a>
            <a href="#" class="image-link-item">
              <img src="/A/HOME-P/加入.png" alt="图片链接2" loading="lazy" width="200" height="150">
              <div class="image-link-title">入会在线申请</div>
            </a>
            <a href="#" class="image-link-item">
              <img src="/A/HOME-P/报名.png" alt="图片链接3" loading="lazy" width="200" height="150">
              <div class="image-link-title">食品安全员、总监学习报名</div>
            </a>
          </div>
        </div>


        <!-- 第二行内容 -->
        <div class="content-grid">
          <!-- 会员风采 -->
          <div class="content-column">
            <div class="section-header">
              <span class="section-icon"></span>
              <h3>会员风采</h3>
              <a href="#more-members" class="more-link">MORE...</a>
            </div>
            <div class="member-scroll-container" ref="memberScrollContainer">
              <div class="member-scroll-wrapper" ref="memberScrollWrapper">
                <!-- 使用v-for循环生成项目，添加动态类名控制显示 -->
                <a href="#" class="member-item" v-for="(item, index) in memberItems" :key="index" :class="{
                  'active': index <= currentMemberIndex,
                  'fade-in': index === currentMemberIndex
                }">
                  {{ item }}
                </a>
              </div>
            </div>
          </div>
          <!-- 协会动态 -->
          <div class="content-column">
            <div class="section-header">
              <span class="section-icon"></span>
              <h3>协会动态</h3>
              <a href="#more-activities" class="more-link">MORE...</a>
            </div>
            <div class="activity-items">
              <a href="#" class="activity-item">协会成功举办《食品安全法》《食品安全生产经营管理规范》专题培训</a>
              <a href="#" class="activity-item">广西省南宁市食品药品安全管理服务协会、中国食品安全工业协会 战略合作协议签署仪式顺利举行</a>
              <a href="#" class="activity-item">关于开展《食品安全法》《食品安全生产经营管理规范》专题培训的通知</a>
              <a href="#" class="activity-item">关于征集《餐饮服务与营养健康餐饮（餐厅）评价规范》等餐饮管理标准"标杆区"、"区示范店"...</a>
            </div>
          </div>

          <!-- 通知公告 -->
          <div class="content-column">
            <div class="section-header">
              <span class="section-icon"></span>
              <h3>通知公告</h3>
              <a href="#more-announcements" class="more-link">MORE...</a>
            </div>
            <div class="announcement-items">
              <a href="#" class="announcement-item">关于开展食品抽检抽测及产品风险快速识别培训的通知</a>
              <a href="#" class="announcement-item">广西省人民政府办公厅关于收集《广西省食品生产经营 （销售类）标准化厂房建设...</a>
              <a href="#" class="announcement-item">关于第二批海南省餐饮标准化试点单位名单的公示</a>
              <a href="#" class="announcement-item">广西省市场监管局关于公开征集反对滥用市场支配地位政策实施效果评估意见的通告</a>
              <a href="#" class="announcement-item">市场监管总局关于进一步加强网络销售和直播电商领域假冒伪劣商品整治的通知</a>
            </div>
          </div>
        </div>

        <!-- 第三行内容 -->
        <div class="content-grid">
          <!-- 消费指南 -->
          <div class="content-column">
            <div class="section-header">
              <span class="section-icon"></span>
              <h3>消费指南</h3>
              <a href="#more-guides" class="more-link">MORE...</a>
            </div>
            <div class="guide-items">
              <a href="#" class="guide-item">反季节水果的营养价值如何？</a>
              <a href="#" class="guide-item">保存香蕉是要悬挂还是平放？海南市场监管部门发布行业典型案例</a>
              <a href="#" class="guide-item">食品安全知识网络答题活动系列（一）</a>
              <a href="#" class="guide-item">热点解读｜失温现象知多少？</a>
              <a href="#" class="guide-item">2025年春节期间消费食品安全风险提示系列（第一期）</a>
            </div>
          </div>

          <!-- 服务信息 -->
          <div class="content-column">
            <div class="section-header">
              <span class="section-icon"></span>
              <h3>服务信息</h3>
              <a href="#more-services" class="more-link">MORE...</a>
            </div>
            <div class="service-info-items">
              <a href="#" class="service-info-item">水中常见污染物有哪些？戴村河水质背景干净、经检测外其他...</a>
              <a href="#" class="service-info-item">必看！一文了解生物安全柜使用</a>
              <a href="#" class="service-info-item">"抽检+快检"筑牢食安防线 最小化风险防范食品安全隐患</a>
              <a href="#" class="service-info-item">海南日报："两菜一汤"有讲究，海南制定餐饮标准</a>
              <a href="#" class="service-info-item">餐饮行业许可证可以作为一种融资，深圳助企融资产品平台升级</a>
            </div>
          </div>

          <!-- 政策法规 -->
          <div class="content-column">
            <div class="section-header">
              <span class="section-icon"></span>
              <h3>政策法规</h3>
              <a href="#more-policies" class="more-link">MORE...</a>
            </div>
            <div class="policy-items">
              <a href="#" class="policy-item">国家：食品生产企业监督检查（20号令）——官方解读！</a>
              <a href="#" class="policy-item">食品安全监督管理办法</a>
              <a href="#" class="policy-item">全面启动食品、食用农产品"铁桶"般入库行动计划</a>
              <a href="#" class="policy-item">广西省市场监督管理局关于完善食品药品安全监管体系的若干意见</a>
              <a href="#" class="policy-item">广西药监局关于开展零售药店监管专项行动的通知（第三期）（附件：《中华人民共和国食品安全法》）</a>
            </div>
          </div>
        </div>

        <!-- 广告区域修改为轮播图 -->
        <div class="ad-section">
          <div class="carousel-container">
            <div class="ad-carousel-wrapper" ref="adCarouselWrapper">
              <div class="ad-carousel-items">
                <a href="#" class="ad-carousel-item">
                  <img src="/A/food/f1.jpg" alt="食品1">
                </a>
                <a href="#" class="ad-carousel-item">
                  <img src="/A/food/f2.jpg" alt="食品2">
                </a>
                <a href="#" class="ad-carousel-item">
                  <img src="/A/food/f3.jpg" alt="食品3">
                </a>
                <a href="#" class="ad-carousel-item">
                  <img src="/A/food/f4.jpg" alt="食品4">
                </a>
                <a href="#" class="ad-carousel-item">
                  <img src="/A/food/f5.jpg" alt="食品5">
                </a>
                <a href="#" class="ad-carousel-item">
                  <img src="/A/food/f6.jpg" alt="食品6">
                </a>
                <!-- 复制第一个元素用于无缝循环 -->
                <a href="#" class="ad-carousel-item">
                  <img src="/A/food/f1.jpg" alt="食品1">
                </a>
                <a href="#" class="ad-carousel-item">
                  <img src="/A/food/f2.jpg" alt="食品2">
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 友情链接 -->
    <section class="friend-links">
      <div class="container">
        <h3>友情链接</h3>
        <div class="links-container">
          <a href="#" class="link-item">省人民政府</a>
          <a href="#" class="link-item">市场监督总局</a>
          <a href="#" class="link-item">省市场监管局</a>
          <a href="#" class="link-item">省农业农村厅</a>
          <a href="#" class="link-item">省卫健委</a>
          <a href="#" class="link-item">省公安厅</a>
          <a href="#" class="link-item">省商务厅</a>
          <a href="#" class="link-item">省疾控中心</a>
          <a href="#" class="link-item">省药监局</a>
          <a href="#" class="link-item">人民网海南频道</a>
          <a href="#" class="link-item">新华网海南频道</a>
          <a href="#" class="link-item">中国网海南频道</a>
          <a href="#" class="link-item">广西日报客户端</a>
          <a href="#" class="link-item">广西省食品安全网</a>
          <a href="#" class="link-item">广西省食品安全协会</a>
          <a href="#" class="link-item">广西省食药监局网站</a>
        </div>
      </div>
    </section>

    <!-- 底部信息 -->
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <p>地址：南宁市青秀区东葛路118号南宁青秀万达广场西3栋3419号 邮编：573000</p>
          <p> 邮箱：nnspypaqglfwxh@163.com</p>
          <p></p>
          <p>公网安备：桂公网安备xxxxx号</p>
        </div>
        <div class="footer-bottom">
          <p>南宁市食品药品安全管理服务协会 版权所有</p>
        </div>
      </div>
    </footer>
  </div>
</template>


<script>
export default {
  name: 'App',
  data() {
    return {
      // 二维码显示状态
      showQrcode: true,

      // 主轮播图数据
      carouselInterval: null,
      currentSlide: 0,
      slideCount: 3,
      slideWidth: 0,
      scrollSpeed: 4000, // 增加间隔时间，减少CPU使用

      // 广告轮播图数据
      adCarouselInterval: null,
      currentAdSlide: 0,
      adSlideCount: 3,
      adSlideWidth: 0,
      adScrollSpeed: 4000, // 增加间隔时间

      // 最新要闻轮播图数据
      newsCarouselInterval: null,
      currentNewsSlide: 0,
      totalNewsSlides: 3,

      // 视频轮播图数据
      videoCarouselInterval: null,
      currentVideoSlide: 0,
      totalVideoSlides: 3,

      // 会员风采数据 - 逐条滚动
      memberItems: [
        "关于征集《餐饮服务与营养健康餐饮（餐厅）评价规范》等餐饮管理标准\"标杆区\"、\"区示范店\"...",
        "雷飞跃秘书长，助力海南自贸港食品生产经营企业",
        "协会成功举办《食品安全法》《食品安全生产经营管理规范》专题培训",
        "广西省南宁市食品药品安全管理服务协会、中国食品安全工业协会 战略合作协议签署仪式顺利举行",
        "关于开展《食品安全法》《食品安全生产经营管理规范》专题培训的通知",
        "关于征集《餐饮服务与营养健康餐饮（餐厅）评价规范》等餐饮管理标准\"标杆区\"、\"区示范店\"...",
        "雷飞跃秘书长，助力海南自贸港食品生产经营企业"
      ],
      currentMemberIndex: -1, // 当前显示到第几条（-1表示初始状态）
      memberScrollInterval: null,
      memberScrollSpeed: 3000, // 增加显示间隔，减少CPU使用
      memberItemHeight: 0,
      
      // 新增：页面可见性状态
      isPageVisible: true,
    }
  },
  mounted() {
    // 添加页面可见性监听
    this.setupVisibilityListener();
    
    // 延迟初始化，提高首屏加载速度
    setTimeout(() => {
      this.$nextTick(() => {
        this.initCarousel();
        this.initAdCarousel();
        this.startNewsCarousel();
        this.startVideoCarousel();
        this.startMemberScrolling();
      });
    }, 100);

    // 监听窗口大小变化，使用防抖优化
    this.debouncedResize = this.debounce(this.handleResize, 250);
    window.addEventListener('resize', this.debouncedResize);
  },

  beforeUnmount() {
    // 清理所有定时器和事件监听器
    this.cleanupIntervals();
    window.removeEventListener('resize', this.debouncedResize);
    
    // 移除可见性监听
    if (document.visibilityState) {
      document.removeEventListener('visibilitychange', this.handleVisibilityChange);
    }
  },
  
  methods: {
    // 切换二维码显示状态
    toggleQrcode() {
      this.showQrcode = !this.showQrcode;
    },

    // 防抖函数优化性能
    debounce(func, wait) {
      let timeout;
      return function executedFunction(...args) {
        const later = () => {
          clearTimeout(timeout);
          func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
      };
    },
    
    // 页面可见性监听
    setupVisibilityListener() {
      if (document.visibilityState) {
        document.addEventListener('visibilitychange', this.handleVisibilityChange);
      }
    },
    
    handleVisibilityChange() {
      this.isPageVisible = !document.hidden;
      if (this.isPageVisible) {
        // 页面可见时恢复轮播
        this.resumeCarousels();
      } else {
        // 页面不可见时暂停轮播以节省资源
        this.pauseCarousels();
      }
    },
    
    // 暂停所有轮播
    pauseCarousels() {
      if (this.carouselInterval) {
        clearInterval(this.carouselInterval);
        this.carouselInterval = null;
      }
      if (this.newsCarouselInterval) {
        clearInterval(this.newsCarouselInterval);
        this.newsCarouselInterval = null;
      }
      if (this.videoCarouselInterval) {
        clearInterval(this.videoCarouselInterval);
        this.videoCarouselInterval = null;
      }
      if (this.adCarouselInterval) {
        clearInterval(this.adCarouselInterval);
        this.adCarouselInterval = null;
      }
    },
    
    // 恢复所有轮播
    resumeCarousels() {
      if (!this.carouselInterval && this.isPageVisible) {
        this.carouselInterval = setInterval(() => {
          this.nextSlide();
        }, this.scrollSpeed);
      }
      if (!this.newsCarouselInterval && this.isPageVisible) {
        this.startNewsCarousel();
      }
      if (!this.videoCarouselInterval && this.isPageVisible) {
        this.startVideoCarousel();
      }
      if (!this.adCarouselInterval && this.isPageVisible) {
        this.initAdCarousel();
      }
    },
    
    // 清理所有定时器
    cleanupIntervals() {
      const intervals = [
        this.carouselInterval,
        this.adCarouselInterval,
        this.newsCarouselInterval,
        this.videoCarouselInterval,
        this.memberScrollInterval
      ];
      
      intervals.forEach(interval => {
        if (interval) {
          clearInterval(interval);
        }
      });
    },

    goToXhgk() {
      window.location.href = '/A/xhgk';
    },

    // 主轮播图方法 - 优化DOM操作
    initCarousel() {
      const wrapper = this.$refs.carouselWrapper;
      if (wrapper) {
        // 缓存宽度值，避免重复计算
        this.slideWidth = wrapper.offsetWidth;
      }

      // 只在页面可见时启动轮播
      if (this.isPageVisible) {
        this.carouselInterval = setInterval(() => {
          this.nextSlide();
        }, this.scrollSpeed);
      }
    },
    
    nextSlide() {
      const wrapper = this.$refs.carouselWrapper;
      if (!wrapper || !this.slideWidth) return;

      // 使用requestAnimationFrame优化动画性能
      requestAnimationFrame(() => {
        this.currentSlide += 1;
        wrapper.style.transition = 'transform 0.5s ease';
        wrapper.style.transform = `translateX(-${this.currentSlide * this.slideWidth}px)`;

        this.updateIndicators();

        if (this.currentSlide >= this.slideCount) {
          setTimeout(() => {
            wrapper.style.transition = 'none';
            this.currentSlide = 0;
            wrapper.style.transform = 'translateX(0)';
          }, 500);
        }
      });
    },
    
    goToSlide(index) {
      const wrapper = this.$refs.carouselWrapper;
      if (!wrapper || !this.slideWidth) return;

      // 暂停当前轮播
      if (this.carouselInterval) {
        clearInterval(this.carouselInterval);
      }

      this.currentSlide = index;
      wrapper.style.transition = 'transform 0.5s ease';
      wrapper.style.transform = `translateX(-${this.currentSlide * this.slideWidth}px)`;

      this.updateIndicators();

      // 延迟重启轮播，避免频繁操作
      setTimeout(() => {
        if (this.isPageVisible) {
          this.carouselInterval = setInterval(() => {
            this.nextSlide();
          }, this.scrollSpeed);
        }
      }, 1000);
    },
    
    updateIndicators() {
      const indicators = this.$refs.carouselIndicators;
      if (!indicators) return;

      const indicatorElements = indicators.querySelectorAll('.indicator');
      const displayIndex = this.currentSlide % this.slideCount;
      
      // 批量操作DOM，减少重绘
      indicatorElements.forEach((indicator, index) => {
        if (index === displayIndex) {
          indicator.classList.add('active');
        } else {
          indicator.classList.remove('active');
        }
      });
    },

    // 广告轮播图方法 - 优化性能
    initAdCarousel() {
      const wrapper = this.$refs.adCarouselWrapper;
      if (wrapper) {
        this.adSlideWidth = 200;
        if (this.isPageVisible) {
          this.adCarouselInterval = setInterval(() => {
            this.nextAdSlide();
          }, this.adScrollSpeed);
        }
      }
    },
    
    nextAdSlide() {
      const wrapper = this.$refs.adCarouselWrapper;
      if (!wrapper || !this.adSlideWidth) return;

      requestAnimationFrame(() => {
        this.currentAdSlide += 1;
        wrapper.style.transition = 'transform 0.5s ease';
        wrapper.style.transform = `translateX(-${this.currentAdSlide * (this.adSlideWidth + 20)}px)`;

        if (this.currentAdSlide >= this.adSlideCount) {
          setTimeout(() => {
            wrapper.style.transition = 'none';
            this.currentAdSlide = 0;
            wrapper.style.transform = 'translateX(0)';
          }, 500);
        }
      });
    },

    // 最新要闻轮播图方法 - 优化性能
    startNewsCarousel() {
      if (this.isPageVisible) {
        this.newsCarouselInterval = setInterval(() => {
          this.nextNewsSlide();
        }, 4000); // 增加间隔时间
      }
    },
    
    nextNewsSlide() {
      requestAnimationFrame(() => {
        this.currentNewsSlide = (this.currentNewsSlide + 1) % this.totalNewsSlides;
        this.updateNewsCarouselPosition();
      });
    },
    
    goToNewsSlide(index) {
      this.currentNewsSlide = index;
      this.updateNewsCarouselPosition();
    },
    
    updateNewsCarouselPosition() {
      const wrapper = this.$refs.newsCarouselItems;
      if (wrapper) {
        wrapper.style.transform = `translateX(-${this.currentNewsSlide * 100}%)`;
      }
    },

    // 视频播报轮播图方法 - 优化性能
    startVideoCarousel() {
      if (this.isPageVisible) {
        this.videoCarouselInterval = setInterval(() => {
          this.nextVideoSlide();
        }, 5000); // 增加间隔时间
      }
    },
    
    nextVideoSlide() {
      requestAnimationFrame(() => {
        this.currentVideoSlide = (this.currentVideoSlide + 1) % this.totalVideoSlides;
        this.updateVideoCarouselPosition();
      });
    },
    
    goToVideoSlide(index) {
      this.currentVideoSlide = index;
      this.updateVideoCarouselPosition();
    },
    
    updateVideoCarouselPosition() {
      const items = this.$refs.videoCarouselItems;
      if (items) {
        items.style.transform = `translateX(-${this.currentVideoSlide * 100}%)`;
      }
    },

    // 会员风采逐条滚动方法 - 优化性能
    startMemberScrolling() {
      this.$nextTick(() => {
        this.currentMemberIndex = -1;
        this.calculateMemberItemHeight();

        setTimeout(() => {
          this.currentMemberIndex = 0;
          if (this.isPageVisible) {
            this.memberScrollInterval = setInterval(() => {
              this.showNextMemberItem();
            }, this.memberScrollSpeed);
          }
        }, 1000);
      });
    },
    
    showNextMemberItem() {
      requestAnimationFrame(() => {
        this.currentMemberIndex++;
        if (this.currentMemberIndex >= this.memberItems.length) {
          setTimeout(() => {
            this.currentMemberIndex = -1;
            setTimeout(() => {
              this.currentMemberIndex = 0;
            }, 500);
          }, 1000);
        }
      });
    },
    
    calculateMemberItemHeight() {
      const items = this.$refs.memberScrollWrapper?.querySelectorAll('.member-item');
      if (items && items.length > 0) {
        const item = items[0];
        this.memberItemHeight = item.offsetHeight;
      } else {
        this.memberItemHeight = 30;
      }
    },
    
    stopMemberScrolling() {
      if (this.memberScrollInterval) {
        clearInterval(this.memberScrollInterval);
        this.memberScrollInterval = null;
      }
    },
    
    // 窗口大小变化处理 - 使用防抖优化
    handleResize() {
      const wrapper = this.$refs.carouselWrapper;
      if (wrapper) {
        const newWidth = wrapper.offsetWidth;
        if (newWidth !== this.slideWidth) {
          this.slideWidth = newWidth;
          const currentDisplayIndex = this.currentSlide % this.slideCount;
          wrapper.style.transition = 'none';
          wrapper.style.transform = `translateX(-${currentDisplayIndex * this.slideWidth}px)`;
          this.currentSlide = currentDisplayIndex;
        }
      }
      this.calculateMemberItemHeight();
    }
  }
}
</script>

<style>
/* 全局样式 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Microsoft YaHei', 'SimSun', Arial, sans-serif;
  line-height: 1.6;
  color: #333;
  background: #fff;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

/* 顶部横幅 */
.top-banner {
  background: #f0f0f0;
  padding: 5px 0;
  border-bottom: 1px solid #ddd;
}

.banner-left {
  display: flex;
  align-items: center;
  gap: 10px;
}

.banner-left img {
  width: 80px;
  height: 25px;
}

.banner-left span {
  color: #333;
  font-size: 14px;
}

/* 网站头部 */
.header {
  padding: 15px 0;
  background: #fff;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  gap: 15px;
}

.logo img {
  width: 100%; 
  max-width: 800px; 
  height: auto; 
}

.site-info h1 {
  font-size: 24px;
  color: #1565c0;
  margin-bottom: 5px;
  font-weight: bold;
}

.site-info p {
  font-size: 12px;
  color: #666;
}

.search-box {
  display: flex;
  border: 2px solid #1565c0;
  border-radius: 4px;
  overflow: hidden;
}

.search-input {
  width: 250px;
  padding: 8px 12px;
  border: none;
  outline: none;
  font-size: 14px;
}

.search-btn {
  background: #004987;
  color: white;
  border: none;
  padding: 8px 20px;
  cursor: pointer;
  font-size: 14px;
}

/* 导航菜单 */
.main-nav {
  background: linear-gradient(to right, #004987, #004987);
  border-bottom: 2px solid #004987;
}

.nav-menu {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;
}

.nav-menu li {
  position: relative;
}

.nav-menu a {
  display: block;
  color: white;
  text-decoration: none;
  padding: 12px 15px;
  font-size: 14px;
  transition: background 0.3s;
}

.nav-menu a.active,
.nav-menu a:hover {
  background: #1ABC9C;
}

/* 轮播图区域 */
.banner-section {
  padding: 0;
  /* 去除内边距，让轮播图占满 */
  background: #f5f5f5;
  overflow: hidden;
  position: relative;
  width: 100%;
  /* 确保轮播图区域宽度为100% */
}

.banner-carousel {
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
}

.main-carousel-wrapper {
  width: 100%;
  height: 100%;
  position: relative;
}



.carousel-items {
  display: flex;
  width: 100%;
  height: 100%;
}

.carousel-item {
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  /* 图片水平居中 */
  align-items: center;
  /* 图片垂直居中 */
  background: #f8f8f8;
  /* 添加背景色 */
}


.carousel-item img {
  max-width: 100%;
  /* 限制最大宽度为容器宽度 */
  max-height: 100%;
  /* 限制最大高度为容器高度 */
  width: auto;
  /* 宽度自适应 */
  height: auto;
  /* 高度自适应 */
  object-fit: contain;
  /* 保持图片比例，居中显示 */
  display: block;
}

/* 视频轮播图样式 */
.video-carousel-container {
  width: 100%;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background: #fff;
}

.video-carousel-wrapper {
  width: 100%;
  height: 180px;
  position: relative;
  overflow: hidden;
}

.video-carousel-items {
  display: flex;
  transition: transform 0.5s ease;
  height: 100%;
}

.video-carousel-item {
  flex: 0 0 100%;
  height: 100%;
  position: relative;
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
}

.video-carousel-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
  display: block;
}

.video-info {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
  color: white;
  padding: 10px;
  border-radius: 0 0 8px 8px;
  z-index: 2;
}

.video-info p {
  margin: 0;
  font-size: 14px;
  line-height: 1.4;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
}

.video-carousel-indicators {
  display: flex;
  justify-content: center;
  padding: 10px;
  gap: 8px;
}

.video-indicator {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #ccc;
  cursor: pointer;
  transition: all 0.3s ease;
}

.video-indicator.active {
  background: #1565c0;
  transform: scale(1.2);
}

.video-indicator:hover {
  background: #1565c0;
  opacity: 0.8;
}

/* 轮播图指示器 */
.carousel-indicators {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 10;
}

.indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: all 0.3s ease;
}

.indicator.active,
.indicator:hover {
  background: white;
  width: 24px;
  border-radius: 6px;
}



/* 新闻轮播图指示器 */
.news-carousel-indicators {
  position: absolute;
  bottom: 50px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: flex-start;
  gap: 8px;
  z-index: 10;
  padding-left: 470px;
  /* 添加左边距，让指示器不贴边 */

}

.news-indicator {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.26);
  cursor: pointer;
  transition: all 0.3s ease;
}

.news-indicator.active,
.news-indicator:hover {
  background: #1565c0;
  width: 16px;
  border-radius: 4px;
}










/* 快捷服务区域 */
.quick-services {
  padding: 30px 0;
  background: #fff;
}

.service-items {
  display: flex;
  justify-content: center;
  gap: 40px;
}

.service-item {
  text-align: center;
  text-decoration: none;
  color: #333;
  transition: transform 0.3s;
}

.service-item:hover {
  transform: translateY(-5px);
}

.service-item img {
  width: 80px;
  height: 80px;
  margin-bottom: 10px;
}

.service-item p {
  font-size: 14px;
  margin: 0;
}

/* 主要内容区域 */
.content-section {
  padding: 30px 0;
  background: #f9f9f9;
}

.content-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 30px;
}

.content-column {
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.section-header {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  border-bottom: 2px solid #004987;
  padding-bottom: 10px;
}

.section-icon {
  font-size: 20px;
  margin-right: 10px;
}

.section-header h3 {
  margin: 0;
  color: #004987;
  font-size: 18px;
  flex: 1;
}

.more-link {
  color: #666;
  text-decoration: none;
  font-size: 12px;
}


/* 会员风采滚动样式 */
.member-scroll-container {
  height: 150px;
  overflow: hidden;
  position: relative;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: #f9f9f9;
  margin-top: 10px;
}

.member-scroll-wrapper {
  position: relative;
  width: 100%;
  height: auto;
}

.member-item {
  padding: 10px 15px;
  border-bottom: 1px solid #e8e8e8;
  text-decoration: none;
  color: #333;
  font-size: 14px;
  line-height: 1.4;
  display: block;
  height: 0;
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  background: white;
  margin-bottom: 0;
}

/* 显示状态 */
.member-item.active {
  height: 30px;
  line-height: 30px;
  opacity: 1;
  transform: translateY(0);
}

/* 当前正在显示的项目有特殊效果 */
.member-item.fade-in {
  background-color: #f0f7ff;
  border-left: 3px solid #1565c0;
}

.member-item:hover {
  color: #1565c0;
  background-color: #e3f2fd;
  transform: translateX(5px) translateY(0);
}


/* 新闻区域 */
.news-feature {
  display: flex;
  gap: 30px;
  align-items: stretch;
}

.news-carousel-container {
  flex: 0 0 200px;
  overflow: hidden;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.news-carousel-wrapper {
  width: 100%;
  height: 150px;
  overflow: hidden;
}

.news-carousel-items {
  display: flex;
  width: 100%;
  height: 100%;
  transition: transform 0.5s ease-in-out;
}

.news-carousel-item {
  flex: 0 0 100%;
  height: 100%;
  text-decoration: none;
}

.news-carousel-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0;
}

.news-items {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 150px;
}

.news-item {
  display: block;
  padding: 0;
  border-bottom: 1px solid #eee;
  text-decoration: none;
  color: #333;
  font-size: 14px;
  line-height: 1.4;
  flex: 1;
  display: flex;
  align-items: center;
  min-height: 30px;
}

.news-item:hover {
  color: #1565c0;
  background-color: #f5f5f5;
}

.news-item:last-child {
  border-bottom: none;
}

/* 视频区域 */
.video-container {
  position: relative;
}

.video-container img {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

.video-info {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 10px;
  font-size: 12px;
}

/* 会员风采、协会动态、通知公告等 */
.member-items,
.activity-items,
.announcement-items,
.guide-items,
.service-info-items,
.policy-items {
  display: flex;
  flex-direction: column;
}

.member-item,
.activity-item,
.announcement-item,
.guide-item,
.service-info-item,
.policy-item {
  padding: 8px 0;
  border-bottom: 1px solid #eee;
  text-decoration: none;
  color: #333;
  font-size: 14px;
  line-height: 1.4;
}

.member-item:hover,
.activity-item:hover,
.announcement-item:hover,
.guide-item:hover,
.service-info-item:hover,
.policy-item:hover {
  color: #1565c0;
}

/* 广告区域轮播图样式 */
.ad-section {
  padding: 50px 0;
  background: #fff;
  overflow: hidden;
}

.carousel-container {
  width: 100%;
  overflow: hidden;
  position: relative;
  height: 100px;
}

.ad-carousel-wrapper {
  display: flex;
  height: 100%;
}

.ad-carousel-items {
  display: flex;
  height: 100%;
}

.ad-carousel-item {
 flex-shrink: 0; 
 width: 100%; 
 max-width: 200px; 
 height: 100px; 
 margin-right: 20px;
}

.ad-carousel-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}



/* 新增图片链接区域样式 */
.image-links-section {
  padding: 30px 0;
  background: #fff;
}

.image-links-container {
  display: flex;
  justify-content: space-between;
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

.image-link-item {
  flex: 0 0 calc(33.333% - 20px);
  text-decoration: none;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.image-link-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
}

.image-link-item img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
}

.image-link-title {
  padding: 15px;
  background: #fff;
  text-align: center;
  color: #333;
  font-size: 16px;
  font-weight: bold;
  border-top: 1px solid #eee;
}




/* 固定悬浮二维码模块样式 */
.floating-qrcode {
  position: fixed;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  z-index: 1000;
  transition: all 0.3s ease;
}

.floating-qrcode.hidden {
  transform: translateY(-50%) translateX(120%);
  opacity: 0;
  pointer-events: none;
}

.qrcode-container {
  width: 120px;
  background: white;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  border: 1px solid #e8e8e8;
  overflow: hidden;
  transition: all 0.3s ease;
}

.qrcode-container:hover {
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.2);
  transform: translateY(-2px);
}

.qrcode-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  background: linear-gradient(135deg, #004987, #1565c0);
  color: white;
}

.qrcode-header h4 {
  margin: 0;
  font-size: 9px;
  font-weight: bold;
}

.qrcode-close {
  cursor: pointer;
  font-size: 18px;
  line-height: 1;
  transition: all 0.2s ease;
}

.qrcode-close:hover {
  transform: scale(1.2);
  color: #ff6b6b;
}

.qrcode-content {
  padding: 12px;
  text-align: center;
}

.qrcode-img {
  width: 80px;
  height: 80px;
  object-fit: contain;
  margin-bottom: 4px;
  border: 1px solid #f0f0f0;
  border-radius: 2px;
}

.qrcode-desc {
  margin: 0;
  font-size: 7px;
  color: #666;
  line-height: 1.4;
}





/* 友情链接 */
.friend-links {
  padding: 30px 0;
  background: #fff;
  border-top: 1px solid #eee;
}

.friend-links h3 {
  text-align: center;
  margin-bottom: 20px;
  color: #004987;
}

.links-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
}

.link-item {
  padding: 5px 15px;
  background: #f5f5f5;
  border-radius: 15px;
  text-decoration: none;
  color: #666;
  font-size: 12px;
  transition: all 0.3s;
}

.link-item:hover {
  background: #1565c0;
  color: white;
}

/* 底部信息 */
.footer {
  background: #004987;
  color: white;
  padding: 30px 0 10px;
}

.footer-content {
  text-align: center;
  margin-bottom: 20px;
}

.footer-content p {
  margin: 5px 0;
  font-size: 14px;
}

.footer-bottom {
  text-align: center;
  border-top: 1px solid #555;
  padding-top: 10px;
  font-size: 12px;
  color: #999;
}
</style>
