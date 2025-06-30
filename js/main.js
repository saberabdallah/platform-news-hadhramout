// dialog
const Userinput = document.getElementById("userInput");
function showDialog() {
  const modal = document.getElementById("myModal");
  modal.style.display = "flex"; // Make the modal visible
  Userinput.focus()
  setTimeout(() => {
    modal.classList.add("show"); // Start the transition
  }, 10); // Slight delay to trigger the CSS transition
}

function closeDialog() {
  const modal = document.getElementById("myModal");
  modal.classList.remove("show"); // Start hiding transition
  setTimeout(() => {
    modal.style.display = "none"; // Hide completely after transition
  }, 300); // Wait for the transition to finish
}

function confirmAction() {
  const input = document.getElementById("userInput").value;
  alert("النص المدخل: " + Userinput.value);
  closeDialog();
}

function closeOutside(event) {
  if (event.target === document.getElementById("myModal")) {
    closeDialog();
  }
}

// hide and show the search input

    const searchLi = document.querySelector("header nav .search");
    const searchForm = document.querySelector("form[role='search']");
    const searchInput = document.querySelector("header nav form .search-input")
    console.log(searchForm)
  
    if (searchLi && searchForm) {
      searchLi.addEventListener("click", function () {
        // Toggle the display of the search form
        if (searchForm.style.display === "none" || searchForm.style.display === "") {
          searchForm.style.display = "flex"; // Show form
          searchInput.focus()
        } else {
          searchForm.style.display = "none"; // Hide form
        }
      });
    }
  

AOS.init({
  // Settings that can be overridden on per-element basis, by data-aos-* attributes:
  //offset: 120, // offset (in px) from the original trigger point
  //delay: 0, // values from 0 to 3000, with step 50ms
  //duration: 800, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});
