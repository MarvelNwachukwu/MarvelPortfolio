const nodeselector = (node) => {
  return document.querySelector(node);
};

const techstackIndicator = nodeselector(".myTechStack");
const techstack = nodeselector(".techStack");
const portfolioIndicator = nodeselector("#myPortfolio");
const portfolio = nodeselector(".portfolioText");

let observer = new IntersectionObserver((e) => {
  e.forEach((i) => {
    if (i.isIntersecting === true) {
      techstackIndicator.classList.remove("animatedButton");
    } else {
      techstackIndicator.classList.add("animatedButton");
    }
  });
});

let secondObserver = new IntersectionObserver((e) => {
  e.forEach((i) => {
    if (i.isIntersecting === true) {
      portfolioIndicator.classList.remove("animatedButton");
    } else {
      portfolioIndicator.classList.add("animatedButton");
    }
  });
});

observer.observe(techstack);
secondObserver.observe(portfolio);

// JQuery
// $(document).ready(function () {
//   $(".myTechStack").hover(function () {
//     console.log(true);
//     $(".myTechStack").stop();
//   });
// });
