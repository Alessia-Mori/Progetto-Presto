fetch('./Annunci.json').then((response)=>response.json()).then((data)=>{
    
    let radioWrapper = document.querySelector('#radioWrapper');
    let cardWrapper = document.querySelector('#cardWrapper');
    
    function setCategoryRadios() {
        let categorie = data.map((annuncio) => annuncio.category);
        
        let uniqueCategories = [];
        
        categorie.forEach( (category) => {
            if(!uniqueCategories.includes(category)) {
                uniqueCategories.push(category);
            }
        })
        
        uniqueCategories.forEach((category) => {
            let div = document.createElement('div');
            div.classList.add('form-check');
            div.innerHTML = `
            <input class="form-check-input" type="radio" name="category" id="${category}">
            <label class="form-check-label" for="${category}">
            ${category}
            </label>
            `;
            radioWrapper.appendChild(div);
        })
        
    }
    
    setCategoryRadios();
    
    // tagliare le stringhe troppo lunghe del nome 
    
    function tronca(string) {
        if (string.length > 15) {
            return string.split(' ')[0] + '...';
        }else {
            return string;
        }
    }
    
    function showCards(array){
        
        //ripulire il wrapper per ricaricare le card
        cardWrapper.innerHTML = '';
        //
        
        array.forEach((annuncio) => {
            let div = document.createElement('div');
            div.classList.add('card', 'cards-size', 'm-2');
            div.innerHTML = `
            <div class="card-body">
            <h5 class="card-title" title="${annuncio.name}">${tronca(annuncio.name)}</h5>
            <p class="card-text">${annuncio.category}</p>
            <p>${annuncio.price}</p>
            <a href="#" class="btn btn-tertiary">Shop</a>
            </div>
            `
            
            cardWrapper.appendChild(div);
        });
    };
    
    showCards(data);
    
    
    
    //filtro per catregoria specifica
    
    
    let radios = document.querySelectorAll('.form-check-input');
    
    function filterByCategory(array){

        let arrayFromNodeList = Array.from( radios );
        let button = arrayFromNodeList.find ((bottone)=> bottone.checked);
        let categoria = button.id;
        
        if (categoria != 'All'){
            let filtered = array.filter( (annuncio) => annuncio.category == categoria);

            return filtered;
        }else {
            return array;
        }
    };
    
    //filtro per prezzo
    
    let priceInput = document.querySelector('#priceInput');
    let priceRange = document.querySelector('#priceRange');
    
    
    function setRange(){
        // prendo l'array con i prezzi
        let prices = data.map ((annuncio)=> +annuncio.price);
        prices.sort((a, b)=> a - b );
        let maxPrice = Math.ceil(prices.pop());
        priceInput.max = maxPrice;
        priceInput.value = maxPrice;
        priceRange.innerHTML = maxPrice;
        
        
    }
    
    setRange();
    
    function filterByPrice(array){
        let filtered = array.filter( (annuncio)=> +annuncio.price <= priceInput.value );
        return filtered;
    }
    
    

    //filtro per parola

    let wordInput = document.querySelector('#wordInput');

    function filterByWord(array){

        let filtered = array.filter( (annuncio)=> annuncio.name.toLowerCase().includes(wordInput.value.toLowerCase()) );
        return filtered;


    }

    
    
    //funzione di filtro globale

    function globalFilter(){
        let filteredByCategory = filterByCategory(data);
        let filteredByPrice = filterByPrice(filteredByCategory);
        let filteredByWord = filterByWord(filteredByPrice);

        showCards(filteredByWord);
    }





    //EventListener category

    radios.forEach( (button)=> {
        button.addEventListener('click', ()=>{
            globalFilter();                                                                    
        });
    });

    //listener prices

    priceInput.addEventListener( 'input', ()=>{
        globalFilter();                                                                        
        priceRange.innerHTML = priceInput.value;
    });

    // event listener parola

    wordInput.addEventListener('input', ()=> {
        globalFilter();                                                                        
    });
    
})


