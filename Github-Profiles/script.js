const API_URL = "https://api.github.com/users/";
const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");

async function getUser(username) {
  try {
    const res = await fetch(API_URL + username);
    const data = await res.json();

    if (res.ok) {
      createUserCard(data);
      getRepos(username);
    }  else {
      if (res.status === 404) {
        showNotFound();
      } else {
        console.log(`Error: ${data.message}`);
      }
    }
  } catch (error) {
    console.log(`Error fetching user data : ${error}`);
  }
}

async function getRepos(username) {
      const res = await fetch(API_URL + username + "/repos");
      const data = await res.json();

      addReposToCard(data);
}

function createUserCard(user) {
  const cardHTML = `
    <div class="card">
        <div>
            <img src="${user.avatar_url}" alt="${user.name}" />
        </div>
        <div>
            <h2>${user.name}</h2>
            <p>${user.bio}</p>

            <ul class="follow">
                <li>${user.followers} <strong>Followers</strong></li>
                <li>${user.following} <strong>Following</strong></li>
                <li>${user.public_repos} <strong>Repos</strong></li>
            </ul>
            
            <ul class="repos" id="repos"></ul>
        </div>
    </div>`;

  main.innerHTML = cardHTML;
}

function addReposToCard(repos){
    const reposEl = document.getElementById("repos");
    repos.slice(0, 5).forEach(repo => {
        const repoItem = document.createElement("li");
        repoItem.textContent = repo.name;
        reposEl.appendChild(repoItem);
    });
}

function showNotFound() {
  const notFoundMessage = document.createElement("p");
  notFoundMessage.textContent = "Profile not found.";
  main.innerHTML = "";
  main.appendChild(notFoundMessage);
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const user = search.value;

  if (user) {
    getUser(user);

    search.value = "";
  }
});
