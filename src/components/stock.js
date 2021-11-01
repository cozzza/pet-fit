// const disfraces = [
//     {
//         nombre: "Disfraz de aviador",
//         precio: "1500",
//         id: "1",
//         img: "./public/assets/aviator-dog-costume-kit.jpeg"
//     },
//     {
//         nombre: "Disfraz de beetlejuice",
//         precio: "1700",
//         id: "2",
//         img: "./public/assets/beetlejuice-pet-costume.jpeg"
//     },
//     {
//         nombre: "Disfraz de empresario",
//         precio: "2000",
//         id: "3",
//         img: ".public/assets/business-suit-dog-costume.jpeg"
//     },
//     {
//         nombre: "disfraz de oruga",
//         precio: "2200",
//         id: "4",
//         img: ".public/assets/dog-caterpillar-costume.jpeg"
//     },
//     {
//         nombre: "disfraz de ewok",
//         precio: "2400",
//         id: "5",
//         img: ".public/assets/ewok-pet-costume.jpeg"

//     },
//     {
//         nombre: "disfraz de Freddy Krueger",
//         precio: "2800",
//         id: "6",
//         img: ".public/assets/freddy-krueger-pet-costume.jpeg"
//     },
//     {
//         nombre: "disfraz de Cazafantasmas",
//         precio: "2800",
//         id: "7",
//         img: ".public/assets/ghostbusters-jumpsuit-pet-costume.jpeg"
//     },
//     {
//         nombre: "disfraz de R2-D2",
//         precio: "2800",
//         id: "8",
//         img: ".public/assets/star-wars-r2-d2-pet-costume.jpeg"
//     },
// ]

// const listadoDisfraces = document.getElementsByClassName("disfraces")[0]

// const listarDisfraces = (array) => {
// listadoDisfraces.innerHTML = ""

// array.forEach((disfraz) =>{
//     const div = document.createElement('div')
//     div.classList.add('disfraz')
//     div.innerHTML = `
//     <img src= ${disfraz.img} alt="">
//     <h3>${disfraz.nombre}</h3>
//     <p class="precioProducto"> Precio: $${disfraz.precio}</p>
//     <button class= "btn-agregar"> Agregar al carrito </button>
//     `
//     listadoDisfraces.appendChild(div)
//     })
// }

// listarDisfraces(disfraces)