JQuery(document).ready(function($){
    "user strict";
    var mainSlider = $('.main_slider');
    var hamburger = $('.hamburger_container');
    var menu = $('.hamburger_menu');
    var menuActive = false;
    var hamburgerClose = $('.hamburger_close');
    var fsOverlay = $('.fs_menu_overlay'); 


initFavourite();
initIsotopeFiltering();
 
function initFavourite(){
    if($('.favourite').length){
        var favs = $('.favourite');
        favs.each(function(){
            var fav = $(this);
            var active = false;
            if(fav.hasClass('active')){
                active = true;
            }
            fav.on('click',function(){
                if(active){
                    fav.removeClass('active');
                    active = false;
                }
                else{
                    fav.addClass('active');
                    active=true;
                }
            });
        });
    } 
}

function initIsotopeFiltering(){
    if($('.grid-sorting-button').length)
    {
        $('.grid-sorting-button').click(function()
        {
            $('.grid-sorting-button.active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $('.product-grid').isotope({
                filter: selector,
                animationOptions:{
                    duration: 750,
                    easing:'liner',
                    queue: false
                }
            });
            return false;
        });
    }
}



});