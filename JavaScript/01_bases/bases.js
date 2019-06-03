// -----------------------
// 1- commentaire
//------------------------

//pour écrire un commentaire sur une seule ligne

/*
pour écrire les commentaire sur plusieurs lignes
*/


// -----------------------
// 2- Affichage
//------------------------

document.write('mon premier message'); //affichage dans le navigateur

document.write('<h1>Les bases du JavaScript</h1>'); // On peut mettre des balises HTML, elles sont interprétées et donc insérées dans le html

// Toutes les instructions js finissent avec ";" . Elles se suivent et sont effectuées les unes à la suite des autres, du HAUT vers le BAS du script.

//--------
// Les boîtes de dialogues :
// alert('Salut');    // affiche un message
// confirm('Etes-vous sûr ?'); // Message avec boutons de confirmation "ok" ou "annuler"
// prompt('Quel est votre code postal ?'); //message avec champ à remplir
//--------

// afficher dans la console
console.log('attention aux erreurs de syntaxes dans la console'); // message écrit dans la console de débeugage (F12 + onglet Console)

// -----------------------
// 3- Variables - déclaration - affectation
//------------------------
document.write('<h2>3- Variables - déclaration - affectation</h2>');
// une variables est un espace mémoire nommé dans lequel nous allons stocker une donnée , une valeur. Cette donnée peut-être de n'importe quel type : chiffre, chaîne d caractère , une balise html, etc.

// Déclaration d'une variable :

var maBoite;  // le mot clé var permet de déclarer (=créer) la variable nommée maBoite.

// Règle de nommage des variables : caractère acceptés : a à z, 0 à 9 (jamais au début), _(jamais au début ni à la fin). Premier mot en minuscule, puis majuscule à la première lettre de chaque mot.

//----------
// Affectation d'une variable :

maBoite = 10; // on affecte une valeur à une variable avec le signe "=". maBoite contient donc 10

document.write(maBoite); // on affiche le contenu de la variable en ne mettant pas de quote autour de son  nom. Affiche 10

var maBoite = 10; // on peut déclarer et afficher une variable en même temps (nous retiendrons cette écriture)

//----------

monAutreBoite = 'bonjour';  // cette écriture est possible (déclaration sans le mot clé "var"), mais ce n'est pas conventionnel. De plus, dans une fonction cela n'a pas la même signification (voir chapitre "portée des variables")

document.write('<br>');

//----------
// Déclarer et affecter plusieurs variables en même temps :

var prenom = 'Sylvie',
    nom = 'Robert',
    genre = 'Féminin';  // un seul var en séparant chaque déclaration par une "," un saut de ligne et une indentation. On termine par un ";"

    document.write(prenom); // affiche Sylvie
    document.write('<br>');

    //----------
    // Changer la valeur d'une variable :
    prenom = 'Pierre';  // Nous changeons la valeur initiale 'Sylvie' pour la remplacer par 'Pierre'

    document.write(prenom); // affiche Pierre
    document.write('<br>');

    prenom = nom; // nous affectons la valeur de la variable nom à la variable prenom, autrement on remplace "Pierre" par "Robert"

    document.write(prenom); // affiche Robert
    document.write('<br>');

//----------
// Ajouter une valeur à la valeur déjà existante d'une variable :
var fruit = 'Pomme';
fruit += ' Fraise' // on ajoute la chaîne de caractère " Fraise" à "Pomme" déjà existante dans la variable fruit avec l'opérateur += (sans espace)

document.write(fruit); // affiche Pomme Fraise 
document.write('<br>');

//----------
// Utiliser prompt avec une variable :
var codePostale = prompt('Quel est votre code postal ?');

document.write(codePostale); // affiche le code postal indiqué par l'internaute
document.write('<br>');

// -----------------------
// 4- Types de données
//------------------------
document.write('<h2>4- Types de données</h2>');

// Nous commençons par les principaux types de données dits primitifs :

