<?php
	/*
	*Template Name: Contact Template
	*/
?>
<?php get_header(); ?>
<h1 id="js-logo" class="logo" role="banner">
	<a href="index.html" data-pjax="true"><img src="img/logo/white.svg" alt="Tiras Tec."></a>
</h1>
<main id="js-container" class="container" role="main">
	<div id="js-wrapper" class="wrapper page-contact">
		<section id="js-contact" class="contact">
			<header class="subpage-header contact-header">
				<div class="table content-inner">
					<div class="table-cell">
						<div class="hgroup">
							<span class="subpage-icon icon-mail"></span>
							<h1 class="js-text-split">Contact</h1>
							<h2 class="js-text-split">запит</h2>
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
				<div role="form" class="wpcf7" id="wpcf7-f4-o1" lang="ja" dir="ltr">
					<div class="screen-reader-response"></div>
					<form action="index.html#wpcf7-f4-o1" method="post" class="wpcf7-form" novalidate="novalidate">
						<div style="display: none;">
							<input type="hidden" name="_wpcf7" value="4" />
							<input type="hidden" name="_wpcf7_version" value="4.3.1" />
							<input type="hidden" name="_wpcf7_locale" value="ja" />
							<input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f4-o1" />
							<input type="hidden" name="_wpnonce" value="4c71434a2f" />
						</div>
						<div id="js-form-category" class="form-category js-animation">
							<ul class="form-category-list">
								<li data-cat="1"><h4><p><span class="icon-desktop"></span>Web &amp; Apps<span class="text">Для розробки веб-додатків</span></p></h4><span class="icon-check"></span></li>
								<li data-cat="2"><h4><p><span class="icon-light"></span>Planning<span class="text">Для планування і просування</span></p></h4><span class="icon-check"></span></li>
								<li data-cat="3"><h4><p><span class="icon-career"></span>Careers<span class="text">Про Кар'єра</span></p></h4><span class="icon-check"></span></li>
								<li data-cat="4"><h4><p><span class="icon-comment"></span>Others<span class="text">Для інтерв'ю та інших</span></p></h4><span class="icon-check"></span></li>
							</ul>
							<span class="wpcf7-form-control-wrap contact-cat"><span class="wpcf7-form-control wpcf7-radio contact-cat" id="contact-cat"><span class="wpcf7-list-item first"><input type="radio" name="contact-cat" value="Для розробки веб-додатків" />&nbsp;<span class="wpcf7-list-item-label">Для розробки веб-додатків</span></span><span class="wpcf7-list-item"><input type="radio" name="contact-cat" value="Для планування і просування" />&nbsp;<span class="wpcf7-list-item-label">Для планування і просування</span></span><span class="wpcf7-list-item"><input type="radio" name="contact-cat" value="Про Кар'єра" />&nbsp;<span class="wpcf7-list-item-label">Про Кар'єра</span></span><span class="wpcf7-list-item last"><input type="radio" name="contact-cat" value="Для інтерв'ю та інших" />&nbsp;<span class="wpcf7-list-item-label">Для інтерв'ю та інших</span></span></span></span>
						</div>
						<div id="js-contact-form" class="contact-form js-animation">
							<p class="contact-attention"><span>Елементи, відмічені, є обов'язковими.</span></p>
							<div class="row">
								<div class="label-wrap required">
									<label class="c-label" for="c-name">
										<h4>Your Name</h4>
										<span>Ваше ім'я</span>
									</label>
								</div>
								<div class="input-wrap">
									<span class="wpcf7-form-control-wrap your-name"><input type="text" name="your-name" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" id="c-name" aria-required="true" aria-invalid="false" /></span>
								</div>
							</div>
							<div class="row">
								<div class="label-wrap">
									<label class="c-label" for="c-com-name">
										<h4>Company Name</h4>
										<span>Назва вашої компанії</span>
									</label>
								</div>
								<div class="input-wrap">
									<span class="wpcf7-form-control-wrap company-name"><input type="text" name="company-name" value="" size="40" class="wpcf7-form-control wpcf7-text" id="c-com-name" aria-invalid="false" /></span>
								</div>
							</div>
							<div class="row">
								<div class="label-wrap">
									<label class="c-label" for="c-com-address">
										<h4>Company Address</h4>
										<span>Адреса компанії</span>
									</label>
								</div>
								<div class="input-wrap">
									<span class="wpcf7-form-control-wrap company-address"><input type="text" name="company-address" value="" size="40" class="wpcf7-form-control wpcf7-text" id="c-com-address" aria-invalid="false" /></span>
								</div>
							</div>
							<div class="row">
								<div class="label-wrap required">
									<label class="c-label" for="c-mail">
										<h4>E-mail</h4>
										<span>Адреса електронної пошти</span>
									</label>
								</div>
								<div class="input-wrap">
									<span class="wpcf7-form-control-wrap your-mail"><input type="email" name="your-mail" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email" id="c-mail" aria-required="true" aria-invalid="false" /></span>
								</div>
							</div>
							<div class="row">
								<div class="label-wrap required">
									<label class="c-label" for="c-tel">
										<h4>TEL</h4>
										<span>номер телефону</span>
									</label>
								</div>
								<div class="input-wrap">
									<span class="wpcf7-form-control-wrap your-tel"><input type="tel" name="your-tel" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-required wpcf7-validates-as-tel" id="c-tel" aria-required="true" aria-invalid="false" /></span>
								</div>
							</div>
							<div class="row">
								<div class="label-wrap">
									<label class="c-label" for="c-budget">
										<h4>Budget</h4>
										<span>Цитата бюджету</span>
									</label>
								</div>
								<div class="input-wrap select-wrap">
									<span class="icon-unfold-more"></span>
									<span class="wpcf7-form-control-wrap budget"><select name="budget" class="wpcf7-form-control wpcf7-select" id="c-budget" aria-invalid="false"><option value="">---</option><option value="500 000 або менше">500 000 або менше</option><option value="50-1000000">50-1000000</option><option value="100-2000000">100-2000000</option><option value="200-3000000">200-3000000</option><option value="300-5000000">300-5000000</option><option value="500-10000000">500-10000000</option><option value="Понад 10 мільйонів">Понад 10 мільйонів</option></select></span>
								</div>
							</div>
							<div class="row is-hidden">
								<div class="label-wrap">
									<label class="c-label" for="c-request">
										<h4>Request</h4>
										<span>Зміст запиту Інтерв'ю</span>
									</label>
								</div>
								<div class="input-wrap select-wrap">
									<span class="icon-unfold-more"></span>
									<span class="wpcf7-form-control-wrap request"><select name="request" class="wpcf7-form-control wpcf7-select" id="c-request" aria-invalid="false"><option value="">---</option><option value="Про запит лекції">Про запит лекції</option><option value="Про Прес-релізи">Про Прес-релізи</option></select></span>
								</div>
							</div>
							<div class="row">
								<div class="label-wrap">
									<label class="c-label" for="c-release">
										<h4>Release Date</h4>
										<span>Сподіваюся, що дата і час публікації</span>
									</label>
								</div>
								<div class="input-wrap select-wrap">
			<span class="select-inner">
				<span class="icon-unfold-more"></span>
				<span class="wpcf7-form-control-wrap release-year"><select name="release-year" class="wpcf7-form-control wpcf7-select" id="c-release-year" aria-invalid="false"><option value="">---</option><option value="2016">2016</option><option value="2017">2017</option><option value="2018">2018</option><option value="2019">2019</option><option value="2020">2020</option></select></span>
				<span class="text">年</span>
			</span>
			<span class="select-inner">
				<span class="icon-unfold-more"></span>
				<span class="wpcf7-form-control-wrap release-month"><select name="release-month" class="wpcf7-form-control wpcf7-select" id="c-release-month" aria-invalid="false"><option value="">---</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option></select></span>
				<span class="text">місяць</span>
			</span>
			<span class="select-inner">
				<span class="icon-unfold-more"></span>
				<span class="wpcf7-form-control-wrap release-day"><select name="release-day" class="wpcf7-form-control wpcf7-select" id="c-release-day" aria-invalid="false"><option value="">---</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option></select></span>
				<span class="text">день</span>
			</span>
								</div>
							</div>
							<div class="row">
								<div class="label-wrap">
									<label class="c-label" for="c-dev-purpose">
										<h4>Dev Purpose</h4>
										<span>мети розвитку</span>
									</label>
								</div>
								<div class="input-wrap select-wrap">
									<span class="icon-unfold-more"></span>
									<span class="wpcf7-form-control-wrap dev-purpose"><select name="dev-purpose" class="wpcf7-form-control wpcf7-select" id="c-dev-purpose" aria-invalid="false"><option value="">---</option><option value="Я хочу поговорити зі стандарту">Я хочу поговорити зі стандарту</option><option value="Я хочу знати, бюджет">Я хочу знати, бюджет</option><option value="Я хочу, щоб до оновлення">Я хочу, щоб до оновлення</option><option value="Я хочу застосування">Я хочу застосування</option><option value="Я хочу, щоб поліпшити">Я хочу, щоб поліпшити</option><option value="Я хочу інтерактивний">Я хочу інтерактивний</option><option value="Я хочу, щоб підняти доступ">Я хочу, щоб підняти доступ</option></select></span>
								</div>
							</div>
							<div class="row is-hidden">
								<div class="label-wrap">
									<label class="c-label" for="c-purpose">
										<h4>Purpose</h4>
										<span>заходи, мета</span>
									</label>
								</div>
								<div class="input-wrap select-wrap">
									<span class="icon-unfold-more"></span>
									<span class="wpcf7-form-control-wrap purpose"><select name="purpose" class="wpcf7-form-control wpcf7-select" id="c-purpose" aria-invalid="false"><option value="">---</option><option value="キカクから相談したい">キカクから相談したい</option><option value="リスティング / DSP広告">リスティング / DSP広告</option><option value="Facebook 広告">Facebook 広告</option><option value="Instagram 広告">Instagram 広告</option><option value="Twitter 広告">Twitter 広告</option><option value="動画広告">動画広告</option><option value="その他">その他</option></select></span>
								</div>
							</div>
							<div class="row">
								<div class="label-wrap required">
									<label class="c-label" for="c-message">
										<h4>Message</h4>
										<span>お問い合わせ内容</span>
									</label>
								</div>
								<div class="input-wrap textarea-wrap">
									<span class="wpcf7-form-control-wrap message"><textarea name="message" cols="40" rows="10" class="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required" id="message" aria-required="true" aria-invalid="false"></textarea></span>
								</div>
							</div>
							<div class="submit-wrap">
								<div class="submit-right">
									<input id="not-spam" type="checkbox">
									<label for="not-spam"><span></span>I'm not a spam bot.</label>
								</div>
								<div class="submit-left">
									<input type="submit" value="SUBMIT YOUR MESSAGE" class="wpcf7-form-control wpcf7-submit" id="c-submit" />
								</div>
							</div>
						</div><div class="wpcf7-response-output wpcf7-display-none"></div></form></div>				<div class="contact-careers">
					<h6>Get in touch</h6>
					<span class="line"></span>
					<div class="text">
						<p><span>プロフィールおよび過去の作品をポートフォリオにまとめ、</span><span>PDFもしくはウェブサイトの形式で下記のメールアドレスまでご応募ください。</span></p>
						<p>応募いただいた書類は返却いたしませんので予めご了承ください。</p>
					</div>
					<a href="mailto:job@1st-touch.jp" class="btn"><span>job@1st-touch.jp</span></a>
				</div>
			</section> <!--/ .content-inner -->
			<footer class="footer" role="contentinfo">
				<section class="content-inner">
					<div class="footer-left">
						<a href="../index.html" class="footer-logo" data-pjax="true"><img src="../firsttouch/wp/wp-content/themes/firsttouch/assets/img/logo/white.svg"></a>
						<div class="footer-info">
							<p><a href="mailto:hello@1st-touch.jp">hello@1st-touch.jp</a></p>
							<p><a href="tel:03-6419-7401">03-6419-7401</a></p>
						</div>
					</div>
					<div class="footer-right">
						<nav class="fnav" role="navigation">
							<ul>
								<li><a class="js-text-split" href="../about/index.html" data-pjax="true">About us</a></li>
								<li><a class="js-text-split" href="../member/index.html" data-pjax="true">Member</a></li>
								<li><a class="js-text-split" href="../works/index.html" data-pjax="true">Works</a></li>
							</ul>
							<ul>
								<li><a class="js-text-split" href="../careers/index.html" data-pjax="true">Careers</a></li>
								<li><a class="js-text-split" href="index.html" data-pjax="true">Contact</a></li>
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
			</div> <!--/ .bg-border-wrap -->			</section> <!--/ .contact -->
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
					<img src="img/logo/black.svg" alt="FirstTouch, Inc.">
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
