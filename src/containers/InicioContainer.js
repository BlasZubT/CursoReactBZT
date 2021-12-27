import React, { useState } from 'react';
import { useHistory } from 'react-router';
import Inicio from '../pages/Inicio';
import Request from '../async/request';

const InicioContainer = () =>{
    const history=useHistory();
    const [form, setForm] = useState({ usuario:'', password:'' });
    const [msg, setMsg] = useState("");
    
    const onChange = (e) =>{
        setForm({...form, [e.target.id] : e.target.value });
    }

    const onSubmit = async (e) =>{
        e.preventDefault();
        const body = {
            id: form.usuario,
            clave: form.password
        };
        const request = new Request("POST",body,0,"service/autentica");
        //Respuesta de la API proporcionada
        const response = await request.exec();
        if( response.isSuccess )
        {
            sessionStorage.setItem("auth",JSON.stringify(response.data));
            setMsg("Acceso Correcto");
            history.push("/cursos",{form:form});
        }else{
            setMsg(response.message);
        }
    }

    return(
        <Inicio form={form} onChange={onChange} onSubmit={onSubmit} msg={msg}/>
    )
};

export default InicioContainer;