// Les types numériques appelés NUMBER :
var chiffre = 20;  // les numbers s'écrivent sans quotes ni guillemets
// Tous les types numériques sont possibles : entiers, déciamux, positifs, négatifs...

// Les types chaînes de caractères appelés STRING :
var texte = "phrase entre guillemets";
var apostrophe = 'il faut utiliser le caractère d\'échappement pour les apostrophes dans des quotes'; // AltGr + 8 pour le caractère d'échappement
// Les quotes ou guillemets indiquent qu'il s'agit d'un type STRING.

var numero = '10'; //un chiffre dans des quotes ou des guillemets est interptrété comme un STRING

// Le type boléean (ou boolean) :
// Le type booléean ne prend que 2 valeurs : TRUE ou FALSE
var choix = true; // s'écrit SANS quote

//----------
// typeof permet de vérifier le type d'une variable :

document.write(typeof(chiffre)); // number
document.write('<br>');
document.write(typeof(texte)); // string
document.write('<br>');
document.write(typeof(numero)); // string
document.write('<br>');
document.write(typeof(choix)); // boolean

// -----------------------
// 5- Constante
//------------------------
document.write('<h2>5- Constante</h2>');

// Définition : Les constantes sont comme des variables dont la valeur ne peut pas être modifié. Elles permettent de "protéger" cette valeur nécessaire au bon fonctionnement du script.

const CHANGE_PAS = 'ma constante impossibles à modifier'; // par convention entre développeur on écrit les constantes en majuscule et avec un underscore "_" si besoin

document.write(CHANGE_PAS); // affiche le contenu de la constante
document.write('<br>');
// CHANGE_PAS = 'Autre valeur';  // erreur bloquante de type invalid assignment to const CHANGE_PAS


// -----------------------
// 6- Concaténation 
//------------------------
document.write('<h2>6- Concaténation </h2>');

// En JS, on fait suivre des variables et des strings avec le symbole "+" on parle de concaténation.

var prenom = 'Bruce',
nom = 'Wayne';

document.write(prenom + ' ' + nom + '<br>'); // concatène la variable prenom avec un espace avec la variable nom avec un balise <br>

var personnage = prenom+ ' ' + nom + '<br>'; // on peut concaténer des éléments au sein d'une variable

document.write(personnage);

// -----------------------
// 7- Opérateurs arithmétiques 
//------------------------
document.write('<h2>7- Opérateurs arithmétiques </h2>');

var résultat;
 resultat = 10 + 5; // addition
 resultat = 10 - 5 // soustraction
 resultat = 10 * 5 // multiplication
 resultat = 10 / 5 // division
 resultat = 3 % 2 // modulo = reste de la division entière. Si j'ai 3 billes répartie sur 2 personnes, il en reste 1 seule : 3%2 vaut donc 1 (modulo de 2 pour vérifier si un chiffre est pair ou impair, modulo de 10 si c'est une dizaine ...)

 //----------
 // On peut appliquer des opérateurs aux variables :
var chiffre1 = 10,
    chiffre2 = 5;

resultat = chiffre1 + chiffre2;  //resultat vaut 15

var chiffre3 = 10;
chiffre3 = chiffre3 + 5; // 15
chiffre3 = chiffre3 + 5; // 20 mais cette syntaxe n'est pas conventionnelle. On utilise la syntaxe suivante :
chiffre3 += 5;  // cette syntaxe est la même chose que la précédente mais c'est elle qu'on retiendra. chiffre3 vaut ici 25

// Fonctionne avec tous les opérateurs : +=, -=, *=, /* et %=

//---------
// Incrémenter et décrémenter :
var i = 0;
i++;  // incrémenter i de +1. i vaut donc 1
i--;  // décrémenter i de -1. i vaut donc 0

// i++ et ++i ont le même résultat à la différence près :
// i++ retourne la valeur de i AVANT d'éffecture l'opération
// ++i retourne la valeur de i APRèS avoir effectué l'opération

