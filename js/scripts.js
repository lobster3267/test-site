/* Description: Custom JS file */


(function($) {
    "use strict"; 
	
    /* Navbar Scripts */
    // jQuery to collapse the navbar on scroll
    $(window).on('scroll load', function() {
		if ($(".navbar").offset().top > 60) {
			$(".fixed-top").addClass("top-nav-collapse");
		} else {
			$(".fixed-top").removeClass("top-nav-collapse");
		}
    });
    
	

    // offcanvas script from Bootstrap + added element to close menu on click in small viewport
    $('[data-toggle="offcanvas"], .navbar-nav li a:not(.dropdown-toggle').on('click', function () {
        $('.offcanvas-collapse').toggleClass('open')
    })

    // hover in desktop mode
    function toggleDropdown (e) {
        const _d = $(e.target).closest('.dropdown'),
            _m = $('.dropdown-menu', _d);
        setTimeout(function(){
            const shouldOpen = e.type !== 'click' && _d.is(':hover');
            _m.toggleClass('show', shouldOpen);
            _d.toggleClass('show', shouldOpen);
            $('[data-toggle="dropdown"]', _d).attr('aria-expanded', shouldOpen);
        }, e.type === 'mouseleave' ? 300 : 0);
    }
    $('body')
    .on('mouseenter mouseleave','.dropdown',toggleDropdown)
    .on('click', '.dropdown-menu a', toggleDropdown);


    /* Move Form Fields Label When User Types */
    // for input and textarea fields
    $("input, textarea").keyup(function(){
		if ($(this).val() != '') {
			$(this).addClass('notEmpty');
		} else {
			$(this).removeClass('notEmpty');
		}
	});
	

	/* Removes Long Focus On Buttons */
	$(".button, a, button").mouseup(function() {
		$(this).blur();
	});

    /* Showreel modal: autoplay on open, stop video completely on close */
    var showreelSrc = 'https://www.youtube.com/embed/Qv8mAMXcS8E?autoplay=1&mute=1&rel=0&modestbranding=1&playsinline=1&showinfo=0&autohide=0';
    var $showreelIframe = $('#showreelModal iframe');

    $('#showreelModal').on('show.bs.modal', function () {
        $showreelIframe.attr('src', showreelSrc);
    });

    $('#showreelModal').on('hidden.bs.modal', function () {
        $showreelIframe.attr('src', '');
    });

    $('.project-video-container').on('click keydown', function (event) {
        if (event.type === 'keydown' && event.which !== 13 && event.which !== 32) {
            return;
        }

        event.preventDefault();

        if ($(this).hasClass('is-playing')) {
            return;
        }

        $(this).addClass('is-playing');
        $(this).find('.project-video-frame').attr('src', $(this).data('video-url'));
    });

    $('.work-video-trigger').on('click keydown', function (event) {
        if (event.type === 'keydown' && event.which !== 13 && event.which !== 32) {
            return;
        }

        event.preventDefault();
        var videoUrl = $(this).data('video-url');
        $('#worksVideoModal iframe').attr('src', videoUrl);
        $('#worksVideoModal').modal('show');
    });

    $('#worksVideoModal').on('hidden.bs.modal', function () {
        $('#worksVideoModal iframe').attr('src', '');
    });

})(jQuery);