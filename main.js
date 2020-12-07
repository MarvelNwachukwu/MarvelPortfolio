// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUJUYbMzWuhghfwfD_sWL6BqdNGNGWEyk",
  authDomain: "portfolio-34ba7.firebaseapp.com",
  projectId: "portfolio-34ba7",
  storageBucket: "portfolio-34ba7.appspot.com",
  messagingSenderId: "1003466361573",
  appId: "1:1003466361573:web:2191f7c590134bbe74620c",
  measurementId: "G-0X6WFP938H",
};

let flag;

const firebaseFunctions = (name, email, message) => {
  firebase.initializeApp(firebaseConfig);

  let db = firebase.firestore();

  db.collection("userMessages")
    .doc()
    .set({
      user: name,
      Email: email,
      message: message,
    })
    .then((d) => {
      flag = true;
    })
    .catch((e) => {
      flag = false;
      document.querySelector("#feedbackContent").innerHTML =
        "Sorry, there's been an error, Please Try Again";
      console.log(e);
    });
};

const form = document.querySelector("form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");

const techstackIndicator = document.querySelector(".myTechStack");
const techstack = document.querySelector(".techStack");
const portfolioIndicator = document.querySelector("#myPortfolio");
const portfolio = document.querySelector(".portfolioText");

// IntersectionObserver
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

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let userName = name.value;
  let userEmail = email.value;
  let userMessage = message.value;

  firebaseFunctions(userName, userEmail, userMessage);

  if ((flag = true)) {
    document.querySelector("#hello").style.display = "none";
    document.querySelector("#feedback").style.display = "block";
  }
});
