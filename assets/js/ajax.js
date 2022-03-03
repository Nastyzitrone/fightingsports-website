$(document).ready(function () {
    $("form").submit(function (event) {
      var formData = $("#form1").serializeArray();
      formData.push({name: 'action' , value: $("#form1").attr('action')});
      
      console.log(formData);
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
  
