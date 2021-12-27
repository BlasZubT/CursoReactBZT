import React from 'react';
import Logo from '../images/logo.png';

const Index = ({form, onChange, onSubmit}) => (
	<div className="principal">
        <div className="container-form">
            <form onSubmit={onSubmit} className="form-react">
                <div className="text-center mb-4">
                    <img src={Logo} alt="Logo Escom" />
                </div>
                <h1 align="center">Bienvenido</h1>
                <div className="form-group mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input required onChange={onChange} value={form.nombre} type="text" className="form-control" name="nombre" id="nombre" placeholder="Nombre Apellido" />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="fnac" className="form-label">Fecha de Nacimiento</label>
                    <input required onChange={onChange} value={form.fnac} type="date" className="form-control" name="fnac" id="fnac" placeholder="dd/mm/aaaa" />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="carrera" className="form-label">Carrera</label>
                    <input required onChange={onChange} value={form.carrera} type="text" className="form-control" name="carrera" id="carrera" placeholder="ISC" />
                </div>
                <div className="text-center mt-3">
                	<div className="d-grid gap-2">
                        <button type="submit" className="btn btn-outline-primary">Enviar</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
);

export default Index;