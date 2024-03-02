const API_URL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c3573la5ee918f014970082a008b1&page=1";

async function getMovies(){
    const resp = await fetch(API_URL);
    const data = await resp.json();

    return data;
}

console.log(getMovies());