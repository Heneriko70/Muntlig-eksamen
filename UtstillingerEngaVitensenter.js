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