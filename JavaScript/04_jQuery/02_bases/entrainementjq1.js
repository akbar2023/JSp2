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

        // ------------
        // Le mot clé "this" :
        // "this" est nécessaire lorsqu'on sélectionne simultanement et qu'on a besoin d'en cibler un en particulier :
        $('input').focus(function(){
            $(this).css({border : '2px solid green'});  // "this" se réfère à l'input sur lequel je suis en focus précisément, sans sélectionner l'autre
        });
        $('input').blur(function(){
            $(this).css({ border : ''}); // avec la méthode css() je remet la bordure à son état initial (correspondant au string vide '') de l'input duquel je viens de sortir (=this)
        });

        // ---------------
        // Accéder aux propriétés CSS avec css()   (complément) :
        var position = $('#violet').css('position');

        console.log('La propriété position du div est : ' + position);  // la méthode css() avec seulement une propriété sous forme de string en argument est un getter : elle fournit la valeur de la propriété spécifiée, même si celle-ci n'est pas dans un attribut style (va chercher y compris dans les feuilles de styles)

        // ----------------
        //  Accéder aux attributs des balises avec attr() :
        if ($('.modifAlt').attr('alt') == '') {  // attr() avec un seul argument est un getter : il permet de récupérer la valeur de l'attribut précisé ici "alt"
            $('.modifAlt').attr('alt', 'paysage');   // attr() avec deux arguments est un setter : il permet d'attribuer une valeur à un attribut ici "alt" : attr('attribut' , 'valeur')
        }


        // --------------
        // Modifier le contenu d'une balise avec la méthode text() ou html() :
        // html() équivaut à inner.HTML :
        $('.texte').eq(0).html('<span>Ceci est un texte ajouté avec la méthode html()</span>');  // Les balises HTML sont interprétées et donc insérées dans dans le code HTML. La méthode eq() permet de cibler l'élément dont l'indice est spécifié dans les (), ici la première .texte donc (0)

        // text() équivaut à textContent :
        $('.texte').eq(1).text('<span>Ceci est un texte ajouté avec la méthode html()</span>');  // Dans la méthode text() tout est considéré comme du texte brut, y compris les éventuelles balises 
        
        // Note : text() et html() sans argument sont des getters : ils récupèrent le contenu de la balise sélectionnée.

        // --------------
        // Ajouter ou retirer une classe (définie dans le CSS) à un élément :
        $('#survol').mouseenter(function(){  // ajoute la classe "rouge" (prévue dans le CSS) à l'élément
            $(this).addClass('rouge');
        });

        $('#survol').mouseleave(function(){
            $(this).removeClass('rouge');  // retire la classe "rouge" à l'élément
        });

        $('#classBleu').click(function(){
            $('#survol').toggleClass('bleu');  // alterne addClass() et removeClass() sur l'élément #survol (différent de l'élément #classBleu , on utilise donc pas $(this) !)
        });

        // -------------
        // Parcourir les éléments sélectionnés avec une boucle each() :
        $('h4').each(function(indice){  // each() parcours tous les h4 et exécute la fonction pour chacun (=each) d'entre eux. Cette fonction possède un paramètre (= indice) qui correspond à l'indice de l'élément sur lequel la boucle se trouve

            $(this).text('Ce <h4> a pour indice le numéro ' + indice);  // ajoute le texte eu h4  sue lequel on se trouve précisément à chaque tour de boucle (=$(this))
            

            // on ajoute la classe "rouge" aux h4 d'indice pair :
            if ( indice % 2 == 0 ) {  // signifie que si indice est pair la classe "rouge" est attribuée
                $(this).addClass('rouge');
            } 
        });

        // ----------
        // Les pseudos-sélecteurs spécifiques à jQuery : :first, :last, :visible et :hidden :

        // :visible et :hidden :
        $('#afficher').click(function(){
            $('#galerie img:hidden').css({opacity : .2 });  // sélectionne les images cachées et leur met une opacité de .2
            $('#galerie img').show();  // puis on affiche toutes les images (pour voir le résultat)
        });

        $('#effacer').click(function(){
            $('#galerie img').hide();
        });


        // :first et :last :
        $('#afficher-premier').click(function(){
            $('#galerie img:first').show();  // sélectionne la première et l'affiche, marche aussi avec :last pour la dernière. Si vous voulez cibler une image au milieu, utilisez la méthode eq(). $('#galerie img').eq(indice).show();

            // On peut combiner les pseudo-sélecteurs :
            console.log($('#galerie img:hidden:first').attr('src'));  // on combine :hidden:first pour afficher la source de la première image caché. Attention à l'ordre, :hidden d'abord puis :first
        });



});  // fin document ready (à ne pas supprimer)