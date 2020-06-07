<?php

/**
 * @package WordPress
 * @subpackage Jackpine
 * @since Jackpine 0.1.0
 */

require_once __DIR__ . '/vendor/autoload.php';

use Timber\Menu;
use Timber\Site;
use Timber\Timber;
use WPackio\Enqueue;

$timber = new Timber();

Timber::$dirname = 'templates';

class Jackpine extends Site
{
    public $enqueue;

    public function __construct()
    {
        $this->enqueue = new Enqueue(
            'jackpine',
            'dist',
            '0.1.0',
            'theme'
        );

        add_action('wp_enqueue_scripts', [$this, 'enqueue_scripts']);
        add_action('after_setup_theme', [$this, 'theme_supports']);
        add_filter('timber/context', [$this, 'add_to_context']);
        add_filter('timber/twig', [$this, 'add_to_twig']);

        parent::__construct();
    }

    public function add_to_context($context)
    {
        $context['site'] = $this;
        $context['menu'] = new Menu();

        return $context;
    }

    public function add_to_twig($twig)
    {
        return $twig;
    }

    public function theme_supports()
    {
        add_theme_support('automatic-feed-links');
        add_theme_support(
            'html5',
            [
                'comment-form',
                'comment-list',
                'gallery',
                'caption'
            ]
        );
        add_theme_support('menus');
        add_theme_support('post-thumbnails');
        add_theme_support('title-tag');

        /** Removing the Website field from WordPress comments is a proven way to reduce spam */
        add_filter('comment_form_default_fields', 'remove_website_field');
        function remove_website_field($fields)
        {
            if (isset($fields['url'])) {
                unset($fields['url']);
            }
            return $fields;
        }

        /** Limit comment depth to two. If you need more, you will need to adjust the Tailwind styling */
        add_filter( 'thread_comments_depth_max', function( $max )
        {
            return 2;
        } );

    }

    public function enqueue_scripts()
    {
        $this->enqueue->enqueue('theme', 'styles', []);
        $this->enqueue->enqueue('theme', 'main', []);
    }
}

new Jackpine();
