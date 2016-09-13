/**
 * Created by In on 11.09.2016.
 */
$(function($) {
    var allAccordions = $('.accordion-data');
    var allAccordionItems = $('.accordion-item');
    $('.accordion-item-wrp > .accordion-item').click(function() {
        if($(this).hasClass('open'))
        {
            $(this).removeClass('open');
            $(this).parent().removeClass('open');
            $(this).next().slideUp("slow");
        }
        else
        {
            allAccordions.slideUp("slow");
            allAccordionItems.removeClass('open');
            allAccordionItems.parent().removeClass('open');
            $(this).addClass('open');
            console.log($(this).parent().addClass('open'));
            $(this).next().slideDown("slow");
            return false;
        }
    });
});
