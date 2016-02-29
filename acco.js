
$(document).ready(function(){
    
    console.log('jquery OK'); 
    
    $('.filter__title-link').on('click', function(event){
        
        event.preventDefault();
        
        var $this = $(this),
            list = $this.closest('.filter__list'),
            item = $this.closest('.filter__item'),
            items = list.find('.filter__item'),
            content = item.find('.filter__content'),
            otherContent = list.find('.filter__content')
            duration = 250;

        if(!item.hasClass('active')){
            items.removeClass('active');
            item.addClass('active');

            var t = $this.find('.acco-trigger');

            t.css({'transform': 'rotate(180deg)'});

     
            content.stop(true, true).slideDown(duration, function(){

            });
        } else {
            $('.acco-trigger').css({'transform': 'rotate(0deg)'});
            content.stop(true, true).slideUp(duration);
            item.removeClass('active');
        }
    });
});