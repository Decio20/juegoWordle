const modal = document.querySelector(".modal");
const openModal = document.querySelector(".principal__icono--open");
const closeModal = document.querySelector(".modal__close");
const contenedorL = document.querySelector(".modal__text--ejemplo1");
const contenedorLetras01 = document.querySelector(".modal__text--ejemplo1--divs");
const letrasContenido01 = ["G", "A", "T", "O", "S"];
const contenedorLetras02 = document.querySelector(".modal__text--ejemplo2--divs");
const letrasContenido02 = ["V", "O", "C", "A", "L"];
const contenedorL02 = document.querySelector(".modal__text--ejemplo2");
const letrasContenido03 = ["C", "A", "N", "T", "O"];
const contenedorLetras03 = document.querySelector(".modal__text--ejemplo3--divs");
const contenedorL03 = document.querySelector(".modal__text--ejemplo3");



openModal.addEventListener("click", (e)=>{
    e.preventDefault();
    console.log("Estoy aquí");
    modal.classList.add("modal__open");
})

closeModal.addEventListener("click", (e)=>{
    e.preventDefault();
    modal.classList.remove("modal__open");
})

letrasContenido01.forEach((element)=>{
    const newDiv = document.createElement("div");
    newDiv.innerText = element;
    contenedorLetras01.appendChild(newDiv);
})

contenedorLetras01.children[0].style.backgroundColor = '#66A060'; 

const parrafo01 = document.createElement("p");
parrafo01.innerText = "La letra G está en la palabra y en la posición correcta.";
contenedorL.appendChild(parrafo01);



letrasContenido02.forEach((element)=>{
    const newDiv = document.createElement("div");
    newDiv.innerText = element;
    contenedorLetras02.appendChild(newDiv);
});

contenedorLetras02.children[2].style.backgroundColor = '#CEB02C'; 

const parrafo02 = document.createElement("p");
parrafo02.innerText = "La letra C está en la palabra pero en la posición incorrecta.";
contenedorL02.appendChild(parrafo02);



letrasContenido03.forEach((element)=>{
    const newDiv = document.createElement("div");
    newDiv.innerText = element;
    contenedorLetras03.appendChild(newDiv);
});

contenedorLetras03.children[4].style.backgroundColor = "#939B9F";

const parrafo03 = document.createElement("p");
parrafo03.innerText = "La letra O no está en la palabra.";
contenedorL03.appendChild(parrafo03);