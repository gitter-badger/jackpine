<?php

/**
 * @package WordPress
 * @subpackage Jackpine
 * @since Jackpine 0.1.0
 */

use Timber\Timber;

$context = Timber::context();

$context['content'] = ob_get_contents();

ob_end_clean();

Timber::render('page-plugin.twig', $context);
