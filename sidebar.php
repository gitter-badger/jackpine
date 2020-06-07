<?php

/**
 * @package WordPress
 * @subpackage Jackpine
 * @since Jackpine 0.1.0
 */

use Timber\Timber;

$context = Timber::context();

Timber::render('sidebar.twig', $context);
