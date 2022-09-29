import "./styles.css";

const submitData = document.getElementById("submit-data");

submitData.addEventListener("click", submmit, false);
async function submmit(event) {
  const names = document.getElementById("input-show").value;
  const url = "https://api.tvmaze.com/search/shows?q=" + names;
  const dataPromise = await fetch(url);
  const data = await dataPromise.json();

  for (let i = 0; i < data.length; i++) {
    let img = document.createElement("img");
    let h1 = document.createElement("h1");

    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    div1.className = "show-data";
    div2.className = "show-info";

    if (data[i].show.image !== null) {
      img.src = data[i].show.image.medium;
    }
    h1.innerText = data[i].show.name;

    div1.appendChild(img);
    div2.appendChild(h1);

    div2.innerHTML += data[i].show.summary;
    div1.appendChild(div2);
    document.body.appendChild(div1);
  }

  event.preventDefault();
}
