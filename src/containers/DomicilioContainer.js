import React, { useState } from 'react';
import Domicilio from '../pages/Domicilio';
import states from '../data/states.json';

const DomicilioContainer = () =>{
    let list_states = [];
    const [ form, setForm ] = useState({cp:'', estado:'', municipio:'', ciudad: ''});
    const [ estados, setEstados ] = useState([]);

    const onChange = ({target}) =>{
        let cp = target.value;
        if( cp.length > 5 )
            return;
        setForm( { ...form, cp: cp} );
        if( cp.length === 5 ){
            states.forEach(state => {
                if( state.cp === parseInt( cp, 10 ) ){
                    setForm({estado: state.estado, municipio: state.municipio, cp: cp, ciudad: state.ciudad });
                    list_states.push(state);
                }
            });
        }
        setEstados(list_states);
    }

    return(
        <Domicilio
            onChange = { onChange }
            form = { form }
            estados = { estados }
        />
    )
};

export default DomicilioContainer;