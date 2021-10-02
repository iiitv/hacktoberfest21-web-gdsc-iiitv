const $main = document.querySelector('.page-content');
let card = document.createElement("card");
card.classList.add("card");
let content = document.createElement("content");
content.classList.add("content");
let title = document.createElement("h2");
title.classList.add("title");
let paragraph = document.createElement("p");
paragraph.classList.add("copy");
let Github = document.createElement("button");
Github.classList.add("btn");
let Linkedin = document.createElement("button");
Linkedin.classList.add("btn");
let Twitter = document.createElement("button");
Twitter.classList.add("btn");
content.appendChild(title);
content.appendChild(paragraph);
content.appendChild(Github);
content.appendChild(Linkedin);
content.appendChild(Twitter);
card.appendChild(content);
(async () => {
  console.log("hello");
  const dataForCards = await (await fetch('/data.json')).json();
  let count = 0;
  for (user of dataForCards.data) {
    console.log(user);
    console.log(count);
    count += 1;
    title.innerText = `${user.name}`;
    paragraph.innerText = `Batch ${user.batch}`;
    Github.innerText = "Github";
    Linkedin.innerText = "Linkedin";
    Twitter.innerText = "Twitter";
    $main.appendChild(card.cloneNode(true));
  }
})();

