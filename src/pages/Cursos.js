import React, {Fragment} from 'react';

const Cursos = ({cursos,onChange,form,formlogin,agregarnuevo,eliminarCurso,goBack}) => (
	<div className="list-corse">
		<div className="container">
			<div className="row title-course">
				<div className="col mt-5">
					<h5 className="title-user">{formlogin.usuario}&nbsp;&nbsp;&nbsp;<button type="button" onClick={goBack} className="btn btn-outline-secondary">Salir</button></h5>
					<h1 className="text-center">Panel Principal de Cursos</h1>
					<h5 className="title-orange text-center">Administraci&oacute;n de Mis Cursos</h5>
				</div>
			</div>
			<form onSubmit={agregarnuevo}>
			<div className="row">
    			<div className="col mt-2">
    				<div className="container">
            			<div className="row mt-3">
            				<h5 className="mt-8">Nuevo Curso</h5>
            				<p>Ingrese la informaci&oacute;n para Agregar un Nuevo Curso</p>
                			<div className="col">
                    			Nombre del Curso
                			</div>
                			<div className="col-md-8 col-sm-2">
                    			<input required onChange={onChange} value={form.nombrecurso} type="text" className="form-control" name="nombrecurso" id="nombrecurso" placeholder="Nombre"/>
                			</div>
            			</div>
            			<div className="row mt-3">
                			<div className="col">
                    			Identificador o Clave
                			</div>
                			<div className="col-md-8 col-sm-2">
                    			<input required onChange={onChange} value={form.clavecurso} type="text" className="form-control" name="clavecurso" id="clavecurso" placeholder="Clave"/>
                			</div>
            			</div>
            			<div className="row mt-3">
                			<div className="col">
                    			Descripci&oacute;n
                			</div>
                			<div className="col-md-8 col-sm-2">
                    			<input required onChange={onChange} value={form.descripcion} type="text" className="form-control" name="descripcion" id="descripcion" placeholder="Descripcion"/>
                			</div>
            			</div>
            			<div className="row mt-3">
                			<div className="col">
                    			Disponibilidad
                			</div>
                			<div className="col-md-8 col-sm-2">
                    			<input required onChange={onChange} value={form.disponibilidad} type="text" className="form-control" name="disponibilidad" id="disponibilidad" placeholder="Cantidad Disponible"/>
                			</div>
            			</div>
            			<div className="row mt-3">
                    		<button className="btn btn-outline-secondary mt-4">Agregar Nuevo Curso</button>
                		</div>
        			</div>
      			</div>
      			<div className="col mt-2">
      				<div className="row mt-3">
      				<h5>Mis Cursos</h5>
      				{
      					cursos.map(
      						(item) => (
                        	<Fragment>
                            	<div>
                                	<div className="row mt-2 container">
                                    	<div className="col-md-16 mt-3">
                                        	<div className="people-nearby">
                                            	<div className="nearby-user">
                                                	<div className="row">
                                                    	<div className="col-md-2 col-sm-2">
                                                        	<img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/5f8a3b29547179.55f85828a185d.png" alt="Perfil" className="profile-photo-lg rounded-circle" width="60" height="60"/>
                                                    	</div>
                                                    	<div className="col-md-7 col-sm-7">
                                                        	<h5 className="title-newcorse">{item.nombre}</h5>
                                                        	<p>{item.descripcion}<br/>{item.disponible} Disponible(s)<br/>Fecha Creacion {item.created}<br/>Actualizacion {item.updated}</p>
                                                    	</div>
                                                    	<div className="col-md-3 col-sm-3">
                                                        	<button className="btn btn-outline-danger" id={item.clave} onClick={(e) => eliminarCurso(e,item.clave) }>Eliminar</button>
                                                    	</div>
                                                </div>
                                            	</div>
                                        	</div>
                                    	</div>
                                	</div>
                            	</div>
                        	</Fragment>
                    	)
                	)
            	}
       	 		</div>
       	 		</div>
  			</div>
  			</form>
		</div>
	</div>
);

export default Cursos;