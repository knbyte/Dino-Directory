/*import dinosaurs from "./dinoData.js";*/

const dinosaurs = [
  {
    h1: "Plesiosaurus",
    h2: "Plesiosaurs were marine reptiles from the late Triassic Period into the late Cretaceous Period (215 million to 66 million years ago).",
    p: "First named in 1821, more than a hundred valid species have since been described.<br><br> They have paddle-like flippers and unique adaptations for swimming, which is reminiscent of modern-day turtles! Studies suggest that Turtles are actually their closest living relative. <br><br> The Plesiosaurus was an early plesiosaur, shortly into their evoloutionary history, this dinosaur split into two lineages. The pilosaurs with their short necks and elongated heads, and the plesiosauroids with their smaller heads and flexible snake-like necks.<br><br> It is possible that some plesiosaurs' long necks caused back problems! In the 1970's paleontologists found a fossil of a plesiosaur spine with disease. Instead of the more common scars, breaks and teethmarks, these bones had lesions from a spinal condition known as Schmorl’s nodes, with 24 out of 27 vertebrae affected. While common for humans, this was the first discovered in anything non-human!<br><br>",
    img: "media/dinoimages/plesiosaurus.jpg",
    a: "https://www.dinopit.com/plesiosaurus/plesiosaurus/",
  },
  {
    h1: "Triceratops",
    h2: "The triceratops is an iconic dinosaur famous for it's three distinct facial horns and large bony frill at the back of it's head. The triceratops lived during the late Maastrichtian age of the Late Cretaceous period, about 68 to 66 million years ago.",
    p: "The name triceratops is derived from three greek words, trí- / τρί- <em>('three')</em>, kéras / κέρας <em>('horn')</em> and ṓps / ὤψ <em>('face')</em>. <br><br> A slow-moving herbivore, which used a beak-like jaw and slicing teeth consume tough plants that other dinosaurs couldn’t. <br><br> The largest triceratops remains found so far, named 'Big John', measured at 26 feet long and nearly 10 feet high.",
    img: "media/dinoimages/triceratops.png",
    a: "https://www.deviantart.com/isismasshiro/art/Triceratops-21393680",
  },
  {
    h1: "Stegosaurus",
    h2: "Hold tight!",
    p: "We are working on adding this dinosaur to the directory.",
    img: "media/dinoimages/stegosaurus.png",
    a: "https://www.britannica.com/animal/Stegosaurus",
  },
  {
    h1: "Brachiosaurus",
    h2: "Hold tight!",
    p: "We are working on adding this dinosaur to the directory.",
    img: "media/dinoimages/x.png",
    a: "imagelink",
  },
  {
    h1: "Allosaurus",
    h2: "Hold tight!",
    p: "We are working on adding this dinosaur to the directory.",
    img: "media/dinoimages/x.png",
    a: "imagelink",
  },
  {
    h1: "Spinosaurus",
    h2: "Hold tight!",
    p: "We are working on adding this dinosaur to the directory.",
    img: "media/dinoimages/spinosaurus.png",
    a: "https://www.deviantart.com/wretchedspawn2012/art/Spinosaurus-Aegyptiacus-367015819",
  },
  {
    h1: "Ankylosaurus",
    h2: "Hold tight!",
    p: "We are working on adding this dinosaur to the directory.",
    img: "media/dinoimages/ankylosaurus.png",
    a: "imagelink",
  },
];
function updateSearchResults() {
  event.preventDefault();
  let searchtext = document.getElementById("dinoSearch").value;
  searchtext = searchtext.toLowerCase();

  if (!searchtext) {
    alert("Please enter a dinosaur or prehistoric creature!");
    return;
  }

  let foundDino = false;
  for (let dino of dinosaurs) {
    if (dino.h1.toLowerCase().includes(searchtext)) {
      foundDino = true;
      newh1 = dino.h1;
      newh2 = dino.h2;
      newp = dino.p;
      newimg = dino.img;
      newa = dino.a;
      break;
    }
  }

  if (foundDino) {
    if (foundDino) {
      let dinoDiv = document.getElementById("dinoInfo");
      let h1 = dinoDiv.querySelector("h1");
      let h2 = dinoDiv.querySelector("h2");
      let p = dinoDiv.querySelector("p");
      let img = dinoDiv.querySelector("img");
      let a = dinoDiv.querySelector("a");

      h1.innerHTML = newh1;
      h2.innerHTML = newh2;
      p.innerHTML = newp;
      img.src = newimg;
      a.href = newa;
    } else {
      console.log(
        "Sorry, we couldn't find that dinosaur. Please check spelling or see the dino directory."
      );
    }
  }
}

let element = document.querySelector("input[type=submit]");
element.addEventListener("click", updateSearchResults);

// GET RANDOM DINO:

document
  .getElementById("randomDino")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const randomIndex = Math.floor(Math.random() * dinosaurs.length);
    const randomDino = dinosaurs[randomIndex];

    let dinoDiv = document.getElementById("dinoInfo");
    let h1 = dinoDiv.querySelector("h1");
    let h2 = dinoDiv.querySelector("h2");
    let p = dinoDiv.querySelector("p");
    let img = dinoDiv.querySelector("img");
    let a = dinoDiv.querySelector("a");

    h1.textContent = randomDino.h1;
    h2.textContent = randomDino.h2;
    p.textContent = randomDino.p;
    img.src = randomDino.img;
    a.href = randomDino.a;
  });
