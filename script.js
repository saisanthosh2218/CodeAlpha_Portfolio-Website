const text = "Your LAZY......Web Developer";
let index = 0;

function typeWriter() {
  if (index < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 200);
  }
}

window.onload = function () {
  typeWriter();
};

gsap.from("#Logo", {
  opacity: 0,
  y: -20,
  duration: 0.5,
  delay: 1,
});

gsap.from("#Links a", {
  opacity: 0,
  y: -20,
  duration: 0.5,
  delay: 1,
  // stagger: 0.5,
});

gsap.from("#Home-Text-2", {
  opacity: 0,
  x: -200,
  duration: 0.5,
  delay: 1.8,
});
gsap.from("#Home-Image", {
  opacity: 0,
  x: -200,
  duration: 0.5,
  delay: 1.8,
  zIndex: 1,
});

gsap.from("#About-Main", {
  opacity: 0,
  duration: 0.5,
  delay: 1,

  scrollTrigger: {
    trigger: "#About-Main",
    scroller: "body",
    // markers: true,
    start: "top 60%",
    end: "top 10%",
    scrub: 1,
  },
});
gsap.from("#Edu-Main", {
  opacity: 0,
  duration: 0.5,
  delay: 1,

  scrollTrigger: {
    trigger: "#Edu-Main",
    scroller: "body",
    // markers: true,
    start: "top 80%",
    end: "top 40%",
    scrub: 1,
  },
});
gsap.from("#Skill-Main", {
  opacity: 0,

  scrollTrigger: {
    trigger: "#Skill-Main",
    scroller: "body",
    // markers: true,
    start: "top 80%",
    end: "top 40%",
    scrub: 1,
  },
});
gsap.from("#Services", {
  opacity: 0,

  scrollTrigger: {
    trigger: "#Services",
    scroller: "body",
    // markers: true,
    start: "top 70%",
    end: "top 40%",
    scrub: 1,
  },
});
gsap.from("#Projects", {
  opacity: 0,

  scrollTrigger: {
    trigger: "#Projects",
    scroller: "body",
    // markers: true,
    start: "top 75%",
    end: "top 40%",
    scrub: 1,
  },
});

// function isInViewport(elem) {
//   var bounding = elem.getBoundingClientRect();
//   return (
//     bounding.top >= 0 &&
//     bounding.left >= 0 &&
//     bounding.bottom <=
//       (window.innerHeight || document.documentElement.clientHeight) &&
//     bounding.right <=
//       (window.innerWidth || document.documentElement.clientWidth)
//   );
// }

// // Function to handle the scroll event
// function handleScroll() {
//   var elementsToReveal = document.querySelectorAll(
//     ".load-on-scroll.md\\:opacity-0"
//   );

//   elementsToReveal.forEach(function (elem) {
//     if (isInViewport(elem)) {
//       elem.style.transition = "opacity 0.8s ease-in"; // Add transition effect

//       elem.classList.remove("md:opacity-0");
//       elem.classList.add("md:opacity-1");
//     }
//   });
// }

// // Add scroll event listener
// window.addEventListener("scroll", handleScroll);

// // Trigger scroll event once on page load to check initially visible elements
// window.addEventListener("load", handleScroll);
