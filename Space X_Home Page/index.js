
  let x = document.querySelector(".icon");
  let x2 = document.querySelector(".box");

  x.onclick = function () {
    x.classList.toggle("active");
    x2.classList.toggle("active");
  };
  // function funny(){
  //    console.log("hello")
  // //    x.classList.toggle("active");
  //    x2.classList.toggle("active");
  // }

  function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 10;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal);


