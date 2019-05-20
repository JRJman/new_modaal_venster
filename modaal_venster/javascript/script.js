/*
  modaal abject moet:
  de volgende properties heben:
    achtergrond
    modaal met daarin:
    sluitknop
    inhoud uit de DOM voor modaal (class: modaalContent)
    knoppen uit de DOM (class: modaal-knop)
  en de volgende methodes:
    achtergrond maken
    sluitknop maken
    modaal maken
    opnenen modaal
    sluiten modaal
*/

const modaalVenster = {
  alleInhoud: document.querySelectorAll('.all'),
  alleKnoppen: document.querySelectorAll('.knop'),
  maakAchtergrond() {
    let achtergrond = document.createElement('div');
    achtergrond.classList.add('achtergrond');
    achtergrond.addEventListener('click', () => this.sluiten());
    return achtergrond;
  },
  maakModaal(){
    let modaal = document.createElement('div');
    modaal.className = "create";
    modaal.addEventListener('click', (evt) => evt.stopPropagation());
    return modaal;
  },
  maakSluitKnop(){
    let sluitknop = document.createElement('div');
    sluitknop.className = 'kruisje';
    sluitknop.innerHTML = '&#x00D7';
    sluitknop.addEventListener('click', () => this.sluiten());
    return sluitknop;
  },
  open(elem) {
    this.achtergrond = this.maakAchtergrond();
    this.sluitKnop   = this.maakSluitKnop();
    this.modaal      = this.maakModaal();
    this.modaal       .appendChild(this.sluitKnop);
    this.modaal       .appendChild(elem);
    this.achtergrond  .appendChild(this.modaal);
    document.body     .appendChild(this.achtergrond);
  },
  sluiten() {
    this.modaal       .innerHTML = '';
    document.body     .removeChild(this.achtergrond);
  }
}
// intiëren: inhoud verwijderen en knoppen event geven
for (let i=0; i<modaalVenster.alleInhoud.length; i++) {
  modaalVenster.alleInhoud[i].parentNode.removeChild(modaalVenster.alleInhoud[i]);
}

for (let i=0; i<modaalVenster.alleInhoud.length; i++) {
  modaalVenster.alleKnoppen[i].addEventListener('click', () => {
    let inhoud = modaalVenster.alleInhoud[i];
    modaalVenster.open(inhoud);
  })
}
