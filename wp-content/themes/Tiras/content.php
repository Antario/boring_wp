<?php
	/**
	 * The default template for displaying content
	 */
?>
<main id="js-container" class="container" role="main">
	<div id="js-wrapper" class="wrapper page-works-detail">
		<section id="js-works-detail" class="works-detail">
			<div class="works-detail-header-copy"></div>
			<section id="js-point" class="content-inner">
				<div class="works-detail-info-wrap">
					<div class="header-clip">
						<svg class="header-clip-path" x="0px" y="0px" viewBox="0 0 120 20">
							<path class="path-1" fill-rule="evenodd" clip-rule="evenodd" d="M93,0c-1.7,0-3.6,0-6.2,0H68.4c-6.3,0-10.7,0-16.9,0H33.3C30.5,0,29,0,27,0H0v20 h120V0H93z"/>
							<path class="path-2" fill-rule="evenodd" clip-rule="evenodd" d="M65.5,0.9l-0.7-0.7c-0.2-0.2-0.5-0.2-0.7,0L60,4.2l-4.1-4.1 c-0.2-0.2-0.5-0.2-0.7,0l-0.7,0.7c-0.2,0.2-0.2,0.5,0,0.7L60,7.1l0,0l0,0l5.5-5.5C65.7,1.4,65.7,1,65.5,0.9z"/>
						</svg>
						<div class="fill fill-left"></div>
						<div class="fill fill-right"></div>
					</div>
					<a data-href="js-point" class="scroll-down"></a>
					<div class="works-detail-info">
						<div class="works-detail-info-inner">
							<div class="works-detail-info-left">
								<div class="works-detail-info-left-inner">
									<h1 class="works-detail-info-title" id="post-<?php the_ID(); ?>" <?php post_class(); ?>></h1>
										<?php echo get_the_post_thumbnail($page->ID, 'large'); ?>

					<p class="works-detail-info-description">
						<?php if ( in_array( 'category', get_object_taxonomies( get_post_type() ) ) && twentyfourteen_categorized_blog() ) : ?>
						<?php
						endif;

							if ( is_single() ) :
								the_title( '<h2 class="entry-title">', '</h2>' );
							else :
								the_title( '<h2 class="entry-title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h2>' );
							endif;
						?>
					<div class="entry-meta">
						<?php
							if ( 'post' == get_post_type() )
								twentyfourteen_posted_on();

							if ( ! post_password_required() && ( comments_open() || get_comments_number() ) ) :
								?>

								<?php
							endif;

						?>
					</div>
					<!-- .entry-meta -->

					<hr/>
				</p>
				<!-- .entry-header -->

				<?php if ( is_search() ) : ?>
					<div class="entry-summary">
						<?php the_excerptrpt(); ?>
					</div>
					<!-- .entry-summary -->
				<?php else : ?>
					<div class="entry-content">
						<?php
							/* translators: %s: Name of current post */
							the_content( sprintf(
											__( 'Continue reading %s <span class="meta-nav">&rarr;</span>', 'twentyfourteen' ),
											the_title( '<span class="screen-reader-text">', '</span>', false )
							) );

							wp_link_pages( array(
											'before'      => '<div class="page-links"><span class="page-links-title">' . __( 'Pages:', 'twentyfourteen' ) . '</span>',
											'after'       => '</div>',
											'link_before' => '<span>',
											'link_after'  => '</span>',
							) );
						?>
					</div>
					<!-- .entry-content -->
				<?php endif; ?>

				<?php the_tags( '<footer class="entry-meta"><span class="tag-links">', '', '</span></footer>' ); ?>
			</div>
								</div>
							</div>
						</div>
					</div>
			</section>
			<!-- #post-## -->
		</div>
	</main>
