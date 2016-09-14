/**
 * Created by In on 11.09.2016.
 */
$(document).ready(function(){
    var sliderContent = $('.slider').children('.slider-content'),
        item = sliderContent.find('.slider-content-item'),
        itemWidth = item.css('width').replace('px', ''),
        //q = itemWidth.replace('px', ''),
        itemLen = item.length,
        current = 1,
        totalItemWidth = itemWidth * itemLen;

        console.log(totalItemWidth);

    $('.slider-nav').find('.slider-nav-link').on('click', function(){
        var direction = $(this).data('dir'),
            loc = itemWidth;

        (direction === 'Next') ? ++current : --current;

        if(current === 0){
            current = itemLen;
            loc = totalItemWidth - itemWidth;
            direction = 'Next';
            console.log(loc);
        } else if(current - 1 === itemLen){
            current = 1;
            loc = 0;
        }

        transition(sliderContent, loc, direction);
        console.log(current);
    });

    function transition(container, loc, direction){
        var unit;

        if(direction && loc != 0){
            unit = (direction === 'Next') ? '-=' : '+=';
        }
        container.animate({
            'margin-left': unit ? (unit + loc) : loc
        })
    }
});