var x = 5;
var y = x++;  // y prend la valeur de 5 puis x passe à 6

document.write('y vaut' + y); // 5
document.write('x vaut' + x); // 6

x = 5;
var z = ++x;  // x passe à 6 PUIS z prend la valeur de x qui vaut alors 6 
document.write('z vaut' + z); // 6
document.write('x vaut' + x); // 6

//---------
// Exercice :
/* 
    L'internaute a acheté 0.8kg de pommes et 0.7kg de poires.
    Vous déclarez 4 variables, une qui contient "pommes" une "poires", une qui contient le poids des pommes et une autre qui contient le poids des poires.
    Puis vous affichez la phrase "Vous avez acheté des pommes et des poires pour un poids total de 1.5kg." où les fruits et le poids sont remplacés par des variables. 
 */

var fruit_a = 'pommes',
    fruit_b = 'poires',
    poids_a = 0.8,
    poids_b = 0.7;

var poids_total = poids_a + poids_b;

document.write('<p>Vous avez acheté des ' + fruit_a + ' et des ' + fruit_b + ' pour un poids total de ' + poids_total + ' kg. </p>');

// -----------------------
// 8- Conditions 
//------------------------
document.write('<h2>8- Conditions </h2>');

var a = 10,
    b = 5,
    c = 2;

//----------
// La condition if / else :
if (a > b) {
    // si la condition est évaluée à true, on entre dans les accolades qyui suivent :
    document.write('a est supérieur à b <br>');
} else {
    // sinon... si la condition est évalué à false on exécute le else 
    document.write('b est supérieur ou égal à a <br>');
}


// ---------
// if avec AND :
if (a > b && b > c) {
    // Si a est supérieur à b ET dans le même temps b est supérieur à c, on entre dans les accolades qui suivent :
    document.write('Ok pour les 2 conditions <br>')
}

// ---------
// if avec OR :
if (a == 9 || b > c) {
    // si a est égal (==) à 9 OU b est supérieur à c, on entre dans les accolades qui suivent :
    document.write('Ok pour au moins un  des deux conditions <br>');
}

// ---------
// if... else if... else :
if(a == 8){
// si a vaut 8, on exécute ce qui suit :
document.write('a est égal à 8');
} else if (a != 10){
// sinon si a est différent de 10, on exécute ce qui suit :
document.write('a est différent de 10');
} else{
    // sinon, c'est que les deux conditions sont fausses, je me trouve dans la condition par défaut
document.write('Les deux conditions sont fausses <br>');
}

// Note : jamais de () après un else. Le else n'est pas obligatoire si il est vide. En revanche, après un if il y a toujours une condition.


// L'opérateur NOT : qui s'écrit "!" permet d'inverser quelquechose de true en false ou quelquechose de false en true. Il s'agit d'une négation

var test = 3 < 1;

console.log('test vaut : ' + test);  // pour vérifier que test vaut false

if (!test) {
    // le "!" est une négation qui inverse le sens du booléen : test seul valant false, !test vaut donc true. La condition finale étant donc évaluée true on entre dans les accolades :
    document.write('On exécute ce code... <br>')
}

// Conclusion : les instructions d'une conditions seront toujours exécutés que si la condition est TRUE.

// ---------
// La comparaison avec le triple "===" :
var varA = 1, //number
    varB = '1'; // string

if (varA == varB){
    // varA et varB valent tous les deux 1 en valeur : la condition avec "==" est donc vraie. On exécute les accolades qui suivent :
    document.write('Egalité en valeur uniquement <br>');
} else{
    document.write('Différence en valeur uniquement <br>');
}

if (varA === varB){
// Comparaison en valeur et en type avec le triple "===". Ici nous avon unstring et un number, il n'y a donc pas strist égalité entre les deux variables : on va dans le else
    document.write('Egalité en valeur et en type <br>');
} else {
    document.write('Différences en valeur OU en type <br>');
}

