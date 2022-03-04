$(document).ready(function () {
    var formData = new Array();
    formData.push({name: 'action' , value: 'onload'});

    $.ajax({
        type: "POST",
        url: "../services/MiddlewareService.php",
        data: formData,
        dataType: "json",
        encode: true,
    }).done(function (data) {
        console.log(data);

        
        var s = makeHTMLFilterFomularResult(data);
        console.log(s);
        
        $("#checkbox-container-countries").html(s);
    });




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

function makeHTMLFilterFomularResult(data){
    let nl = '\n';
    let s='';
	s +='<div class="form-checkbox-container">' + nl;

    for (const key in data){
        var country = data[key]['HERKUNFTSLAND'];
        var appearences = data[key]['AMOUNT'];
        alert(country);
        s +='<input type="checkbox" id="continent-south-africa" name="continent-south-africa" value="SouthAfrica">' + nl;
        s +='<label for="vehicle1">' + country +'(' + appearences + ')</label>' + nl; 
        

    }

    s +='</div>' + nl;
    return s;
}

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
        s +='<div class="col sport-item-attributes">' + nl;
        
        delete entry['PINDEX'];
        delete entry['BILDPFAD'];
        for (const col in entry){
           
            s +='<div class="sport-item-attribute">' + nl;
            s +='<div class="sport-item-attribute-label">' + col + ':</div>';
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

