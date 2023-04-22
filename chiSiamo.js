let contacts = [
    {name : 'Carlo', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, blanditiis.', url: './media/contact1.jpg'},
    {name : 'Marco', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, blanditiis.', url: './media/contact2.jpg'},
    {name : 'Chiara', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, blanditiis.', url: './media/contact3.jpg'},
    {name : 'Anna', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, blanditiis.', url: './media/contact4.jpg'}
];

// movedDivs = [
//     div1, 
//     div2,
//     div3,
//     div4
// ]

let circle = document.querySelector('.circle');
let opener = document.querySelector('.opener');

let cardImg = document.querySelector('.img-top');
let contactName = document.querySelector('#contactName');
let contactDescription = document.querySelector('#contactDescription');

contacts.forEach((contact)=>{
    let div = document.createElement('div');
    div.classList.add('moved');
    div.style.backgroundImage = `url(${contact.url})`;
    circle.appendChild(div);
})

let movedDivs = document.querySelectorAll('.moved');
let check = false;

opener.addEventListener('click',()=>{
    if (check == false) {
        movedDivs.forEach((div, i) => {
            let angle = (360*i)/movedDivs.length;
            div.style.transform = `rotate(${angle}deg) translate(150px) rotate(-${angle}deg)`;

        });
        check = true;
    } else {
        movedDivs.forEach((div, i) => {
            
            div.style.transform = `rotate(0deg) translate(0px)`;
        });
        check = false;
        cardImg.style.backgroundImage = ``;
        contactName.innerHTML = ``;
        contactDescription.innerHTML = ` `;
    }

});



movedDivs.forEach((moved, i)=>{
    moved.addEventListener('click',()=>{
        let contatto = contacts[i];
        cardImg.style.backgroundImage = `url(${contatto.url})`;
        contactName.innerHTML = `${contatto.name} `;
        contactDescription.innerHTML = `${contatto.description} `;
    })
})
