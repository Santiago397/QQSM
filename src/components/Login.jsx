import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export const Login = () => {

    const [jNombre, setJNombre] = useState('');


    return (
        <div>
            <div className="row justify-content-center">
                <div className="col-12 col-sm-8 col-md-6 col-xl-4">

                    <form onSubmit={(e) => {e.preventDefault()}}>

                        <input
                            type="text"
                            placeholder="Ingresa tu nombre"
                            className="form-control mb-2"
                            value={jNombre}
                            onChange={e => setJNombre(e.target.value)}
                        />
                        <div className="d-grid gap-2">
                            <Link
                                to={`/play/${jNombre}`}
                                className="btn btn-outline-primary mb-1">JUGAR!</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
