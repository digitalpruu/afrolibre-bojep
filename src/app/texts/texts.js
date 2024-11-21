const title = 'FUNDACIÓN AFROCOLOMBIANA LIBERAL DE DESARROLLO SOCIAL “AFROLIBRE"';
const email = "wilsonpalaciosprofe1976@gmail.com";
const mensajeWhatsApp = encodeURIComponent(
    "¡Hola! Estoy interesado en conocer más sobre los productos de " + title + " y me gustaría obtener más información. ¡Gracias!"
);
const numeroWhatsApp = "+573132744263"; // Incluido el prefijo +57

const textos = {
    index: {
        title: title,
    },
    homeContent: {
        title: title,
    },
    about: {
        description1: "¿QUIÉNES SOMOS?\n" +
            "Somos una entidad sin ánimo de lucro, constituida en el año 2008, inscrita en la cámara de comercio de Bogotá con Registro Mercantil Nacional N° S0031986 y Nit: 900.220.747-1, enfocada siempre en contribuir con el desarrollo de las necesidades solicitadas de personas naturales y jurídicas: diseñando programas y proyectos sociales que le permitan a todas las comunidades y territorios del país un avance desde la diversidad étnica y cultural.\n" +
            "\n",

            },
    contact: {
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
        email: email
    },
    footer: {
        slogan: {
            p1: "Borojep.",
            p2: ""
        },
        address: "", // Información no proporcionada
        phone: numeroWhatsApp,
        email: email,
        facebook: "https://web.facebook.com/Clubdeportivoborja?mibextid=ZbWKwL&_rdc=1&_rdr", // Enlace específico de Facebook
        instagram: "https://www.instagram.com/", // Enlace específico de Instagram
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`
    },
};

export default textos;
