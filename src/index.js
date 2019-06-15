//SLIDER PROJECTS
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

///

// function myHome() {
//   let project = document.getElementById('project');
//   let about = document.getElementById('aboutme-main');
//   let skills = document.getElementById('skills');
//   let side = document.getElementById('side');
//   let main = document.getElementById('main');

//   if (about.style.display === 'block' && side.style.display === 'block') {
//     side.style.display = 'block'
//     //main.style.display = 'none';
//     about.style.display = 'none';
//     project.style.display = 'none';
//     skills.style.display = 'none';

//   } else {
//     side.style.display = 'block'
//     main.style.display = 'block';
//     project.style.display = 'none';
//     skills.style.display = 'none';
//   }
// }

//
function myAbout() {
  let project = document.getElementById("project");
  let about = document.getElementById("aboutme-main");
  let skills = document.getElementById("skills");
  let side = document.getElementById("side");

  if (about.style.display === "block" && side.style.display === "block") {
    project.style.display = "none";
    skills.style.display = "none";
  } else {
    about.style.display = "block";
    side.style.display = "block";
    project.style.display = "none";
    skills.style.display = "none";
  }
}

//NAV
function myProjects() {
  let project = document.getElementById("project");
  let about = document.getElementById("aboutme-main");
  let skills = document.getElementById("skills");
  let side = document.getElementById("side");
  if (project.style.display === "block") {
    about.style.display = "none";
    skills.style.display = "none";
    side.style.display = "none";
  } else {
    project.style.display = "block";
    about.style.display = "none";
    skills.style.display = "none";
    side.style.display = "none";
  }
}

//
function mySkills() {
  let project = document.getElementById("project");
  let about = document.getElementById("aboutme-main");
  let skills = document.getElementById("skills");
  let side = document.getElementById("side");
  if (skills.style.display === "block") {
    about.style.display = "none";
    project.style.display = "none";
    side.style.display = "none";
  } else {
    skills.style.display = "block";
    about.style.display = "none";
    project.style.display = "none";
    side.style.display = "none";
  }
}
