$(document).ready(function () {
    $("form").submit(function (event) {
        var formData = $("#form1").serializeArray();
        formData.push({name: 'action' , value: $("#form1").attr('action')});

        $.ajax({
            type: "POST",
            url: "../services/MiddlewareService.php",
            data: formData,
            dataType: "json",
            encode: true,
        }).done(function (data) {
            console.log(data);

            

            for (const key in data){
                var entry = data[key];

                for (const col in entry){
                    console.log(`${col} : ${entry[col]}`);
                }
            }
            $(".description").html(data['Wing Tsun']['BESCHREIBUNG']);
        });

        event.preventDefault();
    });
});
  
