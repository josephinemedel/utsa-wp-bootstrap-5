import '../../../node_modules/foundation-sites/dist/plugins/foundation.core.js';
import '../../../node_modules/foundation-sites/dist/plugins/foundation.util.mediaQuery.js';
// import '../../../node_modules/foundation-sites/dist/plugins/foundation.abide.js';
// import '../../../node_modules/foundation-sites/dist/plugins/foundation.accordion.js';
// import '../../../node_modules/foundation-sites/dist/plugins/foundation.accordionMenu.js';
// import '../../../node_modules/foundation-sites/dist/plugins/foundation.drilldown.js';
// import '../../../node_modules/foundation-sites/dist/plugins/foundation.dropdown.js';
// import '../../../node_modules/foundation-sites/dist/plugins/foundation.dropdownMenu.js';
// import '../../../node_modules/foundation-sites/dist/plugins/foundation.equalizer.js';
// import '../../../node_modules/foundation-sites/dist/plugins/foundation.interchange.js';
// import '../../../node_modules/foundation-sites/dist/plugins/foundation.magellan.js';
// import '../../../node_modules/foundation-sites/dist/plugins/foundation.offcanvas.js';
// import '../../../node_modules/foundation-sites/dist/plugins/foundation.orbit.js';
// import '../../../node_modules/foundation-sites/dist/plugins/foundation.responsiveMenu.js';
import '../../../node_modules/foundation-sites/dist/plugins/foundation.responsiveToggle.js';
// import '../../../node_modules/foundation-sites/dist/plugins/foundation.reveal.js';
// import '../../../node_modules/foundation-sites/dist/plugins/foundation.slider.js';
// import '../../../node_modules/foundation-sites/dist/plugins/foundation.sticky.js';
// import '../../../node_modules/foundation-sites/dist/plugins/foundation.tabs.js';
// import '../../../node_modules/foundation-sites/dist/plugins/foundation.toggler.js';
// import '../../../node_modules/foundation-sites/dist/plugins/foundation.tooltip.js';
// import '../../../node_modules/foundation-sites/dist/plugins/foundation.util.box.js';
// import '../../../node_modules/foundation-sites/dist/plugins/foundation.util.keyboard.js';
// import '../../../node_modules/foundation-sites/dist/plugins/foundation.util.motion.js';
// import '../../../node_modules/foundation-sites/dist/plugins/foundation.util.nest.js';
// import '../../../node_modules/foundation-sites/dist/plugins/foundation.util.timerAndImageLoader.js';
// import '../../../node_modules/foundation-sites/dist/plugins/foundation.util.touch.js';
// import '../../../node_modules/foundation-sites/dist/plugins/foundation.util.triggers.js';

/**
 * Notes:
 *
 * Read the foundation docs on what to include for different
 * foundation components
 *
 * @link http://foundation.zurb.com/sites/docs/javascript.html
 *
 * If you need a components for a single page then create another JS file,
 * inlude it within the scripts-list.js file and import the needed assets.
 * Then use the wp_enqueue_script to inlude it on the page you need through
 * the functions.php file.
 *
 * Also, consider code splitting for keeping the initial size of the JS
 * loaded on the page down:
 *
 * @link https://webpack.github.io/docs/code-splitting.html
 */

(function($){
	$(document).foundation();

	// Display menu once scripts have loaded
	$('#main_menu').fadeIn();
})(jQuery);
