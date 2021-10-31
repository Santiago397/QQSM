import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router';
import { objPreguntas } from '../resources/preguntas.jsx';
import { Ganador } from './Ganador.jsx';

export const Home = () => {



    const { jNombre } = useParams();
    const history = useHistory();

    const [preguntas] = useState([objPreguntas]);
    const [respuesta, setRespuesta] = useState('');
    const [resCorrecta, setResCorrecta] = useState()
    const [contador, setContador] = useState(0);
    const [puntosActuales, setPuntosActuales] = useState(0);

    localStorage.setItem('user', JSON.stringify({ name: jNombre, points: puntosActuales }))

    useEffect(() => {
        handleOption()
    }, [respuesta])

    console.log();

    const handleCorrecto = () => {
        setRespuesta('')
        setResCorrecta(true);
        setPuntosActuales(puntosActuales + 100);
        setContador(Math.floor(Math.random() * (20 - 1) + 1));
    }

    const respuestaErrada = () => {
        if (!resCorrecta) {
            alert("RESPUESTA INCORRECTA!!!")
            history.push("/");
        }
    }

    const handleOption = () => {

        if (respuesta !== '') {
            if (contador === 0 && respuesta === "Bogota") {
                handleCorrecto();
            }
            else if (contador === 1 && respuesta === "12") {
                handleCorrecto();
            }
            else if (contador === 2 && respuesta === "Alfonso Lopez Pumarejo") {
                handleCorrecto();
            }
            else if (contador === 3 && respuesta === "Simon Bolivar") {
                handleCorrecto();
            }
            else if (contador === 4 && respuesta === "Kogis") {
                handleCorrecto();
            }
            else if (contador === 5 && respuesta === "EEUU") {
                handleCorrecto();
            }
            else if (contador === 6 && respuesta === "50") {
                handleCorrecto();
            }
            else if (contador === 7 && respuesta === "Pacifico") {
                handleCorrecto();
            }
            else if (contador === 8 && respuesta === "1492") {
                handleCorrecto();
            }
            else if (contador === 9 && respuesta === "Groenlandia") {
                handleCorrecto();
            }
            else if (contador === 10 && respuesta === "China-Nepal") {
                handleCorrecto();
            }
            else if (contador === 11 && respuesta === "Ra") {
                handleCorrecto();
            }
            else if (contador === 12 && respuesta === "1991") {
                handleCorrecto();
            }
            else if (contador === 13 && respuesta === "116") {
                handleCorrecto();
            }
            else if (contador === 14 && respuesta === "Manila") {
                handleCorrecto();
            }
            else if (contador === 15 && respuesta === "1945") {
                handleCorrecto();
            }
            else if (contador === 16 && respuesta === "1963") {
                handleCorrecto();
            }
            else if (contador === 17 && respuesta === "Homero") {
                handleCorrecto();
            }
            else if (contador === 18 && respuesta === "2014") {
                handleCorrecto();
            }
            else if (contador === 19 && respuesta === "1982") {
                handleCorrecto();
            }
            else if (contador === 20 && respuesta === "Suicidio") {
                handleCorrecto();
            }
            else if (contador === 21 && respuesta === "118") {
                handleCorrecto();
            }
            else if (contador === 22 && respuesta === "Hidrogeno") {
                handleCorrecto();
            }
            else if (contador === 23 && respuesta === "Jupiter") {
                handleCorrecto();
            }
            else if (contador === 24 && respuesta === "Armillaria") {
                handleCorrecto();
            }
            else {
                setResCorrecta(false)
                respuestaErrada();
            }
        }
    }

    return (
        <div>

            <div className="container">
                <h2 className="text-center">{puntosActuales} pts</h2>
                <h3 className="">{preguntas[0][contador].pregunta}</h3>
                <h5>Selecciona la respuesta correcta:</h5>
                {
                    preguntas[0][contador].respuestas.map((res) => {
                        return (
                            <ul className="list-group" key={res}>
                                <button className="list-group-item mb-2" value={res} onClick={(e) => { setRespuesta(e.target.value) }}>{res}</button>
                            </ul>
                        )
                    })
                }
                {
                    !resCorrecta && respuestaErrada
                }
                {
                    puntosActuales === 500 && <Ganador ganador={true} />
                }
                
            </div>


        </div>
    )
}
