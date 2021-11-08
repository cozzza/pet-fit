
export const getFetch = new Promise ((res, rej) =>{
    const condition = true
    
    if (condition){
        setTimeout(() => {
            res (products)
        }, 3000)
    } else{
        setTimeout( ()=>{
            rej("404 not found")
        }, 2000)
    }
   
})

const products = [
    {
        nombre: "Disfraz de aviador",
        precio: "1500",
        id: "1",
        img: "assets/aviator-dog-costume-kit.jpeg"
    },
    {
        nombre: "Disfraz de beetlejuice",
        precio: "1700",
        id: "2",
        img: "assets/beetlejuice-pet-costume.jpeg"
    },
    {
        nombre: "Disfraz de empresario",
        precio: "2000",
        id: "3",
        img: "assets/business-suit-dog-costume.jpeg"
    },
    {
        nombre: "disfraz de oruga",
        precio: "2200",
        id: "4",
        img: "assets/dog-caterpillar-costume.jpeg"
    },
    {
        nombre: "disfraz de ewok",
        precio: "2400",
        id: "5",
        img: "assets/ewok-pet-costume.jpeg"

    },
    {
        nombre: "disfraz de Freddy Krueger",
        precio: "2800",
        id: "6",
        img: "assets/freddy-krueger-pet-costume.jpeg"
    },
    {
        nombre: "disfraz de Cazafantasmas",
        precio: "2800",
        id: "7",
        img: "assets/ghostbusters-jumpsuit-pet-costume.jpeg"
    },
    {
        nombre: "disfraz de R2-D2",
        precio: "2800",
        id: "8",
        img: "assets/star-wars-r2-d2-pet-costume.jpeg"
    },
]