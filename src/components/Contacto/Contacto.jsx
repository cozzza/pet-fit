import React from 'react'
import { useState } from 'react'
import { Form } from 'react-bootstrap'
import { getFirestore } from '../Services/getFirestore';

const Contacto = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [text, setText] = useState('')
    const [idConsulta, setIdConsulta] = useState('')

    const noValidate =
        !(name.length &&
            email.length &&
            text.length > 0
        )

    const generateConsulta = (e) => {
        e.preventDefault()

        const consulta = {}

        consulta.data = { name, email }
        consulta.text = { text }

        const db = getFirestore();
        const consultaCollection = db.collection('consultas');

        consultaCollection.add(consulta)
            .then((IdDocument) => {
                setIdConsulta(IdDocument.id)
            })
            .catch(err => console.log(err))
    }

    return (

        <> {
            idConsulta ?

                <div style={{'lineHeight': '1.5', 'padding':'20px', 'minHeight': '50vh', 'textAlign':'center', 'marginTop':'15%'}} className='container-fluid'>
                    <h3 className='container-fluid'>
                        Gracias por su consulta {name}! <br /> 
                        En breve recibirá una respuesta en su casilla de correo <br /> 
                    </h3>
                </div>


                :

                <div className="container-fluid" style={{ 'padding': '5%' }}>
                    <h2>Contactanos</h2>

                    <Form className="container-fluid" onSubmit={generateConsulta}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="name"
                                name='name'
                                placeholder="Ingrese su nombre"
                                value={name}
                                onChange={(e) => setName(e.target.value)} />
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control type="email" name='email' placeholder="nombre@mail.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Consulta</Form.Label>
                            <Form.Control as="textarea" name='text' rows={10}
                                value={text}
                                onChange={(e) => setText(e.target.value)} />
                        </Form.Group>

                        <button className="btn btn-outline-secondary ms-5"
                            disabled={noValidate}
                        > Enviar </button>
                    </Form>
                </div>
        }
        </>
    )


}

export default Contacto