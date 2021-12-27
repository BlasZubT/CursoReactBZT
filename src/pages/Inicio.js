import React from 'react';
import Logo from '../images/logo.png';

const Inicio = ({form, onChange, onSubmit, msg}) => (
	<div className="principal-corse">
        <div className="container-form">
            <form onSubmit={onSubmit} className="form-react">
                <div className="text-center">
                    <img src={Logo} alt="Logo Escom" />
                </div>
                <h1 align="center">Bienvenido</h1>
                <h5 align="center">Ingreso al Portal</h5>
                <div className="form-group">
                    <label htmlFor="usuario" className="form-label">Usuario</label>
                    <input required onChange={onChange} value={form.usuario} type="text" className="form-control" name="usuario" id="usuario"/>
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="password" className="form-label">Contraseña</label>
                    <input required onChange={onChange} value={form.password} type="password" className="form-control" name="password" id="password"/>
                </div>
                <div className="text-center mt-3">
                	<div className="d-grid gap-2">
                        <button type="submit" className="btn btn-outline-dark mt-3">Ingresar</button>
                    </div>
                </div>
                <br/>
                <div className="text-center mt-3">
                    <p>{msg}</p>
                </div>
                <strong>Autor. Zubillaga Trillo Blas</strong>
                <br/>
                Repositorio del Proyecto en<a className="btn btn-light" href="https://github.com/BlasZubT/CursoReactBZT" role="button">GitHub</a>
            </form>
        </div>
    </div>
);

export default Inicio;