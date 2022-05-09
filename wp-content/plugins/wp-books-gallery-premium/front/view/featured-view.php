<?php
if ( ! defined( 'ABSPATH' ) ) {
  exit;
}
?>
<style type="text/css">
    .slick-slide {
        margin-right: 5px;
    }
    .slick-dots li button {
        border: 1px solid #009900;
    }
    .slick-prev, .slick-next {
        border: 1px solid #000;
        background: #000;
        color: #fff;
        padding: 5px;
        height: 40px;
        width: 40px;
        z-index: 999;
    }
    .slick-prev:hover, 
    .slick-next:hover,
    .slick-prev:focus, 
    .slick-next:focus {
        background: #555;
    }
    .wbg-main-wrapper .wbg-item a.wgb-item-link {
        min-height: 210px;
    }
    .wbg-main-wrapper .wbg-item img.wbg-featured-img {
        width: auto!important;
        height: 150px!important;
    }
</style>
<?php
if ( wbg_fs()->is_plan__premium_only('pro') ) {

    // Shortcoded Options
    $wbg_books_per_page = isset( $attr['display'] ) ? sanitize_text_field( $attr['display'] ) : 5;
    $wbg_gallary_column = isset( $attr['column'] ) ? sanitize_text_field( $attr['column'] ) : 4;
    $wbg_type           = isset( $attr['type'] ) ? sanitize_text_field( $attr['type'] ) : '';
    $wbg_layout         = isset( $attr['layout'] ) ? sanitize_text_field( $attr['layout'] ) : 'grid';
    $wbg_orderby        = isset( $attr['orderby'] ) ? sanitize_text_field( $attr['orderby'] ) : 'date';
    $wbg_order          = isset( $attr['order'] ) ? sanitize_text_field( $attr['order'] ) : 'DESC';
    $wbgCategory        = isset( $attr['category'] ) ? $attr['category'] : '';

    // Main Query Arguments
    $wbgBooksArr = array(
        'post_type'   => 'books',
        'post_status' => 'publish',
        'order'       => $wbg_order,
        'orderby'     => $wbg_orderby,
        'meta_query'  => array(
            array(
                'key'     => 'wbg_status',
                'value'   => 'active',
                'compare' => '='
            ),
        ),
    );

    if ( 'featured' === $wbg_type ) {
        $wbgBooksArr['meta_query'] = array(
            array(
            'key'     => 'wbg_is_featured',
            'value'   => 'yes',
            'compare' => '='
            ),
        );
    }

    // If Category params found in shortcode
    if( $wbgCategory != '' ) {
        $wbgBooksArr['tax_query'] = array(
        array(
            'taxonomy' => 'book_category',
            'field' => 'name',
            'terms' => $wbgCategory
        )
        );
    }

    // If display params found in shortcode
    if ( $wbg_books_per_page != '' ) {
        $wbgBooksArr['posts_per_page'] = $wbg_books_per_page;
    }

    $wbgBooks = new WP_Query( $wbgBooksArr );

    if ( $wbgBooks->have_posts() ) {
        if ( 'grid' === $wbg_layout ) {
            ?>
            <div class="wbg-main-wrapper <?php echo 'wbg-product-column-' . esc_attr( $wbg_gallary_column ); ?> wbg-product-column-mobile-1">
                <?php include WBG_PATH . 'front/view/featured-content.php'; ?>
            </div>
            <?php
        }
        if ( 'slide' === $wbg_layout ) {
            ?>
            <div class="wbg-main-wrapper wbg-view-slide">
                <?php include WBG_PATH . 'front/view/featured-content.php'; ?>
            </div>
            <?php
        }
    } 
    else {
        ?>
        <p class="wbg-no-books-found"><?php _e('No Documents Available!', WBG_TXT_DOMAIN); ?></p>
        <?php
    }

    // Reset Post Data
    wp_reset_postdata();
}
# Silence is golden.
?>