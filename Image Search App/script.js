const API_URL = "ZGeZzngJdX570IrYVOr33pZtfFoPjfMzDMHry1BpKcY";

const form = document.querySelector("form");
const SearchBtn = document.querySelector("#btn");
const Input = document.querySelector("#input");
const NextBtn = document.querySelector("#next");
const SrcResult = document.querySelector(".search-result");
const SrcResults = document.querySelector(".search-results");

let inputData = "";
let page = 1;

Input.focus();  // focus on input when page loads

async function searchImages(){
    inputData = Input.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${API_URL}`;
    console.log(url);
    
    const response = await fetch(url);
    const data = await response.json();
    
    if(page === 1){
        SrcResults.innerHTML = "";
    }
    
    const Result = data.results;
    console.log(Result);

    Array.from(Result).forEach((res) => {
        const searchResult = document.createElement("div");
        searchResult.classList.add("search-result");
        
        const image = document.createElement("img");
        image.src = res.urls.small;
        image.alt = res.alt_description;
        
        const imageLink = document.createElement("a");
        imageLink.href = res.links.html;
        imageLink.target = "_blank";
        imageLink.textContent = res.alt_description;
        
        searchResult.appendChild(image);
        searchResult.appendChild(imageLink);
        SrcResults.appendChild(searchResult);

        console.log(searchResult);
 
    });
    
    page++;
    
    if(page > 1){
        NextBtn.style.display = "block";
    }
}

form.addEventListener("submit", function(e){
    e.preventDefault();
    page = 1;
    searchImages();
});

NextBtn.addEventListener("click", function(){
    searchImages();
});