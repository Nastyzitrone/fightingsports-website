/**
 * JavaScript ajax-filter source
 */
$(document).ready(function () {
    
    $("form").submit(function (event) {
        var formData = $("#form1").serializeArray();
        var valuesMemberValues = $( "#range-slider" ).slider( "values" );
        formData.push({name: 'action' , value: $("#form1").attr('action')});
        formData.push({name: 'min-member' , value: valuesMemberValues[0]});
        formData.push({name: 'max-member' , value: valuesMemberValues[1]});
        // TODO get the other values  from the form and submit all to the controller
        
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

        event.preventDefault(); // prevents Default action when the event is not handled 
    });
});

/**
 * This function takes the result from the backend
 * and beautify it to awsome HTML-Code, for the FilterResult
 * @param {*} data 
 * @returns String with HTML-Code
 */
function makeHTMLResult(data){
    let count = 1;
    let nl = '\n';
    let s='';

	s +='<div class="sport-items-container">' + nl;
    $("body"+count).css("font-size", "100px");

    // Loop through the given data which is an associative array which contains single row results
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

    return s;
}

