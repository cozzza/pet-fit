import React from 'react'
import { Form } from 'react-bootstrap'

const Contacto = () => {
    return (
        <div className="container-fluid" style={{'padding':'5%'}}>
            <h2>Contactanos</h2>

            <Form className="container-fluid">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="name" placeholder="Ingrese su nombre" />
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control type="email" placeholder="nombre@mail.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Consulta</Form.Label>
                    <Form.Control as="textarea" rows={10} />
                </Form.Group>

                <button className="btn btn-outline-secondary ms-5"> Enviar </button>
            </Form>
        </div>
    )
}

export default Contacto