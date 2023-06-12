$(document).ready(function () {

    //   Space containers
    var windowWidth = $(document).width(),
        containerWidth = $('.container').width(),
        paddingContainer = ((windowWidth - containerWidth) / 2)
    // left
    $('.cpl').css('padding-left', paddingContainer);
    // right
    $('.cpr').css('padding-right', paddingContainer);

    $(window).resize(function () {
        var windowWidth = $(document).width(),
            containerWidth = $('.container').width(),
            paddingContainer = ((windowWidth - containerWidth) / 2)
        // left
        $('.cpl').css('padding-left', paddingContainer);
        // right
        $('.cpr').css('padding-right', paddingContainer);
    });




    // burger
    (function () {
        var burger1, burger2, burger3;

        burger2 = document.querySelector(".burger2");

        burger2.addEventListener("click", function () {
            return burger2.classList.toggle("on");
        });


    }).call(this);


    // mobmenu
    $('.linkarr').click(function () {
        $(this).siblings('.submenu').slideToggle();
        $(this).toggleClass('rotate');
    });

    $('.burger ').click(function () {
        $('.header__nav').toggleClass('show');
    });


    // job search form accordion 
    $('.js-result__form-name').on('click', function () {
        $(this).parent('.js-result__form-item').toggleClass('active');
        $(this).next('.js-result__form-body').slideToggle();
    });


    // popup

    $('.popup__btn').on('click', function (e) {
        e.preventDefault;
        var indexPopup = $(this).attr('data-popup');
        $('.popup__window').removeClass('active');
        $('.' + indexPopup).addClass('active');
        return false;
    });

    $('.popup__close').on('click', function () {
        $('.popup__window').removeClass('active');
    });

    // customselect
    $('.customselect').select2({
        minimumResultsForSearch: Infinity
      });


});