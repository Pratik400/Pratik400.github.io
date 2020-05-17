$(document).ready(function () {


    // NAVBAR STICKY JS ONLY WORKS FOR MOB
    // $("body").scroll(function () {

    //     var y = $("body").scrollTop(), 
    //         mainheader = $(".main-header"); 
      

    //     if (y >= 50) {
    //         mainheader.css({
    //             position: "fixed",
    //             "top": "0",
    //         });
    //         $("body").css("padding-top", "95px");
    //     } else {
    //         mainheader.css("position", "sticky");
    //         $("body").css("padding-top", "0px");
    //     }

    //     dropdwn = $(".category-tab-dropdwn");
    //     //  div id
    //     if (y > 50) {
    //         dropdwn.show();
    //     } else {
    //         dropdwn.hide();
    //     }

    // });


    // navbar sticky js only works for desktop

    $(document).scroll(function () {

        var y = $(document).scrollTop(), //get page y value 
            mainheader = $(".main-header"); // your div id
        // console.log("desktop   " + y);

        if (y >= 50) {
            mainheader.css({
                position: "fixed",
                "top": "0",
            });
            $("body").css("padding-top", "95px");
        } else {
            mainheader.css("position", "sticky");
            $("body").css("padding-top", "0px");

        }

        // dropdwn = $(".category-tab-dropdwn");
        // //  div id
        // if (y > 50) {
        //     dropdwn.show();
        // } else {
        //     dropdwn.hide();
        // }

    });

    // $(document).ready(function () {
    function toggleDropdown(e) {
        const _d = $(e.target).closest('.dropdown'),
            _m = $('.dropdown-menu', _d);
        setTimeout(function () {
            const shouldOpen = e.type !== 'click' && _d.is(':hover');
            _m.toggleClass('show', shouldOpen);
            _d.toggleClass('show', shouldOpen);
            $('[data-toggle="dropdown"]', _d).attr('aria-expanded', shouldOpen);
        }, e.type === 'mouseleave' ? 80 : 0);
    }
    function anyNavContent() {
        $(".tab-content-col .tab-content .tab-pane").first().addClass('active show');
        $(".tabs-col .nav-pills li a").first().addClass('active show');
    }
    function resetNavContent() {
        $(".tab-content-col .tab-content .tab-pane").siblings().removeClass('active show');
        $(".tabs-col .nav-pills li a").removeClass('active show');
    }
    $('.main-header').on('mouseenter mouseleave', '.dropdown', toggleDropdown).on('click', '.dropdown-menu a', toggleDropdown);
    $('#categoryNavDropdown').on('mouseenter mouseleave', '.dropdown', toggleDropdown).on('click', '.dropdown-menu a', toggleDropdown)
    $('.category-tab-dropdwn').on('mouseenter click', anyNavContent).on('mouseleave', resetNavContent);
    // });

    //open/show vertical category tabs in hover
    (function ($) {
        $(function () {
            $('.category-tabmenu').off('click.bs.tab.data-api', '[data-hover="tab"]');
            $('.category-tabmenu').on('mouseenter.bs.tab.data-api',
                '[data-toggle="tab"], [data-hover="tab"]',
                function () {
                    $(this).tab('show');
                });
        });
    })(jQuery);

    //stop drop downs close on click inside dropdown
    $('.dropdown-menu').click(function (e) {
        e.stopPropagation();
    });


    //navbar category left right scroll

    // $('#right-button').click(function () {
    //     event.preventDefault();
    //     $(this).hide();
    //     $('#navbar-scroll').animate({
    //         scrollLeft: "+=1000px"
    //     }, "slow");
    //     $('#left-button').show();
    //     // alert('1000');
    // });

    // $('#left-button').click(function () {
    //     event.preventDefault();
    //     $(this).hide();
    //     $('#navbar-scroll').animate({
    //         scrollLeft: "-=1000px"
    //     }, "slow");
    //     $('#right-button').show();
    // });

    // $(window).resize(function () {

    //     if ($(window).width() > 1200) {
    //         $("#left-button").hide();
    //         $("#right-button").hide();
    //     }

    //     if ($(window).width() < 1200) {
    //         $("#right-button").show();
    //     }
    // });

    // // $(document).ready(function () {

    // if ($(window).width() > 1200) {
    //     $("#left-button").hide();
    //     $("#right-button").hide();
    // }

    // if ($(window).width() < 1200) {
    //     $("#right-button").show();
    // }
    // });


    // show modal from drop down menu
    $('.dropdown-menu').click(function (e) {
        e.stopPropagation();
        if ($(e.target).is('[data-toggle=modal]')) {
            $($(e.target).data('target')).modal()
        }
    });

    //showing correct sign in or register tabs
    $('#signinbtn').click(function () {
        event.preventDefault();
        $('#signin-tab').addClass('active');
        $('#signin').addClass('show active');

        $('#register-tab').removeClass('active');
        $('#register').removeClass('show active');

        $('.when-sign').addClass('d-block').removeClass('d-none');
        $('.when-reg').addClass('d-none').removeClass('d-block');

    });


    $('#registerbtn').click(function () {
        event.preventDefault();
        $('#register-tab').addClass('active');
        $('#register').addClass('show active');

        $('#signin-tab').removeClass('active');
        $('#signin').removeClass('show active');

        $('.when-reg').addClass('d-block').removeClass('d-none');
        $('.when-sign').addClass('d-none').removeClass('d-block');
    });


    $('#ok').on("click", function () {
        $('#register-tab').addClass('active');
        $('#register').addClass('show active');
        $('#signUpModal').modal('show');

        $('#signin-tab').removeClass('active');
        $('#signin').removeClass('show active');

        $('.when-reg').addClass('d-block').removeClass('d-none');
        $('.when-sign').addClass('d-none').removeClass('d-block');

    });

    //toggle siide content
    $('#signin-tab').click(function () {
        event.preventDefault();
        $('.when-sign').addClass('d-block').removeClass('d-none');
        $('.when-reg').addClass('d-none').removeClass('d-block');
    });

    $('#register-tab').click(function () {
        event.preventDefault();
        $('.when-reg').addClass('d-block').removeClass('d-none');
        $('.when-sign').addClass('d-none').removeClass('d-block');

    });

    // $('.step2').hide();
    $('#changenumer').hide();

    $('#sendOtp1').click(function () {
        event.preventDefault();
        $('#mobnumber').attr("disabled", "disabled");
        $('.step2').show();
        $('.fs1').hide();
        $('.OTP-sent').fadeIn(700).delay(1500).fadeOut(900);

        $('#sendOtp1').hide();
        $('#changenumer').show();

    });

    $('#changenumer').click(function () {
        event.preventDefault();
        $(this).hide();
        $('#mobnumber').attr("disabled", false);
        $('.step2').hide();
        $('.fs1').show();
        $('#sendOtp1').show();
    });

    $('#resendOtp').click(function () {
        event.preventDefault();
        $('.OTP-sent').fadeIn(700).delay(1500).fadeOut(900);
    });

    //for address borders 
    $( ".form-focus" ).focus(function() {
        $(".input-border").css("border-radius", "0px");
        $(".input-group-text-button").css("border-radius", "0px");
    });



});