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
        var s = makeHTMLFilterFomularResult(data);

        $( function() {
            $( "#range-slider" ).slider({
                range: true,
                min: 0,
                max: 8000000,
                values: [ 0, 2500000 ],
                slide: function( event, ui ) {

                    // Get values
                    var min = ui.values[0];
                    var max = ui.values[1];
                    $('#range').text(min+' - ' + max);
                }
            });
        } );

        $( ".selector" ).slider( "values", [ 55, 105 ] );
        $("#checkbox-container-countries").html(s);
    });

    $("form").submit(function (event) {
        var formData = $("#form1").serializeArray();
        var valuesMemberValues = $( "#range-slider" ).slider( "values" );
        formData.push({name: 'action' , value: $("#form1").attr('action')});
        formData.push({name: 'min-member' , value: valuesMemberValues[0]});
        formData.push({name: 'max-member' , value: valuesMemberValues[1]});
        
        console.log(formData);
        $.ajax({
            type: "POST",
            url: "../services/MiddlewareService.php",
            data: formData,
            dataType: "json",
            encode: true,
        }).done(function (data) {
            var s = makeHTMLResult(data);
            
            $(".description").html(s);
        });

        event.preventDefault();
    });
});

function makeHTMLFilterFomularResult(data){
    count = 1;
    let nl = '\n';
    let s='';
	s +='<div class="form-checkbox-container">' + nl;

    for (const key in data){
        var country = data[key]['HERKUNFTSLAND'];
        var appearences = data[key]['AMOUNT'];
        s +='<input type="checkbox" id="continent-south-africa" name="continent-south-africa" value="SouthAfrica">' + nl;
        s +='<label for="vehicle1">' + country +'(' + appearences + ')</label>' + nl; 
        if((count%2) == 0){
            s += '</br>';
        }
        count++;
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
        }
        s +='</div>' + nl;
        s +='</div>' + nl;
        count++;
    }

    s +='</div>' + nl;
    $("#fighting-sport-image-"+count).css("background-color", "yellow");
    return s;
}

