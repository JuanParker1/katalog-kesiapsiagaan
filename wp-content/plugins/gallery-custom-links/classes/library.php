<?php

class Meow_MGCL_Library {

	public function __construct( $core ) {
    $this->core = $core;
    add_filter( 'admin_init', array( $this, 'admin_init' ), 10, 0 );
    add_filter( 'manage_media_columns', array( $this, 'manage_media_columns' ) );
		add_action( 'manage_media_custom_column', array( $this, 'manage_media_custom_column' ), 10, 2 );
	}

  function admin_init() {
    add_action( 'pre_get_posts', array( $this, 'my_custom_filter' ), 60, 2 );
    add_action( 'admin_print_footer_scripts', array( $this, 'admin_print_footer_scripts' ), 60 );
  }

  function my_custom_filter( $query ) {
    if ( $query->is_main_query() ) {
      if ( isset( $_GET['attachment-filter'] ) && $_GET['attachment-filter'] === 'mgcl_unlinked' ) {
        $query->set( 'meta_query', array(
          array(
          'key'     => '_gallery_link_url',
          'compare' => 'NOT EXISTS'
          )
        ));
      }
    }
    return $query;
  }

  function manage_media_columns( $cols ) {
		$cols["GalleryCustomLinks"] = "Gallery Custom Links";
		return $cols;
	}

	function manage_media_custom_column( $column_name, $post_id ) {
		if ( $column_name != 'GalleryCustomLinks' )
			return;
		$url = get_post_meta( $post_id, '_gallery_link_url', true );
		$target = get_post_meta( $post_id, '_gallery_link_target', true );
		$rel = get_post_meta( $post_id, '_gallery_link_rel', true );
		$aria = get_post_meta( $post_id, '_gallery_link_aria', true );
		echo '<div class="mgcl-edit-link-field" data-post-id="' . $post_id . '" data-url="' . $url . '" data-target="' . $target . '" data-rel="' . $rel . '" data-aria="' . $aria . '"></div>';
	}

  function admin_print_footer_scripts() { 
    ?>
      <script type="text/javascript">
        document.addEventListener("DOMContentLoaded", function() {
          let attachmentFilter = document.getElementById('attachment-filter');
          let newOption = document.createElement("option");
          newOption.text = "Unlinked";
          newOption.value = "mgcl_unlinked";
          attachmentFilter.appendChild(newOption);
        });
      </script>
  <?php }
}

