// Fetch api and show data
const apiURL = 'https://fakestoreapi.com/products';

    async function fetchClothData() {
      try {
        const response = await fetch(apiURL);
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();

        // Call a function to display the fetched data
        displayClothData(data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    }

    function displayClothData(prod) {
      const container = document.getElementById("product-container");
      container.innerHTML = ""; // Clear any existing content

      prod.forEach(prod => {
        // Create a card for each product
        const card = document.createElement("div");
        card.className = "card";

        

        card.innerHTML = `
          <img src="${prod.image}" alt="${prod.title}">
          <h3>${prod.title}</h3>
          <p class="price">Price: $${prod.price}</p>
          
        `;
        

        container.appendChild(card);
      });
    }

    // Fetch and display the data on page load
    fetchClothData();




// Search functionality one
const searchProduct=()=>{
    let searchInput = document.getElementById("searchInput").value.toUpperCase();
    let products = document.getElementById("product-container");
    let pCard = document.querySelectorAll(".card");
    let productName = products.getElementsByTagName("h3");

    for(i=0; i<productName.length; i++){
         let match = pCard[i].getElementsByTagName("h3")[0];
         if(match){
            let textValue = match.textContent || match.innerHTML
            if(textValue.toUpperCase().indexOf(searchInput)>-1){
                pCard[i].style.display=""
            }else{
                 pCard[i].style.display="none"
            }
         }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const productsContainer = document.getElementById("product-container");
    const loadingElement = document.getElementById("loading");

    // Show the loading effect
    loadingElement.style.display = "block";
    productsContainer.style.display = "none";

    // Simulate loading time (e.g., 2 seconds)
    setTimeout(() => {
        loadingElement.style.display = "none";
        productsContainer.style.display = "grid";
    }, 1000); // Adjust time as needed
});


// Search functionality two
// function searchProduct() {
//     const input = document.getElementById("searchInput").value.toLowerCase();
//     const products = document.querySelectorAll(".product");

//     products.forEach((product) => {
//         const title = product.querySelector("h2").innerText.toLowerCase();
//         product.style.display = title.includes(input) ? "flex" : "none";
//     });
// }