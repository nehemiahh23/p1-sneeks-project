const detailCard = document.querySelector("#detail-div")
detailCard.style.display = "none"

const detailImg = document.createElement("img")
const detailName = document.createElement("h1")
const detailMaker = document.createElement("p")
// const detailPrice = document.createElement("h2")
// const sizeDD = document.createElement("select")

detailCard.append(detailImg, detailName, detailMaker)

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

    imgCard.className = 'shoe-img'
    // line below is just here to make the display work for now
    detailImg.className = 'shoe-img'

    sneakerCard.append(individualCard);
    individualCard.append(imgCard, nameCard);
    
    individualCard.addEventListener("click", () => {
        if (detailCard.style.display === "none") {
            detailCard.style.display = "block"
            detailImg.src = sneaker.image
            detailName.innerText = sneaker.name
            detailMaker.innerText = sneaker.maker
        }
        else {
            detailCard.style.display = "none"
        }
    })
}