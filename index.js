const detailCard = document.querySelector("#detail-div")
detailCard.style.display = "none"

const detailImg = document.createElement("img")
const detailName = document.createElement("h1")
const detailMaker = document.createElement("h2")
let currentSneaker;
const detailPrice = document.createElement("h3")
const sizeDD = document.createElement("select")
const addToCart = document.createElement('button');
addToCart.id = 'addToCart';
const cartItems = document.getElementById('cart-items');

// for side bar
const sideBar = document.getElementById('side-bar');
const exit = document.getElementById('exit');
sideBar.style.display = 'none';

// Patchwork
const reviewDiv = document.createElement('div');
reviewDiv.id = "review-div"
const formDiv = document.createElement("div")
formDiv.id = "form-div"
const form = document.createElement('form');
form.id = "form"
const formLabel = document.createElement("label")
formLabel.htmlFor = "leave-review"
const textInput = document.createElement("input")
textInput.type = "text"
textInput.name = "leave-review"
textInput.placeholder = "Add your review here..."
const submitButton = document.createElement("input")
submitButton.type = "submit"
submitButton.value = "Submit"
form.append(formLabel, textInput, submitButton)
formDiv.append(form)


detailCard.append(detailImg, detailName, detailMaker, sizeDD, detailPrice, addToCart, reviewDiv, formDiv)

fetch('http://localhost:3000/sneakers')
    .then(resp => resp.json())
    .then(sneakersArray => sneakersArray.forEach(sneakerObj => renderSneaker(sneakerObj)))

const renderSneaker = sneaker => {
    const sneakerCard = document.getElementById('sneaker-card');
    const individualCard = document.createElement('div');
    const imgCard = document.createElement('img');
    const nameCard = document.createElement('h2');
    individualCard.className = "six-sneakers"
    const individualArray = document.getElementsByClassName('six-sneakers')
    const cartImg = document.getElementById('cart');

    imgCard.src = sneaker.image;
    nameCard.textContent = sneaker.name;

    imgCard.className = 'shoe-img'
    // line below is just here to make the display work for now
    detailImg.className = 'shoe-img'

    imgCard.id = sneaker.id

    sneakerCard.append(individualCard);
    individualCard.append(imgCard, nameCard);

    individualCard.addEventListener("click", () => {
        // individualCard.classList.toggle('blurr');
        for(let i = 0; i < individualArray.length; i++) {
            individualArray[i].classList.toggle('blurr');
        }

        currentSneaker = sneaker;

        if (detailCard.style.display === "none") {
            detailCard.style.display = "block"
            sneakerCard.append(detailCard)
            // Add shoe details
            detailImg.src = sneaker.image
            detailName.innerText = sneaker.name
            detailMaker.innerText = sneaker.maker
            detailPrice.innerText = `$${sneaker.price[0].toFixed(2)}`
            addToCart.textContent = 'Add To Cart';

            sneaker.size.forEach(size => {
                const sizeOpt = document.createElement("option")
                sizeOpt.innerText = size
                sizeDD.append(sizeOpt)
            })

            // Add dropdown functionality
            sizeDD.addEventListener("change", (e) => {
                detailPrice.innerText = `$${sneaker.price[sneaker.size.indexOf(e.target.value)].toFixed(2)}`
            })
            
            // Add shoe reviews
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


    cartImg.addEventListener('click', () => {
        if(sideBar.style.display === 'none') {
            sideBar.style.display = 'block';
        }
    })

    exit.addEventListener('click', () => {
        if(sideBar.style.display === 'block'){
            sideBar.style.display = 'none';
        }
    })
}


addToCart.addEventListener('click', () => {
    // console.log(cartItems.textContent);
    if(cartItems.textContent) {
        cartItems.textContent = parseInt(++cartItems.textContent);
        const sideBarText = document.createElement('p');
        sideBar.append(sideBarText);
        sideBarText = 'bla'
    } else {
        cartItems.textContent = 1;
    }
})


form.addEventListener('submit', (e) => {
    e.preventDefault();
    renderForm(e, currentSneaker)
    form.reset();
})

function renderReview(review, reviewDiv) {
    const p = document.createElement('p');
    p.textContent = review;
    reviewDiv.append(p);
}


function renderForm(e, sneaker) {
    const reviewDiv = document.getElementById('review-div');
    const input = e.target["leave-review"].value;

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
    .then(resp => resp.json())
    .then(() =>  renderReview(input, reviewDiv));
}


