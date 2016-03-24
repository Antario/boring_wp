<?php
  //Відключення відображення адмін панелі
  show_admin_bar (false);
?>
<?php
  //Register Custom Script
  function custom_script() {

    $jsPath = get_template_directory_uri().'/js/';

    wp_register_script( 'modernizr_min', 'https://cdn.jsdelivr.net/modernizr/2.8.3/modernizr.min.js', false,
      false, false);
    wp_enqueue_script( 'modernizr_min' );
    wp_register_script( 'jquery_min', 'https://cdn.jsdelivr.net/jquery/2.1.4/jquery.min.js', false, false, false);
    wp_enqueue_script( 'jquery_min' );
    wp_register_script( 'html5shiv_min', 'https://cdn.jsdelivr.net/html5shiv/3.7.2/html5shiv.min.js', false, false,
      false);
    wp_enqueue_script( 'html5shiv_min' );
    wp_register_script( 'respond_min', 'https://cdn.jsdelivr.net/respond/1.4.2/respond.min.js', false, false,
      false);
    wp_enqueue_script( 'respond_min' );
    wp_register_script( 'google_maps_api', 'http://maps.google.com/maps/api/js', false, false, true);
    wp_enqueue_script( 'google_maps_api' );
    wp_register_script( 'vendor_min', $jsPath.'vendor.min.js', false, false, true);
    wp_enqueue_script( 'vendor_min' );
    wp_register_script( 'app', $jsPath.'app.js', false, false, true);
    wp_enqueue_script( 'app' );
    wp_register_script( 'wp-embed', $jsPath.'wp-embed.js', false, false, true);
    wp_enqueue_script( 'wp-embed' );

  }
  add_action( 'wp_enqueue_scripts', 'custom_script' );
?>