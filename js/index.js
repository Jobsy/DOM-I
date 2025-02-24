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
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let i = 0;
function counter() {
  return i++;
}

let nav = document.querySelector("nav")
let prependA = document.createElement("a");
let appendA = document.createElement("a");
nav.append(prependA);
nav.prepend(appendA);


let navAnchorInnerTexts = []
for (const key in siteContent["nav"]) {
  navAnchorInnerTexts.push(siteContent["nav"][key])
}
navAnchorInnerTexts.unshift("prependA")
navAnchorInnerTexts.splice(-1, 1, "appendA");

let navAnchor = document.querySelectorAll("a");
navAnchor.forEach(element => {
  element.innerText = navAnchorInnerTexts[counter()];
  element.style.color = "green"
});







let ctaProperties = []
for (const key in siteContent["cta"]) {
  ctaProperties.push(siteContent["cta"][key])
}

let cta = document.querySelector(".cta").children;
cta[0].children[0].innerText = ctaProperties[0];
cta[0].children[1].innerText = ctaProperties[1];
cta[1].setAttribute('src', ctaProperties[2]);




let mainContentProperties = []
let h4Keys = []
let contentKeys = []
imgSrc = []
for (const key in siteContent["main-content"]) {
  if (key.includes("h4")) {
    h4Keys.push(siteContent["main-content"][key])
  }
  else if (key.includes("content")) {
    contentKeys.push(siteContent["main-content"][key])
  }
  else {
    imgSrc.push(siteContent["main-content"][key])
  }
}

let mainContentH4 = document.querySelectorAll(".text-content h4");
let mainContentP = document.querySelectorAll(".text-content p");
let mainContentImg = document.querySelector("#middle-img");

i = 0
mainContentH4.forEach(element => {
  element.innerText = h4Keys[counter()];
});

mainContentImg.setAttribute('src', imgSrc[0]);

i = 0
mainContentP.forEach(element => {
  element.innerText = contentKeys[counter()];
});




let contactProperties = []
for (const key in siteContent["contact"]) {
  contactProperties.push(siteContent["contact"][key])
}

i = 0;
let contactH4 = document.querySelector(".contact h4");
let contactP = document.querySelectorAll(".contact p");
contactH4.innerText = contactProperties[counter()]
contactP.forEach(element => {
  element.innerText = contactProperties[counter() + 1];
});




let footer = document.querySelector("footer p");
footer.innerText = siteContent["footer"]["copyright"]