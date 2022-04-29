const container = document.querySelector(".container");

const url =
  "https://api.rawg.io/api/games/4200?key=d9026239a5414beba58c930af1adbfed";

async function fetchGame() {
  try {
    const response = await fetch(url);
    const details = await response.json();

    console.log(details);

    createHtml(details);
  } catch (error) {
    console.log(error);
  }
}

fetchGame();

function createHtml(details) {
  container.innerHTML = `<h1>${details.name}</h1>
                         <div class="details-image" 
                                 style="background-image: url('${details.background_image}')"></div>
                             <div class="details-description">${details.description}</div>
                             <time class="details-date">Released: ${details.released}</time>`;
}

// arlet

function lifeInWeeks(age) {
  const yearsRemaining = 90 - age;
  const days = yearsRemaining * 365;
  const weeks = yearsRemaining * 52;
  const months = yearsRemaining * 12;

  console.log(age);
}
lifeInWeeks();
