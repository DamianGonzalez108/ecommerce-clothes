import React, { useState } from 'react'
import Formulario from './Formulario'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { addDoc, collection, doc , setDoc, Timestamp } from 'firebase/firestore'
import db from "../../db/db.js"
import validationForm from '../../utils/validationYup.js'
import { toast } from 'react-toastify'

const Checkout = () => {

    const[datosForm, setDatosForm] = useState({
        nombre : "",
        telefono : "",
        email: "",
    })

    const [idOrder , setIdOrder] = useState(null)
    const { cart, totalPrice, deleteAll } = useContext(CartContext)

    const handleChangeInput = (event) => {
        setDatosForm({...datosForm , [event.target.name] : event.target.value})
    }

    const handleSubmitForm = async (event) => {
        event.preventDefault()
        const order = {
            comprador: {...datosForm},
            productos: [...cart],
            fecha: Timestamp.fromDate(new Date()),
            total : totalPrice()
        }
        try {
            const response = await validationForm(datosForm)
            if(response.status === "success"){
                        generateOrder(order)
            }else{
                toast.warning(response.message)
            }
            
        } catch (error) {
            console.log(error)
        }
    }

    const generateOrder = (order) => {
        const orderRef =  collection(db, "orders")
        addDoc(orderRef, order)
        .then((resp) => setIdOrder(resp.id) )
        .catch((error) => console.log(error))
        .finally(() => {
            updateStock()
            deleteAll()
        })
    }

    const updateStock = () => {
        cart.map((productCart) => {
            let quantity = productCart.quantity
            delete productCart.quantity

            const productRef = doc(db, "products", productCart.id)
            setDoc(productRef, {...productCart, stock:productCart.stock - quantity })
            .then(() => console.log("stock actualizado correctamente"))
            .catch((error) => console.log(error))
        })
    }

  return (
    <div>
        {
            idOrder ? (
                <div>
                    <h2>orden generada con exito</h2>
                    <p>{idOrder}</p>
                </div>
            ) : (
                <Formulario datosForm={datosForm} handleChangeInput={handleChangeInput} handleSubmitForm={handleSubmitForm}/>
            )
        }
    </div>
  )
}

export default Checkout