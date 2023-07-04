var urlParams = new URLSearchParams(window.location.search);
const myid = urlParams.get("id")




async function getSingleProduct(){
    let response = await fetch(`https://fakestoreapi.com/products/${myid}`)
    let product = await response.json()

    console.log(product)


    var title = document.getElementById("singleTitle")
    title.innerHTML = product.title
}
window.onload = getSingleProduct()