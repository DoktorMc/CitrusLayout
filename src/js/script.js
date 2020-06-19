jQuery(function ($) {
  $("#mobile").mask("+38(099) 999-99-99", { placeholder: "_" });
});

/* прикрепить событие submit к форме */

let bonus = $(".bottom_bonus");
let thnks = $(".thnks_wrap");


$("#bottom_bonus-form").submit(function(e) {

  e.preventDefault(); // avoid to execute the actual submit of the form.

  var form = $(this);
  var url = form.attr('action');

  $.ajax({
         type: "POST",
         url: url,
         data: $(form).serialize(), // serializes the form's elements.
         success: function(data)
         {
             alert(data); // show response from the php script.
         },
         error: function () {
          
      },
       });


});





















// $("#bottom_bonus-form").submit(function (event) {
//   /* отключение стандартной отправки формы */
  
//     var $form = $('#bottom_bonus-form'),
//       term = $form.find('input[name="phoneNumber"]').val(),
//       url = $form.action;

//     /* отправляем данные методом POST */
//     var posting = $.post(url, { phoneNumber: term });
//     posting.done(function () {
//       if (bonus.is(":visible")) {
//       event.preventDefault();
//       bonus.fadeIn(1000);
//       bonus.hide();

//       thnks.show();


//     });
//     $("#bottom_thnks-button").click(function (event) {
//       if (thnks.css("display") === 'block') {
//         event.preventDefault();
//         thnks.hide();
//         bonus.show();
//       }
//     });
//   }

// });






