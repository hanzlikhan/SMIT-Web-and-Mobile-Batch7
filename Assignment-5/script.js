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