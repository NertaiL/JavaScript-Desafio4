/* array de objetos */
let propiedades = [
  {
    name: "Casa de campo",
    description: "Un lugar ideal para descansar de la ciudad",
    src: "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
    cuartos: 2,
    metros: 170,
  },
  {
    name: "Casa de playa",
    description: "Despierta tus días oyendo el oceano, tranquilidad pura",
    src: "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
    cuartos: 2,
    metros: 130,
  },
  {
    name: "Casa en el centro",
    description:
      "Ten cerca de ti todo lo que necesitas,es algo increible",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    cuartos: 1,
    metros: 80,
  },
  {
    name: "Casa rodante",
    description: "Conviertete en un nómada del mundo sin salir de tu casa",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    cuartos: 1,
    metros: 6,
  },
  {
    name: "Departamento",
    description: "Desde las alturas todo se ve mejor,algo inexplicable",
    src: "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
    cuartos: 3,
    metros: 200,
  },
  {
    name: "Mansión",
    description: "Vive una vida lujosa en la mansión de tus sueños ",
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    cuartos: 5,
    metros: 500,
  },
];

let inputsAll = Array.from(document.querySelectorAll("body input"));//es para llamar a todos los input del body de html, eso si llamarlo por orden jajaja

let search = document.querySelector("#search");
let clear = document.querySelector("#clear");
let list = document.querySelector("#propiedade");
let count = document.querySelector("#contador");

//function declarada
function propiedade(propiedades) {
  count.innerHTML = propiedades.length; /* .lenght estoy viendo la totalidad de los objetos que tengo dentro del array y me los cuenta, en este caso son 6 en total */
  list.innerHTML = ""  /* lo limpia antes de nostrarlo , es para que no se duplique*/
  for (const item of propiedades) {
    let newDiv = document.createElement("div"); //crea un nuevo elemento ene l dom
    newDiv.classList.add(
      "cardInmobiliario"
    ); /* esto lo que hace es agregar un class al div que cree en la linea anterior , para poder llamarlo del css,vendria siendo el padre de la card*/
    newDiv.innerHTML = `

    <div class="item_imagen">
        <img src="${item["src"]}" alt="${item["name"]}"></img>
      </div>
      <div class="item_info">
        <h5 class="titulo_card">${item["name"]}</h5>
        <div class="cuartosymetros">
        <p class="cuarto_dpto">Cuartos: ${item["cuartos"]}</p>
        <p class="metros_dpto">Metros:${item["metros"]} </p>
        </div>
        <p class="descripcion_dpot">${item["description"]}</p>
        <button class="boton_vermas">Ver Mas </button>
      </div>
    `;
    list.appendChild(newDiv);
  }
}

propiedade(propiedades);

//function arrow
let filtrarcito = () => {
  let [{ value: cantidad }, { value: desde }, { value: hasta }] = inputsAll; //se tiene que llamar por orden del html  
  if (!cantidad || !desde || !hasta) {
    alert("Faltan campos por llenar");
    return false; 
    
  }

  const filtrarTodo = propiedades.filter( // filter crea un nuevo array con los elementos que cumplan la condicion
    (filtrar) => 
    filtrar.metros >= desde && filtrar.metros <= hasta && filtrar.cuartos == cantidad //que cumplan esta condicion
  );
  propiedade(filtrarTodo); // muestra los productos filtrados
};

search.addEventListener("click", filtrarcito);

//function arrow
let reiniciarTodo= () => {
  inputsAll.forEach((reset)=> (reset.value = "")) //ocupando forEach 
  propiedade(propiedades);
}
clear.addEventListener("click",reiniciarTodo);



