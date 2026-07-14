const serviceHeader =
document.querySelector(".service-header");

const serviceContent =
document.querySelector(".service-content");

const serviceArrow =
document.getElementById("service-arrow");


serviceHeader.addEventListener("click", function () {

  serviceContent.classList.toggle("show-service");

  if (
    serviceContent.classList.contains("show-service")
  ) {

    serviceArrow.innerText = "▲";

  }

  else {

    serviceArrow.innerText = "▼";

  }

});