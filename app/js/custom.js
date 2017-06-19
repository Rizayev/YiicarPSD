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
});

