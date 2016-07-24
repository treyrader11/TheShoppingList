
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
		$(this).addClass('selected');
		$('.selected > .left-image').show();  //very close!
		$('.selected > .right-image').show();
	});
	$('.needed-list li .selected').mouseleave(function() {
		$(this).removeClass('selected')
		$('.left-image').hide();
		$('.right-image').hide()
	});





	$('.btn').click(function() {
		var userInput = $('.add-item-input').val();
		var newUserInput = "<li><img class='left-image' src='images/checkmark2.png' height='20' width='20'><a>" + userInput + "</a><img class='right-image' src='images/cut.jpg' height='20' width='20'></li>";
		if(userInput == ' ') {
				alert('PLease type an item into the text-box');
		}
		$('.needed-list').prepend(newUserInput);
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
			var newUserInput = "<li><img class='left-image' src='images/checkmark2.png' height='20' width='20'><a>" + userInput + "</a><img class='right-image' src='images/cut.jpg' height='20' width='20'></li>";
			$('.needed-list').prepend(newUserInput);
			$('.add-item-input').blur();
			if(userInput == ' ') {
				alert('PLease type an item into the text-box');
				return false;
			}
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
			$('.add-item-input').focus(function() {
				$(this).val(" ");
			}) 
			return false; //make sure this comes last for previous code to work	
			 
		}
		
	});
	$('#arrow-down a').click(function() {
		$('.needed-list').slideToggle("slow", function() {

		});
	});
});




/*$(document).ready(function() {
	$('.add-item').keydown(function(e) {
  		if (e.keyCode == 13) {
    		$(this).val('').focus();    
    		return false;
  		}        
	})
});*/

$(document).ready(function() {
	$('.add-item-input').focus(function() {
		$(this).val(" ");
	}) 
});
