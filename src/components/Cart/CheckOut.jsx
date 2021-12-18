import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { getFirestore } from '../Services/getFirestore';
import { useCartContext } from '../Context/CartContext';
import './checkOut.css' 

const CheckOut = (props) => {
    const { cartList, totalPrice, clearCart } = useCartContext()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [idOrder, setIdOrder] = useState(null)
    const [valEmail, setValEmail] = useState('')

    const noValidate =
        !(name.length &&
            email.length &&
            phone.length &&
            valEmail.length > 0 &&
            email === valEmail
        )

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
                                Gracias por su compra {name} <br /> <br />
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
                            <form onSubmit={generateOrder} style={{ "margin": '30px'}} className='container-fluid' >
                                <label type="text" name='name' style={{ "marginRight": '10px' }} className="form-label"> Nombre</label >
                                <input type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    style={{ 'width': '280px' }}
                                    placeholder='ingrese su nombre' 
                                    className='form-control'/>
                                <label name='email' style={{ "marginRight": '10px' }} className="form-label"> Email</label>
                                <input type="text"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    style={{ 'width': '299px' }}
                                    placeholder='nombre@email.com' 
                                    className='form-control'/>
                               
                                <label name='email' style={{ "marginRight": '10px' }} className="form-label"> Reingrese su e-mail</label>
                                <input type="text"
                                    value={valEmail}
                                    onChange={(e) => setValEmail(e.target.value)}
                                    style={{ 'width': '299px' }}
                                    placeholder='nombre@email.com'
                                    className={valEmail !== email ? 'text-red' : 'text-black'}
                                    id='valEmail' />
                                <label name='phone' style={{ "marginRight": '10px' }} className="form-label"> Teléfono</label>
                                <input type="text" name="phone" id=""
                                    value={phone}
                                    style={{ 'width': '276px' }}
                                    onChange={(e) => setPhone(e.target.value)}
                                    placeholder='ingrese su teléfono' 
                                    className='form-control'/>
                                <div style={{ "text-align": 'center', 'marginTop': '8%' }}>
                                    <button className="btn btn-outline-secondary"
                                        disabled={noValidate}
                                    > enviar orden </button>
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