/**
 * JavaScript ajax-form-options source
 * It loads all important Metadata for the Filter-Formular from the Database
 */
 $(document).ready(function () {
    var formData = new Array();
    formData.push({name: 'action' , value: 'onload'}); // set the action 'onload' for the MiddlewareService 

    $.ajax({
        type: "POST",
        url: "../services/MiddlewareService.php",
        data: formData,
        dataType: "json",
        encode: true,
    }).done(function (data) {
        
        var s = makeHTMLFilterFomularResult(data);
        var minStart = 0;
        var maxStart = 8000000;

        $('#range').text(minStart+' - ' + maxStart);

        // builds the range slider from jQuery-UI
        $( function() {
            $( "#range-slider" ).slider({
                range: true,
                min: 0,
                max: 8000000,
                values: [ 0, 8000000 ],
                slide: function( event, ui ) {

                    // Slide control values
                    var min = ui.values[0];
                    var max = ui.values[1];

                    // Display of control values
                    $('#range').text(min+' - ' + max);  
                }
            });
        } );

        $("#checkbox-container-countries").html(s);
    });
});

/**
 * This function takes the result from the backend 
 * and beautify it to awsome HTML-Code, for the FormularOptions
 * @param {*} data 
 * @returns String with HTML-Code
 */
function makeHTMLFilterFomularResult(data){
    count = 1;
    let nl = '\n';
    let s='';
	s +='<div class="form-checkbox-container">' + nl;
     // TODO get shit done
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