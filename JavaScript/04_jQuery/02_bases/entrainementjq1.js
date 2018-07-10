// Ce fichier est en jQuery

/*
Document ready :
Les deux lignes suivantes ont la même signification : exécuter le code après avoir chargé le code HTML. Par conséquent, le lien vers la page js peut se faire n'importe où dans la page html (dans le <head> ou avant la fermeture de <body>).

$(function(){
    // ici vous mettez tout votre code jQuery
});

Ou encore autre syntaxe :
$(document).ready(function(){
    // ici vous mettez tout votre code jQuery
});

*/

$(function(){  // ce code s'exécutera une fois le document html totalement chargé

    // ----------
    // Fonction principale de jQuery, alias $, sélecteur et événement :
    $('#monBouton').click(function(){  // sélectionne la balise #monBouton et au clic appelle la fonction anonyme qui suit :
        $('#carre').hide();  // sélectionne la balise #carre et l'efface (cache)
    });


    jQuery('#monBouton').click(function(){  
        jQuery('#carre').hide(); 
    });  // En réalité le $ remplace le mot "jQuery" dont il est un alias. les deux font la mâme chose : ils créent un OBJET jQuery
    
    $('#carre').click(function(){  // séléctionne la balise #carre et au clic => sélectionne toutes les balises h3 et les efface (sans écrire de boucle)
        $('h3').hide();
    });

    // Le contraire de hide() c'est show() :
    $('.photo').dblclick(function(){  // sélectionne la balise .photo et au double-clic => sélectionne la balise #carre et l'affiche en 1000ms (= 1s)
        $('#carre').show(1000);  // hide() et show() peuvent prendre un argument : une durée en ms, ou encore 'slow' ou 'fast'
    });

    // Pour alterner hide() et show() automatiquement : toggle()

    $('#interrupteur').click(function(){
        $('#on-off').toggle();
    });

    // ------------
    // on() équivalent de addEventListener et son contraire off() :
    $('#monBouton').on('click', function(){
        alert("Déclenchement de la méthode on()");
    });  // on() permet d'associer un événement à un élément comme le ferait addEventListener() en JS "pur". La seule différence entre la syntaxe l.23 et celle-ci réside dans le fait que cette dernière marche aussi avec les éléments créés dynamiquement (=ajouté par le jQuery).

    $('#monBouton').off('click');  // en ajoutant cette ligne on dissocie les clicks de l'élément #monBouton : les clicks liés au bouton ne fonctionne plus ! C'est un moyen simple pour supprimer un événement.

    // ------------
    // Evénement hover, modifier du CSS depuis jQuery :
    $('#vert').hover(
        function(){
            $('#rouge').css({
                width : '300px',
                'background-color' : 'yellow'
            });
        }, 
        function(){
            $('#bleu').css({
                width : '300px',
                'background-color' : 'yellow'
            });
        });

        // L'événement hover est une combinaison de mouseover et mouseout en JS : il possède 2 fonctions qui s'exécutent l'une quand on entre l'autre quand on sort de l'élément.
        // La méthode css() permet de modifier des propriétés CSS écrites dans un objet : on les mets entre des {} et sont séparés par une ",". Notez que les propriétés CSS qui contiennent un tiret s'écrivent dans des quotes.

        // -----------
        // Récupérer ou modifier la valeur d'un input avec val() :

        $('#mdp1').change(function(){
            var texte = $('#mdp1').val();  // val() sans arguments retourne la valeur saisie dans le champ #mdp1 (on l'appelle "getter")

            $('#mdp2').val(texte);  // val(argument) permet de chganger la valeur du champ #mdp2 (on l'appelle "setter")
        });

});  // fin document ready (à ne pas supprimer)