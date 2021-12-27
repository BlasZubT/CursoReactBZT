import React from 'react';

const Domicilio = ({
    form,
    onChange,
    estados
}) =>(
    <div className="principal">
        <div className="container pt-5">
            <h2 className="text-center">Domicilios</h2>
            <div className="form-group">
                <h4>Codigo Postal</h4>
                <label>Ingrese su Codigo Postal</label>
                <input className="form-control" type="number" onChange={onChange} value={form.cp} placeholder="00000" />
                <h4 className="mt-3">Colonia</h4>
                <label>Verifique su Colonia, Municipio o Asentamiento</label>

                <select className="form-control custom-select" id="select-colonia">
                    <option defaultValue="">Seleccione su Opcion...</option>
                    {
                        estados.map(
                            (item, i) => (
                                <option value={i} key={i}>{item.asentamiento}</option>
                            )
                        )
                    }
                </select>

                <h4 className="mt-3">Delegacion</h4>
                <input className="form-control" type="text" onChange={onChange} value={form.municipio} placeholder="Delegacion" />
                <h4 className="mt-3">Estado</h4>
                <input className="form-control" type="text" onChange={onChange} value={form.estado} placeholder="Estado" />
            </div>

        </div>
    </div>
);

export default Domicilio;