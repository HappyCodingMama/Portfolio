(function ($) {
      "use strict";
      $('.anim').magnificPopup({
            type: 'inline',
            fixedContentPos: false,
            fixedBgPos: true,
            overflowY: 'auto',
            closeBtnInside: true,
            preloader: false,
            midClick: true,
            removeDelay: 300,
            mainClass: 'my-mfp-slide-bottom'
      });
})(jQuery);