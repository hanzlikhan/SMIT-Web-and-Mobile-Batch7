function showContent(id) {
    // Hide all content sections
    var sections = document.getElementsByClassName("content-section");
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = "none";
    }
    // Show the selected content section
    document.getElementById(id).style.display = "block";
    // Update active link
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