// ---------
// La condition dite ternaire :
// La condition ternaire est une autre syntaxe de la condition if... else.
var voiture = 'bmw';
var origine = (voiture == 'bmw')? 'origine allemande <br>' : 'autre origine <br>'; //la condition ternaire s'écrit avec un "?" qui remplace le if, et un ":" qui remplace le else

document.write(origine);

// var origine2 = prompt('Entrez la marque de votre voiture ?');
// if ( origine2 == voiture ) {
//     alert('votre voiture est d\'origine Allemande')
// } else {
//     alert('Je ne connais pas l\'origine de votre voiture désolé');
// }

// ---------
// isNaN : is not a number
// NaN pour Not a Number est une valeur utilisée pour representer une "quantité" qui n'est pas un nombre en javascript.
console.log( 2 * 'azerty');

// Les opérateurs d'égalité (== ou ===) ne peuvent pas être utilisés pour tester si une valeur est NaN. il faut utiliser isNaN() :

var annee = '2018'; // string
if ( isNaN(annee) ) {
    // condition fausse car 2018 après conversion devient un number. On entre donc dans le else.
    document.write('ce n\'est pas un number après conversion <br>');
} else {
    document.write('c\'est un number après conversion <br>');
}

// le contraire :
var annee = 'juin 2018'; // string

if ( isNaN(annee) ) {
    // ici la condition est vraie . on entre donc à la suite :
    document.write('ce n\'est pas un number après conversion <br>');
} else {
    document.write('c\'est un number après conversion <br>');
}

// ---------
// Exercice :
/* 
Demandez l'âge de l'internaute dans un prompt.
Si la réponse est vide (on compare avec des quotes vides SANS espace), on affiche "vous n'avez pas répondu."
Si la réponse n'est pas un number ,  on affiche "vous n'avez pas indiqué un nombre."
Si la réponse est correcte, on affiche "vous avez indiqué avoir X ans" ou "X est l'âge de l'internaute".
*/

var age = prompt('Quel âge avez-vous ?');

if ( age == '' ){
    document.write('vous n\'avez pas répondu.');
} else if ( isNaN(age) ) {
    document.write('vous n\'avez pas indiqué un nombre.')
} else {
    document.write('vous avez ' + age + ' ans.');
}

// -----------------------
// 9- Synthèse des opérateurs 
//------------------------
document.write('<h2>9- Synthèse des opérateurs </h2>');

// Pour tester dees variables entre-elles :
/*
    ==  Pour égal en valeur
    != pour différent de en avleur

    === pour strictement égal en valeur ET en type
    !== pour strictement différent en valeur ET en type
    
    > pour plus grand que 
    > pour plus petit que
    >= pour supérieur ou égal
    <= pour inférieur ou égal

*/
//  les opérateurs logiques :
/*
    && pour AND
    || pour OR
    ! pour NOT (négation)


    Les opérations effectués avec les opérateurs logiques ne donnet que 2 résultats possibles : TRUE ou FALSE.

    Exemples :
    true && true => true
    false && true => false
    false && false => false

    true || true => true
    true || false => true
    false || false => false

    !TRUE => false
    !FALSE => true

*/

// -----------------------
// 10- Condition switch 
//------------------------
document.write('<h2>10- Condition switch </h2>');
// La condition switch est une autre syntaxe pour écrire une condition if...else, lorsque l'on veut comperer une variable à une multitude de valeurs.

var couleur = 'jaune';

switch (couleur){
    case 'bleu' :   // chaque case représente une valeur que peut prendre la variable. Si couleur contient "bleu" on exécute le code suivant :
        document.write('Vous aimez le bleu <br>');
    break;  // obligatoire pour quitter la condition une fois la case exécuté
    case 'rouge' : 
        document.write('Vous aimez le rouge <br>');
    break;
    case 'vert' : 
        document.write('Vous aimez le vert <br>');
    break;
    default :  // on tombe dans default par défault si aucun cas précédent n'est valide
    document.write('Vous n\'aimez aucune de ces couleurs');
    break;
}

