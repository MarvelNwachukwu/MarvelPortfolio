// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUJUYbMzWuhghfwfD_sWL6BqdNGNGWEyk",
  authDomain: "portfolio-34ba7.firebaseapp.com",
  projectId: "portfolio-34ba7",
  storageBucket: "portfolio-34ba7.appspot.com",
  messagingSenderId: "1003466361573",
  appId: "1:1003466361573:web:2191f7c590134bbe74620c",
  measurementId: "G-0X6WFP938H"
};

firebase.initializeApp(firebaseConfig)

let db = firebase.firestore();

db.collection('userMessages')
.doc()
.set({ 
  user: 'akpan',
  name: 'I want to hire',
  massage: 'hey you free to work on something??'
})
.then((d) => {
  alert('hey i got your message')
})
.catch(e => {
  alert('hey, try again')
})



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
