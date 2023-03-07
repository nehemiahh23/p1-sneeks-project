const detailCard = document.querySelector("#detail-div")
detailCard.style.display = "none"

const detailImg = document.createElement("img")
const detailName = document.createElement("h1")
const detailMaker = document.createElement("p")
// const detailPrice = document.createElement("h2")
// const sizeDD = document.createElement("select")
let currentSneaker;

detailCard.append(detailImg, detailName, detailMaker)

fetch('http://localhost:3000/sneakers')
    .then(resp => resp.json())
    .then(sneakersArray => sneakersArray.forEach(sneakerObj => {
        //console.log(sneakerObj)
        renderSneaker(sneakerObj)
    }))

const renderSneaker = sneaker => {
    // console.log(sneaker)
    const sneakerCard = document.getElementById('sneaker-card');
    const individualCard = document.createElement('div');
    const imgCard = document.createElement('img');
    const nameCard = document.createElement('h2');
    const reviewDiv = document.getElementById('review-div');
    


    imgCard.src = sneaker.image;
    nameCard.textContent = sneaker.name;

    imgCard.className = 'shoe-img'
    // line below is just here to make the display work for now
    detailImg.className = 'shoe-img'

    sneakerCard.append(individualCard);
    individualCard.append(imgCard, nameCard);

    individualCard.addEventListener("click", () => {
        currentSneaker = sneaker;
        if (detailCard.style.display === "none") {
            detailCard.style.display = "block"
            detailImg.src = sneaker.image
            detailName.innerText = sneaker.name
            detailMaker.innerText = sneaker.maker

            while (reviewDiv.firstChild) {
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

const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    renderForm(e, currentSneaker)
    // console.log(sneaker.id)
    form.reset();
})

function renderReview(review, reviewDiv) {
    const p = document.createElement('p');
    p.textContent = review;
    reviewDiv.append(p);
}


function renderForm(e, sneaker) {
    // console.log(sneaker)
    const reviewDiv = document.getElementById('review-div');
    const input = e.target["leave-review"].value;
    // debugger;
    // renderReview(input, reviewDiv);
    // console.log(sneaker.id);
    fetch(`http://localhost:3000/sneakers/${sneaker.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            reviews: [...sneaker.reviews, input]
        })
    })
    // debugger;
    .then(resp => resp.json())
    .then(() =>  renderReview(input, reviewDiv));
}


