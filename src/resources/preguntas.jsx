const crearPregunta = (id, pregunta, respuestas, categorias) => {
    return {
        id,
        pregunta,
        respuestas,
        categorias
    }
}

const p1 = crearPregunta(1, 
    "¿Capital de Colombia?", 
    ["Medellin", "Bogota", "Cali", "Manizales"], "Geografia");
const p2 = crearPregunta(2, 
    "¿Cuántos paises conforman América del Sur?", 
    ["11", "15", "12", "10"], "Geografia");
const p3 = crearPregunta(3, 
    "¿Cuál era el presidente de colombia en la 2da Guerra Mundial?", 
    ["Alvaro Uribe Velez", "Alfonso Lopez Pumarejo", "Alberto Lleras Camargo", "Julio Cesar Turbay"], "Historia");
const p4 = crearPregunta(4, 
    "¿Quién fue el primer presidente de Colombia?", 
    ["Simon Bolivar", "Carlos Lleras Restrepo", "Alberto Lleras Camargo", "Ernesto Samper Sambrano"], "Historia");
const p5 = crearPregunta(5, 
    "¿Cuál de las siguientes es una comunidad indígena colombiana?", 
    ["Kogis", "Quechuas", "Madija", "Zapoteca"], "Geografia");
const p6 = crearPregunta(6,
    "¿De qué país forma parte Hawaii?",
    ["Inglaterra", "Francia", "EEUU", "Rusia"], "Geografia");
const p7 = crearPregunta(7,
    "¿Cuántos estados tiene integrados Estados Unidos?",
    ["45", "60", "50", "55"], "Historia");
const p8 = crearPregunta(8,
    "¿Cuál es el océano más grande del mundo?",
    ["Atlantico", "Magdalena", "Pacifico", "Ninguna de las anteriores"], "Geografia");
const p9 = crearPregunta(9,
    "¿En qué año fue el descubrimiento de América?",
    ["1554", "1966", "1492", "1692"], "Historia");
const p10 = crearPregunta(10,
    "¿Cuál es la isla más grande del mundo?",
    ["Groenlandia", "Curasao", "Islas Canarias", "San Andres"], "Geografia");
const p11 = crearPregunta(11,
    "¿En qué países se encuentra el Everest?",
    ["Afganistan-Kasagistan", "China-Nepal", "EEUU-Canada", "Ninguna de las anteiores"], "Geografia");
const p12 = crearPregunta(12,
    "¿Cuál era el nombre del dios del Sol en el Antiguo Egipto?",
    ["Ra", "Amon", "Anubis", "Osiris"], "Historia");
const p13 = crearPregunta(13,
    "¿En qué año se disolvió la Unión Soviética?",
    ["1991", "1992", "1993", "1994"], "Historia");
const p14 = crearPregunta(14,
    "¿Cuántos años duró la guerra de los 100 años?",
    ["101", "116", "97", "100"], "Historia");
const p15 = crearPregunta(15,
    "¿Cuál es la capital de Filipinas?",
    ["Manila", "Cebu", "Baguio", "Angeles"], "Geografia");
const p16 = crearPregunta(16,
    "¿En qué año se creó la ONU?",
    ["1994", "1945", "1916", "2000"], "Historia");
const p17 = crearPregunta(17,
    "¿En qué año fue asesinado John F. Kennedy?",
    ["1996", "1963", "1990", "1970"], "Historia");
const p18 = crearPregunta(18,
    "¿Quién es el autor de La Odisea?",
    ["Socrates", "Aristoteles", "Platon", "Homero"], "Historia");
const p19 = crearPregunta(19,
    "¿En que año murio Garbriel Garcia Marquez?",
    ["2013", "2014", "2010", "2005"], "Geografia");
const p20 = crearPregunta(20,
    "¿En qué año recibió el Oscar Gabriel Garcia Marquez?",
    ["2000", "1970", "1982", "1992"], "Historia");
const p21 = crearPregunta(21,
    "¿De qué murió Vincent Van Gogh?",
    ["Soledad", "Asesinato", "Suicidio", "Amor"], "Historia");
const p22 = crearPregunta(22,
    "¿Cuántos elementos tiene la tabla periódica?",
    ["116", "118", "117", "119"], "Quimica");
const p23 = crearPregunta(23,
    "¿Cuál es el elemento más abundante de la Tierra?",
    ["Oxigeno", "Carbono", "Hidrogeno", "Aire"], "Quimicca");
const p24 = crearPregunta(24,
    "¿Cuál es el planeta más grande del sistema solar?",
    ["Marte", "Tu", "Urano", "Jupiter"], "Geografia");
const p25 = crearPregunta(25,
    "¿Cuál es el ser vivo más grande del mundo?",
    ["Armillaria", "T-rex", "Tu ego", "Elefante"], "Geografia");



export const objPreguntas = [
    p1,
    p2,
    p3,
    p4,
    p5,
    p6,
    p7,
    p8,
    p9,
    p10,
    p11,
    p12,
    p13,
    p14,
    p15,
    p16,
    p17,
    p18,
    p19,
    p20,
    p21,
    p22,
    p23,
    p24,
    p25

]