var urlParams = new URLSearchParams(window.location.search);
const myid = urlParams.get("id")




async function getSingleProduct(){
    let response = await fetch(`https://fakestoreapi.com/products/${myid}`)
    let product = await response.json()

    console.log(product)


    var title = document.getElementById("singleTitle")
    title.innerHTML = product.title

    var singleImg = document.getElementById("img")
    singleImg.src = product.image


    var desc = document.getElementById("description")
    desc.innerHTML = product.description


    var price = document.getElementById("singlePrice")
    price.innerHTML = "$"+product.price

var rating = document.getElementsByClassName("single-rating")[0]
console.log("youuuu",rating)

    const filledStars = Math.round(product.rating.rate);
for (let starIndex = 0; starIndex < 5; starIndex++) {
    var star = document.createElement("span")
    
    star.className = "fa fa-star"
    star.classList.add("star-single")
    if (starIndex<filledStars) {
        star.classList.add("filled")
        
    }
   
    rating.appendChild(star)
    
    
}
}
window.onload = getSingleProduct()