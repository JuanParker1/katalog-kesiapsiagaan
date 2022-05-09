<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */

/* define( 'DB_NAME', 'u1022862_siapsiaga2' ); */
define( 'DB_NAME', 'u1022862_siapsiaga2' );

/** MySQL database username */
/* define( 'DB_USER', 'u1022862_siapsiaga2' ); */
define ( 'DB_USER', 'siapsiaga2' );

/** MySQL database password */
define( 'DB_PASSWORD', 'S!4psel4m4t' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '^#y4&f  g0~)R/VcfqH.gH!8s!6IOOKO5Kn ~9%Hxjx`b$Vi@}naOwR}gB y@ug3' );
define( 'SECURE_AUTH_KEY',  '{!6CGbho5&P#8eZ<lPQ: lVDk$*:QUzh~DN;%?a)kM[ YE?^Op7)4V2x-EZB#FTX' );
define( 'LOGGED_IN_KEY',    'Mr^tVs;k=b$i{[Y)6kMTjI1T_c3:=dsGLB#kF.-Lf]~>nGC./7xYf|!&5(fg:~mc' );
define( 'NONCE_KEY',        '&LZedX)B/.=*K^?wVUy(h|QHgq8G21}`,P7Y:(J]<sDj6GHsH}=^thvWWBIg,O:`' );
define( 'AUTH_SALT',        'Wf.8v^>V4ZwLHhE1?`cM?bgA/Q8WVn3@b)%jc*ulReQMLj=B5X`T7_a3n& %~Xw_' );
define( 'SECURE_AUTH_SALT', '. *z<sl:$E5a+h-*-*?#@D_1hg+g4zxS`EgH7-G*KwU&DwV_Js4aB}Qy&<a$PU9x' );
define( 'LOGGED_IN_SALT',   '<hMQGtQ1Ly#KqvYum?6*0sSw#yRA:kRD0i>}!h89>7i@4u^WLoh=`F&26`.EBxvR' );
define( 'NONCE_SALT',       'TdRzH :]o$V1k6i{*0&83JIU:J0_C=UJ`lnh&;C/r{^JnGQg(O>+SFPE$fTRbm$C' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
define( 'UPLOADS', 'wp-content/uploads' );
require_once ABSPATH . 'wp-settings.php';

