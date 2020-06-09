$(function() {
    $("#tabs a").click(showTab);
    
    function showTab() {
        var tabId = $(this).attr("data-tab");
        // tabId = "#story"
        $(".show-tab").removeClass("show-tab");
        $(tabId).addClass("show-tab");
        $(this).addClass("show-tab");
    }

$("nav > a").click(showPage);
    $("#mobile-nav").click(showMobileNav);
    $("body").click(hideMobileNav);
    
    // var isMobile = $("#mobile-nav").css("display") != "none";
    // if isMobile {
    
    // }

    function hideMobileNav () {
        $("#nav").removeClass("mobile-show");
    }

    function showMobileNav () {
        //     if ($("#nav").hasClass("mobile-show")) {
        //         $("#nav").removeClass("mobile-show");
        //     } else {
        //         $("#nav").addClass("mobile-show");
        //     }
        //     return false;
        // }
        $("#nav").toggleClass("mobile-show");
        return false;
    }

    function showPage () {
        $("#nav").removeClass("mobile-show");

        $(".show").removeClass("show");

        var id = $(this).attr("href");
        //id is like #about
        $(id).showClass("show");

        // return false; -  if clicking on a tag, include this to override that a tag click behavior
    }
});



