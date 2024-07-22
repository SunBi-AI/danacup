let modal = document.querySelector("#primary__modal");

let modalOpener = document.querySelector("#modal_button");

let modalOpen = false;

let modalCLose = document.querySelector(".close__modal");

const openModal = () => {
  modal.style.display = "block";
};

modalCLose.addEventListener("click", () => {
  console.log("close button was clicked");
  modal.style.display = "none";
});

//when user clicks outside modal
window.addEventListener("click", (event) => {
  //   this.click();
  if (event.target !== modal) {
    modal.style.display = "none";
    console.log("window is clicked");
  }

  //   console.log("window is clicked");
});