// -----------------------
// 11- Les boucles 
//------------------------
document.write('<h2>11- Les boucles </h2>');
// Les boucles sont destinés à répéter des lignes de codes de façon automatique.

// While :
var i = 0;  // on initialise une variable à 0 pour compter le nombre de tours de boucle

while ( i <= 5) { // ici entre parenthes se situe la condition d'entrée dans la boucle "while". Elle signifie "tant que i est inférieur ou égal à 5"
    document.write(i + '---');
    // ...
    i++;  // on incrémente i de +1
}
document.write('<hr>');
// Exercice : sans modifier la condition de la boucle while précédente, vous la complétez pour ne pas afficher les trois petits "---" après le 5

var i = 0;
while ( i <= 5) { // ici entre parenthes se situe la condition d'entrée dans la boucle "while". Elle signifie "tant que i est inférieur ou égal à 5"
   if (i == 5){
       document.write(i)
   } else {
       document.write(i + '---')
   }
   i++;
}
document.write('<hr>');
// ---------
// La boucle for :
// La boucle for est une autre syntaxe encore de la boucle while :
for(var i = 0; i <= 5; i++){  // on met dans les () du for : initialisation de la variable suivi d'un ";", puis la condition d'entrée dans la boucle suivi d'un ";", puis l'incrémentation ou décrémentation NON suivi d'un ";".
    document.write(i + '---');
// ...
}

// ---------
// Exercice : afficher un menu déroulant avec les années 1900 à 2020.

document.write('<select>');
    // document.write('<option>1900</option>'); 
    for(var i = 1900; i <= 2020; i++){
        document.write('<option>' + i + '</option>')
    }
    // document.write('<option>2020</option>'); 

document.write('</select>');

// Alternative :
var affichage = '';  // pour contenir toutes les balises HTML à venir

affichage += '<select>';
    for(var i = 1900; i <= 2020; i++){
        affichage +='<option>' + i + '</option>';
    }

affichage +='</select>';

console.log(affichage);

document.write(affichage);  // on affiche tout le sting qui contient l'ensembles des balises du sélecteur

// La boucle do...while existe aussi. Elle a la particularité de s'éxecuter au moins une fois (correspondant au "do"), puis seulement à la fin on regarde la condition du while pour savoir si on retourne dans la boucle ou pas. Exemple d'utilisation : Vous posez une question obligatoire à l'internaute ("do"), puis tant qu'il n'a pas correctement répondu ("while"), vous lui reposez la question.

// -----------------------
// 12- Les fonctions utilisateurs 
//------------------------
document.write('<h2>12- Les fonctions utilisateurs </h2>');

// Les fonctions sont des morceaux de codes encapsulés dans des accolades et portant un nom. Elles sont appelées (par leur nom) quand on a besoin d'exécuter tout le code qui s'y trouve. Il est d'usage de faire des fonctions simples qui réalisent des actions unitaires.

// A chaque fois qu'on répéte une action, voir s'il n'est pas possibles de la mettre dans une fonction : cela s'appelle factoriser son code.

// Il existe 2 façons de déclarer une fonction en JavaScript
// 1° Avec le mot clé function :
function maFonction () {
    // ici tout votre code 
    document.write('<p>Nous avons une journée ensoleillée</p>')
} 

// 2° Avec le mot clé var :
var maFonction2 = function () {
    // ici tout votre code
    document.write('<p>Nous avons une chaude journée'); 
}

// Puis pour qu'une fonction s'exécute, il faut l'appeler :

maFonction();  // on appelle une fonction en écrivant son nom suivi d'une paire de parenthèses.
maFonction2();  // en appelant cette fonction, j'exécute le code qui s'y trouve.

// Par convention nous déclarons toujours une fonction avant de l'exécuter. 

