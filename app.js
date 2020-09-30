
// https://api.github.com/users/

const APICALL = "https://api.github.com/users/";
const affichage = document.querySelector('.affichage');
const form = document.querySelector('.form-github-recherche');
const inpRecherche = document.querySelector('.inp-recherche');

//Créer une fonction asynchrone

async function dataGitHub(utilisateur){
    /*Appel à l'API - await pour attendre les résultats de la méthode fetch()*/
    const reponse = await fetch(`${APICALL}${utilisateur}`);
    /* Transformer les données en format Json */
    const data = await reponse.json();
    /* loguer les datas */
    console.log(data);

    /* Création d'une méthode dans laquelle on appelle des données*/
    creationCarte(data);
}

// Appeler la fonction
dataGitHub("citywizz");


function creationCarte(user){
    // Création de template avec des données
    const carteHTML = `
    <div class="carte">
        <a href="${user.html_url}"><img src="${user.avatar_url}" alt="icone avatar" class="avatar"></a>
        <h2>${user.name}</h2>
        <ul class="cont-infos">
            <li class="followers">Followers : ${user.followers}</li>
            <li class="etoiles">Repos publics : ${user.public_repos}</li>
            <li class="etoiles">Gists publics : ${user.public_gists}</li>
            <li class="bio">Bio : ${user.bio}</li>
        </ul>
    </div>
    `;
    affichage.innerHTML = carteHTML;
}

form.addEventListener('submit', (e) => {
    //prevenir le comportement par défaut, l'envoi d'un formulaire vers une autre page
    e.preventDefault();
    if (inpRecherche.value.length > 0){
        dataGitHub(inpRecherche.value);
        //on nettoie l'input
        inpRecherche.value = "";
        }
})
