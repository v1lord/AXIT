// var slides = document.querySelectorAll('#slides .slide');
// var currentSlide = 0;
// var slideInterval = setInterval(nextSlide, 2000);

// function nextSlide() {
//    slides[currentSlide].className = 'slide';
//    currentSlide = (currentSlide + 1) % slides.length;
//    slides[currentSlide].className = 'slide showing';}

// document.onmousemove = animateCircles; // circle follow mouse

// var colors = ['#454545', '#212121']

// function animateCircles(event) {
//    var circle = document.createElement("div");
//    circle.setAttribute("class", "circle");
//    document.body.appendChild(circle); // adds function to body

//    // adds motion
//    circle.style.left = event.clientX + 'px';
//    circle.style.top = event.clientY + 'px';

//    // randomize color
//    var color = colors[Math.floor(Math.random() * colors.length)];
//    circle.style.borderColor = color;

//    // adds animation
//    circle.style.transition = "all 0.2s linear 0s";

//    circle.style.left = circle.offsetLeft - 20 + 'px';
//    circle.style.top = circle.offsetTop - 20 + 'px';

//    circle.style.width = "30px";
//    circle.style.height = "30px";
//    circle.style.borderWidth = "5px";
//    circle.style.opacity = 0;
// }

let burger = document.querySelector(".burger__menu");
burger.addEventListener("click", function () {
   this.classList.toggle("active");
})

