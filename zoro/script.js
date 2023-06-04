const mobileNavToggle = document.getElementById("mobile-toggle");
const navItems = document.querySelector("nav ul");
const navMenuBtn = document.querySelector("nav a");
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");

mobileNavToggle.addEventListener("click", function(){
    navItems.classList.toggle("show");
    navMenuBtn.classList.toggle("active");
});

function searchAnime() {
    var searchTerm = document.getElementById('search-input').value;
    var searchURL = 'https://zoro.to/search?keyword=' + searchTerm;
    window.location.href = searchURL;
  }
  

searchForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    const keyword = searchInput.value.trim(); // Get the entered keyword
    if (keyword !== "") {
        const searchURL = "https://zoro.to/search?keyword=" + encodeURIComponent(keyword);
        window.location.href = searchURL; // Redirect to the search URL
    }
});
