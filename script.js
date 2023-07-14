document.addEventListener("DOMContentLoaded", ()=>{
let productscourses = document.querySelector(".products__courses");
let productscoursescollections = document.querySelectorAll(".products__course");
let checkbox = document.querySelector(".product__body-elements-item:nth-child(5) input")
let sublist = document.querySelector(".product__sublist")
let pusto1 = document.querySelector(".pustishka1")
let pusto2 = document.querySelector(".product__body")
let pusto3 = document.querySelector(".pustishka3")


function deleteactiveproducts(){
    for (let i of productscoursescollections) {
        i.classList.remove("active-block")
    }
}



productscourses.addEventListener("click", (e)=>{
    
let number0fcourses = Number(e.target.dataset.number);
if(number0fcourses==1){
    deleteactiveproducts()
    e.target.classList.toggle("active-block")
    pusto2.replaceWith(pusto1)
}
if(number0fcourses==2){
    deleteactiveproducts()
    e.target.classList.toggle("active-block")

}
if(number0fcourses==3){
    deleteactiveproducts()
    e.target.classList.toggle("active-block")
}
})


    checkbox.addEventListener("click", (e)=>{
        console.log(typeof(e.target.name))
        if(e.target.name == "checkE"){
        // sublist.style.cssText = "display:none"
        sublist.classList.toggle("displaynone")
        }

    })



})