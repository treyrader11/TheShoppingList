


$(document).ready(function() {
	$('ul.needed-list a').on("click", function() {
		$(this).addClass('color-change');
		
	})
	$('ul.needed-list a').on("dblclick", function() {
		$(this).removeClass('color-change');
	})
  $('.btn').click(function() {
    var userText = $('.add-item-input').val();
    $('.needed-list').prepend("<li><a>" + userText + "</a></li>");
    $('ul.needed-list a').on("click", function() {
      $(this).addClass('color-change');
    })
      $('ul.needed-list a').on("dblclick", function() {
      $(this).removeClass('color-change');
    });
  });
});


//when you press the enter key, the value of the textarea is sent to the meeded-list.
//more code under so that the new items can receive the addClass. 
$(document).ready(function() {
  $('.add-item').keydown(function (e) {
    var userText = $('.add-item-input').val();

    if (e.which == 13) {

      var newItem = $('.needed-list').prepend("<li><img class='left-image' src='images/checkmark2.png' height='20' width='20'><a>" + userText + "</a><img class='right-image' src='images/cut.jpg' height='20' width='20'></li>");
      newItem.on("click", ".right-image", function() {
        $(this).remove();
      })
      $('ul.needed-list a').on("click", function() {
        $(this).addClass('color-change');
        
      })
      $('ul.needed-list a').on("dblclick", function() {
        $(this).removeClass('color-change');
      })
      return false; /* default behavior/this stops the enter key from refreshing the page*/
      //userText.val('');
      
      

    }
 

  });
});


//when you click the arrow icon, the list toggles down.

$(document).ready(function() {
  //$('.needed-list').hide();
  $('#arrow-down a').click(function() {
    $('.needed-list').slideToggle("slow", function() {

    })
  })
 });








//icons display

$(document).ready(function() {
  $('.needed-list .left-image').hide();
  $('.needed-list .right-image').hide();
  $('.needed-list li').mouseenter(function() {
    $('.needed-list .left-image').show();
    $('.needed-list .right-image').show();
  })
  $('.needed-list li').mouseleave(function() {
    $('.needed-list .left-image').hide();
    $('.needed-list .right-image').hide();
  })
});




$(document).ready(function() {
  $('.right-image'/*scissors*/).on("click", function (){
    $(this).parent().remove();
  });
});






//http://www.coding-issues.com/2013/10/how-to-setget-textbox-value-using.html
//   http://stackoverflow.com/questions/2441565/how-do-i-make-a-div-element-editable-like-a-textarea-when-i-click-it
//https://www.youtube.com/watch?v=_maaaWx3bYQ
//https://www.youtube.com/watch?v=gIvR-WX5lIQ&list=PLsuLcuI9F2k1Hi0BQK3OE1wmkqiwG-dgd








