var dropdown = document.getElementsByClassName("courses-list__item-dropdown");
var i;
console.dir(dropdown)
for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    console.dir(this)
    console.dir(this.nextElementSibling)
    this.classList.toggle("dropdown-active");
    var dropdownContent = this.children[0];
    console.dir(dropdownContent)
    if (dropdownContent.style.display === "flex") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "flex";
    }
  });
}
