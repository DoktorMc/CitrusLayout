

/* прикрепить событие submit к форме */
$( document ).ready(function() {
  let bonus = $(".bottom_bonus");
  let thnks = $(".thnks_wrap");

  if (bonus.is(":visible")) {
    $("#bottom_bonus-form").submit(function(event) {
  /* отключение стандартной отправки формы */
  event.preventDefault();  
  bonus.fadeIn(1000);
    bonus.hide();
    
    thnks.show();
    
    
  });
  $("#bottom_thnks-button").click(function(event) {
   if(thnks.css("display")==='block'){
      event.preventDefault();
      thnks.hide();
      bonus.show();
    }
   });
} 

jQuery(function($){
  $("#mobile").mask("+38(099) 999-99-99",{placeholder:"_"});
});
});

  

  /* собираем данные с элементов страницы: */
  // var $form = $( this ),
  //     term = $form.find( 'input[name="phoneNumber"]' ).val(),
  //     url = $form.attr( 'action' );
  
  // /* отправляем данные методом POST */
  // var posting = $.post( url, { phoneNumber: term } );
  
  /* результат помещаем в div */
  // posting.done(function( data ) {
    // var content = $( data ).find( '#content' );
    // $( "#result" ).empty().append( content );
  // });

