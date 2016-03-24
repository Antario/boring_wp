<?php
	/**
	 * The Header for our theme
	 *
	 * Displays all of the head element and everything up until the "site-content" div.
	 *
	 * @package WordPress
	 * @subpackage Tiras
	 * @since Tiras 1.0
	 */
?>
<!DOCTYPE html>
<!--[if lt IE 7]><html class="no-js lt-ie9 lt-ie8 lt-ie7"><![endif]-->
<!--[if IE 7]><html class="no-js lt-ie9 lt-ie8"><![endif]-->
<!--[if IE 8]><html class="no-js lt-ie9"><![endif]-->
<!--[if gt IE 8]><html class="no-js"><![endif]-->
<!--[if !(IE 6) | !(IE 7) | !(IE 8) ]><!-->
<html lang="uk">
  <!--<![endif]-->
  
  <head>
    <!-- Meta -->
    <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
    <meta http-equiv="content-language" content="uk">
    <title>Tiras Tec</title>
    <!-- Info -->
    <link rel="alternate" type="application/rss+xml" title="Tiras Tec RSS Feed" href="feed.html">
    <link rel="index" href="index.html" title="Tiras Tec">
    <!-- Icons -->
    <link rel="icon shortcut" href="<?php echo get_template_directory_uri(); ?>/img/icon/favicon.png" sizes="64x64">
    <link rel="icon" type="image/png" href="<?php echo get_template_directory_uri(); ?>/img/icon/android-chrome-192x192.png" sizes="192x192">
    <link rel="apple-touch-icon-precomposed" href="<?php echo get_template_directory_uri(); ?>/img/icon/apple-touch-icon.png">
    <link rel="apple-touch-icon-icon-precomposed" sizes="57x57" href="<?php echo get_template_directory_uri(); ?>/img/icon/apple-touch-icon-57x57.png">
    <link rel="apple-touch-icon-icon-precomposed" sizes="60x60" href="<?php echo get_template_directory_uri(); ?>/img/icon/apple-touch-icon-60x60.png">
    <link rel="apple-touch-icon-icon-precomposed" sizes="72x72" href="<?php echo get_template_directory_uri(); ?>/img/icon/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon-icon-precomposed" sizes="76x76" href="<?php echo get_template_directory_uri(); ?>/img/icon/apple-touch-icon-76x76.png">
    <link rel="apple-touch-icon-icon-precomposed" sizes="114x114" href="<?php echo get_template_directory_uri(); ?>/img/icon/apple-touch-icon-114x114.png">
    <link rel="apple-touch-icon-icon-precomposed" sizes="120x120" href="<?php echo get_template_directory_uri(); ?>/img/icon/apple-touch-icon-120x120.png">
    <link rel="apple-touch-icon-icon-precomposed" sizes="144x144" href="<?php echo get_template_directory_uri(); ?>/img/icon/apple-touch-icon-144x144.png">
    <link rel="apple-touch-icon-icon-precomposed" sizes="152x152" href="<?php echo get_template_directory_uri(); ?>/img/icon/apple-touch-icon-152x152.png">
    <link rel="apple-touch-icon-icon-precomposed" sizes="180x180" href="<?php echo get_template_directory_uri(); ?>/img/icon/apple-touch-icon-180x180.png">
    <link rel="manifest" href="<?php echo get_template_directory_uri(); ?>/img/icon/manifest.json">
    <link rel="mask-icon" href="<?php echo get_template_directory_uri(); ?>/img/icon/safari-pinned-tab.svg" color="#1BB91F">
    <!-- Apps Theme -->
    <meta name="apple-mobile-web-app-title" content="Tiras Tec">
    <meta name="application-name" content="Tiras Tec">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="msapplication-TileImage" content="<?php echo get_template_directory_uri(); ?>/img/icon/mstile-144x144.png">
    <meta name="theme-color" content="#1BB91F">
    <!-- CSS & JavaScript -->
    <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Ubuntu:400,500,700%7CSource+Code+Pro:400,500,700">
		<link rel="stylesheet" href="<?php echo get_stylesheet_uri(); ?>">
    <script type="text/javascript">(window.jQuery || document.write('<script src="<?php echo get_template_directory_uri(); ?>/js/lib/jquery-2.1.4.min.js"><\/script>'));</script>
    <!--[endif]-->
		<?php wp_head(); ?>
  </head>
	<body <?php body_class() ?>>
		<div id="js-gnav-wrap" class="gnav-wrap">
			<div class="gnav-bg">
				<div class="gnav-inner">
					<div class="gnav-content">
						<h1 class="gnav-logo">
							<img src="<?php echo get_template_directory_uri(); ?>/img/logo/black.svg" alt="FirstTouch, Inc.">
							<p>To make new things<br/>like a first penguin.</p>
						</h1>
						<nav id="js-gnav" class="gnav" role="navigation">
							<ul>
								<li><a class="js-text-split" href="http://localhost:8080/wordpress/" data-pjax="true">Головна</a></li>
								<li><a class="js-text-split" href="http://localhost:8080/wordpress/about/" data-pjax="true">Про нас
									</a></li>
								<li><a class="js-text-split" href="http://localhost:8080/wordpress/members/" data-pjax="true">Працівники</a></li>
								<li><a class="js-text-split" href="http://localhost:8080/wordpress/portfolio/" data-pjax="true">Портфоліо</a></li>
								<li><a class="js-text-split" href="http://localhost:8080/wordpress/careers/" data-pjax="true">Вакансії</a></li>
								<li><a class="js-text-split" href="http://localhost:8080/wordpress/contact/" data-pjax="true">Контакти</a></li>
								<li>
									<a href="https://" target="_blank"><span class="icon-facebook"></span></a>
									<a href="https://" target="_blank" class="none"><span class="icon-twitter"></span></a>
								</li>
							</ul>
						</nav>
						<footer class="copyright"><small>Copyright © 2016 Tiras Tec</small></footer>
					</div>
				</div>
				<div class="gnav-bg-split split-1"></div>
				<div class="gnav-bg-split split-2"></div>
				<div class="gnav-bg-split split-3"></div>
				<div class="gnav-bg-split split-4"></div>
			</div>
			<div id="js-gnav-mask" class="gnav-mask"></div>
		</div>
		<!--/ .gnav -->