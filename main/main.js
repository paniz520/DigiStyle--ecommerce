 /*--------header picture slider functionality-------*/
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


//-------main 1st item hover----------//

let main__firstLIs = document.querySelectorAll('.main__first-li');
let main__1stLower4 = document.querySelector('.main__1st .lower4');
let main__1stLower3 = document.querySelector('.main__1st .lower3');
let main__1stLower2 = document.querySelector('.main__1st .lower2');
let main__1stLower1 = document.querySelector('.main__1st .lower1');
main__firstLIs.forEach( (li)=>{
    li.addEventListener('click', ()=>{
        main__firstLIs.forEach( (li)=> li.classList.remove('active2') );
        li.classList.add('active2');
        if(li.classList.contains('li4')){
            main__1stLower4.style.display = 'grid';
            main__1stLower3.style.display = 'none'
            main__1stLower2.style.display = 'none'
            main__1stLower1.style.display = 'none'
        }
        if(li.classList.contains('li3')){
            main__1stLower4.style.display = 'none';
            main__1stLower3.style.display = 'grid'
            main__1stLower2.style.display = 'none'
            main__1stLower1.style.display = 'none'
        }
        if(li.classList.contains('li2')){
            main__1stLower4.style.display = 'none';
            main__1stLower3.style.display = 'none'
            main__1stLower2.style.display = 'grid'
            main__1stLower1.style.display = 'none'
        }
        if(li.classList.contains('li1')){
            main__1stLower4.style.display = 'none';
            main__1stLower3.style.display = 'none'
            main__1stLower2.style.display = 'none'
            main__1stLower1.style.display = 'grid'
        }
    })
})

/*---------popular items slider -------*/
let popularItems__movingFrame = document.querySelector('.popularItems__movingFrame');
function scrollRight()
{
    popularItems__movingFrame.style.transform = `translateX(${-100}%)`;
}
function scrollLeftItem()
{
    popularItems__movingFrame.style.transform = `translateX(${0}%)`;
} 
