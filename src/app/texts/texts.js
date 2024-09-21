const title = "AFROLIBRE (BOJEP)";
const email = ""; // Información no proporcionada
const mensajeWhatsApp = encodeURIComponent(
    "¡Hola! Estoy muy interesado en tus productos de " + title + " y me gustaría recibir más información sobre ellos. Espero poder hablar pronto contigo para aclarar algunas dudas. ¡Gracias!"
);
const numeroWhatsApp = ""; // Información no proporcionada

const textos = {
    index: {
        title: title,
    },
    homeContent: {
        title: title,
    },
    about: {
        description1: "AFROLIBRE (BOJEP) ofrece una variedad de productos naturales como jugos de borojó, compota de borojó, galletas de borojó, jaleas de borojó y jugo de yuca, entre otros. Nuestro lema es 'Borojep', reflejando nuestro compromiso con la calidad y la autenticidad de nuestros productos.",
        description2: "En AFROLIBRE (BOJEP), nos dedicamos a ofrecerte productos naturales que conservan el sabor y las propiedades beneficiosas de los ingredientes. Descubre cómo nuestras opciones pueden enriquecer tu dieta y tu vida diaria."
    },
    contact: {
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
        email: email
    },
    footer: {
        slogan: {
            p1: "Borojep",
            p2: ""
        },
        address: "", // Información no proporcionada
        phone: numeroWhatsApp,
        email: email,
        facebook: "https://www.facebook.com/",
        instagram: "https://www.instagram.com/",
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`
    },
};

export default textos;
