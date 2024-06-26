// Henter inn variabelen for knappen som tar deg til utstillinger
var tilbud_utstillinger_knappEl = document.querySelector("#tilbud_utstillinger_knapp");
// Legger til en eventlistener som lytter etter klikk på tilbud_utstillinger_knapp og kjører funksjonen UtstillingerTilbud
tilbud_utstillinger_knappEl.addEventListener("click", UtstillingerTilbud);

// Funksjon som tar deg til UtstillingerEngaVitensenter.html
function UtstillingerTilbud() {
    // Sender brukeren til UtstillingerEngaVitensenter.html
    window.location.href = "UtstillingerEngaVitensenter.html"
}

// Henter inn variabelen for bildet i headeren  
var logoEl = document.querySelector("#logo");
// Legger til en eventlisteners som lytter etter klikk og tastetrykk på logoen og kjører funksjonen tilbakeHjem
logoEl.addEventListener("click", tilbakeHjem);
logoEl.addEventListener("keydown", tilbakeHjem);


// Funksjon som tar deg til index.html
function tilbakeHjem(event) {
    // Sjekker om parameteren event er av typen click eller om tastetrykket er Enter
    if (event.type === "click" || (event.type === "keydown" && event.key === "Enter")) {
        // Sender brukeren til index.html
        window.location.href = "index.html";
    }
}
