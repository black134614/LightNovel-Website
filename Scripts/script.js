$(function () {
    $("#main-carousel.owl-carousel").owlCarousel({
        items: 1,
        nav: true,
        responsive: {
            0: {
                nav: false
            },
            576: {
                nav: false
            },
            768: {
            },
            992: {
            },
            1200: {
            }
        },
        loop: true,
        margin: 25,
        autoplay: false,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        dots: true,
    });
    $('#main-carousel.owl-carousel').on('translate.owl.carousel', function (e) {
        var obj = {
            animateOut: ['animate__fadeOut', 'animate__FadeOutDown', 'animate__FadeOutLeft', 'animate__FadeOutRight', 'animate__FadeOutUp', 'animate__FadeOutTopLeft', 'animate__FadeOutTopRight', 'animate__FadeOutBottomLeft', 'animate__FadeOutBottomRight'],
            animateIn: ['animate__fadeIn', 'animate__fadeInDown', 'animate__fadeInUp', 'animate__flipInX', 'animate__flipInY', 'animate__rotateIn', 'animate__jackInTheBox', 'animate__zoomIn', 'animate__zoomInDown', 'animate__zoomInUp', 'animate__slideInDown', 'animate__slideInUp', 'animate__backInDown', 'animate__backInUp', 'animate__bounceIn', 'animate__bounceInDown', 'animate__bounceInUp']
        }
        var numbTem = Math.floor(Math.random() * obj.animateIn.length) //rounding number


        var index = e.item.index;
        for (var i = 0; i < obj.animateIn.length; i++) {
            $('.owl-item').removeClass(obj.animateIn[i]);

        }
        $('.owl-item').removeClass('animate__animated');
        $('.owl-item').eq(index).addClass('animate__animated ' + obj.animateIn[numbTem]);
    });
    $("#main-category.owl-carousel").owlCarousel({
        responsiveClass: true,
        responsive: {
            0: {
                items: 3,
            },
            576: {
                items: 4,
            },
            768: {
                items: 5,
            },
            992: {
                items: 6,
            },
            1200: {
                items: 8,
            }
        },
        loop: true,
        margin: 10,
        autoplay: false,
        nav: true,
        dots: true,
    });
    $("#web-rating.owl-carousel").owlCarousel({
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 2,
            },
            768: {
                items: 3,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 4,
            }
        },
        dots: true,
        loop: true,
        margin: 15,
        autoplay: false,
    });
    $(".owl-list.owl-carousel").owlCarousel({
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 2,
            },
            768: {
                items: 3,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 4,
            }
        },
        loop: true,
        margin: 15,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        dots: true,
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
            $('#back-to-top').removeClass('active');
        }
    });
    $('#back-to-top').click(function () {
        $('#back-to-top').addClass('active');
        $('#back-to-top .fa').addClass('animate__fadeOutUpBig animate__animated animate__slower');
        setTimeout(() => {
            $('#back-to-top .fa').removeClass('animate__fadeOutUpBig animate__animated animate__slower')
        }, 2000);
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });

    $(".news .item").on("mouseover", function () {
        $(this).find(".item-title").addClass("animate__animated animate__bounceOut");
    });
    $(".news .item").on("mouseleave", function () {
        $(this).find(".item-title").removeClass("animate__animated animate__bounceOut");
    })

    $(".product .item").on("mouseover", function () {
        $(this).addClass("animate__animated animate__swing animate__fast");
    });
    $(".product .item").on("mouseleave", function () {
        $(this).removeClass("animate__animated animate__swing animate__fast");
    })

    $('.money').mask('000.000.000.000.000đ', { reverse: true });
    $('.phone-number').mask("000-000-0000", { selectOnFocus: true });

    $(".item").on("mouseover", function () {
        $(this).addClass("shadow-dreamy");
    });
    $(".item").on("mouseleave", function () {
        $(this).removeClass("shadow-dreamy");
    })

    //facncy
    $.fn.fancyMorph = function (opts) {

        var Morphing = function ($btn, opts) {
            var self = this;

            self.opts = $.extend({
                animationEffect: false,
                infobar: false,
                buttons: ['close'],
                smallBtn: false,
                touch: false,
                baseClass: 'fancybox-morphing',
                afterClose: function () {
                    self.close();
                }
            }, opts);

            self.init($btn);
        };

        Morphing.prototype.init = function ($btn) {
            var self = this;

            self.$btn = $btn.addClass('morphing-btn');

            self.$clone = $('<div class="morphing-btn-clone" />')
                .hide()
                .insertAfter($btn);

            // Add wrapping element and set initial width used for positioning
            $btn.wrap('<span class="morphing-btn-wrap"></span>').on('click', function (e) {
                e.preventDefault();

                self.start();
            });

        };

        Morphing.prototype.start = function () {
            var self = this;

            if (self.$btn.hasClass('morphing-btn_circle')) {
                return;
            }

            // Set initial width, because it is not possible to start CSS transition from "auto"
            self.$btn.width(self.$btn.width()).parent().width(self.$btn.outerWidth());

            self.$btn.off('.fm').on("transitionend.fm webkitTransitionEnd.fm oTransitionEnd.fm MSTransitionEnd.fm", function (e) {

                if (e.originalEvent.propertyName === 'width') {
                    self.$btn.off('.fm');

                    self.animateBg();
                }

            }).addClass('morphing-btn_circle');

        };

        Morphing.prototype.animateBg = function () {
            var self = this;

            self.scaleBg();

            self.$clone.show();

            // Trigger repaint
            self.$clone[0].offsetHeight;

            self.$clone.off('.fm').on("transitionend.fm webkitTransitionEnd.fm oTransitionEnd.fm MSTransitionEnd.fm", function (e) {
                self.$clone.off('.fm');

                self.complete();

            }).addClass('morphing-btn-clone_visible');
        };

        Morphing.prototype.scaleBg = function () {
            var self = this;

            var $clone = self.$clone;
            var scale = self.getScale();
            var $btn = self.$btn;
            var pos = $btn.offset();

            $clone.css({
                top: pos.top + $btn.outerHeight() * 0.5 - ($btn.outerHeight() * scale * 0.5) - $(window).scrollTop(),
                left: pos.left + $btn.outerWidth() * 0.5 - ($btn.outerWidth() * scale * 0.5) - $(window).scrollLeft(),
                width: $btn.outerWidth() * scale,
                height: $btn.outerHeight() * scale,
                transform: 'scale(' + (1 / scale) + ')'
            });
        };

        Morphing.prototype.getScale = function () {
            var $btn = this.$btn,
                radius = $btn.outerWidth() * 0.5,
                left = $btn.offset().left + radius - $(window).scrollLeft(),
                top = $btn.offset().top + radius - $(window).scrollTop(),
                windowW = $(window).width(),
                windowH = $(window).height();

            var maxDistHor = (left > windowW / 2) ? left : (windowW - left),
                maxDistVert = (top > windowH / 2) ? top : (windowH - top);

            return Math.ceil(Math.sqrt(Math.pow(maxDistHor, 2) + Math.pow(maxDistVert, 2)) / radius);
        };

        Morphing.prototype.complete = function () {
            var self = this;
            var $btn = self.$btn;

            $.fancybox.open({ src: $btn.data('src') || $btn.attr('href') }, self.opts);

            $(window).on('resize.fm', function () {
                //self.scaleBg();
            });
        };

        Morphing.prototype.close = function () {
            var self = this;
            var $clone = self.$clone;

            self.scaleBg();

            $clone.one('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function (e) {
                $clone.hide();

                self.$btn.removeClass('morphing-btn_circle');
            });

            $clone.removeClass('morphing-btn-clone_visible');

            $(window).off('resize.fm');
        };

        // Init
        this.each(function () {
            var $this = $(this);

            if (!$this.data("morphing")) {
                $this.data("morphing", new Morphing($this, opts));
            }

        });

        return this;
    };

    $("[data-morphing]").fancyMorph({
        hash: 'morphing'
    });

    $(".detail").find("img").addClass("d-block w-100");

    $('[data-toggle="tooltip"]').tooltip({
        delay: { "show": 800, "hide": 300 }
    })

    $(".navbar-toggler").click(function () {
        $(this).find(".fa").toggleClass("on");
    });

    $(".dropdown-menu").addClass("animate-dropdown slideIn");

    AOS.init({
        easing: 'ease-out-back',
        duration: 1000
    });

    $('.intro .icon').on({
        mouseover: function () {
            $(this).addClass('animate__flip animate__animated');
            setTimeout(() => {
                $(this).removeClass('animate__flip animate__animated')
            }, 2000);
        },
        click: function () {
            $(this).addClass('animate__flip animate__animated');
            setTimeout(() => {
                $(this).removeClass('animate__flip animate__animated')
            }, 2000);
        },
    });
    $(window).on('load',function () {
        $('.intro .icon').addClass('animate__flip animate__animated');
        setTimeout(() => {
            $('.intro .icon').removeClass('animate__flip animate__animated')
        }, 2000);
    })

    //luoi`....
    $('.product .item .btn.btn-danger').addClass('btn-buy');

    //loader
    setTimeout(() => {
        $('#loading').hide();
    }, 1000);
});

