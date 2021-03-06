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

//    gallery
    $('#car-gallery').lightGallery({
        selector: 'a',
        download: false,
    });
//    gallery
//    popoover
    $('[data-toggle="popover"]').popover();
//    popoover
//    top menu widget
    $('.top-header__widget__p').mouseenter(function () {
        $('.top-header__widget__menu').show();
    });
    $('.top-header__widget__menu').mouseleave(function () {
        $('.top-header__widget__menu').hide();
    });

    $('.tab-car__btn__option').each(function () {
        $(this).click(function () {
            $(this).parent().hide();
            $(this).parent().parent().find('.btn-features').show();
        });

    });

    // $('#btn-features').mouseleave(function () {
    //     $(this).hide();
    //     $('#tab-car__btn__option').parent().fadeIn();
    // });

//    top menu widget


    //my cars sort button
    $(".my-cars__buttons .dropdown-menu li a").click(function(){
        var selText = $(this).text();
        $(this).parents('.dropdown').find('.dropdown-toggle span').html(selText);
    });
//my cars sort button
    $('.my-profile .item p').on('click', function(e) {
        $(this).find('[class*="angle"]').toggleClass('fa-angle-up fa-angle-down')
    });
    // $('#car-sale').modal();
    $('#car-tariff').modal();

//    #car sale textarea


    var text_max = 500;
    $('#count_message').html('0 / ' + text_max );

    $('#text').keyup(function() {
        var text_length = $('#text').val().length;
        var text_remaining = text_max - text_length;

        $('#count_message').html(text_length + ' / ' + text_max);
    });
//    #car sale textarea
    
//    POPUPS OPEN CLOSE
    $('#my-cars .header--sell__btn').click(function () {
        $('#my-cars').modal('hide');
        setTimeout(function () {
            $('#car-sale').modal('show');
        },350);
    });
    $('#car-sale .close').click(function () {
        setTimeout(function () {
            $('#my-cars').modal('show');
        },350);
    });
//    POPUPS OPEN CLOSE
//    animate #car-sale
    function testAnim(x) {
        $('.modal .modal-dialog').attr('class', 'modal-dialog  ' + x + '  animated');
    };
    $('#car-sale').on('show.bs.modal', function (e) {
        var anim = 'fadeInUp';
        testAnim(anim);
    });
    $('#car-sale').on('hide.bs.modal', function (e) {
        var anim = '';
        testAnim(anim);
    })
//    animate #car-sale
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

});
//SHOW MORE LESS


