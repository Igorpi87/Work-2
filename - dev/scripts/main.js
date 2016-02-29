
// slider
var sliderWidget = (function(){

	var _insertValues = function ($this){
		var from = $this.closest('.filter__slider').find('.filter__slider-input_from'),
			to = $this.closest('.filter__slider').find('.filter__slider-input_to');
		var values = $this.slider('option', 'values');	

		from.val(values[0]);
		to.val(values[1]);
	}

	return {
		init: function(){

			$('.filter__slider-element').each(function(){
				var $this = $(this),
					min = parseInt($this.data('min')),
					max = parseInt($this.data('max'));

				$this.slider({
				    range: true,
				    min: min,
				    max: max,
				    values: [ min, max ],
				    slide: function() {
				     	_insertValues($this);
			    	},
			    	create: function() {
			    		_insertValues($this);
			    	}
		  	    });
			    // $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
			    //   " - $" + $( "#slider-range" ).slider( "values", 1 ) );
					// }
			});

		}		
	}
}());

// functions for change view (lines, grid, rows);
 var ViewChange = (function(){

    var _previousClass = '';

	var _changeState = function($this) {
		var
			item = $this.closest('.sort__view-item'),
			view = item.data('view'),
			listOfItems = $('#products__list'),
			modPrefix = 'products__list_',
			classOfViewState = modPrefix + view;

		if (_previousClass == '') {
			_previousClass = listOfItems.attr('class');
		}
		listOfItems.attr('class', _previousClass + ' ' + classOfViewState);

	};


 	return {
		init: function() {
			$('.sort__view-link').on('click', function(e) {
				e.preventDefault();
				_changeState($(this));
				console.log('sss');
			})
		}
	}
}());


//reset button for chekboxes
var resetBtn = (function(){

    $('.filter__reset').on('click', function(e) {
        e.preventDefault();
        $('input[type=checkbox]').attr('checked', false);
    });

	

}());

$(document).ready(function(){

	ViewChange.init();
    $('.achtung__text').columnize({ columns: 2 });
	if($('.filter__slider-element').length) {
		sliderWidget.init();
	};


    // acco
    var c = $('.acco-trigger');
    var display = $(".filter__content").css('display');
    
    if(display == 'none') {
        c.css({'transform': 'rotate(180deg)'});
    } else {
        c.css({'transform': 'rotate(0deg)'});
    }

    $('.filter__title-link').on('click', function(event){
        
        event.preventDefault();
        
        var $this = $(this),
            list = $this.closest('.filter__list'),
            item = $this.closest('.filter__item'),
            items = list.find('.filter__item'),
            content = item.find('.filter__content'),
            // otherContent = list.find('.filter__content')
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