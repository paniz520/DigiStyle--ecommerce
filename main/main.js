 
 let currentIndex = 0;
 let slides = document.querySelectorAll('.slide');
 let slidesDiv = document.querySelector('.slides');

function showSlide(index){
if(index >= slides.length ){
    currentIndex = 0
}
else if(index < 0){
    currentIndex = slides.length - 1;
}
else{
    currentIndex = index
}
    let offset = -currentIndex * 100;
    slidesDiv.style.transform = `translateX(${offset}%)`;
}

 function changeSlide(direction){
    showSlide(currentIndex + direction);
 }

 setInterval( ()=>{
    changeSlide(1)
 }, 15000);

 showSlide(currentIndex);

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