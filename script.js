const working = "I'm working";

$(document).ready(function () {
  // Pages
  const homePage = $('#home');
  const contactPage = $('#contact');
  const resumePage = $('#myResume');
  const projectPage = $('#myProjects');
  const aboutPage = $('#aboutMe');

  // Pages Button

  const homeButton = $('.home_btn');
  const contactButton = $('.connect_btn');
  const resumeButton = $('.resume_btn');
  const ProjectButton = $('.projects_btn');
  const aboutButton = $('.about_btn');

  const checkbox = $('input');
  const closeMenu = (e) => {
    if (checkbox[0].checked) {
      checkbox[0].checked = false;
    }
  };

  const randomColor = () => {
    if (checkbox[0].checked !== true) {
      const codeGen = () => {
        return Math.floor(Math.random() * 255);
      };
      let rgb = `rgb(${codeGen()},${codeGen()},255)`;
      $(
        '#wrapper'
      )[0].style.background = `linear-gradient(45deg, black, ${rgb}`;
    }
  };

  checkbox.on('mousedown', () => {
    randomColor();
  });

  $('#page').on('click', (e) => {
    closeMenu();
  });

  contactButton.on('click', () => {
    homeButton.show();
    contactButton.hide();
    resumeButton.show();
    ProjectButton.show();
    aboutButton.show();

    homePage.hide();
    contactPage.show();
    resumePage.hide();
    projectPage.hide();
    aboutPage.hide();

    closeMenu();
  });

  resumeButton.on('click', (e) => {
    homeButton.show();
    contactButton.show();
    resumeButton.hide();
    ProjectButton.show();
    aboutButton.show();

    homePage.hide();
    contactPage.hide();
    resumePage.show();
    projectPage.hide();
    aboutPage.hide();

    closeMenu();
  });

  ProjectButton.on('click', () => {
    homeButton.show();
    contactButton.show();
    resumeButton.show();
    ProjectButton.hide();
    aboutButton.show();

    homePage.hide();
    contactPage.hide();
    resumePage.hide();
    projectPage.show();
    aboutPage.hide();

    closeMenu();
  });

  homeButton.on('click', () => {
    homeButton.hide();
    contactButton.show();
    resumeButton.show();
    ProjectButton.show();
    aboutButton.show();

    homePage.show();
    contactPage.hide();
    resumePage.hide();
    projectPage.hide();
    aboutPage.hide();

    closeMenu();
  });

  aboutButton.on('click', () => {
    homeButton.show();
    contactButton.show();
    resumeButton.show();
    ProjectButton.show();
    aboutButton.hide();

    homePage.hide();
    contactPage.hide();
    resumePage.hide();
    projectPage.hide();
    aboutPage.show();

    closeMenu();
  });
});
