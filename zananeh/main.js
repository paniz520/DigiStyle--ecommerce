 /*-------header items hover-------*/
 let zananeh = document.querySelector('.zananeh');
 let products__hover = document.querySelector('.products__hover');
 let headerUpper = document.querySelector('.upper');
 zananeh.addEventListener('mouseover', ()=>{
    products__hover.style.display = 'block';
 });
 headerUpper.addEventListener('mouseover', ()=>{
    if(products__hover.style.display = 'block'){
        products__hover.style.display = 'none';
    }
 })


 let headerHovers = document.querySelectorAll('.header-hover');
 let lower5 = document.querySelector('.lower5')
 let lower4 = document.querySelector('.lower4')
headerHovers.forEach((headerHover)=>{
    headerHover.addEventListener('mouseover', ()=>{
        headerHovers.forEach(headerHover => headerHover.classList.remove('active'));
        headerHover.classList.add('active');
        if(headerHover.classList.contains('hover5')){
            lower5.style.display = 'flex';
            lower4.style.display = 'none';
        }
        else if(headerHover.classList.contains('hover4')){
            lower4.style.display = 'flex';
            lower5.style.display = 'none';
        }
    });
});

/*displaying products using api */
let start = 0;
let end = 8;
let products = [];
let storeItems = document.querySelector('.storeItems');
const url = "https://fakestoreapi.com/products";
let skeletonLoader = document.querySelector('.skeleton-loader');

async function getData(){
let response =  await fetch(url);
products = await response.json();
console.log(products)
updateCards();
skeletonLoader.style.display = 'none';
}

let content = '';
function display(chosenCards){
    chosenCards.forEach((product)=>{
        content += `
        <div class="card">
             <div class="imageDiv skeleton">
                 <img src="${product.image}" class="skeleton" alt="">
             </div>
             <span class="title">${product.title}</span>
             <span class="price">${product.price}$</span>
         </div>
  `
    })

 storeItems.innerHTML = content;
}
 function updateCards(){
   let chosenCards = products.slice(start, end);
   display(chosenCards);
 }


 getData();

 let showMoreBtn = document.querySelector('.showMore');
 showMoreBtn.addEventListener('click', ()=>{
    if(end<= products.length){
        start += 8;
        end += 8;
        updateCards();
    }
    else{
        showMoreBtn.style.display = 'none'
    }
 })

 /*------- search functionality -------*/
 let searchInput = document.querySelector('.search');
 let newProducts = [];
 function filterBySearch(event){
    let userChar = event.target.value.trim().toLowerCase();
    console.log(userChar);

    // Filter the products based on search input
    newProducts = products.filter(product => 
        product.title.trim().toLowerCase().includes(userChar)
    );
    storeItems.innerHTML = '';
   
    // Reset start and end for pagination
    start = 0;  // Reset start to 0
    end = newProducts.length;  // Set end to the lesser of newProducts length or 8

    // Display filtered products
    display(newProducts.slice(start, end));
}
 storeItems.style.display = 'none'
 skeletonLoader.style.display = 'none';
 showMoreBtn.style.display = 'none';
