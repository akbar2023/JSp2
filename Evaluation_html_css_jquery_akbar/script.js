$(function(){

    var chat = $('select option');
    var raison = $("#raison");
    var selection = $('select');

    $('form').submit(function(event){
        
        var erreur = false;

        if (raison.val().trim().length == 0) {
            erreur = true;
            raison.addClass('red');
        } else{
            raison.addClass('green');
        }


        if(chat.val() == 'Sushi' || 'Pierre' || 'Karl' || 'Dominique' || 'Totoro'){
            selection.addClass('green');
        }else{
            erreur = true;
            selection.addClass('red');
        }

        if(erreur == true){
            
            alert('erreur!!');
            event.preventDefault();
        }else {
            $('#form').text('Super ! votre deande a bien été pris en compte !');
        }

    });  // fin submit

    chat.change(function(){
        $(this).removeClass('red green');
    });
    raison.change(function(){
        $(this).removeClass('red green');
    });






});// Fin  ready