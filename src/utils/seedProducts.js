import db from "../db/db.js";
import { addDoc, collection } from "firebase/firestore";

const products = [
    {
      id: "asd1",
      name: "Remera Hombre",
      description:
        "remera oversize de buena costura, gran elasticidad, tela de algodon para mejor comidad la vestir",
      image: "/public/images/remera-hombre.webp",
      stock: 20,
      price: 2000,
      category: "remerahombre",
    },
    {
      id: "asd2",
      name: "Remera Hombre",
      description:
        "remera oversize de buena costura, gran elasticidad, tela de algodon para mejor comidad la vestir",
      image: "/public/images/remera-hombre.webp",
      stock: 20,
      price: 2000,
      category: "remerahombre",
    },
    {
      id: "asd3",
      name: "Remera Hombre",
      description:
        "remera oversize de buena costura, gran elasticidad, tela de algodon para mejor comidad la vestir",
      image: "/public/images/remera-hombre.webp",
      stock: 20,
      price: 2000,
      category: "remerahombre",
    },
    {
      id: "asd4",
      name: "Remera Hombre",
      description:
        "remera oversize de buena costura, gran elasticidad, tela de algodon para mejor comidad la vestir",
      image: "/public/images/remera-hombre.webp",
      stock: 20,
      price: 2000,
      category: "remerahombre",
    },
    {
      id: "asd5",
      name: "Remera Hombre",
      description:
        "remera oversize de buena costura, gran elasticidad, tela de algodon para mejor comidad la vestir",
      image: "/public/images/remera-hombre.webp",
      stock: 20,
      price: 2000,
      category: "remerahombre",
    },
    {
      id: "asd6",
      name: "Remera Hombre",
      description:
        "remera oversize de buena costura, gran elasticidad, tela de algodon para mejor comidad la vestir",
      image: "/public/images/remera-hombre.webp",
      stock: 20,
      price: 2000,
      category: "remerahombre",
    },
    {
      id: "asd7",
      name: "Remera Hombre",
      description:
        "remera oversize de buena costura, gran elasticidad, tela de algodon para mejor comidad la vestir",
      image: "/public/images/remera-hombre.webp",
      stock: 20,
      price: 2000,
      category: "remerahombre",
    },
    {
      id: "asd8",
      name: "Remera Hombre",
      description:
        "remera oversize de buena costura, gran elasticidad, tela de algodon para mejor comidad la vestir",
      image: "/public/images/remera-hombre.webp",
      stock: 20,
      price: 2000,
      category: "remerahombre",
    },
    {
      id: "asd9",
      name: "Remera Hombre",
      description:
        "remera oversize de buena costura, gran elasticidad, tela de algodon para mejor comidad la vestir",
      image: "/public/images/remera-hombre.webp",
      stock: 20,
      price: 2000,
      category: "remerahombre",
    },
    {
      id: "asd10",
      name: "Remera Hombre",
      description:
        "remera oversize de buena costura, gran elasticidad, tela de algodon para mejor comidad la vestir",
      image: "/public/images/remera-hombre.webp",
      stock: 20,
      price: 2000,
      category: "remerahombre",
    },
    {
      id: "asd11",
      name: "Remera Mujer",
      description:
        "remera oversize de buena costura, gran elasticidad, tela de algodon para mejor comidad la vestir",
      image: "/public/images/remera-mujer.webp",
      stock: 20,
      price: 2000,
      category: "remeramujer",
    },
    {
      id: "asd12",
      name: "Remera Mujer",
      description:
        "remera oversize de buena costura, gran elasticidad, tela de algodon para mejor comidad la vestir",
      image: "/public/images/remera-mujer.webp",
      stock: 20,
      price: 2000,
      category: "remeramujer",
    },
    {
      id: "asd13",
      name: "Remera Mujer",
      description:
        "remera oversize de buena costura, gran elasticidad, tela de algodon para mejor comidad la vestir",
      image: "/public/images/remera-mujer.webp",
      stock: 20,
      price: 2000,
      category: "remeramujer",
    },
    {
      id: "asd14",
      name: "Remera Mujer",
      description:
        "remera oversize de buena costura, gran elasticidad, tela de algodon para mejor comidad la vestir",
      image: "/public/images/remera-mujer.webp",
      stock: 20,
      price: 2000,
      category: "remeramujer",
    },
    {
      id: "asd15",
      name: "Remera Mujer",
      description:
        "remera oversize de buena costura, gran elasticidad, tela de algodon para mejor comidad la vestir",
      image: "/public/images/remera-mujer.webp",
      stock: 20,
      price: 2000,
      category: "remeramujer",
    },
    {
      id: "asd16",
      name: "Remera Mujer",
      description:
        "remera oversize de buena costura, gran elasticidad, tela de algodon para mejor comidad la vestir",
      image: "/public/images/remera-mujer.webp",
      stock: 20,
      price: 2000,
      category: "remeramujer",
    },
    {
      id: "asd17",
      name: "Remera Mujer",
      description:
        "remera oversize de buena costura, gran elasticidad, tela de algodon para mejor comidad la vestir",
      image: "/public/images/remera-mujer.webp",
      stock: 20,
      price: 2000,
      category: "remeramujer",
    },
    {
      id: "asd18",
      name: "Remera Mujer",
      description:
        "remera oversize de buena costura, gran elasticidad, tela de algodon para mejor comidad la vestir",
      image: "/public/images/remera-mujer.webp",
      stock: 20,
      price: 2000,
      category: "remeramujer",
    },
    {
      id: "asd19",
      name: "Remera Mujer",
      description:
        "remera oversize de buena costura, gran elasticidad, tela de algodon para mejor comidad la vestir",
      image: "/public/images/remera-mujer.webp",
      stock: 20,
      price: 2000,
      category: "remeramujer",
    },
    {
      id: "asd20",
      name: "Remera Mujer",
      description:
        "remera oversize de buena costura, gran elasticidad, tela de algodon para mejor comidad la vestir",
      image: "/public/images/remera-mujer.webp",
      stock: 20,
      price: 2000,
      category: "remeramujer",
    },
    {
      id: "asd21",
      name: "Pantalon Hombre",
      description:
        "Pantalon de buena costura, gran elasticidad, tela de vestir para mejor comidad la vestir",
      image: "/public/images/jean-hombre.webp",
      stock: 20,
      price: 2000,
      category: "pantalonhombre",
    },
    {
      id: "asd22",
      name: "Pantalon Hombre",
      description:
        "Pantalon de buena costura, gran elasticidad, tela de vestir para mejor comidad la vestir",
      image: "/public/images/jean-hombre.webp",
      stock: 20,
      price: 2000,
      category: "pantalonhombre",
    },
    {
      id: "asd23",
      name: "Pantalon Hombre",
      description:
        "Pantalon de buena costura, gran elasticidad, tela de vestir para mejor comidad la vestir",
      image: "/public/images/jean-hombre.webp",
      stock: 20,
      price: 2000,
      category: "pantalonhombre",
    },
    {
      id: "asd24",
      name: "Pantalon Hombre",
      description:
        "Pantalon de buena costura, gran elasticidad, tela de vestir para mejor comidad la vestir",
      image: "/public/images/jean-hombre.webp",
      stock: 20,
      price: 2000,
      category: "pantalonhombre",
    },
    {
      id: "asd25",
      name: "Pantalon Hombre",
      description:
        "Pantalon de buena costura, gran elasticidad, tela de vestir para mejor comidad la vestir",
      image: "/public/images/jean-hombre.webp",
      stock: 20,
      price: 2000,
      category: "pantalonhombre",
    },
    {
      id: "asd26",
      name: "Pantalon Hombre",
      description:
        "Pantalon de buena costura, gran elasticidad, tela de vestir para mejor comidad la vestir",
      image: "/public/images/jean-hombre.webp",
      stock: 20,
      price: 2000,
      category: "pantalonhombre",
    },
    {
      id: "asd27",
      name: "Pantalon Hombre",
      description:
        "Pantalon de buena costura, gran elasticidad, tela de vestir para mejor comidad la vestir",
      image: "/public/images/jean-hombre.webp",
      stock: 20,
      price: 2000,
      category: "pantalonhombre",
    },
    {
      id: "asd28",
      name: "Pantalon Hombre",
      description:
        "Pantalon de buena costura, gran elasticidad, tela de vestir para mejor comidad la vestir",
      image: "/public/images/jean-hombre.webp",
      stock: 20,
      price: 2000,
      category: "pantalonhombre",
    },
    {
      id: "asd29",
      name: "Pantalon Hombre",
      description:
        "Pantalon de buena costura, gran elasticidad, tela de vestir para mejor comidad la vestir",
      image: "/public/images/jean-hombre.webp",
      stock: 20,
      price: 2000,
      category: "pantalonhombre",
    },
    {
      id: "asd30",
      name: "Pantalon Hombre",
      description:
        "Pantalon de buena costura, gran elasticidad, tela de vestir para mejor comidad la vestir",
      image: "/public/images/jean-hombre.webp",
      stock: 20,
      price: 2000,
      category: "pantalonhombre",
    },
    {
      id: "asd31",
      name: "Pantalon Mujer",
      description:
        "Pantalon de buena costura, gran elasticidad, tela de vestir para mejor comidad la vestir",
      image: "/public/images/pantalon-mujer.webp",
      stock: 20,
      price: 2000,
      category: "pantalonmujer",
    },
    {
      id: "asd32",
      name: "Pantalon Mujer",
      description:
        "Pantalon de buena costura, gran elasticidad, tela de vestir para mejor comidad la vestir",
      image: "/public/images/pantalon-mujer.webp",
      stock: 20,
      price: 2000,
      category: "pantalonmujer",
    },
    {
      id: "asd33",
      name: "Pantalon Mujer",
      description:
        "Pantalon de buena costura, gran elasticidad, tela de vestir para mejor comidad la vestir",
      image: "/public/images/pantalon-mujer.webp",
      stock: 20,
      price: 2000,
      category: "pantalonmujer",
    },
    {
      id: "asd34",
      name: "Pantalon Mujer",
      description:
        "Pantalon de buena costura, gran elasticidad, tela de vestir para mejor comidad la vestir",
      image: "/public/images/pantalon-mujer.webp",
      stock: 20,
      price: 2000,
      category: "pantalonmujer",
    },
    {
      id: "asd35",
      name: "Pantalon Mujer",
      description:
        "Pantalon de buena costura, gran elasticidad, tela de vestir para mejor comidad la vestir",
      image: "/public/images/pantalon-mujer.webp",
      stock: 20,
      price: 2000,
      category: "pantalonmujer",
    },
    {
      id: "asd36",
      name: "Pantalon Mujer",
      description:
        "Pantalon de buena costura, gran elasticidad, tela de vestir para mejor comidad la vestir",
      image: "/public/images/pantalon-mujer.webp",
      stock: 20,
      price: 2000,
      category: "pantalonmujer",
    },
    {
      id: "asd37",
      name: "Pantalon Mujer",
      description:
        "Pantalon de buena costura, gran elasticidad, tela de vestir para mejor comidad la vestir",
      image: "/public/images/pantalon-mujer.webp",
      stock: 20,
      price: 2000,
      category: "pantalonmujer",
    },
    {
      id: "asd38",
      name: "Pantalon Mujer",
      description:
        "Pantalon de buena costura, gran elasticidad, tela de vestir para mejor comidad la vestir",
      image: "/public/images/pantalon-mujer.webp",
      stock: 20,
      price: 2000,
      category: "pantalonmujer",
    },
    {
      id: "asd39",
      name: "Pantalon Mujer",
      description:
        "Pantalon de buena costura, gran elasticidad, tela de vestir para mejor comidad la vestir",
      image: "/public/images/pantalon-mujer.webp",
      stock: 20,
      price: 2000,
      category: "pantalonmujer",
    },
    {
      id: "asd40",
      name: "Pantalon Mujer",
      description:
        "Pantalon de buena costura, gran elasticidad, tela de vestir para mejor comidad la vestir",
      image: "/public/images/pantalon-mujer.webp",
      stock: 20,
      price: 2000,
      category: "pantalonmujer",
    },
  ];
  
const seedProducts = () => {
    products.map(({id, ...rest}) => {
        addDoc(collection(db,"products"), rest)
    })
}

seedProducts()