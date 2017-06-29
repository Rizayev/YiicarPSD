/**
 * Created by elsevar on 18.06.17.
 */
$(document).ready(function() {
// INDEX AUTOS
    $('#features-auto').owlCarousel({
        items: 3,
        loop: true,
        autoHeight: true
    });
    $('#list-auto').owlCarousel({
        items: 4,
        loop: true
    });
// INDEX AUTOS

//    SMOOTH SCROLL
    $("a[href='#top']").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
//    SMOOTH SCROLL

//    POPUP
    $('#popup .glyphicon-eye-open').click(function () {
        $(this).toggleClass('glyphicon-eye-close');
        $('#popup #password').attr('type', function(index, attr){
            return attr == 'password' ? 'text' : 'password';
        });
    });
//    POPUP
});


//SHOW MORE LESS
$(document).ready(function() {
    // Configure/customize these variables.
    var showChar = 400;  // How many characters are shown by default
    var ellipsestext = "...";
    var moretext = 'Zobrazit celý popis  <i class="fa fa-angle-down" aria-hidden="t rue"></i>';
    var lesstext = 'Show less  <i class="fa fa-angle-up" aria-hidden="t rue"></i>';


    $('.more').each(function() {
        var content = $(this).html();

        if(content.length > showChar) {

            var c = content.substr(0, showChar);
            var h = content.substr(showChar, content.length - showChar);

            var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent search-panel__box__more"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';

            $(this).html(html);
        }

    });

    $(".morelink").click(function(){
        if($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });

    $('#car-gallery').lightGallery({
        selector: 'a',
        download: false,
    });
});
//SHOW MORE LESS


 //GALLERY

 //GALLERY
