<?php
	/*
	*Template Name: Portfolio Template
	*/
?>
<?php get_header(); ?>
<main id="js-container" class="container" role="main">
	<div id="js-wrapper" class="wrapper page-works">
		<section id="js-works" class="works">
			<header class="subpage-header works-header">
				<div class="table content-inner">
					<div class="table-cell">
						<div class="hgroup">
							<span class="subpage-icon icon-layer"></span>
							<h1 class="js-text-split">Портфоліо</h1>
							<h2 class="js-text-split">наші роботи</h2>
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
<!--				<nav id="js-wnav" class="wnav" role="navigation">-->
<!--					<ul class="works-filter">-->
<!--						<li class="works-filter-list is-active"  data-filter="*"><h4><p><span class="icon-layer"></span>Всі роботи</p></h4></li>-->
<!--						<li class="works-filter-list" data-filter="website"><h4><p><span class="icon-desktop"></span>Веб-сайти</p></h4></li>-->
<!--						<li class="works-filter-list" data-filter="apps"><h4><p><span class="icon-smartphone"></span>Програми</p></h4></li>-->
<!--						<li class="works-filter-list" data-filter="other"><h4><p><span class="icon-segment"></span>Інше</p></h4></li>-->
<!--					</ul>-->
<!--				</nav>-->
<?php
	$temp = $wp_query; $wp_query= null;
	$wp_query = new WP_Query(); $wp_query->query('showposts=10' . '&paged='.$paged);
	while ($wp_query->have_posts()) : $wp_query->the_post(); ?>
			<div class="col-xs-12 col-sm-12 col-lg-12">
				<ul id="js-work-list" class="works-list grid-mode-1">
					<li class="works-item apps concept">
						<div class="works-list-inner" href="<?php the_permalink() ?>" title="Переглянути">
							<a>
								<?php echo get_the_post_thumbnail($page->ID, 'thumbnail'); ?>
									<div class="work-title-wrap">
										<h2 class="work-title" href="<?php the_permalink(); ?>" title="Переглянути">
											<?php the_title(); ?>
										</h2>
									</div>
							</a>
						</div>
					</li>
				</ul>
	<?php endwhile; ?>

	<?php if ($paged > 1) { ?>

		<nav id="nav-posts">
			<div class="prev"><?php next_posts_link('&laquo; Previous Posts'); ?></div>
			<div class="next"><?php previous_posts_link('Newer Posts &raquo;'); ?></div>
		</nav>

	<?php } else { ?>

		<nav id="nav-posts">
			<div class="prev"><?php next_posts_link('&laquo; Previous Posts'); ?></div>
		</nav>

	<?php } ?>

	<?php wp_reset_postdata(); ?>
			</div>
<!--				<div class="works-next">-->
<!--				</div>-->
			</section> <!--/ .content-inner -->
			<footer class="footer" role="contentinfo">
				<section class="content-inner">
					<div class="footer-left">
						<a href="http://localhost:8080/wordpress/" class="footer-logo" data-pjax="true"><img src="<?php echo get_template_directory_uri(); ?>/img/logo/tiras_white_small.svg"></a>
						<div class="footer-info">
							<p><a href="mailto:hello@1st-touch.jp">hello@1st-touch.jp</a></p>
							<p><a href="tel:03-6419-7401">03-6419-7401</a></p>
						</div>
					</div>
					<div class="footer-right">
						<nav class="fnav" role="navigation">
							<ul>
								<li><a class="js-text-split" href="http://localhost:8080/wordpress/about/" data-pjax="true">About us</a></li>
								<li><a class="js-text-split" href="http://localhost:8080/wordpress/members/" data-pjax="true">Member</a></li>
								<li><a class="js-text-split" href="http://localhost:8080/wordpress/portfolio/" data-pjax="true">Works</a></li>
							</ul>
							<ul>
								<li><a class="js-text-split" href="http://localhost:8080/wordpress/careers/" data-pjax="true">Careers</a></li>
								<li><a class="js-text-split" href="http://localhost:8080/wordpress/contact/" data-pjax="true">Contact</a></li>
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
			</div> <!--/ .bg-border-wrap -->			
        </section> <!--/ .works -->
	</div> <!--/ .wrapper -->
</main> <!--/ .container -->
<div id="js-mask" class="mask"></div>
<div id="js-alert" class="alert">
	<div class="table">
		<div class="table-cell">
			<div class="not-support">
				<div class="not-support-logo"><img src="<?php echo get_template_directory_uri(); ?>/img/logo/tiras_black_small.svg" alt="Tiras Tec."></div>
				<p>Ваш браузер не підтримує.<br/>Будь ласка відобразити знову оновити браузер до останньої версії.</p>
			</div>
		</div>
	</div>
</div>
<?php get_footer(); ?>