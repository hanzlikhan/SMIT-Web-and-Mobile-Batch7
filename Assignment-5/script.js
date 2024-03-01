function showContent(id) {
    var sections = document.getElementsByClassName("content-section");
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = "none";
    }
    document.getElementById(id).style.display = "block";
    var links = document.getElementsByClassName("active");
    for (var i = 0; i < links.length; i++) {
        links[i].classList.remove("active");
    }
    document.querySelector(`a[href="#${id}"]`).classList.add("active");
}

function toggleCards() {
    var hiddenCards = document.querySelector('.hidden-cards');
    var showMoreBtn = document.getElementById('showMoreBtn');

    if (hiddenCards.style.display === 'none') {
        hiddenCards.style.display = 'grid';
        showMoreBtn.textContent = 'Show Less';
        // hiddenCards.classList.add('visible-cards'); // Add a class to the hidden cards
    } else {
        hiddenCards.style.display = 'none';
        showMoreBtn.textContent = 'Show More';
        // hiddenCards.classList.remove('visible-cards'); // Remove the class when hiding the cards
    }
}
// Get a reference to the image element
var image = document.getElementById("myImage");

// Add event listeners for mouse enter and mouse leave
image.addEventListener("mouseenter", function() {
    // Change the image source on mouse enter
    this.src = "./Assets/village.jpg"; // Replace 'hover-image.jpg' with the path to your hover image
});

image.addEventListener("mouseleave", function() {
    // Change the image source back to original on mouse leave
    this.src = "./Assets/AIPodcasteGenerator.cf943fff109f713cc4d2.png"; // Replace 'original-image.jpg' with the path to your original image
});

function head() {
    document.getElementById("full_page").style.display = "block";
    document.querySelector('.preloader').style.display = "none";
  }
  
  // Event listener to call showContent function after 5 seconds
  setTimeout(head, 2000);

  var lastScrollTop = 0;

window.addEventListener("scroll", function () {
  var currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // Scroll down
    document.getElementById("main-header").classList.add("hidden");
  } else {
    // Scroll up
    document.getElementById("main-header").classList.remove("hidden");
  }

  lastScrollTop = currentScroll;
});
