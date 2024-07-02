// const header = document.querySelector(".content")

// function toggleShow (){
//     header.classList.toggle("show")
// }
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots: false,
    autoplay: false,
    autoplayTimeout: 2500,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


// maslalar
// {
//     // 1 masla
//     function onlyNumbers(array){
//     let sum = array.filter((son) => son > 0)  
//     console.log(sum);
   
//     }
//     console.log(onlyNumbers([-5, 6, 3, -3, false]));
//     console.log(onlyNumbers([-12, 6, 3, -3, 5, 7, false]));
// }
// {
//     // 2 masala
//     function tenth(son){
//     return Math.floor (son / 10 ) % 10
//     }
//     console.log(tenth(123));
//     console.log(tenth(4576));
// }
// {
//     //  3 masala
//     function binary(son){
//       return `${son === 1} ` 
//     }
//     console.log(binary(1));
// }
// {

//     function binary(son){
//         if(son === 1){
//             return true
//         }else if (son === 0){
//             return false
//         }else{
//             return null
//         }
//     }
//     console.log(binary(0));
// }
// {
//     //  5masala
//     function foo(str){
//         return `${str === "123456hello"}`
//     }
//     console.log(foo(("123456")));
// }
