var sliderWidget = (function(){

	var _insertValues = function (){
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
				     	//_insertValues($this);
			    	},
			    	create: function() {
			    		//_insertValues($this);
			    	}
		  	    });
			    // $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
			    //   " - $" + $( "#slider-range" ).slider( "values", 1 ) );
					// }
			});

		}		
	}
}());


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



$(document).ready(function(){

	ViewChange.init();

	if($('.filter__slider-element').length) {
		sliderWidget.init();
	}

});