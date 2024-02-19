


var productNameInput = document.getElementById('productName')
var productPriceInput = document.getElementById('productPrice')
var productCategoryInput = document.getElementById('productCategory')
var productDescInput = document.getElementById('productDesc')
var searchInput = document.getElementById('searchInput')
var addbtn = document.getElementById('addBtn')
var products = []
var inputs = document.getElementsByClassName('form-control')
var currentIndex=0

addbtn.onclick = function () {
    if(addbtn.innerHTML=='addProduct')
    {    addProduct()
    }
    else
    {
        updateInfo()
    }
    displayData()
    clearform()
}
if (JSON.parse(localStorage.getItem('productLists')) != null) {
    products = JSON.parse(localStorage.getItem('productLists'))
    displayData()

}

function addProduct() {
    var product =
    {
        name: productNameInput.value,
        price: productPriceInput.value,
        category: productCategoryInput.value,
        desc: productDescInput.value,

    }
    products.push(product)
    localStorage.setItem('productLists', JSON.stringify(products))

}
function displayData() {
    var cartona = ''
    for (var i = 0; i < products.length; i++) {
        cartona += `<tr>
<td>${products[i].name}</td>
<td>${products[i].price}</td>
<td>${products[i].category}</td>
<td>${products[i].desc}</td>
<td><button onclick=getProduct(${i}) class='btn btn-warning'>update</button></td>
<td><button onclick=deleteProduct(${i}) class='btn btn-danger'>delete</button></td>
</tr>`
    }
    document.getElementById('tableBody').innerHTML = cartona
}


function deleteProduct(index) {
    products.splice(index, 1)
    displayData()
    localStorage.setItem('productLists', JSON.stringify(products))

}

function clearform() {
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = ''
    }
}

searchInput.onkeyup = function () {
    var cartona = ''
    for (var i = 0; i < products.length; i++) {
        if (products[i].name.toLowerCase().includes(searchInput.value.toLowerCase())) {
            cartona += `<tr>
<td>${products[i].name}</td>
<td>${products[i].price}</td>
<td>${products[i].category}</td>
<td>${products[i].desc}</td>
<td><button class='btn btn-warning'>update</button></td>
<td><button onclick=deleteProduct(${i}) class='btn btn-danger'>delete</button></td>
</tr>`
        }
        document.getElementById('tableBody').innerHTML = cartona
    }
}

function getProduct(index)
{
    currentIndex=index
    productNameInput.value=products[index].name
    productPriceInput.value=products[index].price
    productCategoryInput.value=products[index].category
    productDescInput.value=products[index].desc
    addbtn.innerHTML='updateproduct'

}

function updateInfo()
{
    var product=
    {
        name: productNameInput.value,
        price: productPriceInput.value,
        category: productCategoryInput.value,
        desc: productDescInput.value,    }

        products[currentIndex]=product
        addbtn.innerHTML='addproduct'
        localStorage.setItem('productLists', JSON.stringify(products))



}