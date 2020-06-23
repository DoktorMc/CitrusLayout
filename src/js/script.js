jQuery(function ($) {
  $("#mobile").mask("+38(099) 999-99-99", { placeholder: "_" });
});


$("#bottom_bonus-form").submit(function (e) {

  e.preventDefault();

  var form = $(this);
  var url = form.attr('action');

  $.ajax({
    type: "POST",
    url: url,
    data: $(form).serialize(),
    success: function () {
      showThnks();
    },
    error: function () {
      showThnks();
    },
  });
});


function showThnks() {

  let bonus = $(".bottom_bonus");
  let thnks = $(".thnks_wrap");

  if (bonus.is(":visible")) {
    event.preventDefault();
    bonus.hide();
    thnks.show();
    $("#bottom_thnks-button").focus();
  }
  $(thnks).keydown(function (event) {
    if (event.which === 13 && thnks.is(":visible")) {
      $("#bottom_thnks-button").click(function (e) {
        e.preventDefault();
        thnks.hide();
        bonus.show();
        $("#bottom_bonus-form").trigger('reset');
      });

    }
  });
}