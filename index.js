fetch('http://localhost:3000/sneakers')
    .then(resp => resp.json())
    .then(sneakersArray => sneakersArray.forEach(sneakerObj => renderSneaker(sneakerObj)))

const renderSneaker = sneaker => {
    const sneakerCard = document.getElementById('sneaker-card');
    const individualCard = document.createElement('div');
    const imgCard = document.createElement('img');
    const nameCard = document.createElement('h2');
    const detailCard = document.querySelector("#detail-div");
    const reviewDiv = document.getElementById('review-div');


    imgCard.src = sneaker.image;
    nameCard.textContent = sneaker.name;

    imgCard.className = 'shoe-img'

    sneakerCard.append(individualCard);
    individualCard.append(imgCard, nameCard);
    
    individualCard.addEventListener("click", () => {
        if (detailCard.style.display === "none") {
            detailCard.style.display = "block"
            while(reviewDiv.firstChild) {
                reviewDiv.removeChild(reviewDiv.lastChild);
            }
            const h3 = document.createElement('h3');
            h3.textContent = "Reviews";
            reviewDiv.append(h3);
            sneaker.reviews.forEach(review => {
                renderReview(review, reviewDiv);
            })
        }
        else {
            detailCard.style.display = "none"
        }

    })

    
}

function renderReview(review, reviewDiv) {
    const p = document.createElement('p');
    p.textContent = review;
    reviewDiv.append(p);
}