// ---------
// Fonctions avec paramètres :
function direBonjour(prenom, nom) {  // prenom et nom sont des paramètres de la fonction, séparés par une virgule et qui attendent une valeur
    document.write('<p>Bonjour ' + prenom + ' ' + nom + ', comment allez-vous ?</p>');
}
direBonjour('akbar', 'khan');  // la valeur "Alice" qui est en 1ère position va être affectée au paramètre prénom et la valeur "Dupont" va être affectée au paramètre nom. Ainsi la fonction direBonjour peut afficher un message personnalisé.

var prenom2, nom2;
prenom2 = prompt('Quel est ton prenom ?');
nom2 = prompt('Quel est ton nom ?');
function direBonjour2() {
    document.write('Hello ' + prenom2 + ' ' + nom2 + ', How are you doing ? <br>');
}
direBonjour2(); // c'est une fonction que j'ai écrit en dehors des cours qui demande le nom et le prenom de l'utilisateur ensuite lui dit bonjour avec ses noms... (plus intéractif)


// ---------
function d (param){
    document.write(param + '<br>');
}

d('Test de notre fonction');

// ---------
//  Préambule à l'exercice :

function meteo(saison){
    d('Nous sommes en ' + saison);  // nous avons la possibilité d'utiliser une autre fonction, ici (d) dans les instructions de cette fonction.
}

meteo('été');
meteo('Printemps');

document.write('<hr>');
// Exercice : réécrivez la fonction précédente dans une fonction exoMeteo, et complétez la pour qu'elle affiche 'au printemps', "en été", "en automne" ou "en hiver". Dans cet exercice, vous ne modifiez pas le paramètre saison et vous n'en ajoutez pas.

function exoMeteo(saison){
    if (saison == 'printemps') {
        d('Nous sommes au ' + saison + '.');
    }else if (saison == 'été' || saison == 'automne' || saison == 'hiver') { 
        d('Nous sommes en ' + saison + '.');
    } else{
        d(saison + '? ce n\'est peut-être pas une saison...');
    }
} 

exoMeteo('été');
exoMeteo('printemps');
exoMeteo('Papaoumar');

// ---------
// Le mot clé "return" qui permet de sotir une valeur d'une fonction :
function somme (a, b) {
    var resultat = a + b;
    return resultat;  // return permet de sortir la valeur de résultat de la fonction. il retourne cette valeur à l'endroit où la fonction est appelée
}

d('La somme de 2 + 4 est égal à ' + somme(2 , 4));  // On récupère ic la valeur 6 de resultat grâce grâce au return qui se trouve dans la fonction somme()


// -----------------------
// 13- La portée des variables 
//------------------------
document.write('<h2>13- La portée des variables </h2>');

/*  Selon l'endroit et la façon dont une variable est déclarée, elle pourra être accessible partout dans le script ou uniquement dans une portion limitée du code des fonctions. On parle de "protée des variables" (Scope en anglais).

-Une variable déclarée SANS le mot clé "var" (façon implicite) : elle est accessible PARTOUT dans le script, y compris au sein des fonctions : elle est dite GLOBAL

-Une variable déclarée AVEC le mot clé "var" (façon explicite) : 
        - à l'extérieur d'une fonction elle sera GLOBAL, donc accessible partout dans le script, y compris au sein des fonctions
        - à l'intérieur d'une fonction elle sera LOCALE, donc accessible qu'au sein de la fonction.

*/

var animal = 'Loup';  //global
function jungle() {
    var animal = 'Tigre';  //local
    return animal;
}

d(animal);  //Loup car on est dans l'espace global et qu'on utilise la variable global disponible qui vaut Loup
d(jungle());  // Tigre grâce au return qui se trouve à la fin de la foonction : il sort la valeur Tigre de la variable locale à la fonction
d(animal); // Loup car pareil qu'au premier 

// ----------
d('<hr>');

var oiseau = 'Aigle'; // Global
function ciel(){
    oiseau = 'Faucon';  // Global
    return oiseau;
}

