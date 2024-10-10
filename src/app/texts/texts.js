const title = "AFROLIBRE (BOROJEP)";
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
        description2: "El objetivo principal de la fundación es promover el mejoramiento de la calidad de vida de la población afrocolombiana dentro del marco de la ley 70/93 y la legislación afro en situación de vulnerabilidad; discapacitados; menores infractores; madres cabezas de hogar; adultos mayores; jóvenes, niños y niñas, desplazados por el conflicto armado interno; habitantes de la calle; familias vulnerables con el objetivo de prevenir, proteger y concretar acciones afirmativas de integración y gestión para todas las comunidades y en especial al servicio de integrador y/o operador para adelantar, desarrollar los planes programas y proyectos que beneficien la niñez, los jóvenes, habitantes de la calle; mujeres y víctimas género, planes programas y proyectos dirigidos a población desplazada y desarraigada; población víctima de la violencia y el conflicto armado colombiano; desmovilizados, reinsertados; comunidades indígenas y comunidades afrocolombiana en general , raizales y palanqueros, consejos comunitarios de comunidades negras; cabildos indígenas; ONG, fundaciones asociaciones, corporaciones y entidades sin ánimo de lucro, clubes deportivos, agremiaciones y campesinos afectados por la violencia, campesinos afectados por la violencia, ola invernal y comunidad en general.\n"

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
        facebook: "https://www.facebook.com/profile.php?id=61565950811951", // Enlace específico de Facebook
        instagram: "https://www.instagram.com/", // Enlace específico de Instagram
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`
    },
};

export default textos;
