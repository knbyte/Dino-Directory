document.addEventListener("DOMContentLoaded", () => {
  const dinosaurs = [
    {
      h1: "Plesiosaurus",
      h2: "Plesiosaurs were marine reptiles from the late Triassic Period into the late Cretaceous Period (215 million to 66 million years ago).",
      p: "First named in 1821, more than a hundred valid species have since been described.<br><br> They have paddle-like flippers and unique adaptations for swimming, which is reminiscent of modern-day turtles! Studies suggest that Turtles are actually their closest living relative.",
      img: "media/plesiosaurus.jpg",
    },
    {
      h1: "Tyrannosaurus Rex",
      h2: "Hold tight!",
      p: "One of the largest land carnivores. It could grow up to 40 feet long, and its powerful jaws could crush bones. <br><br> We are working on adding this dinosaur to the directory.",
      img: "media/main_img.svg",
    },
    {
      h1: "Triceratops",
      h2: "Hold tight!",
      p: "Famous for its three distinct facial horns and large bony frill at the back of its head. <br><br> We are working on adding this dinosaur to the directory.",
      img: "media/main_img.svg",
    },
    {
      h1: "Stegosaurus",
      h2: "Hold tight!",
      p: "We are working on adding this dinosaur to the directory.",
      img: "media/main_img.svg",
    },
    {
      h1: "Brachiosaurus",
      h2: "Hold tight!",
      p: "We are working on adding this dinosaur to the directory.",
      img: "media/main_img.svg",
    },
    {
      h1: "Velociraptor",
      h2: "Hold tight!",
      p: "We are working on adding this dinosaur to the directory.",
      img: "media/main_img.svg",
    },
    {
      h1: "Allosaurus",
      h2: "Hold tight!",
      p: "We are working on adding this dinosaur to the directory.",
      img: "media/main_img.svg",
    },
    {
      h1: "Spinosaurus",
      h2: "Hold tight!",
      p: "We are working on adding this dinosaur to the directory.",
      img: "media/main_img.svg",
    },
    {
      h1: "Ankylosaurus",
      h2: "Hold tight!",
      p: "We are working on adding this dinosaur to the directory.",
      img: "media/main_img.svg",
    },
    {
      h1: "Pterodactyl",
      h2: "Hold tight!",
      p: "We are working on adding this dinosaur to the directory.",
      img: "media/main_img.svg",
    },
    {
      h1: "Ichthyosaurus",
      h2: "Hold tight!",
      p: "We are working on adding this creature to the directory.",
      img: "media/main_img.svg",
    },
    {
      h1: "Dimetrodon",
      h2: "Hold tight!",
      p: "We are working on adding this creature to the directory.",
      img: "media/main_img.svg",
    },
    {
      h1: "Pteranodon",
      h2: "Hold tight!",
      p: "We are working on adding this creature to the directory.",
      img: "media/main_img.svg",
    },
    {
      h1: "Mosasaurs",
      h2: "Hold tight!",
      p: "We are working on adding this creature to the directory.",
      img: "media/main_img.svg",
    },
    {
      h1: "Trilobite",
      h2: "Hold tight!",
      p: "We are working on adding this creature to the directory.",
      img: "media/main_img.svg",
    },
    {
      h1: "Ammonite",
      h2: "Hold tight!",
      p: "We are working on adding this creature to the directory.",
      img: "media/main_img.svg",
    },
    {
      h1: "Gorgonopsid",
      h2: "Hold tight!",
      p: "We are working on adding this creature to the directory.",
      img: "media/main_img.svg",
    },
    {
      h1: "Saber-toothed tiger",
      h2: "Hold tight!",
      p: "We are working on adding this creature to the directory.",
      img: "media/main_img.svg",
    },
    {
      h1: "Woolly mammoth",
      h2: "Hold tight!",
      p: "We are working on adding this creature to the directory.",
      img: "media/main_img.svg",
    },
    {
      h1: "Cave bear",
      h2: "Hold tight!",
      p: "We are working on adding this creature to the directory.",
      img: "media/main_img.svg",
    },
    {
      h1: "Doedicurus",
      h2: "Hold tight!",
      p: "We are working on adding this creature to the directory.",
      img: "media/main_img.svg",
    },
    {
      h1: "Smilodon",
      h2: "Hold tight!",
      p: "We are working on adding this creature to the directory.",
      img: "media/main_img.svg",
    },
    {
      h1: "Megalodon",
      h2: "Hold tight!",
      p: "We are working on adding this creature to the directory.",
      img: "media/main_img.svg",
    },

    {
      h1: "Deinotherium",
      h2: "Hold tight!",
      p: "We are working on adding this creature to the directory.",
      img: "media/main_img.svg",
    },
    {
      h1: "Indricotherium",
      h2: "Hold tight!",
      p: "We are working on adding this creature to the directory.",
      img: "media/main_img.svg",
    },
    {
      h1: "Uintatherium",
      h2: "Hold tight!",
      p: "We are working on adding this creature to the directory.",
      img: "media/main_img.svg",
    },
    {
      h1: "Entelodont",
      h2: "Hold tight!",
      p: "We are working on adding this creature to the directory.",
      img: "media/main_img.svg",
    },
    {
      h1: "Baryonyx",
      h2: "Hold tight!",
      p: "We are working on adding this creature to the directory.",
      img: "media/main_img.svg",
    },
    {
      h1: "Carnotaurus",
      h2: "Hold tight!",
      p: "We are working on adding this creature to the directory.",
      img: "media/main_img.svg",
    },
    {
      h1: "Compsognathus",
      h2: "Hold tight!",
      p: "We are working on adding this creature to the directory.",
      img: "media/main_img.svg",
    },
    {
      h1: "Dilophosaurus",
      h2: "Hold tight!",
      p: "We are working on adding this creature to the directory.",
      img: "media/main_img.svg",
    },
    {
      h1: "Iguanodon",
      h2: "Hold tight!",
      p: "We are working on adding this creature to the directory.",
      img: "media/main_img.svg",
    },
    {
      h1: "Protoceratops",
      h2: "Hold tight!",
      p: "We are working on adding this creature to the directory.",
      img: "media/main_img.svg",
    },
    {
      h1: "Styracosaurus",
      h2: "Hold tight!",
      p: "We are working on adding this creature to the directory.",
      img: "media/main_img.svg",
    },
    {
      h1: "Ankylosaurus",
      h2: "Hold tight!",
      p: "We are working on adding this creature to the directory.",
      img: "media/main_img.svg",
    },
    {
      h1: "Pachycephalosaurus",
      h2: "Hold tight!",
      p: "We are working on adding this creature to the directory.",
      img: "media/main_img.svg",
    },
    {
      h1: "Troodon",
      h2: "Hold tight!",
      p: "We are working on adding this creature to the directory.",
      img: "media/main_img.svg",
    },
    {
      h1: "Oviraptor",
      h2: "Hold tight!",
      p: "We are working on adding this creature to the directory.",
      img: "media/main_img.svg",
    },
  ];

  let list = document.getElementById("dinosaurList");

  dinosaurs.forEach((dinosaur) => {
    let listItem = document.createElement("li");
    listItem.textContent = dinosaur.h1;
    list.appendChild(listItem);
  });
});
