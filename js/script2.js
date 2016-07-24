
//var userInput = $('.add-item-input').val();
//var pressedEnterInput = $('.needed-list').prepend("<li><img class='left-image' src='images/checkmark2.png' height='20' width='20'><a>" + userInput + "</a><img class='right-image' src='images/cut.jpg' height='20' width='20'></li>");

$(document).ready(function() {
	$('.right-image').click(function() {
		$(this).parent().remove();
	});
	$('.left-image').on("click", function() {
		$(this).parents('li').addClass('color-change');
	});
	$('.left-image').dblclick(function() {
		$(this).parents('li').removeClass('color-change')
	})
	
	$('.left-image').hide();
	$('.right-image').hide();
	$('.needed-list li').mouseenter(function() {
		$('.left-image').show();
		$('.right-image').show();
	});
	$('.needed-list li').mouseleave(function() {
		$('.left-image').hide();
		$('.right-image').hide()
	});
	$('.btn').click(function() {
		var userInput = $('.add-item-input').val();
		$('.needed-list').prepend("<li><img class='left-image' src='images/checkmark2.png' height='20' width='20'><a>" + userInput + "</a><img class='right-image' src='images/cut.jpg' height='20' width='20'></li>");
		$('.left-image').hide();
		$('.right-image').hide();
		$('.needed-list li').mouseenter(function() {
			$('.left-image').show();
			$('.right-image').show();
		});
		$('.needed-list li').mouseleave(function() {
			$('.left-image').hide();
			$('.right-image').hide()
		});
		$('.right-image').click(function() {
			$(this).parent().remove();
		});
		$('.left-image').on("click", function() {
			$(this).parents('li').addClass('color-change');
		});
		$('.left-image').dblclick(function() {
			$(this).parents('li').removeClass('color-change')
		})
	});
	$('.add-item').keydown(function (e) {
		if (e.which == 13) {
			var userInput = $('.add-item-input').val();
			$('.needed-list').prepend("<li><img class='left-image' src='images/checkmark2.png' height='20' width='20'><a>" + userInput + "</a><img class='right-image' src='images/cut.jpg' height='20' width='20'></li>");
			$('.left-image').hide();
			$('.right-image').hide();
			$('.needed-list li').mouseenter(function() {
				$('.left-image').show();
				$('.right-image').show();
			});
			$('.needed-list li').mouseleave(function() {
				$('.left-image').hide();
				$('.right-image').hide();
			});
			$('.right-image').click(function() {
				$(this).parent().remove();
			});
			$('.left-image').on("click", function() {
				$(this).parents('li').addClass('color-change');
			});
			$('.left-image').dblclick(function() {
				$(this).parents('li').removeClass('color-change')
			}); 
			return false; //make sure this comes last for previous code to work	
		};
	});
	$('#arrow-down a').click(function() {
		$('.needed-list').slideToggle("slow", function() {

		});
	});
});




/*$(document).ready(function() {
	$('.left-image').on("click", function() {
		$(this).parents('li').addClass('color-change');
	});
	$('.left-image').dblclick(function() {
		$(this).parents('li').removeClass('color-change')
	})
})

*/