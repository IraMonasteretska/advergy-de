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

    // testimonial slider
    if ($('*').is('.testimonial-slider')) {
        var swiper = new Swiper(".testimonial-slider", {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 20,
            speed: 700,
            loop: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
                dynamicBullets: true,
            },
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    autoHeight: true,
                },

                768: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                    autoHeight: false,
                },

                992: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                    autoHeight: false,
                },
            },
        });
    }

    // accordeon faq
    $('.faqsaccordeon__header').click(function () {
        $(this).toggleClass('open');
        $(this).next('.faqsaccordeon__body').slideToggle();
    });

    // scroll to id
    $(".scrollarr").on("click", function (event) {
        event.preventDefault();

        var id = $(this).attr('href'),

            top = $(id).offset().top;

        $('body,html').animate({
            scrollTop: top
        }, 1000);
    });

    // File upload
    if ($('*').is('.upload')) {
        document.getElementById("FileAttachment").onchange = function () {
            document.getElementById("fileuploadurl").value = this.value.replace(/C:\\fakepath\\/i, '');
            $('.uplwrap').addClass('uploaded');
            $('.filepopup__btns .bluebtn').prop('disabled', false);

            document.querySelector(".testinput").value = this.value.replace(/C:\\fakepath\\/i, '')
        };
    }

    $('.clearinput').click(function () {
        document.getElementById("fileuploadurl").value = '';
        $('.uplwrap').removeClass('uploaded');
        $('.filepopup__btns .bluebtn').prop('disabled', true);

        document.querySelector(".testinput").value = '';

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
    if ($('*').is('.customselect')) {

        $('.customselect').select2({
            minimumResultsForSearch: Infinity,
        });

        var data = [];

        $('.customselect.selectcountry option').each(function() {
          var value = $(this).val();
          var text = $(this).text();
          var image = $(this).data('image');
          data.push({ id: value, text: text, image: image });
        });
  
        $('.selectcountry').select2({
          data: data,
          templateResult: formatData,
          templateSelection: formatData,
          minimumResultsForSearch: Infinity,
        });
  
        function formatData(data) {
          if (!data.id) { return data.text; }
          
          var $result = $('<span></span>');
          
          if (data.image) {
            $result.append('<img src="' + data.image + '" class="img-thumbnail" style="width: 22px; height: 16px; margin-right: 8px; vertical-align: middle;">');
          }
          
          $result.append(data.text);
          
          return $result;
        }
          
    }

    // loading benefits items
    $(".dp-benefits__inner").each(function () {
        var $container = $(this);
        var $boxes = $container.find(".dp-benefits__item");
        var totalItems = $boxes.length;
        var itemsToShow = 12;
        var itemsToLoad = 4;
        if (totalItems <= itemsToShow) {
            $(".dp-benefits__more a").hide();
        }

        $boxes.slice(itemsToShow).hide();
        $(".dp-benefits__more a").on("click", function (e) {
            e.preventDefault();
            var $this = $(this);
            var $boxes = $(".dp-benefits__item");
            itemsToShow += itemsToLoad;

            if (itemsToShow < totalItems) {
                $boxes.slice(itemsToShow - itemsToLoad, itemsToShow).show();
            } else {
                $boxes.slice(itemsToShow - itemsToLoad).show();
                $this.hide();
            }
        });
    });

    // detailed page slider
    if ($('*').is('.dp-slider__swiper')) {
        var swiper = new Swiper(".dp-slider__swiper", {
            slidesPerView: 1.3,
            pagination: {
                el: ".swiper-pagination",
                dynamicBullets: true,
            },
        });
    }



    // scroll frame 
    if ($('*').is('.scrollbox')) {
        var header = $('.header');
        var frame = $('.scrollbox');
        var frameOffset = frame.offset().top;
        var headerHeight = header.outerHeight();

        $(window).scroll(function () {
            var headerOffset = header.offset().top;

            if (headerOffset + headerHeight >= frameOffset) {
                frame.css({
                    'position': 'fixed',
                    'top': headerHeight + 'px',
                });
            } else {
                frame.css({
                    'position': 'relative',
                    'top': '0',
                });
            }
        });

        // delete frame 

        $('.close-frame').on('click', function () {
            $(this).closest('.scrollbox').remove();
        });
    }

    // confirmation form checkbox
    $('.customcheck').change(function () {
        if ($(this).is(':checked')) {
            $('.formbtn').prop('disabled', false);
        } else {
            $('.formbtn').prop('disabled', true);
        }
    });




});