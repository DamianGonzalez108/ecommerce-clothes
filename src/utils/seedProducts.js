import db from "../db/db.js";
import { addDoc, collection } from "firebase/firestore";

const products = [
/* REMERAS HOMBRE */
    {
      id: "asd1",
      name: "Remera Jordan Negra",
      description:
        "remera oversize de buena costura, gran elasticidad, tela de algodon para mejor comidad la vestir",
      image: "/remerahombre.webp",
      stock: 20,
      price: 2000,
      category: "remerahombre",
    },
    {
      id: "asd2",
      name: "Remera Nike Cebra",
      description:
        "remera oversize de buena costura, gran elasticidad, tela de algodon para mejor comidad la vestir",
      image: "/remerahombre2.webp",
      stock: 20,
      price: 2000,
      category: "remerahombre",
    },
    {
      id: "asd3",
      name: "Remera Jordan Blanca",
      description:
        "remera oversize de buena costura, gran elasticidad, tela de algodon para mejor comidad la vestir",
      image: "/remerahombre3.webp",
      stock: 20,
      price: 2000,
      category: "remerahombre",
    },
    {
      id: "asd4",
      name: "Remera Nike Trail",
      description:
        "remera oversize de buena costura, gran elasticidad, tela de algodon para mejor comidad la vestir",
      image: "/remerahombre4.webp",
      stock: 20,
      price: 2000,
      category: "remerahombre",
    },
    {
      id: "asd5",
      name: "Remera Nike Lisa",
      description:
        "remera oversize de buena costura, gran elasticidad, tela de algodon para mejor comidad la vestir",
      image: "/remerahombre5.webp",
      stock: 20,
      price: 2000,
      category: "remerahombre",
    },
/* BUZOS HOMBRE */
    {
      id: "asd6",
      name: "Buzo Chaqueta Nike",
      description:
        "remera oversize de buena costura, gran elasticidad, tela de algodon para mejor comidad la vestir",
      image: "/buzoshombre.webp",
      stock: 20,
      price: 2000,
      category: "buzoshombre",
    },
    {
      id: "asd7",
      name: "Buzo Canguro Jordan",
      description:
        "remera oversize de buena costura, gran elasticidad, tela de algodon para mejor comidad la vestir",
      image: "/buzoshombre2.webp",
      stock: 20,
      price: 2000,
      category: "buzoshombre",
    },
    {
      id: "asd8",
      name: "Buzo Canguro Jordan Fight",
      description:
        "remera oversize de buena costura, gran elasticidad, tela de algodon para mejor comidad la vestir",
      image: "/buzoshombre3.webp",
      stock: 20,
      price: 2000,
      category: "buzoshombre",
    },
    {
      id: "asd9",
      name: "Buzo Nike Atletic",
      description:
        "remera oversize de buena costura, gran elasticidad, tela de algodon para mejor comidad la vestir",
      image: "/buzoshombre4.webp",
      stock: 20,
      price: 2000,
      category: "buzoshombre",
    },
    {
      id: "asd10",
      name: "Buzo Canguro Nike Liso",
      description:
        "remera oversize de buena costura, gran elasticidad, tela de algodon para mejor comidad la vestir",
      image: "/buzoshombre5.webp",
      stock: 20,
      price: 2000,
      category: "buzoshombre",
    },
/* REMERA MUJER */

    {
      id: "asd11",
      name: "Remera Musculosa Nike",
      description:
        "remera oversize de buena costura, gran elasticidad, tela de algodon para mejor comidad la vestir",
      image: "/remeramujer.webp",
      stock: 20,
      price: 2000,
      category: "remeramujer",
    },
    {
      id: "asd12",
      name: "Remera Nike Oversize",
      description:
        "remera oversize de buena costura, gran elasticidad, tela de algodon para mejor comidad la vestir",
      image: "/remeramujer2.webp",
      stock: 20,
      price: 2000,
      category: "remeramujer",
    },
    {
      id: "asd13",
      name: "Remera Nike Oversize",
      description:
        "remera oversize de buena costura, gran elasticidad, tela de algodon para mejor comidad la vestir",
      image: "/remeramujer3.webp",
      stock: 20,
      price: 2000,
      category: "remeramujer",
    },
    {
      id: "asd14",
      name: "Remera Just Nike",
      description:
        "remera oversize de buena costura, gran elasticidad, tela de algodon para mejor comidad la vestir",
      image: "/remeramujer4.webp",
      stock: 20,
      price: 2000,
      category: "remeramujer",
    },
    {
      id: "asd15",
      name: "Remera Nike Lisa",
      description:
        "remera oversize de buena costura, gran elasticidad, tela de algodon para mejor comidad la vestir",
      image: "/remeramujer5.webp",
      stock: 20,
      price: 2000,
      category: "remeramujer",
    },

/* BUZOS MUJER */

    {
      id: "asd16",
      name: "Buzo Jordan Sport ",
      description:
        "remera oversize de buena costura, gran elasticidad, tela de algodon para mejor comidad la vestir",
      image: "/mujerbuzo.webp",
      stock: 20,
      price: 2000,
      category: "buzosmujer",
    },
    {
      id: "asd17",
      name: "Buzo Canguro Nike",
      description:
        "remera oversize de buena costura, gran elasticidad, tela de algodon para mejor comidad la vestir",
      image: "/mujerbuzo2.webp",
      stock: 20,
      price: 2000,
      category: "buzosmujer",
    },
    {
      id: "asd18",
      name: "Buzo Nike",
      description:
        "remera oversize de buena costura, gran elasticidad, tela de algodon para mejor comidad la vestir",
      image: "/mujerbuzo3.webp",
      stock: 20,
      price: 2000,
      category: "buzosmujer",
    },
    {
      id: "asd19",
      name: "Buzo Nike AIR ",
      description:
        "remera oversize de buena costura, gran elasticidad, tela de algodon para mejor comidad la vestir",
      image: "/mujerbuzo4.webp",
      stock: 20,
      price: 2000,
      category: "buzosmujer",
    },
    {
      id: "asd20",
      name: "Buzo Canguro Nike",
      description:
        "remera oversize de buena costura, gran elasticidad, tela de algodon para mejor comidad la vestir",
      image: "/mujerbuzo5.webp",
      stock: 20,
      price: 2000,
      category: "buzosmujer",
    },
    /*PANTALON HOMBRE */
    {
      id: "asd21",
      name: "Pantalon Cargo Nike",
      description:
        "Pantalon de buena costura, gran elasticidad, tela de vestir para mejor comidad la vestir",
      image: "/pantalonhombre.webp",
      stock: 20,
      price: 2000,
      category: "pantalonhombre",
    },
    {
      id: "asd22",
      name: "Pantalon Sport Nike",
      description:
        "Pantalon de buena costura, gran elasticidad, tela de vestir para mejor comidad la vestir",
      image: "/pantalonhombre2.webp",
      stock: 20,
      price: 2000,
      category: "pantalonhombre",
    },
    {
      id: "asd23",
      name: "Pantalon Urban Nike",
      description:
        "Pantalon de buena costura, gran elasticidad, tela de vestir para mejor comidad la vestir",
      image: "/pantalonhombre3.webp",
      stock: 20,
      price: 2000,
      category: "pantalonhombre",
    },
    {
      id: "asd24",
      name: "Pantalon Jogging Jordan",
      description:
        "Pantalon de buena costura, gran elasticidad, tela de vestir para mejor comidad la vestir",
      image: "/pantalonhombre4.webp",
      stock: 20,
      price: 2000,
      category: "pantalonhombre",
    },
    {
      id: "asd25",
      name: "Pantalon Jogging Nike",
      description:
        "Pantalon de buena costura, gran elasticidad, tela de vestir para mejor comidad la vestir",
      image: "/pantalonhombre5.webp",
      stock: 20,
      price: 2000,
      category: "pantalonhombre",
    },
    /* ZAPATILLAS HOMBRE */
    {
      id: "asd26",
      name: "Zapatillas Nike Urban",
      description:
        "Pantalon de buena costura, gran elasticidad, tela de vestir para mejor comidad la vestir",
      image: "/zapasDeporNikeHombre.webp",
      stock: 20,
      price: 2000,
      category: "zapatillashombre",
    },
    {
      id: "asd27",
      name: "Zapatillas Nike ReactX",
      description:
        "Pantalon de buena costura, gran elasticidad, tela de vestir para mejor comidad la vestir",
      image: "/zapasDeporNikeHombre2.webp",
      stock: 20,
      price: 2000,
      category: "zapatillashombre",
    },
    {
      id: "asd28",
      name: "Zapatillas Nike Urban",
      description:
        "Pantalon de buena costura, gran elasticidad, tela de vestir para mejor comidad la vestir",
      image: "/zapasDeporNikeHombre3.webp",
      stock: 20,
      price: 2000,
      category: "zapatillashombre",
    },
    {
      id: "asd29",
      name: "Zapatillas Nike AIR ",
      description:
        "Pantalon de buena costura, gran elasticidad, tela de vestir para mejor comidad la vestir",
      image: "/zapasDeporNikeHombre4.webp",
      stock: 20,
      price: 2000,
      category: "zapatillashombre",
    },
    {
      id: "asd30",
      name: "Zapatillas Nike Running",
      description:
        "Pantalon de buena costura, gran elasticidad, tela de vestir para mejor comidad la vestir",
      image: "/zapasDeporNikeHombre5.webp",
      stock: 20,
      price: 2000,
      category: "zapatillashombre",
    },
    /*PANTALON MUJER */
    {
      id: "asd31",
      name: "Pantalon Nike Suelto ",
      description:
        "Pantalon de buena costura, gran elasticidad, tela de vestir para mejor comidad la vestir",
      image: "/pantalonmujer.webp",
      stock: 20,
      price: 2000,
      category: "pantalonmujer",
    },
    {
      id: "asd32",
      name: "Pantalon Jogging Nike ",
      description:
        "Pantalon de buena costura, gran elasticidad, tela de vestir para mejor comidad la vestir",
      image: "/pantalonmujer2.webp",
      stock: 20,
      price: 2000,
      category: "pantalonmujer",
    },
    {
      id: "asd33",
      name: "Pantalon Jogging Calza",
      description:
        "Pantalon de buena costura, gran elasticidad, tela de vestir para mejor comidad la vestir",
      image: "/pantalonmujer3.webp",
      stock: 20,
      price: 2000,
      category: "pantalonmujer",
    },
    {
      id: "asd34",
      name: "Pantalon Jogging Jordan",
      description:
        "Pantalon de buena costura, gran elasticidad, tela de vestir para mejor comidad la vestir",
      image: "/pantalonmujer4.webp",
      stock: 20,
      price: 2000,
      category: "pantalonmujer",
    },
    {
      id: "asd35",
      name: "Pantalon Jogging Nike",
      description:
        "Pantalon de buena costura, gran elasticidad, tela de vestir para mejor comidad la vestir",
      image: "/pantalonmujer5.webp",
      stock: 20,
      price: 2000,
      category: "pantalonmujer",
    },
    /*ZAPATILLAS MUJER */
    {
      id: "asd36",
      name: "Zapatillas Nike ReactX",
      description:
        "Pantalon de buena costura, gran elasticidad, tela de vestir para mejor comidad la vestir",
      image: "/zapamujerdepor.webp",
      stock: 20,
      price: 2000,
      category: "zapatillasmujer",
    },
    {
      id: "asd37",
      name: "Zapatillas Nike MaxForce",
      description:
        "Pantalon de buena costura, gran elasticidad, tela de vestir para mejor comidad la vestir",
      image: "/zapamujerdepor2.webp",
      stock: 20,
      price: 2000,
      category: "zapatillasmujer",
    },
    {
      id: "asd38",
      name: "Zapatillas Nike Urban",
      description:
        "Pantalon de buena costura, gran elasticidad, tela de vestir para mejor comidad la vestir",
      image: "/zapamujerdepor3.webp",
      stock: 20,
      price: 2000,
      category: "zapatillasmujer",
    },
    {
      id: "asd39",
      name: "Zapatillas Nike AIR",
      description:
        "Pantalon de buena costura, gran elasticidad, tela de vestir para mejor comidad la vestir",
      image: "/zapamujerdepor4.webp",
      stock: 20,
      price: 2000,
      category: "zapatillasmujer",
    },
    {
      id: "asd40",
      name: "Zapatillas Nike Sport",
      description:
        "Pantalon de buena costura, gran elasticidad, tela de vestir para mejor comidad la vestir",
      image: "/zapamujerdepor5.webp",
      stock: 20,
      price: 2000,
      category: "zapatillasmujer",
    },
  ];
  
const seedProducts = () => {
    products.map(({id, ...rest}) => {
        addDoc(collection(db,"products"), rest)
    })
}

seedProducts()