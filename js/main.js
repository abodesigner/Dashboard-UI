$(document).ready(function() {
  // Init ckeditor
  CKEDITOR.replace("editor1");

  // Get current Year
  $("#year").text(new Date().getFullYear());
});
