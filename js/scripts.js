$(document).ready(function() {
  $("#form").submit(function(event) {
    var height = $("input#height").val();
    console.log(height);
    if(height < 4) {
      $("#small").show();
      $("#medium").hide();
      $("#large").hide();
    }else if(height >= 4 && height <= 5){
      $("#medium").show();
      $("#small").show();
      $("#large").hide();  
    }else if(height >5) {
      $("#large").show();
      $("#medium").show();
      $("#small").show();
    }
    event.preventDefault();
  });
});