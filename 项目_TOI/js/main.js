// esversion: 6;
$(function () {
    var s = 0;
    $("button.menu").click(function () {
        s++;
        $("nav").stop().fadeToggle();

        if (s == 1) {
            $("button.menu").text("×");
        } else if (s == 2) {
            $("button.menu").text('');
            let $menu = $("<span class='menu'></span>");
            $("button.menu").append($menu);

            s = 0;
        }

        // if ($("button.menu").text() === "×") {
        //     $("button.menu").text('');
        //     let $menu = $("<span class='menu'></span>");
        //     $("button.menu").append($menu);
        // } else {
        //     $("button.menu").text("×")
        // }

    });

    $(window).scroll(function () {
        var xtop = $(window).scrollTop();
        // console.log(xtop);
        if (xtop > 0) {
            $('div.site-nav').addClass('site-nav-header');
            $("div.nav").addClass("fixednav");
        } else {
            $('div.site-nav').removeClass('site-nav-header');
            $("div.nav").removeClass("fixednav");
        }
    });

    var n = 0;
    var w = $("ul.slider-content>li").width();
    $(".arrow-right").click(function () {
        n++;


        slider();

    });


    $(".arrow-left").click(function () {
        n--;

        slider();

    });

    $(window).resize(function () {
        w = $("ul.slider-content>li").width();
        slider();
    });


    function slider() {
        if (n == -1) {
            n = 13;
            $("ul.slider-content").css("left", -w * 14);
        }

        if (n == 15) {
            n = 1;
            $("ul.slider-content").css("left", 0);
        }
        $("ul.slider-content").stop().animate({
            "left": -n * w
        });
        // console.log(-n*w);
        $("ul.slider-content>li").eq(n + 1).addClass('winescale').siblings().removeClass("winescale");
    }
});
