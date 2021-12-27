import React, {Fragment} from 'react';
const Api = ({consumir, perfiles, onChange, form}) =>(
    <div className="principal">
        <div className="text-center container">
            <div className="row">
                <div className="col"></div>
                <div className="col">
                    <input required onChange={onChange} value={form.usuario} type="text" className="form-control mt-4" name="usuario" id="usuario" placeholder="Usuario"/>
                </div>
                <div className="col">
                    <button onClick={consumir} className="btn btn-outline-primary mt-4">Buscar Usuario en GitHub</button>
                </div>
                <div className="col"></div>
            </div>
        </div>
        <div className="row mt-5 container">
            {
                perfiles.map(
                    (item,i) => (
                        <Fragment>
                            <div key={i}>
                                <div className="row mt-2 container">
                                    <div className="col"></div>
                                    <div className="col-md-8 mt-3">
                                        <div className="people-nearby">
                                            <div className="col"></div>
                                            <div className="nearby-user">
                                                <div className="row">
                                                    <div className="col-md-2 col-sm-2">
                                                        <img src={item.avatar_url} alt="Perfil" className="profile-photo-lg rounded-circle" width="80" height="80"/>
                                                    </div>
                                                    <div className="col-md-7 col-sm-7">
                                                        <h5>{item.login}</h5>
                                                        <p>Usuario GitHub</p>
                                                    </div>
                                                    <div className="col-md-3 col-sm-3">
                                                        <a className="btn btn-primary pull-right" href={item.html_url}>Ver Perfil</a>
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
);

export default Api;


