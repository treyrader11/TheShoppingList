'use strict';

var $ = require('jquery');

$(document).ready(function() {
	var $shoppingList = $('#needed-list');
	var $item = $('li');
	var $addItem = $('.add-item');
	var $btn = $('#btn');
	var $itemInput = $('#add-item-input');
	var $arrow = $('#arrow-down');

	$itemInput.blur();

	$shoppingList.on('mouseenter', '.item', function() {
		$(this).find('.right-icon').show();
		$(this).find('.left-icon').show();
	});
	$shoppingList.on('mouseleave', '.item', function() {
		$(this).find('.left-icon').hide();
		$(this).find('.right-icon').hide();
	});
	
	$shoppingList.on('click', '.right-icon', function() {
		$(this).closest('li').fadeOut(300, function() {
			$(this).remove();
		});
	});
	$shoppingList.on('click', '.left-icon', function() {
		$(this).closest('li').toggleClass('color-change');
	});


	 $btn.click(function() {
    	var inputValue = $itemInput.val();
    	if(inputValue == ''){
				alert("Please insert an item.");
			}
			else {
				var newItem = "<li class='item'><img class='left-icon' src='images/checkmark2.png' height='20' width='20'><a>" + 
					inputValue + 
					"</a><img class='right-icon' src='images/cut.jpg' height='20' width='20'></li>";
				$shoppingList.prepend(newItem);
			}
     });
  

	$addItem.keydown(function (e) {
		if (e.which == 13) {
			var inputValue = $itemInput.val();
			if(inputValue == ''){
				alert("Please insert an item.");
			}
			else {
				var newItem = "<li class='item'><img class='left-icon' src='images/checkmark2.png' height='20' width='20'><a>" + 
					inputValue + 
					"</a><img class='right-icon' src='images/cut.jpg' height='20' width='20'></li>";
				$shoppingList.prepend(newItem);
			}
			$itemInput.blur();
			return false; //make sure this comes last for previous code to work	
		};
	});


	$arrow.click(function() {
		$('#needed-list').slideToggle("slow");
	});
	
	$itemInput.focus(function() {
		$(this).val('');
	});
});