d(oiseau); // Aigle car on utilise la première variable global disponible qui vaut Aigle
d(ciel()); // faucon grâce à return de la fonction.  MAIS on exécutant celle-ci on a changé le contenu de la variable global pour y mettre Faucon!
d(oiseau);  // Par conséquent la variable oiseau affichera FAUCON


// -----------------------
// 14- Les arrays 
//------------------------
document.write('<h2>14- Les arrays </h2>');
// Un array, ou tableau en français, est un objet qui contient plusieurs valeurs, appelés items. Chaque élément est accessible au moyen d'un indice (ou index) dont la numérotation commence à partir de 0.

// Déclaration d'un array :
var monTableau = ['Emilie', 'Magalie', 'Zakir', 'Elric', 96];  // déclaration d'un array qui contient des strings et un number (version conventionnelle la plus utilisée). Chaque élément a un indice : "Emilie" le 0, puis "Magalie" 1, et ainsi de suite.


// Accéder à un item (ou élément) de l'array :
d(monTableau[0]);  // Affiche l'élément de valeur Emilie.

// Remplacer la valeur "Elric" par la valeur "Alphonse"
monTableau[3] = 'Alphonse';  // on modifie la valeur positionnée à l'indice 3 pour y mettre "Alphonse"
d(monTableau[3]);  // affiche Alphonse

// Mesurer le nombre d'éléments d'un array :
d(monTableau.length);  // Affiche 5, correspondant aux nombres d'éléments du tableau

// Parcourir un array avec une boucle for :
for(i = 0; i < monTableau.length; i++) {
    d(monTableau[i]);  // la variable i prend successivement les valeurs de 0 à 4 inclus. monTableau[i] permet de permet de parcourir chque indice de 0 à 4.
}

// ----------
// Array multidimensionnel :
// Un array multidimensionnel est un tableau qui contient un ou plusieurs autres tableau.

var deuxDimensions = [ ['Fraise', 'Pomme', 'Banane'], ['Tomates', 'Carottes', 'Courgettes'] ];
d(deuxDimensions[0][2]);  // pour accéder à la valeur "banane", je vais d'abord à l'indice 0 du tableau deuxDimensions puis à l'intérieur je vais à l'indice 2.

document.write(deuxDimensions[0][2] + ' et des ' + deuxDimensions[1][1]);  // affiche banane suivi de carottes

// ---------
// Exercice : créer un array avec les tailles S, M, L, et XL. À l'aide d'une boucle for, afficher un menu déroulant avec les tailles provenant de l'array, à l'intérieur.
var tailles = [ 'Small', 'Medium', 'Large', 'Extra Large'];
document.write('<select>');
for(var i = 0; i < tailles.length ; i++){
    document.write('<option>' + tailles[i] + '</option>');
}
document.write('</select>');

// -----------
// Pour ajouter ou supprimer des valeurs au début ou à la fin d'un array :

tailles.push('XXL');  //ajoute "XXL" à la fin de l'array tailles
console.log(tailles);

tailles.unshift('XS');  // Ajoute "XS" au début de l'array tailles
console.log(tailles);

// le contraire de push, c'est pop :
tailles.pop();       // retire le dernier élément de l'array tailles
console.log(tailles);

// le contraire de unshift, c'est shift :
tailles.shift();  // retire le premier élément de l'array tailles
console.log(tailles);

// -----------------------
// 15- Les objets 
//------------------------
document.write('<h2>15- Les objets </h2>');

/*
Un objet est un ensemble de propriétés qui correspondent à l'association d'un nom et d'une valeur. Cette valeur peut-être de n'importe quel type (string, boolean, number...).

De plus, la valeur de la propriété peut-être une fonction. Dans ce cas cette propriété s'appelle une méthode (il s'agit simplement d'une fonction dans un objet).

Les propriétés et les méthodes d'un objet s'appellent les "membres" de cet objet.
*/


// Création d'un objet :

