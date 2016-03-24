<?php
  /*
  *Template Name: Home Template
  */
?>
<?php get_header(); ?>
<h1 id="js-logo" class="logo" role="banner">
  <a href="http://localhost:8080/wordpress/" data-pjax="true"><img src="<?php echo get_template_directory_uri(); ?>/img/logo/white.svg" alt="Tiras Tec."></a>
</h1>
<main id="js-container" class="container" role="main">
  <div id="js-wrapper" class="wrapper page-home">
    <section id="js-intro" class="intro">
      <div class="table">
        <div class="table-cell">
          <div class="intro-first">
            <div id="js-start" class="start">
              <svg height="64" width="64" viewBox="0 0 64 64">
                <path class="start-circle path" d="M32,1.5c16.8,0,30.5,13.7,30.5,30.5S48.8,62.5,32,62.5S1.5,48.8,1.5,32S15.2,1.5,32,1.5z" />
                <path class="start-heart" d="M34.9,26c1,0,1.9,0.3,2.6,1c0.7,0.7,1,1.5,1,2.5c0,0.6-0.1,1.2-0.3,1.7c-0.2,0.6-0.6,1.2-1.2,1.9c-0.6,0.7-1.2,1.3-1.6,1.7 c-0.5,0.5-1.3,1.2-2.4,2.2L32,38l-1-0.8c-1.4-1.3-2.4-2.2-3.1-2.9c-0.6-0.6-1.2-1.4-1.7-2.2c-0.5-0.9-0.8-1.7-0.8-2.5 c0-1,0.3-1.9,1-2.5c0.7-0.7,1.5-1,2.6-1c1.2,0,2.2,0.5,2.9,1.4C32.8,26.5,33.8,26,34.9,26z M32.1,36.2c1-0.9,1.7-1.5,2.2-2 c0.5-0.5,1-1,1.5-1.6c0.6-0.6,0.9-1.2,1.2-1.6c0.2-0.5,0.3-0.9,0.3-1.4c0-0.7-0.2-1.2-0.7-1.6c-0.4-0.4-1-0.6-1.6-0.6 c-0.5,0-1,0.1-1.4,0.4c-0.4,0.3-0.7,0.7-0.9,1.1h-1.2c-0.2-0.5-0.5-0.8-0.9-1.1c-0.4-0.3-0.9-0.4-1.4-0.4c-0.7,0-1.2,0.2-1.6,0.6 c-0.4,0.4-0.7,1-0.7,1.6c0,0.5,0.1,0.9,0.3,1.4c0.2,0.5,0.6,1,1.2,1.6c0.6,0.6,1.1,1.1,1.5,1.6c0.5,0.5,1.2,1.1,2.2,2H32.1 L32.1,36.2z" />
              </svg>
              <div class="start-ring start-ring-1"></div>
              <div class="start-ring start-ring-2"></div>
            </div>
            <span class="start-line"></span>
            <p class="start-text js-text-split">Touch or Click to Start</p>
          </div>
          <div class="intro-second">
            <div class="hgroup">
              <h1 class="js-text-split">Tiras Tec.</h1>
              <h2 class="js-text-split">To make new things like a first penguin</h2>
            </div>
          </div>
          <div id="js-canvas" class="canvas"></div>
        </div>
      </div>
      <nav id="js-tnav" class="tnav" role="navigation">
        <ul>
          <li class="tnav-line line-edge">
            <div><span></span></div>
          </li>
          <li>
            <a href="http://localhost:8080/wordpress/about/" data-header="about">
              <div class="tnav-circle">
                <div class="circle-1"></div>
                <div class="circle-2"><span class="icon-diamond"></span></div>
              </div>
              <p class="tnav-text js-text-split">Про<i> нас</i></p>
            </a>
          </li>
          <li class="tnav-line">
            <div><span></span></div>
          </li>
          <li>
            <a href="http://localhost:8080/wordpress/members/" data-header="member">
              <div class="tnav-circle">
                <div class="circle-1"></div>
                <div class="circle-2"><span class="icon-user"></span></div>
              </div>
              <p class="tnav-text js-text-split">Працівники</p>
            </a>
          </li>
          <li class="tnav-line">
            <div><span></span></div>
          </li>
          <li>
            <a href="http://localhost:8080/wordpress/portfolio/" data-header="works">
              <div class="tnav-circle">
                <div class="circle-1"></div>
                <div class="circle-2"><span class="icon-layer"></span></div>
              </div>
              <p class="tnav-text js-text-split">Портфоліо</p>
            </a>
          </li>
          <li class="tnav-line">
            <div><span></span></div>
          </li>
          <li>
            <a href="http://localhost:8080/wordpress/careers/" data-header="careers">
              <div class="tnav-circle">
                <div class="circle-1"></div>
                <div class="circle-2"><span class="icon-career"></span></div>
              </div>
              <p class="tnav-text js-text-split">Вакансії</p>
            </a>
          </li>
          <li class="tnav-line">
            <div><span></span></div>
          </li>
          <li>
            <a href="http://localhost:8080/wordpress/contact/" data-header="contact">
              <div class="tnav-circle">
                <div class="circle-1"></div>
                <div class="circle-2"><span class="icon-mail"></span></div>
              </div>
              <p class="tnav-text js-text-split">Контакти</p>
            </a>
          </li>
          <li class="tnav-line line-edge">
            <div><span></span></div>
          </li>
        </ul>
      </nav>

      <div id="intro-loading" class="intro-loading">
        <header class="subpage-header subpage-header-intro">
          <div class="table">
            <div class="table-cell">
              <div class="hgroup"></div>
            </div>
          </div>
        </header>
        <div class="bg-border-wrap">
          <div class="border-inner">
            <div class="bg-border border-1"></div>
            <div class="bg-border border-2"></div>
            <div class="bg-border border-3"></div>
            <div class="bg-border border-4"></div>
            <div class="bg-border border-5"></div>
          </div>
        </div>
        <!--/ .bg-border-wrap -->
        <div class="image-set">
          <img src="<?php echo get_template_directory_uri(); ?>/img/bg/header-about.jpg" data-header="about">
          <img src="<?php echo get_template_directory_uri(); ?>/img/bg/header-member.jpg" data-header="member">
          <img src="<?php echo get_template_directory_uri(); ?>/img/bg/header-works.jpg" data-header="works">
          <img src="<?php echo get_template_directory_uri(); ?>/img/bg/header-careers.jpg" data-header="careers">
          <img src="<?php echo get_template_directory_uri(); ?>/img/bg/header-contact.jpg" data-header="contact">
        </div>
      </div>
      <!--/ .intro-loading -->

    </section>
    <!--/ .intro -->
  </div>
  <!--/ .wrapper -->
