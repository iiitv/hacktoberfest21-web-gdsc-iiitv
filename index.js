const $main = document.querySelector('.page-content');
let card = document.createElement("card");
card.classList.add("card");
let content = document.createElement("content");
content.classList.add("content");
let title = document.createElement("h2");
title.classList.add("title");
let imageDiv = document.createElement("div");
imageDiv.classList.add("imageDiv");
let quoteDiv = document.createElement("div");
quoteDiv.classList.add("quoteDiv");
let paragraph = document.createElement("p");
paragraph.classList.add("copy");
let SocialDiv = document.createElement("div");
SocialDiv.classList.add('socialDiv');
let Github = document.createElement("a");
Github.classList.add("social-icon");
Github.dataset.tooltip = "GitHub";
let GithubIcon = document.createElement("i");
GithubIcon.classList.add("fa");
GithubIcon.classList.add("fa-github");
Github.appendChild(GithubIcon);

let Linkedin = document.createElement("a");
Linkedin.classList.add("social-icon");
Linkedin.dataset.tooltip = "Linkedin";
let LinkedinIcon = document.createElement("i");
LinkedinIcon.classList.add("fa");
LinkedinIcon.classList.add("fa-linkedin");
Linkedin.appendChild(LinkedinIcon);

let Twitter = document.createElement("a");
Twitter.classList.add("social-icon");
Twitter.dataset.tooltip = "Twitter";
let TwitterIcon = document.createElement("i");
TwitterIcon.classList.add("fa");
TwitterIcon.classList.add("fa-twitter");
Twitter.appendChild(TwitterIcon);

SocialDiv.appendChild(Twitter);
SocialDiv.appendChild(Github);
SocialDiv.appendChild(Linkedin);
// Twitter.classList.add("btn");
card.appendChild(imageDiv);
content.appendChild(title);
content.appendChild(paragraph);
content.appendChild(quoteDiv);
content.appendChild(SocialDiv);

card.appendChild(content);
(async () => {
  console.log("hello");
  const dataForCards = await (await fetch('https://iiitv.github.io/hacktoberfest21-web-gdsc-iiitv/data.json')).json();
  let count = 0;
  Github.setAttribute("target", "_blank");
  Linkedin.setAttribute("target", "_blank");
  Twitter.setAttribute("target", "_blank");
  for (user of dataForCards.data) {
    // card.style.setProperty('');
    // elementBefore.style.backgroundImage = `url(${user.picture_url})`;
    //JS
    // const root = document.querySelector(":root"); //grabbing the root element
    // root.style.setProperty("--picture-url", `url(${user.picture_url})`);
    imageDiv.style.backgroundImage = `url(${user.picture_url})`;
    // card.dataset.image = user.picture_url;
    Github.setAttribute("href", user.github);
    Linkedin.setAttribute("href", user.linkedin);
    Linkedin.setAttribute("href", user.linkedin);
    Twitter.setAttribute("href", user.twitter);
    console.log(user);
    console.log(count);
    count += 1;
    title.innerText = `${user.name}`;
    paragraph.innerText = `Batch ${user.batch}`;
    quoteDiv.innerText = user.quote;
    $main.appendChild(card.cloneNode(true));
  }
})();





$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });


  // owl carousel script
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});
