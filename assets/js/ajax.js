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

            
            var s = makeHTMLResult(data);
            
            $(".description").html(s);
        });

        event.preventDefault();
    });
});

function makeHTMLResult(data){
    let nl = '\n';
    let s='';
	s +='<div class="sport-item">' + nl;
    
    
    s +='<div class="sport-item">' + nl;
    s +='<div class="sport-item">' + nl;
	s +='<tr>' + nl;

    for (const key in data){
        var entry = data[key];
        s +='<div class="sport-item-attribute">' + nl;
        for (const col in entry){
            s +='<div class="sport-item-attribute-label">' + col + '</div>';
            s +='<div class="sport-item-attribute-value">' + entry[col] + '</div>';
            console.log(`${col} : ${entry[col]}`);
        }

        s +='</div>' + nl;
    }

    s +='</div>' + nl;
    return s;
}

