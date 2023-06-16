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
            mousewheel: true,
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
            $('.fp1 .uplwrap').addClass('uploaded');
            $('.filepopup__btns .bluebtn').prop('disabled', false);

            document.querySelector(".fp1").value = this.value.replace(/C:\\fakepath\\/i, '')
        };
        // ----------------
        document.getElementById("FileAttachment1").onchange = function () {
            document.getElementById("fileuploadurl1").value = this.value.replace(/C:\\fakepath\\/i, '');
            $('.fp2 .uplwrap').addClass('uploaded');
            $('.filepopup__btns .bluebtn').prop('disabled', false);

            document.querySelector(".fp2").value = this.value.replace(/C:\\fakepath\\/i, '')
        };
        // ----------------
        document.getElementById("FileAttachment2").onchange = function () {
            document.getElementById("fileuploadurl2").value = this.value.replace(/C:\\fakepath\\/i, '');
            $('.fp3 .uplwrap').addClass('uploaded');
            $('.filepopup__btns .bluebtn').prop('disabled', false);

            document.querySelector(".fp3").value = this.value.replace(/C:\\fakepath\\/i, '')
        };
        // ----------------
        document.getElementById("FileAttachment3").onchange = function () {
            document.getElementById("fileuploadurl3").value = this.value.replace(/C:\\fakepath\\/i, '');
            $('.fp4 .uplwrap').addClass('uploaded');
            $('.filepopup__btns .bluebtn').prop('disabled', false);

            document.querySelector(".fp4").value = this.value.replace(/C:\\fakepath\\/i, '')
        };
    }




    $('.delete-btn').click(function () {
        $(this).parent('.inputfield').find('input').val('');
    });
    $('.del1').click(function () {
        document.getElementById("fileuploadurl").value = '';
        $('.fp1 .uplwrap').removeClass('uploaded');
        $('.fp1 .filepopup__btns .bluebtn').prop('disabled', true);

        document.querySelector("input.fp1").value = '';
    })
    $('.del2').click(function () {
        document.getElementById("fileuploadurl1").value = '';
        $('.fp2 .uplwrap').removeClass('uploaded');
        $('.fp2 .filepopup__btns .bluebtn').prop('disabled', true);

        document.querySelector("input.fp2").value = '';
    })
    $('.del3').click(function () {
        document.getElementById("fileuploadurl2").value = '';
        $('.fp3 .uplwrap').removeClass('uploaded');
        $('.fp3 .filepopup__btns .bluebtn').prop('disabled', true);

        document.querySelector("input.fp3").value = '';
    })
    $('.del4').click(function () {
        document.getElementById("fileuploadurl3").value = '';
        $('.fp4 .uplwrap').removeClass('uploaded');
        $('.fp4 .filepopup__btns .bluebtn').prop('disabled', true);

        document.querySelector("input.fp4").value = '';
    })





    $('.fp1 .clearinput').click(function () {
        document.getElementById("fileuploadurl").value = '';
        $('.fp1 .uplwrap').removeClass('uploaded');
        $('.fp1 .filepopup__btns .bluebtn').prop('disabled', true);

        document.querySelector("input.fp1").value = '';
    });
    $('.fp2 .clearinput').click(function () {
        document.getElementById("fileuploadurl1").value = '';
        $('.fp2 .uplwrap').removeClass('uploaded');
        $('.fp2 .filepopup__btns .bluebtn').prop('disabled', true);

        document.querySelector("input.fp2").value = '';
    });
    $('.fp3 .clearinput').click(function () {
        document.getElementById("fileuploadurl2").value = '';
        $('.fp3 .uplwrap').removeClass('uploaded');
        $('.fp3 .filepopup__btns .bluebtn').prop('disabled', true);

        document.querySelector("input.fp3").value = '';
    });
    $('.fp4 .clearinput').click(function () {
        document.getElementById("fileuploadurl3").value = '';
        $('.fp4 .uplwrap').removeClass('uploaded');
        $('.fp4 .filepopup__btns .bluebtn').prop('disabled', true);

        document.querySelector("input.fp4").value = '';
    });




    // scroll to id
    $(".categorynav ul li a").on("click", function (e) {
        e.preventDefault();
        var anchor = $(this).attr('href');
        $('html, body').stop().animate({
            scrollTop: $(anchor).offset().top - 60
        }, 800);
    });

    // show more text
    $('.moretext').click(function (e) {
        e.preventDefault();
        $(this).toggleClass('open');
        $(this).prev('.descr').toggleClass('open');
    });




    if ($('*').is('.guidelinesforcv__slider')) {
        var swiper = new Swiper(".guidelinesforcv__sliderthumb", {
            spaceBetween: 10,
            slidesPerView: 8,
            freeMode: true,
            watchSlidesProgress: true,
            direction: "vertical",
        });
        var swiper2 = new Swiper(".guidelinesforcv__slider", {
            spaceBetween: 47,
            slidesPerView: 1.8,
            mousewheel: true,
            slidesOffsetAfter: 300,
            thumbs: {
                swiper: swiper,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    slidesOffsetAfter: 0,
                },

                575: {
                    slidesPerView: 1.5,
                    spaceBetween: 30,
                    slidesOffsetAfter: 300,
                },

                767: {
                    slidesPerView: 1.8,
                    spaceBetween: 47,
                    slidesOffsetAfter: 300,
                },
            },
        });
    }
    // Dein zukünftiger Arbeitsplatz - slider
    if ($('*').is('.futjobplace-slider')) {
        var swiper = new Swiper(".futjobplace-slider", {
            slidesPerView: 3,
            spaceBetween: 20,
            mousewheel: true,
            speed: 700,

            pagination: {
                el: ".swiper-pagination",
                // dynamicBullets: true,
                clickable: true,
            },

            breakpoints: {
                320: {
                    slidesPerView: 1,
                },

                575: {
                    slidesPerView: 1.5,
                },

                768: {
                    slidesPerView: 2,
                },

                992: {
                    slidesPerView: 3,
                },
            },
        });
    }

    if ($('*').is('.arbeitsplatz__slider')) {
        var swiper = new Swiper(".arbeitsplatz__slider", {
            slidesPerView: 1,
            speed: 700,
            loop: true,

            pagination: {
                el: ".swiper-pagination",
                // dynamicBullets: true,
                clickable: true,
            },
        });
    }










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

        $('.customselect.selectcountry option').each(function () {
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