<?php
if ( ! defined( 'ABSPATH' ) ) {
  exit;
}

if ( wbg_fs()->is_plan__premium_only('pro') ) {
    ?>
        <?php
        while( $wbgBooks->have_posts() ) {

            $wbgBooks->the_post();
            $wbgImgUrl = get_post_meta( $post->ID, 'wbgp_img_url', true );
            $wbgAuthor = get_post_meta( $post->ID, 'wbg_author', true );
            ?>
            <div class="wbg-item">
                <a class="wgb-item-link" href="<?php echo esc_url( get_the_permalink( $post->ID ) ); ?>">
                    <?php
                    if ( $wbgImgUrl ) {
                        ?>
                        <img src="<?php echo esc_url( $wbgImgUrl ); ?>" alt="<?php _e( 'No Image Available', WBG_TXT_DOMAIN ); ?>" width="200">
                        <?php
                    }
                    else if ( has_post_thumbnail() ) {
                        //the_post_thumbnail( array( 200 ) );
                        $feat_image = wp_get_attachment_url( get_post_thumbnail_id( $post->ID ) );
                        ?>
                        <img src="<?php echo esc_url( $feat_image ); ?>" alt="<?php _e( 'No Image Available', WBG_TXT_DOMAIN ); ?>" width="200">
                        <?php
                    } else { ?>
                        <img src="<?php echo esc_attr( WBG_ASSETS . 'img/noimage.jpg' ); ?>" alt="<?php _e( 'No Image Available', WBG_TXT_DOMAIN ); ?>" width="200">
                    <?php
                    }
                    ?>
                    <?php echo get_the_title(); ?>
                </a>
                <span>
                    <?php
                    $wbgCatArray = array();
                    $wbgCategory = wp_get_post_terms( $post->ID, 'book_category', array('fields' => 'all') );
                    foreach( $wbgCategory as $cat) {
                        $wbgCatArray[] = $cat->name . '';
                    }
                    echo implode( ', ', $wbgCatArray );
                    ?>
                </span>
                <?php
                if (  ! empty( $wbgAuthor ) ) {
                    ?>
                    <span><?php esc_html_e( $wbgAuthor ); ?></span>
                    <?php
                }
                ?>
            </div>
            <?php 
        }
        ?>
    </div>
    <?php
}
?>