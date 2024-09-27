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
        description1: "En AFROLIBRE, consegues una variedad de productos típicos afro de nuestra región como jugos, compotas, galletas, jaleas y néctares típicos de borojó, chontaduro, mil peso, entre otros. También ofrecemos bebidas típicas y medicinales afrocolombianas como viche, arrechon, vinete, tumba castre, y la botella compuesta medicinal, que sirve para diferentes enfermedades como fríos en la matriz, dolor menstrual, dolor de cabeza e infertilidad en hombres y mujeres.",
        description2: "En AFROLIBRE, nos dedicamos a ofrecerte productos naturales y medicinales que contienen vitaminas y proteínas, conservando el sabor y las propiedades beneficiosas de los ingredientes. Descubre cómo nuestras opciones pueden enriquecer tu dieta y tu vida diaria."
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
