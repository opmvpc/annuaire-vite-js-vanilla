import * as bootstrap from "bootstrap";
import "./style.scss";
import { data } from "./data";
import { nav } from "./nav";

const listePersonnes = () => {
  let html = "";

  let filteredData = Array.from(data);

  const q = new URL(window.location).searchParams.get("q")?.toLowerCase();

  if (q !== null && q !== undefined) {
    filteredData = filteredData.filter(
      (p) =>
        p.nom.toLowerCase().includes(q) ||
        p.prenom.toLowerCase().includes(q) ||
        p.adresse_email.toLowerCase().includes(q)
    );
  }

  filteredData
    .sort((p1, p2) =>
      `${p1.prenom} ${p1.nom}`.localeCompare(`${p2.prenom} ${p2.nom}`)
    )
    .reverse();

  for (let i = 0; i < filteredData.length; i++) {
    const personne = filteredData[i];
    let personneCard = `
      <a class="card col-5 col-md-3" href="/personne/?id=${personne.id}">
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

document.querySelector("#app").innerHTML = `
  <main>
    ${nav}

    <input type="search" id="search">

    <div class="container-fluid my-4">
      <div id="liste-personnes" class="d-flex gap-3 flex-wrap justify-content-center">
        ${listePersonnes()}
      </div>
    </div>
  </main>
`;

const searchInput = document.querySelector("#search");
const q = new URL(window.location).searchParams.get("q");
if (q !== null && q !== undefined) {
  searchInput.value = q;
}

searchInput.addEventListener("input", (event) => {
  const url = new URL(window.location);
  url.searchParams.set("q", event.target.value);
  window.history.pushState({}, "", url);
  const liste = document.querySelector("#liste-personnes");
  liste.innerHTML = listePersonnes();
});
