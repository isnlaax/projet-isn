// ce programme est un programme pour tester les connaissances apprise sur les système de neuronnes
// il est fait pour un fonctionnement en Javascript
// son but est de reconnaître la configuration d'une image réduite à 4 carrés(ou pixels) soit blanc soit noir
// la configuration sera donné dans un tableau de 2 valeurs en prenant par convention 1 pour les cases noires, et 0 pour les blanches
// 00 pour toutes les cases sont noires ou toutes blanches, 01 pour une case est noire, 10 pour deux cases sont noires, 11 pour trois cases sont noires





// par convention, Input est la couche d'entrée, Hidden la couche cachée et Output la couche de sortie
// se sont les trois couches de neurones sous forme de tableaux
var Input = [];
var Hidden = [];
var Output = [];

// Wh et Wo sont les tableaux de stockage
var Wh = [];
var Wo = [];

// on crée la fonction pour initialisé les valeurs des tableaux
// par convention, nous l'appellerons "reset"
function reset() {
    Input = [0, 0, 0, 0];
    Hidden = [0, 0, 0, 0];
    Output = [0, 0]

    // tableau à double indice, le premier étant celui des neurones de la couche cachée, le deuxième celui des neurones de la couche d'entrée
    // les poids son pris arbitrairement à 0.5
    Wh = [[0.5, 0.5, 0.5, 0.5],
    [0.5, 0.5, 0.5, 0.5],
    [0.5, 0.5, 0.5, 0.5],
    [0.5, 0.5, 0.5, 0.5]];

    // le premier indice est celui de la couche de sortie et le deuximèe est celui de la couche cachée
    // comme il n'y a que deux sorties, le nombre de poids se résume dans 2 tableaux
    // les poids son pris arbitrairement à 0.5
    Wo = [[0.5, 0.5, 0.5, 0.5],
    [0.5, 0.5, 0.5, 0.5]];
}

// donnée présenté au réseau
// les valeurs de ce tableau sont choisis arbitrairement
var input_data = [0, 1, 0, 1];


// création de la fonction qui sert à propager (propagate()) les données de la couche d'entrée à la couche de sortie

    // fonction d'activation sigmoïde pour calculer la valeur de sortie d'un neurone
    function sigmoid(x) {
        return 1 / (1 + Math.pow(Math.E, (-1 * x)));
        // Math.pow et Math.E étant des fonction, l'une de puissance et l'autre de constante, prise dans une librairie mathématique de Javascript
    }


function propagate(d) {

    // elle copie dans un premier temps les données stockées dans un tableau d passé en arguments de la couche d'entrée
    for (var i = 0; i < Input.length; i++) {
        Input[i] = d[i]
    }

    // Soit i pour la couche d'entrée, j pour la couche cachée, et k pour la couche de sortie 
    // pour passé de la couche d'entrée à celle caché, il nous faut passé par deux étapes

    // la première étape consiste à calculer les sommes pondérées
    // nous utiliserons donc un tableau de variables pour stocker les résultats cumulatifs des sommes
    // nous appellerons donc ce tableau Xh
    Xh = [0, 0, 0, 0];

    // nous allons donc calculer la somme pondérée de la valeur de chaque neurone d'entrée Input multiplié par le poids syaptique
    for (var j = 0; j < Hidden.length; j++) {
        for (var i = 0; i < Input.length; i++) {
            Xh[j] += Wh[j][i];
        }
    }

    // maintenant nous allons utiliser la fontion sigmoïde sur les valeurs trouvés
    for (var j = 0; j < Hidden.length; j++) {
        Hidden[j] = sigmoid(Xh[j]);
    }


    // maintenant nous allons utiliser la même méthode mais en prenant les couches Hidden et Output

    // soit Xo le tableau intermédiaire qui sert à stocker les sommes pondérées de chaque neuronne de sortie
    Xo = [0, 0];

    for (var k = 0; k < Output.length; k++) {
        for (var j = 0; j < Hidden.length; j++) {
            Xo[k] += Wo[k][j] * Hidden[j]
        }
    }

    // nous allons désormais appliquer la fonction d'activation
    for (var k = 0; k < Output.length; k++) {
        Output[k] = sigmoid(Xo[k]);
    }

    // les neurones de sortie contiennet désormais les vaeurs propagées depuis la couche d'entrée
    // le calcul de de propagation est donc terminé
}


// fonction pour visualiser les valeurs
function display() {
    document.getElementById('out0').innerHTML = Output[0];
    document.getElementById('out1').innerHTML = Output[1]
}


// création de la fonction qui permet d'apprendre au système à reconnaître certaines configurations
// la fonction est basé sur l'algorithme de rétropropagation du gradient de l'erreur
// soit alpha le taux d'apprentissage et Target le tableau contenant les données que l'on souhaite en sortie
var alpha = 0.5;
var Target = [0, 0];

// la rétropropagation du gradient de l'erreur se compose de 4 étapes qui sont exécutées séquentiellement dans une boucle avec un critère d'arrêt
// 1_ le calcul de l'erreur en sortie après la propagation des données
// 2_ le calcul des gradients de l'erreurs pour corriger les poids synaptiques des neurones de la couche de sortie
// 3_ le calcul des gradients d'erreurs pour corriger les poids synaptiques de la couche cachée
// 4_ la mise-à-jour des poids synaptiques de la couche de sortie et de la couche cachée

function learn()








//structure principale consistant à séléctionner une neuronne de la couche B, et on itère ensuite sur les neurones de la couche A qui sont connectés sur ses entrées, et on répète ça pour tous les neurones

//for (var j = 0; j < B.length; j++) {
//    for (var i = 0; i < A.length; i++) {
//        // calcul sur le lien w[j] [i]
//   }
//}