</main>
<!--/ .container -->
<div id="js-progress-bar" class="progress-bar">
  <span class="bar"></span>
</div>
<!-- / .progress-bar -->
<div id="js-loading" class="loading">
  <div class="loading-logo">
    <div class="preloader-wrap">
      <div class="preloader is-loading">
        <span class="slice"></span>
        <span class="slice"></span>
        <span class="slice"></span>
        <span class="slice"></span>
        <span class="slice"></span>
        <span class="slice"></span>
      </div>
    </div>
  </div>
</div>
<!--/ .loading -->
<nav id="js-menu" class="menu">
  <div class="menu-inner">
    <div class="menu-label menu-label-page js-text-split"></div>
    <div class="menu-label menu-label-close js-text-split">Закрити</div>
    <div id="js-menu-btn" class="menu-btn">
      <span class="line line-1"></span>
      <span class="line line-2"></span>
      <span class="line line-3"></span>
      <span class="line line-4"><i></i></span>
      <span class="line line-5"><i></i></span>
      <div id="js-circle-loader" class="circle-loader">
        <svg class="circle" preserveAspectRatio="xMinYMin meet" viewBox="0 0 64 64">
          <circle class="path" stroke-miterlimit="10" stroke-width="3" fill="none" cx="32" cy="32" r="29"></circle>
        </svg>
      </div>
    </div>
  </div>
</nav>
<!--/ .menu -->

<div id="js-video-wrapper" class="video-wrapper">
  <video id="js-video" class="video" loop>
    <source src="<?php echo get_template_directory_uri(); ?>/video/Webbdagarna 2016-HD.webm">
    <source src="<?php echo get_template_directory_uri(); ?>/video/Webbdagarna 2016-HD.mp4">
  </video>
  <div class="sp-video-poster-wrap">
    <div class="poster-1"></div>
    <div class="poster-2"></div>
  </div>
  <div class="video-mask"></div>
</div>
<!--/ .video -->
<div id="js-mask" class="mask"></div>
<div id="js-alert" class="alert">
  <div class="table">
    <div class="table-cell">
      <div class="not-support">
        <div class="not-support-logo"><img src="<?php echo get_template_directory_uri(); ?>/img/logo/black.svg" alt="Tiras Tec."></div>
      </div>
    </div>
  </div>
</div>
<?php get_footer(); ?>
