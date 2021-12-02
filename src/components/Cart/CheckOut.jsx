import React from 'react'
import { Cart } from './Cart'

export const CheckOut = () => {

    return (
        <div>
             <form onClick={generateOrder}>
                <label type="text" name='name'> nombre</label>
                <input type="text" /> 

                <label type='text' name='email'> email</label>
                <input type="text" />

                <label name='phone'> telefono de contacto</label>
                <input type="text" name="" id=""/>

                                    <button> enviar orden </button>
                                </form>
        </div>
    )
}
