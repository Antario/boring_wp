<?php
	/*
	*Template Name: Portfolio Template
	*/
?>
<?php get_header(); ?>
<h1 id="js-logo" class="logo" role="banner">
	<a href="index.html" data-pjax="true"><img src="img/logo/white.svg" alt="Tiras Tec"></a>
</h1>
<main id="js-container" class="container" role="main">
	<div id="js-wrapper" class="wrapper page-works">
		<section id="js-works" class="works">
			<header class="subpage-header works-header">
				<div class="table content-inner">
					<div class="table-cell">
						<div class="hgroup">
							<span class="subpage-icon icon-layer"></span>
							<h1 class="js-text-split">Works</h1>
							<h2 class="js-text-split">портфоліо</h2>
						</div>
					</div>
					<a data-href="js-point" class="scroll-down"></a>
				</div>
				<div class="subpage-header-mask"></div>
				<div class="header-clip">
					<svg class="header-clip-path" x="0px" y="0px" viewBox="0 0 120 20">
						<path class="path-1" fill-rule="evenodd" clip-rule="evenodd" d="M93,0c-1.7,0-3.6,0-6.2,0H68.4c-6.3,0-10.7,0-16.9,0H33.3C30.5,0,29,0,27,0H0v20 h120V0H93z"/>
						<path class="path-2" fill-rule="evenodd" clip-rule="evenodd" d="M65.5,0.9l-0.7-0.7c-0.2-0.2-0.5-0.2-0.7,0L60,4.2l-4.1-4.1 c-0.2-0.2-0.5-0.2-0.7,0l-0.7,0.7c-0.2,0.2-0.2,0.5,0,0.7L60,7.1l0,0l0,0l5.5-5.5C65.7,1.4,65.7,1,65.5,0.9z"/>
					</svg>
					<div class="fill fill-left"></div>
					<div class="fill fill-right"></div>
					<div class="bg-border-wrap">
						<div class="border-inner">
							<div class="bg-border border-1"></div>
							<div class="bg-border border-2"></div>
							<div class="bg-border border-3"></div>
							<div class="bg-border border-4"></div>
							<div class="bg-border border-5"></div>
						</div>
					</div> <!--/ .bg-border-wrap -->
				</div>
			</header>
			<section id="js-point" class="content-inner">
				<nav id="js-wnav" class="wnav" role="navigation">
					<ul class="works-filter">
						<li class="works-filter-list is-active"  data-filter="*"><h4><p><span class="icon-layer"></span>All</p></h4></li>
						<li class="works-filter-list" data-filter="website"><h4><p><span class="icon-desktop"></span>Website</p></h4></li>
						<li class="works-filter-list" data-filter="apps"><h4><p><span class="icon-smartphone"></span>Apps</p></h4></li>
						<li class="works-filter-list" data-filter="other"><h4><p><span class="icon-segment"></span>Other</p></h4></li>
					</ul>
					<div id="js-grid-changer" class="grid-changer grid-mode-1" data-mode="2">
						<div class="grid-inner">
							<span class="grid grid-1"></span>
							<span class="grid grid-2"></span>
							<span class="grid grid-3"></span>
							<span class="grid grid-4"></span>
							<span class="grid grid-5"></span>
							<span class="grid grid-6"></span>
							<span class="grid grid-7"></span>
							<span class="grid grid-8"></span>
							<span class="grid grid-9"></span>
						</div>
					</div>
				</nav>
				<ul id="js-work-list" class="works-list grid-mode-1">
					<li class="works-item apps concept">
						<div class="works-list-inner" style="background-image: url(http://1st-touch.jp/firsttouch/wp/wp-content/uploads/rentme-thumb.png);">
							<a href="work/rentme/index.html" data-pjax="true">
								<div class="work-title-wrap"><h2 class="work-title">RentMe</h2></div>
							</a>
							<h2 class="green-label tri-ltr" data-filter="concept"><p>Concept</p></h2>
						</div>
					</li>
					<li class="works-item apps concept">
						<div class="works-list-inner" style="background-image: url(http://1st-touch.jp/firsttouch/wp/wp-content/uploads/rastro-thumb.png);">
							<a href="work/rastro/index.html" data-pjax="true">
								<div class="work-title-wrap"><h2 class="work-title">Rastro</h2></div>
							</a>
							<h2 class="green-label tri-ltr" data-filter="concept"><p>Concept</p></h2>
						</div>
					</li>
					<li class="works-item apps concept">
						<div class="works-list-inner" style="background-image: url(http://1st-touch.jp/firsttouch/wp/wp-content/uploads/mommys-town-thumb.png);">
							<a href="work/mommys-town/index.html" data-pjax="true">
								<div class="work-title-wrap"><h2 class="work-title">Mommy&#8217;s Town</h2></div>
							</a>
							<h2 class="green-label tri-ltr" data-filter="concept"><p>Concept</p></h2>
						</div>
					</li>
					<li class="works-item apps concept">
						<div class="works-list-inner" style="background-image: url(http://1st-touch.jp/firsttouch/wp/wp-content/uploads/eventcrowd-app-thumb.png);">
							<a href="work/eventcrowd-app/index.html" data-pjax="true">
								<div class="work-title-wrap"><h2 class="work-title">Eventcrowd App</h2></div>
							</a>
							<h2 class="green-label tri-ltr" data-filter="concept"><p>Concept</p></h2>
						</div>
					</li>
					<li class="works-item apps concept">
						<div class="works-list-inner" style="background-image: url(http://1st-touch.jp/firsttouch/wp/wp-content/uploads/buzzbox-thumb.png);">
							<a href="work/buzz-box/index.html" data-pjax="true">
								<div class="work-title-wrap"><h2 class="work-title">Buzz box</h2></div>
							</a>
							<h2 class="green-label tri-ltr" data-filter="concept"><p>Concept</p></h2>
						</div>
					</li>
					<li class="works-item website concept">
						<div class="works-list-inner" style="background-image: url(http://1st-touch.jp/firsttouch/wp/wp-content/uploads/moffice-thumb.png);">
							<a href="work/moffice/index.html" data-pjax="true">
								<div class="work-title-wrap"><h2 class="work-title">みんなのオフィス</h2></div>
							</a>
							<h2 class="green-label tri-ltr" data-filter="concept"><p>Concept</p></h2>
						</div>
					</li>
					<li class="works-item website concept">
						<div class="works-list-inner" style="background-image: url(http://1st-touch.jp/firsttouch/wp/wp-content/uploads/eventcrowd-web-thumb.png);">
							<a href="work/eventcrowd-web/index.html" data-pjax="true">
								<div class="work-title-wrap"><h2 class="work-title">Eventcrowd Web</h2></div>
							</a>
							<h2 class="green-label tri-ltr" data-filter="concept"><p>Concept</p></h2>
						</div>
					</li>
					<li class="works-item apps concept">
						<div class="works-list-inner" style="background-image: url(http://1st-touch.jp/firsttouch/wp/wp-content/uploads/decor-quark-thumb.png);">
							<a href="work/decor-quark/index.html" data-pjax="true">
								<div class="work-title-wrap"><h2 class="work-title">DÉCOR QUARK</h2></div>
							</a>
							<h2 class="green-label tri-ltr" data-filter="concept"><p>Concept</p></h2>
						</div>
					</li>
					<li class="works-item website concept">
						<div class="works-list-inner" style="background-image: url(http://1st-touch.jp/firsttouch/wp/wp-content/uploads/wakan-organics-thumb.png);">
							<a href="work/sunaturals-wakan/index.html" data-pjax="true">
								<div class="work-title-wrap"><h2 class="work-title">Sunaturals Wakan</h2></div>
							</a>
							<h2 class="green-label tri-ltr" data-filter="concept"><p>Concept</p></h2>
						</div>
					</li>
					<li class="works-item website concept">
						<div class="works-list-inner" style="background-image: url(http://1st-touch.jp/firsttouch/wp/wp-content/uploads/e-sunaturals-ec-thumb.png);">
							<a href="work/sunaturals-ec/index.html" data-pjax="true">
								<div class="work-title-wrap"><h2 class="work-title">Sunaturals EC</h2></div>
							</a>
							<h2 class="green-label tri-ltr" data-filter="concept"><p>Concept</p></h2>
						</div>
					</li>
				</ul>
				<div class="works-next">
				</div>
			</section> <!--/ .content-inner -->
			<footer class="footer" role="contentinfo">
				<section class="content-inner">
					<div class="footer-left">
						<a href="index.html" class="footer-logo" data-pjax="true"><img src="img/logo/white.svg"></a>
						<div class="footer-info">
							<p><a href="mailto:hello@1st-touch.jp">hello@1st-touch.jp</a></p>
							<p><a href="tel:03-6419-7401">03-6419-7401</a></p>
						</div>
					</div>
					<div class="footer-right">
						<nav class="fnav" role="navigation">
							<ul>
								<li><a class="js-text-split" href="about.html" data-pjax="true">About us</a></li>
								<li><a class="js-text-split" href="member.html" data-pjax="true">Member</a></li>
								<li><a class="js-text-split" href="works.html" data-pjax="true">Works</a></li>
							</ul>
							<ul>
								<li><a class="js-text-split" href="careers.html" data-pjax="true">Careers</a></li>
								<li><a class="js-text-split" href="contact.html" data-pjax="true">Contact</a></li>
							</ul>
						</nav>
					</div>
				</section>
			</footer> <!--/ .footer -->
			<div class="bg-border-wrap">
				<div class="border-inner">
					<div class="bg-border border-1"></div>
					<div class="bg-border border-2"></div>
					<div class="bg-border border-3"></div>
					<div class="bg-border border-4"></div>
					<div class="bg-border border-5"></div>
				</div>
			</div> <!--/ .bg-border-wrap -->			</section> <!--/ .works -->
	</div> <!--/ .wrapper -->
