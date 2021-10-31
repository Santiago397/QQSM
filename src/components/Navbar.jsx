import React, { useState } from 'react'
import { Modal, ModalFooter, ModalTitle } from 'react-bootstrap'
import ModalHeader from 'react-bootstrap/esm/ModalHeader';
import { useHistory } from 'react-router-dom'

export const NavBar = () => {


    const [abierto, setAbierto] = useState(false);

    const userInfo = JSON.parse(localStorage.getItem('user'))

    const history = useHistory();

    const cerrarModal = () => {
        setAbierto(false)
    }
    const mostrarModal = () => {
        setAbierto(true)
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <label className="float-start">{userInfo.name}</label>
                    {/* <label className="float-start">{userInfo.points} pts</label>  */}

                    <button className="btn btn-danger float-end" onClick={mostrarModal}>Salir</button>

                </div>
            </nav>
            <Modal show={abierto} onHide={cerrarModal} >
                <ModalHeader>
                    <ModalTitle>¿Estás seguro de salir?</ModalTitle>
                </ModalHeader>
                <ModalFooter>
                    <button className="btn btn-danger" onClick={() => history.push("/")}>Salir</button>
                    <button className="btn btn-success" onClick={() => setAbierto(false)}>Cerrar</button>
                </ModalFooter>
            </Modal>
        </>
    )
}