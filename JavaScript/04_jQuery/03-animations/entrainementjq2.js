// Les animations jQuery

$(function(){
// Déclaration d'une fonction callBack qui annonce la fin d'une animation (on s'en servira plus loin) :
function finAnim(){
    alert('Animation finie ! ');
}

// ---------------------
// Les animations Fade : fadeIn(), fadeOut(), fadeToggle() et fadeTo() :

$('#fadein').click(function(){
    $('#rouge').fadeIn();  // fait apparaître un élément en foncu (en jouant sur l'opacité) pendant la durée spécifiée en ms. Sans argument, jQuery prend une valeur par défaut.
    $('#bleu').fadeIn(2000);  // même effet e, 2000ms
    $('#vert').fadeIn(1000).delay(1000).fadeOut(1000, finAnim);  // on peut enchaîner les animations les unes à la suite des autres. On appel la fonction callbackfinAnim à la fin de fadeOut(). Attention : pase de () si non elle s'exécute sans attendre l'ordre de fadeOut.
});

// Au clic sur le bouton #fadeout, l'image #imageDisp disparaît en 1s :
$('#fadeout').click(function(){
    $('#imageDisp').fadeOut(1000);
}); 

// Alterner fadeIn() et fadeOut() avec fadeToggle() :
$('#interr').click(function(){
    $('#black').fadeToggle(1000);  // alterne fadeIn() et fadeOut() en 1s
});

// fadeTo() :
$('#exo1').click(function(){
    $('#orange').fadeTo(2000, .2);
    $('#violet').fadeTo(2000, .8);  // fait une transition jusqu'à l'opacité indiqué en 2s

});

// Les animations SLIDE : slideDown(), slideUp(), slideToggle() :
$('#barre').click(function(){
    // $('#rideau').slideDown(1000);  // fait apparaître l'élément avec un mouvement de glissement vers le bas. Pour aller vers le haut : slideUp().

    
    $('#rideau').stop().slideToggle(1000);  // stop() permet d'arrêter une animation en cours lorsqu'on reclique avant son exécution totale  (sinon les animations s'exécutent autant de fois que de clics), et enchaîne sur l'anilation suivante.
});

    // ------------------
    // Les animations ANIMATE :
    // Les animations de type ANIMATE agissent sur les propriétés CSS numériques telles que le positionnement top, left, right, bottom, ou encore les tailles, l'opacité etc. Comme par défaut les éléments HTML ont des positions static en CSS, nous sommes obligé de les mettre une position "absolute" ou "relative" pour pouvoir les déplacer avec animate().
    
    // Animation 1 : une animation simple :
    $('#anim1').click(function(){
        $('#un').animate({ top : '-200px'}, 1000);  // Les propriétés CSS se mettent dans un objet entre des accolades  (et entre guillemets si elles contiennent un tiret). -200px est exprimé par rapport à la position d'origine de l'élément. Notez que l'on est pas obligez de préciser "px" car l'unité par défaut
    });

    // Animation 2 : 2 propriétés CSS dans la même animation :
    $('#anim2').click(function(){
        $('#deux').animate({ top : '-150px', left : '100px' }, { duration : 1000, easing : 'linear'});  // on obtient une diagonale entre la position d'origine et la position finale : -150px etb 100px sont par rapport à la position d'origine. On peut mettre les options d'animations dans un second objet entre des accolades. "duration" =^durée en ms, "easing" = accération/ralentissement de l'animation (valeur "linear" ou "swing" dans la version de base de jQuery, sinon utiliser une bibliothèque complémentaire).
    });

    // Animation 3 : 2 animations consécutives :
    $('#anim3').click(function(){
        $('#trois').animate({ top : '+=100px', left : '+=100px' }, 1000)
                    .animate({ top : '-=100px', left : '+=100px' }, 1000);  // On peut passer un opérateur "+=" ou "-=" en valeur d'une propriété CSS dans animate(), ce qui poursuit indéfiniment l'animation = variation en relatif par rapport à la dernière position
    });

    // Animation 4 : une animation continue :
    function anim4() {
        $('#quatre').animate({ left : '400px'}, 3000)
                    .animate({ left : '0px' }, 3000,anim4);  // 0px signifie 0 par rapport à la position d'origine = revient à la position d'origine. On aurait pu mettre -=400px à la place. on peut mettrre une fonction callback dans animate(), elle s'exécute une fois l'animation terminée. Ainsi, ici on appelle la fonction elle-même à chaque fin  d'animation.
        }

    $('#anim4').click(anim4);  // on appelle la fonction anim4 lors du clic sur le bouton. pas de () à celle-ci pour qu'elle attende l'ordre du click.





}); // fin documant ready