var personnage = {
    nom : 'Tintin',    // paire "propriété : valeur" suivie d'une ","
    animal : 'Chien',
    amis : ['Haddock', 'Tournesol', 'Dupont & Dupond'],
    age : 10    // par convention pas de "," au dernier élément
};   // on termine bien l'instruction avec un ";"

// Accéder à la valeur d'une propriété d'un objet :
d(personnage.nom);   // affiche Tintin. on accède à une propriété d'un objet en écrivant le nom de l'objet puis un "." puis la propriété.

d(personnage['nom']);  // affiche aussi Tintin. on peut utiliser la notation entre [] pour accéder à une proprété d'un  objet.

// Remplissage d'une propriété
personnage.animal = 'Milou';  // change la valeur de la propriété animal pour y mettre "Milou"
// ou encore :
personnage['animal'] = "Milou";

// pour afficher Tournesol :
d(personnage.amis[1]); // pou accéder à Tournesol on va à la propriété "amis" de personnage avec un "." puis on va à l'indice [1] du tableau qui s'y trouve
d(personnage['amis'][2]); // de la même manière qu'avec Milou, je peux utiliser la notation entre [] pour y accéder à la propriété "amis"


// ----------
// Création d'un objet avec une méthode :
var maVoiture = {
    marque : 'Mercedes',
    couleur : 'noire',
    motorisation : {
        energie : 'diesel',
        puissance : '110CV',
        grantie : true
    },
    afficherOrigine : function () {   // afficherOrigine est une "methode" de maVoiture
        document.write('Origine Allemande <br>');
    }
};
// on identifie les méthodes au mot clé "function" qui permet d'y mettre le code qu'elles doivent exécuter (tout comme une fonction).

d(maVoiture.marque);  // affiche Mercedes
d(maVoiture.couleur);  // affiche noire
maVoiture.afficherOrigine();  // appel de la méthode "afficherOrigine()" de l'objet maVoitureécrite avec sa paire de (). affiche "Origine Allemande"

d(maVoiture.motorisation['energie']);
d(maVoiture.motorisation.energie);  // Ces 2 syntaxes pour accédeer à la  propriété energie qui se situe dans la propriété motorisation de l'objet maVoiture. Affiche "diesel"

d('<hr>');
// ------------
// La boucle for in
// La boucle for in permet de parcourir les objets et de récupérer tous les membres (= informations) qui y sont contenus.

// Pour l'exemple nous allons parcourir l'objet qui s'appelle maVoiture.motorisation :
for (var membre in maVoiture.motorisation) {
    d(membre + ' a pour valeur ' + maVoiture.motorisation[membre]  );
}  // membre s'appelle un "référent" : c'est sa place dans la syntaxe du for...in qui détérmine que "membre" récupère le nom des proprétés à chaque tour de boucle. Ainsi, maVoiture.motorisation[membre] permet de récupérer la valeur correspondant à la propriété contenue dans "membre". Note : on ne met pas de quotes à membre dans les [] car il s'agit d'une variable. 

// -----------------------
// 16- Propriété et méthodes de l'objet string 
//------------------------
document.write('<h2>16- Propriété et méthodes de l\'objet string </h2>');

// propriété length :
animal = 'Loup';
d(animal.length)  // affiche 4 le nombre de caractères du string contenu dans la variable animal

// méthode trim() :

var adresse = '    16 rue de seine    ';
d('adresse avec les espaces : ' + adresse.length);
d('adresse sans les espaces : ' + adresse.trim().length);   // la méthode trim() supprime les espaces au début et à la fin de chaîne (utile pour nettoyer les données d'un formulaire)

// Notez qu'une méthode comporte toujours des ().

// ---------------
// Trouver des ressources sur le net :
// Le site de référence du JS : MDN
// https://developer.mozilla.org/fr

// Pour aller plus loin :
// Openclassrooms.com
// w3school.com
// Codecademy.com   cours, forum, exercices