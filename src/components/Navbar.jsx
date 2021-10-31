import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {

const userInfo = JSON.parse(localStorage.getItem('user'))

console.log(userInfo, "NAVBAR");




    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <label className="float-start">{userInfo.name}</label>
                    {/* <label className="float-start">{userInfo.points} pts</label> */}

                    <Link to="/" className="btn btn-danger float-end">Salir</Link>
                </div>
            </nav>
        </>
    )
}