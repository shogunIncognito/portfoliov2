import spotifyimg from '../assets/spotifyclon.webp'
import designtee from '../assets/clothes-App.webp'
import euroexchange from '../assets/interfaceEuro.webp'
import moviesearcher from '../assets/interfaceImageMovie.webp'
import livechat from '../assets/livechat.webp'
import maxautos from '../assets/maxautospage.webp'
import tattooInk from '../assets/interfaceTattooink.png'
import appleHouse from '../assets/interfaceApplehouse.png'

export default [
    {
        id: 1,
        title: {
            es: "Clon de Spotify",
            en: "Spotify Clone"

        },
        description: {
            es: "Clon de la interfaz de la plataforma de música 'Spotify'",
            en: "Clone of the music platform 'Spotify'"
        },
        languages: [
            "Astro",
            "TailwindCSS"
        ],
        image: spotifyimg,
        link: "https://spotifyclon-tau.vercel.app/",
        github: "https://github.com/shogunIncognito/spotifyclon"
    },
    {
        id: 2,
        title: {
            es: "Tienda de ropa 'DesignTee'",
            en: "Clothes store 'DesignTee'"
        },
        description: {
            es: "Sitio web simple de una tienda de ropa, con un carrito de compras.",
            en: "Simple website of a clothing store, with a shopping cart."
        },
        languages: [
            "React",
            "TailwindCSS"
        ],
        image: designtee,
        link: "https://clothestoreramon.netlify.app/",
        github: "https://github.com/shogunIncognito/clothesApp"
    },
    {
        id: 3,
        title: {
            es: "Tasa de cambio Euro a otras monedas",
            en: "Euro exchange rate to other currencies"
        },
        description: {
            es: "App para calcular el valor del euro en otras divisas, mediante el uso de una api.",
            en: "App to calculate the value of the euro in other currencies, using an api."
        },
        languages: [
            "Vue",
            "TailwindCSS"
        ],
        image: euroexchange,
        github: "https://github.com/shogunIncognito/euroexchangeapp"
    },
    {
        id: 4,
        title: {
            es: "Buscador de películas",
            en: "Movie searcher"
        },
        description: {
            es: "App de búsqueda de películas, mediante el uso de la api de 'omdbapi'.",
            en: "Movie search app, using the 'omdbapi' api."
        },
        languages: [
            "Vue",
            "TailwindCSS"
        ],
        image: moviesearcher,
        link: "https://moviesearchervue.netlify.app/",
        github: "https://github.com/shogunIncognito/moviesearchervue"
    },
    {
        id: 5,
        title: {
            es: "Chat en tiempo real",
            en: "Real-time chat"
        },
        description: {
            es: "Chat en tiempo real, usando SocketIo y un server en Express.",
            en: "Real-time chat, using SocketIo and an Express server."
        },
        languages: [
            "React",
            "TailwindCSS",
            "Express",
            "SocketIo"
        ],
        image: livechat,
        link: "https://reactchatsocketio.onrender.com/",
        github: "https://github.com/shogunIncognito/reactchatsocketio"
    },
    {
        id: 6,
        title: {
            es: "Aplicación web de MaxAutos V1",
            en: "MaxAutos V1 web app"
        },
        description: {
            es: "App web de una empresa de venta de autos, con panel y catalogo",
            en: "Web app of a car sales company, with panel and catalog"
        },
        languages: [
            "NextJS",
            "TailwindCSS",
            "MySql",
            "Prisma",
            "Firebase"
        ],
        image: maxautos,
        github: "https://github.com/shogunIncognito/simplemaxapp-pWeb",
        link: "https://simplemaxapp.vercel.app/"
    },
    {
        id: 7,
        title: {
            es: "TattooInk",
            en: "TattooInk web app"
        },
        description: {
            es: "App web para promocionar tatuadores en Villavicencio, con un panel de administración y un catálogo de tatuadores.",
            en: "Web app to promote tattoo artists in Villavicencio, with an administration panel and a catalog of tattoo artists."
        },
        languages: [
            "Vue.js",
            "TailwindCSS",
            "Clerk",
        ],
        image: tattooInk,
        link: "https://tattooink.site/",
        github: "https://github.com/shogunIncognito/tattoapp"
    }
]