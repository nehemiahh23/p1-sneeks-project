fetch('http://localhost:3000/sneakers')
    .then(resp => resp.json())
    .then(sneakersArray => sneakersArray.forEach(sneakerObj => renderSneaker(sneakerObj)))

const renderSneaker = sneaker => {
    const sneakerCard = document.getElementById('sneaker-card');
    const individualCard = document.createElement('div');
    const imgCard = document.createElement('img');
    const nameCard = document.createElement('h2');

    imgCard.src = sneaker.image;
    nameCard.textContent = sneaker.name;

    sneakerCard.append(individualCard);
    individualCard.append(imgCard, nameCard);
    
}