const ratingEls = document.querySelectorAll(".rating");
const btnEl = document.getElementById("btn");

const containerEl = document.getElementById("container");
let selectedRating = "";

ratingEls.forEach((ratingEl) => {
  ratingEl.addEventListener("click", (e) => {
    removeActive();
    selectedRating = e.target.innerText || e.target.parentNode.innerText;
    // console.log(selectedRating);
    e.target.classList.add("active");
    e.target.parentNode.classList.add("active");
  });
});
btnEl.addEventListener("click", (e) => {
  if (selectedRating != "") {
    containerEl.innerHTML = `
    <strong>Thank You!</strong>
    <br />
    <br />
    <strong>Feedback:${selectedRating}</strong>
    <p>We will use your feedback to improve our customer support</p>
    <a href="./index.html">
    <button class="btn" id="backBtn">Go back..</button>
    </a>

    `;
  }
});

function removeActive() {
  ratingEls.forEach((ratingEl) => {
    ratingEl.classList.remove("active");
  });
}
