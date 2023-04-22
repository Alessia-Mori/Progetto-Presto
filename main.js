let announcements = [
    {name: 'tshirt', category: 'sportswear', price: '45', url: './media/tshirt_card.jpg'},
    {name: 'airjordan', category: 'sportswear', price: '120', url: './media/airjordan1_card.jpg' },
    {name: 'tracksuit', category: 'sportswear', price: '30', url: './media/tracksuit_card.jpg'},
    {name: 'bag', category: 'sportswear', price: '50', url: './media/bag_card.jpg'},

]

let cardsWrapper = document.querySelector('#cards-wrapper');

announcements.forEach((annuncio, i) => {
    if (i >= announcements.length -3) {
        let div = document.createElement('div');

        div.classList.add('col-12', 'col-md-4');
        div.innerHTML =  `
        <div class="card" style="width: 18rem;">
        <img src="${annuncio.url}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title fw-bold">${annuncio.name}<i class="fa-regular fa-heart ms-5 fs-4"></i></h5>
            <p class="card-text">${annuncio.category}</p>
            <p>${annuncio.price}</p>
            <a href="#" class="btn btn-dark">Go somewhere</a>
        </div>
        </div>
        `      
        cardsWrapper.appendChild(div);  
    } 

})

let hearts = document.querySelectorAll('.fa-heart');

hearts.forEach((heart) => {
    heart.addEventListener('click', () => {
        heart.classList.toggle('fa-solid');
        heart.classList.toggle('fa-regular');
    } )
})

// sezione recensioni 

  let reviews = [
    {name : 'Alessia', rank: '4.5', review : 'Spedizione veloce'},
    {name : 'Mattia', rank: '5', review : 'Assistenza ottima'},
    {name : 'Federico', rank: '4', review : 'Qualità dei prodotti top'},
    {name : 'Fedele', rank: '3.5', review : 'Apprezzati i gadget'},
];

let swiperWrapper = document.querySelector('.swiper-wrapper');

reviews.forEach ((review)=> {
    let div = document.createElement('div');
    div.classList.add('swiper-slide');
    div.innerHTML = 
    ` <div class="card card-size">
    <div class="text-center my-5">
    <h5 class="card-title">${review.name}</h5>
    <p class="card-text">${review.review}</p>
    <div class="starsWrapper">
    ${creaStars(review.rank)}
    </div>
    </div>
    </div> `
    
    swiperWrapper.appendChild(div);
})

let starsWrappers = document.querySelectorAll('.starsWrapper');

// starsWrappers.forEach((wrapper, i) => {
// let voto = reviews[i].rank
// for (let i = 1; i <= voto ; i++) {
//     let icon = document.createElement('i');
//     icon.classList.add('fa-solid', 'fa-star');
//     wrapper.appendChild(icon);
    
// }
// })


function creaStars(num) {
   let result = '';
   
   for (let i = 1; i <= 5; i++) {
        if (num == 0.5) {
            result = result + '<i class="fa-regular fa-star-half-stroke"></i>'
            num = 0
        } else if (num > 0) {
            result = result + '<i class="fa-solid fa-star"></i>'
            num--
        } else {
            result += '<i class="fa-regular fa-star"></i>'
        }
   }
   return result;
}



//JS Swiper


    var swiper = new Swiper(".mySwiper", {
      effect: "cube",
      grabCursor: true,
      cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      },
      pagination: {
        el: ".swiper-pagination",
      },
    });
  


// ``````````````````````

// navbar che cambia 

let navbarCol = document.querySelector('#navbarCol');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        navbarCol.style.backgroundColor = 'var(--tertiary)'
    }
})



// let stelle_piene = 3.5;
// let stelle_piena = 'stelle_piena ';
// let stella_a_meta = 'stella_a_meta ';
// let stella_vuota = 'stella vuota '
// let contenitore_delle_stelle= '';
// for(let i=0; i<5; i++){
//     if (stelle_piene > 0.5) {
//         contenitore_delle_stelle =contenitore_delle_stelle + stelle_piena;
//         stelle_piene = stelle_piene -1
//     }else if (stelle_piene == 0.5) {
//         contenitore_delle_stelle =contenitore_delle_stelle + stella_a_meta;
//         stelle_piene = stelle_piene -1
//     } else {
//         contenitore_delle_stelle =contenitore_delle_stelle + stella_vuota;

//         stelle_piene = stelle_piene -1
//     }
// console.log(stelle_piene);

// }  

// console.log(contenitore_delle_stelle);
