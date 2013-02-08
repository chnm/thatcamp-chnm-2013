// This jquery invokes the crossSlide jQuery plugin – the images can be from any location

jQuery(document).ready(function() {
    jQuery('#sliding-header').
    crossSlide({sleep: 2,fade: 1},
    [
        { src: 'http://chnm2013.thatcampdev.info/wp-content/themes/thatcamp-chnm-2013/images/banner1a-910.png' },
        { src: 'http://chnm2013.thatcampdev.info/wp-content/themes/thatcamp-chnm-2013/images/banner1b-910.png' } 
    ]);
});