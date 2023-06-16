const btnPrimary = document.querySelector(".btn-primary")
const searchInp = document.querySelector(".search-input")
const userImg = document.querySelector("#user-img")
const userName = document.querySelector("#user-name")
const joinTime = document.querySelector("#user-joined-time")
const userBio = document.querySelector("#user-bio")
const userRepos = document.querySelector("#user-repos")
const userFollowers = document.querySelector("#user-followers")
const userFollowing = document.querySelector("#user-following")
const local = document.querySelector("#local")
const twitter = document.querySelector("#twitter")
const userWeb = document.querySelector("#user-website")
const company = document.querySelector("#company")
const mode = document.querySelector(".mode")
const h4 = document.querySelector("h4")
const faMoon = document.querySelector(".fa-moon-o")
const faSun = document.querySelector(".fa-sun-o")

console.log(faMoon)

btnPrimary.addEventListener("click", () => gitData());

const gitData = async () => {
  const gitData = "https://api.github.com/users/";
  let inpValue = searchInp.value;
  console.log(inpValue)
  const res = await fetch(gitData + inpValue);
  const data = await res.json();
  renderData(data);
};

const renderData = (data) => {
  userImg.src = `${data.avatar_url}`;
  userName.textContent = `${data.name}`;
  joinTime.textContent = `${data.created_at}`;
  userBio.textContent = `${data.bio}`;
  userRepos.textContent = `${data.public_repos}`;
  userFollowers.textContent = `${data.followers}`;
  userFollowing.textContent = `${data.following}`;
  local.textContent = `${data.location}`;
  twitter.textContent = `${data.twitter_username}`;
  userWeb.textContent = `${data.blog}`;
  company.textContent = `${data.company}`;
};




mode.addEventListener("click", () => darkMode())

darkModeNum = 1



const darkMode = () => {
  darkModeNum++
  document.body.classList.toggle("dark-mode") 
  if(darkModeNum % 2 == 0){
    h4.textContent = "LIGHT"
    faMoon.style.display = "none"
    faSun.style.display = "flex"

  }else if(darkModeNum % 2 === 1){
    h4.textContent = "DARK"
    faMoon.style.display = "flex"
    faSun.style.display = "none"

  }
}