import React from 'react'
import "./faqs.css"
import { Link } from 'react-router-dom'

const FaQs = () => {
    return (
        <div className='container-fluid'>
            <div className='container-fluid'>
                <h2>Preguntas Frecuentes</h2>
                <h5>
                    ENVÍOS:
                    REALIZAMOS ENVÍOS A TODO EL PAÍS a través de OCA o Correo Argentino a domicilio o sucursal. Envíos en CABA por mensajería a domicilio (entre 1 y 2 días hábiles) <br/> <br/>
                    ¿CUÁL ES EL COSTO DE ENVÍO Y A CARGO DE QUIÉN?
                </h5>

                <p>El costo de envío depende de la ubicación que hayas seleccionado. Es a cargo del cliente al menos que el producto indique lo contrario en ciertas ocasiones especiales. Vas a poder ver el valor del costo de envío en el checkout colocando tu código postal al momento del pago.
                </p>

                <h5>¿DÓNDE PUEDO RECIBIR MI PEDIDO?</h5>

                <ol>
                    <li>
                        Podés recibirlo en tu domicilio.
                    </li>
                    <li>
                        Podés retirarlo por una sucursal OCA o Correo Argentino.
                    </li>
                    <li>O lo podés retirar en nuestro local de manera gratuita.</li>
                </ol>

                <h5>¿CÓMO FUNCIONA NUESTRO MÉTODO DE ENVÍO PUERTA A PUERTA?</h5>
                <ul>

                    <li>
                        CABA por mensajería (1 a 2 días hábiles)
                    </li>
                    <li>
                        Envíos al interior del país, por Correo Argentino u OCA, el tiempo de entrega es de 3 a 10 días hábiles.*
                    </li>
                    *Nuestro servicio de mensajería pasa una máxima cantidad de dos veces (2). Si no llegase a dar con el cliente y el cliente quiere hacer un segundo intento, se debe abonar nuevamente el costo de mensajería. La marca no se hará cargo de un segundo envío.
                </ul>

                <h5>
                    CAMBIOS Y DEVOLUCIONES <br/>
                    ¿TIENEN CAMBIO TODOS LOS PRODUCTOS?
                </h5>

                <p>
                Si. Tenés 30 días para realizar el cambio después de haber hecho la compra.
                Para las prendas que se compraron con descuento, se contempla el valor de lo que se pagó. <br/> 
                Para poder realizar el cambio debes venir con el recibo de compra, factura, o talón de cambio. La prenda debe estar con etiqueta y en las mismas condiciones en las que fue entregada. 

                <h5>¿DÓNDE PUEDO REALIZAR EL CAMBIO?</h5>
                Podés realizar el cambio directamente por nuestro local (Thames 1906, de 12 a 19h). En el caso de ser con envío, se puede hacer por correo o mensajería, el costo queda a cargo del cliente.
                </p>

                <h5> Para otras consultas <Link to= {'/contacto'}> contactanos</Link></h5>
            </div>

        </div>
    )
}

export default FaQs;