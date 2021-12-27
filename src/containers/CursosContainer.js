import React from 'react';
import { useEffect,useState } from 'react';
import { useHistory,useLocation } from 'react-router';
import Cursos from '../pages/Cursos';
import Request from '../async/request';

const CursosContainer = () =>{
    const location=useLocation();
    const history=useHistory();
    const [formlogin,setFormLogin] = useState({});
    const [form, setForm] = useState({ nombrecurso:'', clavecurso:'', descripcion:'', disponibilidad:''});
    const [cursos,setCursos] = useState([]);

    const get = async () =>{
        const request = new Request("GET",null,1,"control/curso");
        const response = await request.exec();
        setCursos(response.data);
    }

    const onChange = (e) =>{
        setForm({...form, [e.target.id] : e.target.value });
    }

    const agregarnuevo = async (e) =>{
        e.preventDefault();
        const body = {
            "curso":{
                nombre: form.nombrecurso,
                clave: form.clavecurso,
                descripcion: form.descripcion,
                disponible: form.disponibilidad
            }
        };
        const request = new Request("POST",body,1,"control/curso");
        //Respuesta de la API
        const response = await request.exec();
        if( response.isSuccess )
        {
            alert("Nuevo Curso Agregado");
            get();
        }else{
            alert("No se ha agregado un Nuevo Curso");
        }
        setForm({ nombrecurso:'', clavecurso:'', descripcion:'', disponibilidad:''});
    }

    const eliminarCurso = async (e,curso) =>{
        e.preventDefault();
        const body = {
            clave: curso
        };
        const request = new Request("DELETE",body,1,"control/curso");
        //Respuesta de la API
        const response = await request.exec();
        if( response.isSuccess )
        {
            alert("Curso Eliminado");
            get();
        }else{
            alert("No se ha eliminado el Curso Seleccionado");
        }
    }

    useEffect(
        () =>{
            get();
            setFormLogin(location.state.form);
        },[location]
    );

    const goBack=()=> history.goBack();

    return(
        <Cursos 
            cursos = { cursos }
            onChange = { onChange }
            form = { form }
            formlogin = { formlogin }
            agregarnuevo = { agregarnuevo }
            eliminarCurso = { eliminarCurso }
            goBack = { goBack }
        />
    )
};

export default CursosContainer;