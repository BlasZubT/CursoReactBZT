import React, { useState } from 'react';
import Api from '../pages/Api';
import RequestAPI from '../async/requestapi';

const ApiContainer = () =>{
    const [ perfiles, setPerfiles ] = useState([]);
    const [form, setForm] = useState({ usuario:'' });
    
    const onChange = (e) =>{
        setForm({...form, [e.target.id] : e.target.value });
    }

    const consumir = async () =>{
        console.log( "Consumiendo..." );
        let busqueda = "search/users?q="+form.usuario+"+in:login";
        let request = new RequestAPI("GET", null, false, busqueda);
        let respose = await request.exec();
        setPerfiles( respose.items );
    }

    return(
        <Api 
            perfiles = { perfiles }
            consumir = { consumir }
            form = { form }
            onChange = { onChange }
        />
    )
};

export default ApiContainer;