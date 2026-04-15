const fecthData = async()=>{

const getData = await fetch("https://dummyjson.com/products")

const changeData = await getData.json()
 
const datas = changeData.products

//console.log(datas);

const products = document.getElementById("productList")

products.innerHTML = ""


datas.forEach((product)=>{

    let card = `
          <div class="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4 flex flex-col">

            <!-- Image -->
            <img src="${product.images}" 
                 class="h-48 object-contain mb-4">

            <!-- Title -->
            <h2 class="font-semibold text-lg mb-2 line-clamp-2">
              ${product.title}
            </h2>

            <!-- Price -->
            <p class="text-green-600 font-bold text-xl mb-2">
              $${product.price}
            </p>

            <!-- Category -->
            <p class="text-gray-500 text-sm mb-3">
              ${product.category}
            </p>

            <!-- Button -->
            <button 
              class="mt-auto bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
              Add to Cart
            </button>

          </div>
        `;

        products.innerHTML += card;

});



}

fecthData()


