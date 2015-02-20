(function ($) {
    $('.nav.navbar-nav a').click(function() {
        $('.nav.navbar-nav li').removeClass('active');
        $(this).closest('li').addClass('active');
    })
})(jQuery);