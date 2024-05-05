import nodemailer from 'nodemailer'
import config from '../config/env.config.js'

const transport = nodemailer.createTransport({
    service:'gmail',
    port: 587,
    auth:{
        user:config.mail,
        pass:config.mailPassword
    }
})

export const sendMail = async (email, ticket) =>{
    console.log(email)
    let result = await transport.sendMail({
        from: 'Compras <juanmacozzuol@gmail.com>',
        to: email,
        subject: "Su ticket",
        html: `<div> 
            <p>Código:${ticket.code}</p>
            <p>Monto:${ticket.amount}</p>
            <p>Fecha y Hora:${ticket.purchase_datetime}</p>
        </div>`



    })
}


export const sendDeletedUserMail = async (email) =>{
    console.log(email)
    let result = await transport.sendMail({
        from: 'Compras <juanmacozzuol@gmail.com>',
        to: email,
        subject: "Cuenta Eliminada",
        html: `<div> 
            <h1>Se eliminó su cuenta por falta de uso.</h1>
        </div>`



    })
}