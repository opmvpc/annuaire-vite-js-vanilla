import * as bootstrap from 'bootstrap';
import './style.scss';
import { data } from './data';

const listePersonnes = () => {
  let html = '';
  for (let i = 0; i < data.length; i++) {
    const personne = data[i];
    let personneCard = `
      <a class="card" href="/personne.html?id=${personne.id}">
        <img src="${personne.avatar}" class="card-img-top" alt="avatar de ${personne.prenom} ${personne.nom}">
        <div class="card-body">
          <h5 class="card-title">${personne.prenom} ${personne.nom}</h5>
        </div>
      </a>
    `;
    html += personneCard;
  }
  return html;
};

document.querySelector('#app').innerHTML = `
  <main>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">Annuaire</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">Accueil</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="container-fluid mt-4">
      <div class="d-flex gap-3 flex-wrap">
        ${listePersonnes()}
      </div>
    </div>
  </main>
`;
