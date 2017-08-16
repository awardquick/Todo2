// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.


$(document).on('turbolinks:load', function(){
    $('#tasks_name').focus();

    $('.modal-footer .btn.btn-primary').click(function(){
      $('.modal-body form').submit();
    });
});
