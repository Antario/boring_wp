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
				<?php if ( have_posts() ) : ?>
					<?php while ( have_posts() ) : the_post(); ?>
							<?php the_content(); ?>
					<?php endwhile; ?>
				<?php endif; ?>
			</section> <!--/ .content-inner -->
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