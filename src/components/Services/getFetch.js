import aviator from '../../assets/aviator-dog-costume-kit.jpeg'
import beetlejuice from '../../assets/beetlejuice-pet-costume.jpeg'
import bussines from '../../assets/business-suit-dog-costume.jpeg'
import caterpillar from '../../assets/dog-caterpillar-costume.jpeg'
import ewok from '../../assets/ewok-pet-costume.jpeg'
import freddyKrueger from'../../assets/freddy-krueger-pet-costume.jpeg'
import ghostbusters from '../../assets/ghostbusters-jumpsuit-pet-costume.jpeg'
import r2d2 from '../../assets/star-wars-r2-d2-pet-costume.jpeg'
import waldo from '../../assets/wheres-waldo-pet-costume.jpeg'



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
        img: aviator,
        description: "",
        categoria: " "
    },
    {
        name: "Disfraz de beetlejuice",
        price: "1700",
        id: "2",
        img: beetlejuice,
        description: "",
        categoria: "oferta"
    },
    {
        name: "Disfraz de empresario",
        price: "2000",
        id: "3",
        img: bussines,
        description: "",
        categoria: " "
    },
    {
        name: "Disfraz de oruga",
        price: "2200",
        id: "4",
        img: caterpillar,
        description: " ",
        categoria: "oferta"
    },
    {
        name: "Disfraz de ewok",
        price: "2400",
        id: "5",
        img: ewok,
        description: "",
        categoria: " "

    },
    {
        name: "Disfraz de Freddy Krueger",
        price: "2500",
        id: "6",
        img: freddyKrueger,
        description: "",
        categoria: "oferta"
    },
    {
        name: "Disfraz de Cazafantasmas",
        price: "2800",
        id: "7",
        img: ghostbusters,
        description: "",
        categoria: "oferta"
    },
    {
        name: "Disfraz de R2-D2",
        price: "2100",
        id: "8",
        img: r2d2,
        description: "",
        categoria: " "
    },
    {
        name: "Disfraz de Wally",
        price: "2200",
        id: "9",
        img: waldo,
        description: "",
        categoria: ""
    }
]
