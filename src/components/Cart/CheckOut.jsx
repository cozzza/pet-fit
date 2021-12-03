import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { getFirestore } from '../Services/getFirestore';
import { useCartContext } from '../Context/CartContext';

const CheckOut = (props) => {
    const { cartList, totalPrice, clearCart } = useCartContext()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [idOrder, setIdOrder] = useState(null)

    const generateOrder = (e) => {
        e.preventDefault()
        
        const order = {}
        
        // order.date = firebase.firestore.Timestamp.fromDate(new Date());
        order.buyer = { name, email, phone }
        order.price = totalPrice;

        order.items = cartList.map((item) => {
            const id = item.prod.id
            const title = item.prod.name

            return { id, name }
        })

        //añado la orden a db
        const db = getFirestore();
        const orderCollection = db.collection('orders');

        orderCollection.add(order)
            .then((IdDocument) => { 
                setIdOrder(IdDocument.id) 
            })
            .catch(err => console.log(err))
    }

    

    return (
        <div>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Ingreso de datos
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={generateOrder}>
                        <label type="text" name='name' > nombre</label>
                        <input type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)} />
                        <label name='email'> email</label>
                        <input type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                        <label name='phone'> telefono de contacto</label>
                        <input type="text" name="phone" id=""
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)} />
                            <button> enviar orden </button>
                    </form>
                </Modal.Body>
                <Modal.Footer>
               <Button onClick={clearCart}> cerrar </Button>
                </Modal.Footer>
                <h1>{idOrder ? `su codigo de orden es: ${idOrder}` : null} </h1>
            </Modal>
        </div>
    )
}

export default CheckOut