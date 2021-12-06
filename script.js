function myFunction() {

var acc = document.getElementsByClassName("accordian");
var i;

for (i = 0; i < acc.length; i++) {
  
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var answer = this.previousElementSibling.children[1];
    var question = this.previousElementSibling.children[0];
    if (answer.style.display === "block") {
      answer.style.display = "none";
      question.style.font = "12px Kumbh Sans, sans-serif";

    } else {
      answer.style.display = "block";
      question.style.font = "bold 12px Kumbh Sans, sans-serif";
    }
  });
}

}