


$(document).ready(function() {
	$('ul.needed-list a').on("click", function() {
		$(this).addClass('color-change');
		
	})
	$('ul.needed-list a').on("dblclick", function() {
		$(this).removeClass('color-change');
	})
  $('.btn').click(function() {
    var userText = $('.add-item-input').val();
    $('.needed-list').prepend("<li><img src='images/checkmark.png' height='25' width='25'><a>" + userText + "</a></li>");
    $('ul.needed-list a').on("click", function() {
      $(this).addClass('color-change');
    })
      $('ul.needed-list a').on("dblclick", function() {
      $(this).removeClass('color-change');
    });
  });
});



 
$(document).ready(function() {
  $('.add-item').keydown(function (e) {
    var userText = $('.add-item-input').val();

    if (e.which == 13) {
      //alert("enter");
      $('.needed-list').prepend("<li><img src='images/checkmark.png' height='25' width='25'><a>" + userText + "</a></li>");
      $('ul.needed-list a').on("click", function() {
        $(this).addClass('color-change');
      })
      $('ul.needed-list a').on("dblclick", function() {
        $(this).removeClass('color-change');
      });
      return false; /*this stops the enter key from refreshing the page*/
    }
  });
});












//http://www.coding-issues.com/2013/10/how-to-setget-textbox-value-using.html
//   http://stackoverflow.com/questions/2441565/how-do-i-make-a-div-element-editable-like-a-textarea-when-i-click-it
//https://www.youtube.com/watch?v=_maaaWx3bYQ
//https://www.youtube.com/watch?v=gIvR-WX5lIQ&list=PLsuLcuI9F2k1Hi0BQK3OE1wmkqiwG-dgd


/*$(document).ready(function() {
  $('.btn').on("click", function() {
    var userText = $('.add-item-input').val();
    $('.needed-list').append("<li><a>" + userText + "</a></li>");
  })
  $('.needed-list a').on("click", function() {
    $(this).addClass('color-change');
    $(this).on("dblclick", function() {
      $(this).removeClass('color-change');
    });
  });

});
*/


