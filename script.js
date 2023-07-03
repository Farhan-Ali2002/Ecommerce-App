let categories = []
let allProducts =  []
async function getAllProducts(){
    let response = await fetch('https://fakestoreapi.com/products')
    let products = await response.json()
    return products

}


async function showAllProducts(){
   allProducts = await getAllProducts()
console.log(allProducts)

for (let i = 0; i < allProducts.length; i++) {
    var productList = document.getElementById("product-list")
let category = allProducts[i].category
if (!(categories.includes(category))) {
    categories.push(category)
    
}
var card = document.createElement("div")
card.className = "card"
var prodImg = document.createElement("img")
prodImg.src = `${allProducts[i].image}`
prodImg.style.width = "100%"
prodImg.style.height = "65%"
var prodContainer = document.createElement("div")
prodContainer.className = "prod-container"
var title = document.createElement("h4")
title.className = "prodTitle"
title.innerHTML = allProducts[i].title
var titleDiv = document.createElement("div")
titleDiv.className = "titleDiv"
var desc = document.createElement("p")
// desc.innerHTML = allProducts[i].description

var price = document.createElement("p")
price.innerHTML = "$"+allProducts[i].price
desc.className = "prodDesc"
price.className = "prodPrice"


var rating = document.createElement("div")
rating.className = "rating"
const filledStars = Math.round(allProducts[i].rating.rate);
for (let starIndex = 0; starIndex < 5; starIndex++) {
    var star = document.createElement("span")
    
    star.className = "fa fa-star"
    star.classList.add("star")
    if (starIndex<filledStars) {
        star.classList.add("filled")
        
    }
   
    rating.appendChild(star)
    
    
}
let ratingNum = document.createElement("span")
ratingNum.classList.add("star")
ratingNum.classList.add("ratingNum")


ratingNum.innerHTML = allProducts[i].rating.rate+"/5"
rating.appendChild(ratingNum)
titleDiv.appendChild(title)
prodContainer.appendChild(titleDiv)
prodContainer.appendChild(desc)
prodContainer.appendChild(price)
prodContainer.appendChild(rating)
card.appendChild(prodImg)
card.appendChild(prodContainer)


productList.appendChild(card)
    
    
}
console.log("category:",categories)
    
}
       

window.onload = showAllProducts()