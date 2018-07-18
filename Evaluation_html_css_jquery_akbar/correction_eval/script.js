$(function(){
    var choix = $('#name');
    var raison = $('#texte'); 
    var tete = $('.imgChat');

    $('form').submit(function(event){
        var erreur = false;
        event.preventDefault();
        
       if(choix.val() === ""){
           choix.addClass('red');
           erreur = true;
       } else{
           choix.addClass('green');
       }

       if(raison.val().length < 20 ){
           erreur = true;
           raison.addClass('red');
       } else{
           raison.addClass('green');
       }
       
       choix.on('change', function(){
           this.removeClass('red green');
       });

       raison.on('change', function(){
        this.removeClass('red green');
        });

        if(erreur == false) {
            $('form').html(choix.val() + ' vous remercie !!');
        }

    });

    $('.section2').mouseover(function(){
        tete.css({opacity : 1})
    });
    $('.section2').mouseout(function(){
        tete.css({opacity : .5})
    });


});  // fin document ready