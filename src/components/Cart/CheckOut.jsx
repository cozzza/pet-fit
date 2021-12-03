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

        order.buyer = { name, email, phone }
        order.price = totalPrice();
        order.items = cartList.map((item) => {
            const id = item.id
            const title = item.name

            return { id, title }
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
            {
                idOrder ?
                    <Modal
                        {...props}
                        size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered>
                        <Modal.Header closeButton onClick={clearCart}>
                            <Modal.Title id="contained-modal-title-vcenter">
                                Su orden
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <h3>
                                Gracias por su compra {name} <br/> <br/>
                                Su código de órden es: {idOrder}
                            </h3>
                            
                        </Modal.Body>
                        <Modal.Footer>
                        </Modal.Footer>
                    </Modal>

                    :

                    <Modal 
                        {...props}
                        size="md"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                    >
                        <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title-vcenter">
                                Ingreso de datos
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <form onSubmit={generateOrder} style={{"margin":'30px'}}>
                                <label type="text" name='name' style={{"marginRight":'10px'}}> Nombre</label >
                                <input type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)} 
                                    style={{'width':'280px'}}
                                    placeholder=' ingrese su nombre'/> <br /> 
                                <label name='email' style={{"marginRight":'10px'}}> Email</label>
                                <input type="text"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    style={{'width':'299px'}} 
                                    placeholder=' ingrese su email'/> 
                                    <br />
                                <label name='phone' style={{"marginRight":'10px'}}> Teléfono</label>
                                <input type="text" name="phone" id=""
                                    value={phone}
                                    style={{'width':'276px'}}
                                    onChange={(e) => setPhone(e.target.value)}
                                    placeholder=' ingrese su teléfono'/> 
                                <div style={{"text-align":'center', 'marginTop':'8%'}}>
                                     <button className="btn btn-outline-secondary ms-5"> enviar orden </button>
                                </div> 
                            </form>
                        </Modal.Body>
                        <Modal.Footer>
                        </Modal.Footer>

                    </Modal>
            }
        </div>
    )
}

export default CheckOut