</main> <!--/ .container -->
<div id="js-progress-bar" class="progress-bar">
	<span class="bar"></span>
</div> <!-- / .progress-bar -->
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
</div> <!--/ .loading -->
<nav id="js-menu" class="menu">
	<div class="menu-inner">
		<div class="menu-label menu-label-page js-text-split"></div>
		<div class="menu-label menu-label-close js-text-split">Close</div>
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
</nav> <!--/ .menu -->
<div id="js-gnav-wrap" class="gnav-wrap">
	<div class="gnav-bg">
		<div class="gnav-inner">
			<div class="gnav-content">
				<h1 class="gnav-logo">
					<img src="img/logo/black.svg" alt="Tiras Tec">
					<p>To make new things<br/>like a first penguin.</p>
				</h1>
				<nav id="js-gnav" class="gnav" role="navigation">
					<ul>
						<li><a class="js-text-split" href="index.html" data-pjax="true">Home</a></li>
						<li><a class="js-text-split" href="about.html" data-pjax="true">About Us</a></li>
						<li><a class="js-text-split" href="member.html" data-pjax="true">Member</a></li>
						<li><a class="js-text-split" href="works.html" data-pjax="true">Works</a></li>
						<li><a class="js-text-split" href="careers.html" data-pjax="true">Careers</a></li>
						<li><a class="js-text-split" href="contact.html" data-pjax="true">Contact</a></li>
						<li><a href="https://www.facebook.com/pages/%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE%E3%83%95%E3%82%A1%E3%83%BC%E3%82%B9%E3%83%88%E3%82%BF%E3%83%83%E3%83%81/127045084050374" target="_blank"><span class="icon-facebook"></span></a><a href="https://twitter.com/FirstTouch_Inc" target="_blank" class="none"><span class="icon-twitter"></span></a></li>
					</ul>
				</nav>
				<footer class="copyright"><small>Copyright © 2016 Tiras Tec.</small></footer>
			</div>
		</div>
		<div class="gnav-bg-split split-1"></div>
		<div class="gnav-bg-split split-2"></div>
		<div class="gnav-bg-split split-3"></div>
		<div class="gnav-bg-split split-4"></div>
	</div>
	<div id="js-gnav-mask" class="gnav-mask"></div>
</div> <!--/ .gnav -->
<div id="js-video-wrapper" class="video-wrapper">
	<video id="js-video" class="video" loop>
		<source src="http://1st-touch.jp/firsttouch/wp/wp-content/themes/firsttouch/assets/video/movie.webm">
		<source src="http://1st-touch.jp/firsttouch/wp/wp-content/themes/firsttouch/assets/video/movie.mp4">
	</video>
	<div class="sp-video-poster-wrap">
		<div class="poster-1"></div>
		<div class="poster-2"></div>
	</div>
	<div class="video-mask"></div>
</div><!--/ .video -->
<div id="js-mask" class="mask"></div>
<div id="js-alert" class="alert">
	<div class="table">
		<div class="table-cell">
			<div class="not-support">
				<div class="not-support-logo"><img src="img/logo/black.svg" alt="Tiras Tec."></div>
				<p>Ваш браузер не підтримує.<br/>Будь ласка відобразити знову оновити браузер до останньої версії.</p>
			</div>
		</div>
	</div>
</div>
<?php get_footer(); ?>
