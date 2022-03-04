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
    let count = 1;
    let nl = '\n';
    let s='';
	s +='<div class="sport-items-container">' + nl;
    
    
    $("body"+count).css("font-size", "100px");
   
	

    for (const key in data){
        var entry = data[key];
        var uri = '../assets/images/' + entry['BILDPFAD'] + '' ;
        let encoded = encodeURI(uri);
        s +='<div class="sport-item">' + nl;
        s +='<div class="sport-item-image" style="background-image: url(\' ';
        s += encoded ;
        s +='\')">' + nl;
       
        s +='</div>' + nl;
        s +='<div class="col">' + nl;
        for (const col in entry){
            s +='<div class="sport-item-attribute">' + nl;
            s +='<div class="sport-item-attribute-label">' + col + '</div>';
            s +='<div class="sport-item-attribute-value">' + entry[col] + '</div>';
            s +='</div>' + nl;
            console.log(`${col} : ${entry[col]}`);
        }
        s +='</div>' + nl;
        s +='</div>' + nl;

        count++;
    }

    s +='</div>' + nl;
    $("#fighting-sport-image-"+count).css("background-color", "yellow");
    return s;
}

