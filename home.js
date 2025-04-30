async function recupererPersonnages() {
    const reponse = await fetch("https://rickandmortyapi.com/api/character");
    const personnages = await reponse.json();
    console.log(personnages);
    
    const personnagesElement = document.querySelector(".personnages")
    
    for (const personnage of personnages.results) {
        personnagesElement.innerHTML += `
            <div class="personnage">
                <h2>${personnage.name}</h2>
                <img src="${personnage.image}"/>              
            </div>
        `
        personnages.results.splice(18, 1)
    }
    
}


recupererPersonnages();
