$(function () {
    var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    var active = 1;
    $(window).resize(function () {
        imgWH();
    }).resize();
    function imgWH() {
        var i = 0,
			imgpnglength = $('.imgpng').length;
        for (i = 0; i < imgpnglength; i++) {
            var imgpng = $('.imgpng').eq(i),
				imgpngW = imgpng.width(),
				maximgpngW = imgpng.attr("width");
            if (imgpngW >= maximgpngW) {
                imgpng.attr('width', maximgpngW);
            } else {
                imgpng.attr('width', imgpngW);
            }
        }
        var imgtopW = $('.imgtop').width(),
			imgtopH = $('.imgtop').height();
        $('.gem-back').css({ width: imgtopW * 0.375, height: imgtopH * 0.19, marginTop: imgtopH * 0.259 });
    }
    $(window).scroll(function () {
        var Yoffset = window.pageYOffset || document.documentElement.scrollTop;
        if (Yoffset > 2 * h) {
            $("#arrow_up").fadeIn(100);
        } else {
            $("#arrow_up").fadeOut(100);
        };
        if (Yoffset > 0.5 * h) {
            $("#indextitle").css('display', 'block');
        }
        else {
            $("#indextitle").css('display', 'none');
        };
        $("#c" + active).attr('src', 'image/indexout.png'/*tpa=http://www.chinajszb.com/js/image/indexout.png*/);
        for (var i = 0; i <= 7; i++) {
            if (Yoffset < h) {
                active = 1;
            }
            else if (Yoffset > i * h) {
                active = i + 2;
            }
        }
        $("#c" + active).attr('src', 'image/indexactive.png'/*tpa=http://www.chinajszb.com/js/image/indexactive.png*/);
    });
    $("#arrow_up").bind("click", function (e) {
        e.preventDefault();
        $("html").animate({ "scrollTop": "0" }, 1000);
        $("body").animate({ "scrollTop": "0" }, 1000);
    });

    $("#dropdown p").click(function () {
        var ul = $("#dropdown ul");
        var ul2 = $("#dropdown2 ul");
        ul2.slideUp("fast");
        if (ul.css("display") == "none") {
            ul.slideDown("fast");
        } else {
            ul.slideUp("fast");
        }
    });
    $(document).click(function (e) {
        var ul = $("#dropdown ul");
        var ul2 = $("#dropdown2 ul");
        e = window.event || e;
        obj = e.srcElement ? e.srcElement : e.target;
        var id = obj.id;
        if (id != "droptext" && id != "droptext2") { // 如果不是点击输入框
            ul.slideUp("fast");
            ul2.slideUp("fast"); // $comboContent是下拉框部分
            return;
        }
    });
    $("#dropdown ul li a").click(function () {
        var txt = $(this).text();
        $("#dropdown p").html(txt);
        $("#dropdown ul").hide();
    });
    $("#dropdown2 p").click(function () {
        var ul = $("#dropdown2 ul");
        var ul2 = $("#dropdown ul");
        ul2.slideUp("fast");
        if (ul.css("display") == "none") {
            ul.slideDown("fast");
        } else {
            ul.slideUp("fast");
        }
    });
    $("#dropdown2 ul li a").click(function () {
        var txt = $(this).text();
        $("#dropdown2 p").html(txt);
        $("#dropdown2 ul").hide();
    });
});



