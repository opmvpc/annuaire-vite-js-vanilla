import * as bootstrap from 'bootstrap';
import './style.scss';
import { data } from './data';

const detailsPersonne = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const personneId = urlParams.get('id');
  console.log(personneId);
  console.log(data);

  const personne = data.find((personne) => {
    return personne.id === Number.parseInt(personneId);
  });

  return `
      <div class="card">
        <img src="${personne.avatar}" class="card-img-top" alt="avatar de ${personne.prenom} ${personne.nom}">
        <div class="card-body">
          <h5 class="card-title">${personne.prenom} ${personne.nom}</h5>
          <p class="card-text">
            ...
          </p>
        </div>
      </div>
    `;
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
      ${detailsPersonne()}
    </div>
  </main>
`;
