<?php

/**
 * @package WordPress
 * @subpackage Jackpine
 * @since Jackpine 0.1.0
 */

use Timber\PostQuery;
use Timber\Timber;

$context = Timber::context();

$context['title'] = 'Search results for ' . get_search_query();
$context['posts'] = new PostQuery();

Timber::render('search.twig', $context);
