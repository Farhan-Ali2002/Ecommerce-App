let categories = []
let ProductsList =  []
async function getProductsList(){
    let response = await fetch('https://fakestoreapi.com/products')
    let products = await response.json()
    return products

}


async function showAllProducts(value="none"){

    if (value === "none") {
         ProductsList = await getProductsList()
        console.log(ProductsList)
    }
    else{
         ProductsList = await getProductByCategory(value)
         console.log("in func",ProductsList)



    }
  

for (let i = 0; i < ProductsList.length; i++) {
    var productList = document.getElementById("product-list")
let category = ProductsList[i].category
if (!(categories.includes(category))) {
    categories.push(category)
    
}

var cardLink = document.createElement("a")
cardLink.href = `./product.html?id=${ProductsList[i].id}`

var card = document.createElement("div")
card.className = "card"




var prodImg = document.createElement("img")
prodImg.className = "prodImg"
prodImg.src = `${ProductsList[i].image}`
// prodImg.style.width = "100%"
// prodImg.style.height = "50%"
// prodImg.style.objectFit = "contain"
// prodImg.style.marginBottom = "20px"



var prodContainer = document.createElement("div")
prodContainer.className = "prod-container"
var title = document.createElement("h4")
title.className = "prodTitle"
title.innerHTML = ProductsList[i].title
var titleDiv = document.createElement("div")
titleDiv.className = "titleDiv"
var desc = document.createElement("p")
// desc.innerHTML = ProductsList[i].description

var price = document.createElement("p")
price.innerHTML = "$"+ProductsList[i].price
desc.className = "prodDesc"
price.className = "prodPrice"


var rating = document.createElement("div")
rating.className = "rating"
const filledStars = Math.round(ProductsList[i].rating.rate);
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


ratingNum.innerHTML = ProductsList[i].rating.rate+"/5"
rating.appendChild(ratingNum)
titleDiv.appendChild(title)

var cartButton = document.createElement("button")
cartButton.className = "cart-button"
cartButton.classList.add("btn")
cartButton.classList.add("danger")
cartButton.innerHTML = "Add To Cart"
prodContainer.appendChild(titleDiv)
// prodContainer.appendChild(desc)
prodContainer.appendChild(rating)
prodContainer.appendChild(price)
prodContainer.appendChild(cartButton)
card.appendChild(prodImg)
card.appendChild(prodContainer)

cardLink.appendChild(card)
productList.appendChild(cardLink)
    
    
}
console.log("category:",categories)
    
}
       

window.onload = showAllProducts()


var radioButtons = document.getElementsByName("Category");

// Add event listener to each radio button
radioButtons.forEach(function(radio) {
  radio.addEventListener("change", function() {
    if (this.checked) {
      // Call your function here
      showAllProducts(this.value)
      
    }
  });
});
async function getProductByCategory(value) {
    console.log(`${value} Radio button selected!`);
    let response = await fetch(`https://fakestoreapi.com/products/category/${value}`)
    let filterProducts = await response.json()
    
    console.log(filterProducts)
    return filterProducts

    // Perform any actions you want here
  }