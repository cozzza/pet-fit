export const getFetch = new Promise ((res, rej) =>{
    const condition = true
    
    if (condition){
        setTimeout(() => {
            res (products)
        }, 2000)
    } else{
        setTimeout( ()=>{
            rej("404 not found")
        }, 2000)
    }
   
})

export const products = [
    {
        name: "Disfraz de aviador",
        price: "1500",
        id: "1",
        img: "assets/aviator-dog-costume-kit.jpeg",
        description: "",
        categoria: " "
    },
    {
        name: "Disfraz de beetlejuice",
        price: "1700",
        id: "2",
        img: "assets/beetlejuice-pet-costume.jpeg",
        description: "",
        categoria: "oferta"
    },
    {
        name: "Disfraz de empresario",
        price: "2000",
        id: "3",
        img: "assets/business-suit-dog-costume.jpeg",
        description: "",
        categoria: " "
    },
    {
        name: "Disfraz de oruga",
        price: "2200",
        id: "4",
        img: "assets/dog-caterpillar-costume.jpeg",
        description: " ",
        categoria: "oferta"
    },
    {
        name: "Disfraz de ewok",
        price: "2400",
        id: "5",
        img: "assets/ewok-pet-costume.jpeg",
        description: "",
        categoria: " "

    },
    {
        name: "Disfraz de Freddy Krueger",
        price: "2800",
        id: "6",
        img: "assets/freddy-krueger-pet-costume.jpeg",
        description: "",
        categoria: "oferta"
    },
    {
        name: "Disfraz de Cazafantasmas",
        price: "2800",
        id: "7",
        img: "assets/ghostbusters-jumpsuit-pet-costume.jpeg",
        description: "",
        categoria: "oferta"
    },
    {
        name: "Disfraz de R2-D2",
        price: "2800",
        id: "8",
        img: "assets/star-wars-r2-d2-pet-costume.jpeg",
        description: "",
        categoria: " "
    },
]


export const prodDetail = [ { name: "Disfraz de R2-D2", price: "2800", id: "8", img: "assets/star-wars-r2-d2-pet-costume.jpeg", description: ""}] 

export const getProdDetail = new Promise ((res, rej) => {
    res (prodDetail)
})