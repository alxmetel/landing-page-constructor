
//DOM objects from constructor.html
var sections =  document.querySelector("#sections");
var landingContainer = document.querySelector(".landing-container")
var landingName = document.querySelector("#landing-name")
var modalOKbtn = document.querySelector(".ok-modal-button");
var landingListCOntainer = document.querySelector(".landing-list")

//DOM objects from component.html

var landingHeader = document.querySelector("#landing-header");
var nameModal = document.querySelector("#name-modal");
var inputLandingName = document.querySelector("#LP-name")

sections.addEventListener("click", chooseElement)
landingName.addEventListener("click", showModal)
modalOKbtn.addEventListener("click", addNewLandingName)

function chooseElement (e) {
    //debugger;
    target = e.target;
    landingContainer.appendChild(target);
}

function showModal () {
    nameModal.classList.add("modal-show")
}

function addNewLandingName () {
    debugger;
    landingName.innerHTML = inputLandingName.value;
    nameModal.classList.remove("modal-show");
    var newLanding = landingName.cloneNode(true);
    landingListCOntainer.appendChild(newLanding);
}
