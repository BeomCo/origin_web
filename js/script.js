const downArrow = document.querySelector(".sns ul li:nth-child(1)");
const mainSection = document.querySelector(".main").offsetTop;
let width = document.querySelector("html").scrollWidth;
// console.log(width);
// console.log(downArrow);

addEventListener('resize', ()=>{
    width = document.querySelector("html").scrollWidth;
});


function clickDownScroll(e){
    // e.preventDefault();
    window.scroll({top:mainSection, behavior: 'smooth'})
}

downArrow.addEventListener('click', (e)=>{
    e.preventDefault();
    if(width >= 767){
        clickDownScroll();
    }
})