// variable that targets the button element 
var acc = document.getElementsByClassName("accordion__question");
var i;
// Function target accordion_content div and changes style value when a click has occured
for(i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");

        var accordion__content = this.nextElementSibling;
        if(accordion__content.style.display === "block") {
            accordion__content.style.display = "none";
        } else {
            accordion__content.style.display = "block";
        }
    });
}