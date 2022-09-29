import "./styles.css";

const submitData = document.getElementById("submit-data");

submitData.addEventListener("click", submmit, false);
async function submmit(event) {
  const names = document.getElementById("input-show").value;
  const url = "https://api.tvmaze.com/search/shows?q=" + names;
  const dataPromise = await fetch(url);
  const data = await dataPromise.json();
  //console.log(data.show);
  let titles = [];
  let summaries = [];
  let images = [];

  //const body = document.getElementById("body");

  //let x = show.image.medium;
  //console.log(x);
  //console.log(data.show.name);

  /*dataPromise.forEach((title) => {
    titles.push(title.name);
  });*/

  for (let i = 0; i < data.length; i++) {
    let img = document.createElement("img");
    let h1 = document.createElement("h1");

    let div1 = document.createElement("div").setAttribute("class", "show-data");
    let div2 = document.createElement("div").setAttribute("class", "show-info");

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
  console.log(summaries);
  console.log(titles);
  console.log(images);

  event.preventDefault();
}


