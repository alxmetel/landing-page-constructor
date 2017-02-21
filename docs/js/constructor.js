var landingUL = document.querySelector("#landingUL");

// start Landing class

class landingList {
    constructor(sectionName, preview, elements) {
        this.sectionName = sectionName;
        this.preview = [];
        this.elements = [];
    }
} 

var componentsList = document.querySelector("#components");


var header = new landingList();
header.sectionName = "Header";
header.preview = ["header-left.png", "header-right.png"];
header.elements = [componentsList.children[0], componentsList.children[1]];

var about = new landingList();
about.sectionName = "About";
about.preview = ["about-left.png", "about-right.png"];
about.elements = [componentsList.children[2], componentsList.children[3]];

var images = new landingList();
images.sectionName = "Images";
images.preview = ["image.png"];
images.elements = [componentsList.children[4]];

var steps = new landingList();
steps.sectionName = "Steps";
steps.preview = ["steps.png"];
steps.elements = [componentsList.children[5]];

var social = new landingList();
social.sectionName = "Social";
social.preview = ["steps.png"];
social.elements = [componentsList.children[6]];

var sectionList = [header, about, images, steps, social];
//debugger;

sectionList.forEach ( function (i, item ,arr) {
    var li = document.createElement("li");
    li.setAttribute("id", arr[item].sectionName);
    li.innerHTML = arr[item].sectionName;
    landingUL.appendChild(li);
}) 

// End CLASS LANDING SECTIONS

landingUL.addEventListener("click", showElementList)

var elementBar = document.querySelector("#elementsBar")
var landingBackdrop = document.querySelector(".landing-backdrop")

var prevImg = [];

function showElementList(e) {
    //debugger;
    target = e.target;
    elementBar.innerHTML  = '';
    var itemId = 0;
    sectionList.forEach ( function (i, item, arr) {
        if ( target.id == arr[item].sectionName) {
            currentElement = arr[item].elements;
            var div = document.createElement("div");
            elementBar.appendChild(div);
            div.setAttribute("id", arr[item].sectionName);
            arr[item].preview.forEach ( function (i, item, arr) {
            var img = document.createElement("img");
            img.setAttribute("src", "assets\\components\\" + arr[item]);
            img.setAttribute("id", itemId)
            itemId++;
            div.appendChild(img);
            prevImg.push(i);
            })
        }
    })
    landingBackdrop.style.display = "block";
    elementBar.style.left = 200 + "px";
}

elementBar.addEventListener("click", addElementToPage);

var landing = document.querySelector("#landing");

function addElementToPage (e) {
    debugger;
    var itemIndex = +e.target.id;
    for ( i = 0; i < sectionList.length; i++) {
        if (e.target.parentElement.id == sectionList[i].sectionName) {
            var clonedChild = currentElement[itemIndex].cloneNode(true);
            landing.appendChild(clonedChild);
       }
    }
}

addEventListener("click", disableAll);

var landingContainer = document.querySelector(".landing-page-container");

function disableAll (e) {
    if (e.target.parentElement == landingContainer) {
        elementBar.style.left = 0;
        landingBackdrop.style.display = "none";
    }
}


// Change LANDING PAGE NAME

var landingName = document.querySelector(".landing-name");
var inputLandingName = document.querySelector("#input-landing-name");
var okBtn = document.querySelector("#ok");
var cancelBtn = document.querySelector("#cancel");
var appBackdrop = document.querySelector(".app-backdrop");
var modalLandingName = document.querySelector(".modal-landing-name");

landingName.addEventListener("click", showModalToChangeName);

function showModalToChangeName () {
    debugger;
    modalLandingName.style.display = "block";
    appBackdrop.style.display = "block";
}

okBtn.addEventListener("click", changeLandingName);

function changeLandingName () {
    debugger;
    landingName.innerHTML = inputLandingName.value;
    appBackdrop.style.display = "none";
    modalLandingName.style.display = "none";
}
