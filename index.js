fetch('http://localhost:3000/sneakers')
    .then(resp => resp.json())
    .then(sneakersArray => sneakersArray.forEach(sneakerObj => renderSneaker(sneakerObj)))

const renderSneaker = sneaker => {
    const sneakerCard = document.getElementById('sneaker-card');
    const individualCard = document.createElement('div');
    const imgCard = document.createElement('img');
    const nameCard = document.createElement('h2');
    const detailCard = document.querySelector("#detail-div")


    imgCard.src = sneaker.image;
    nameCard.textContent = sneaker.name;

    imgCard.className = 'shoe-img'

    sneakerCard.append(individualCard);
    individualCard.append(imgCard, nameCard);
    
    individualCard.addEventListener("click", () => {
        if (detailCard.style.display === "none") {
            detailCard.style.display = "block"
        }
        else {
            detailCard.style.display = "none"
        }
    })
}