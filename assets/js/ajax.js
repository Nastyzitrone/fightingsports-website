$(document).ready(function () {
    $("form").submit(function (event) {
      var formData = {
          action: 'filter',
        fname: $("#fname").val(),
        lname: $("#lname").val()
      };
  
      $.ajax({
        type: "POST",
        url: "../controller/StartController.php",
        data: formData,
        dataType: "json",
        encode: true,
      }).done(function (data) {
        console.log(data);
        $(".description").html(data.test);
      });
  
      event.preventDefault();
    });
});
  
