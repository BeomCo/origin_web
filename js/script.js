const downArrow = document.querySelector(".sns ul li:nth-child(1)");
let width = document.querySelector("html").offsetWidth;
// console.log(width);
// console.log(downArrow);

addEventListener('resize', ()=>{
    width = document.querySelector("html").offsetWidth;
});


function clickDownScroll(e){
    // e.preventDefault();
    const mainSection = document.querySelector(".main").offsetTop;
    window.scroll({top:mainSection, behavior: 'smooth'});
}

downArrow.addEventListener('click', (e)=>{
    if(width <= 767){
        e.preventDefault();
        clickDownScroll();
    };
})