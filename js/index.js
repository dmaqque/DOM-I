const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let codeSnippet = document.getElementById("cta-img");
codeSnippet.setAttribute('src', siteContent["cta"]["img-src"]);

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

const nav = document.querySelectorAll("nav a");


nav[0].textContent = siteContent.nav["nav-item-1"];
nav[1].textContent = siteContent.nav["nav-item-2"];
nav[2].textContent = siteContent.nav["nav-item-3"];
nav[3].textContent = siteContent.nav["nav-item-4"];
nav[4].textContent = siteContent.nav["nav-item-5"];
nav[5].textContent = siteContent.nav["nav-item-6"];

const mainTitle = document.querySelector(".cta h1");
mainTitle.innerHTML = siteContent['cta']['h1'];

const mainBtn = document.querySelector(".cta button");
mainBtn.innerHTML = siteContent["cta"]["button"];

nav.forEach(element => element.style.color = "green");

//new nav Items

const nav2 = document.querySelector("nav");

const newItem1 = document.createElement('a');
newItem1.textContent = "DOM";
nav2.prepend(newItem1);
newItem1.style.color = "green";

const newItem2 = document.createElement('a');
newItem2.textContent = "Get Started";
nav2.appendChild(newItem2);
newItem2.style.color = "green";

//middle Content

const middleHeaders = document.querySelectorAll(".main-content h4");
middleHeaders[0].textContent = siteContent["main-content"]["features-h4"];
middleHeaders[1].textContent = siteContent["main-content"]["about-h4"];
middleHeaders[2].textContent = siteContent["main-content"]["services-h4"];
middleHeaders[3].textContent = siteContent["main-content"]["product-h4"];
middleHeaders[4].textContent = siteContent["main-content"]["vision-h4"];

const middleContent = document.querySelectorAll(".main-content p");
middleContent[0].textContent = siteContent["main-content"]["features-content"];
middleContent[1].textContent = siteContent["main-content"]["about-content"];
middleContent[2].textContent = siteContent["main-content"]["services-content"];
middleContent[3].textContent = siteContent["main-content"]["product-content"];
middleContent[4].textContent = siteContent["main-content"]["vision-content"];

//Contact Information
const contactHeader = document.querySelector(".contact h4");
contactHeader.textContent = siteContent["contact"]["contact-h4"];

const contactContent = document.querySelectorAll(".contact p");
contactContent[0].textContent = siteContent["contact"]["address"];
contactContent[1].textContent = siteContent["contact"]["phone"];
contactContent[2].textContent = siteContent["contact"]["email"];

const footer = document.querySelector("footer p");
footer.textContent = siteContent["footer"]["copyright"];

