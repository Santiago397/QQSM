import React, { useEffect, useState } from 'react'
import { Modal, ModalBody, ModalFooter, ModalTitle } from 'react-bootstrap'
import ModalHeader from 'react-bootstrap/esm/ModalHeader'
import { useHistory } from 'react-router'

export const Ganador = (props) => {

    let userInfo = JSON.parse(localStorage.getItem('user'))
    const history = useHistory()

    const [gano] = useState(props.ganador);
    const [puntos, setPuntos] = useState()

    useEffect(() => {
        setPuntos(userInfo.points)
    }, [])

    return (
        <div>
            <Modal show={gano} >
                <ModalHeader>
                    <ModalTitle>¡¡¡¡GANASTE!!!!!</ModalTitle>
                </ModalHeader>
                <ModalBody>
                    <p className="text-center">Has conseguido ${puntos} dolares! </p>
                </ModalBody>
                <ModalFooter>
                    <button className="btn btn-danger" onClick={() => history.push("/")}>Salir</button>
                </ModalFooter>
            </Modal>
        </div>
    )
}
