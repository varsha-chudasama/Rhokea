export class Parts {

    init() {
        $(document).ready(function () {
            const stickySection = $('.sticky-section');
            $(window).on('scroll', function () {
                const scrollableHeight = $(document).height() - $(window).height();
                if ($(window).scrollTop() === 0) {
                    stickySection.removeClass('d-block').addClass('d-block');
                } else if ($(window).scrollTop() >= scrollableHeight - 1250) {
                    stickySection.removeClass('d-none').addClass('d-none');
                } else {
                    stickySection.removeClass('d-none').addClass('d-block');
                }
            });
        });
    }
}
