import spotifyimg from '../assets/spotifyclon.webp'
import designtee from '../assets/clothes-App.webp' 
import euroexchange from '../assets/interfaceEuro.webp'
import moviesearcher from '../assets/interfaceImageMovie.webp'
import livechat from '../assets/livechat.webp'
import maxautos from '../assets/maxautospage.webp'

export default [
    {
        id: 1,
        title: "Spotify clon",
        description: "Clon de la interfaz de la plataforma de música 'Spotify'",
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
        title: "Tienda de ropa 'DesignTee'",
        description: "Sitio web simple de una tienda de ropa, con un carrito de compras y simulación de pago.",
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
        title: "Tasa de cambio Euro a otras monedas",
        description: "App para calcular el valor del euro en otras divisas, mediante el uso de una api.",
        languages: [
            "Vue",
            "TailwindCSS"
        ],
        image: euroexchange,
        github: "https://github.com/shogunIncognito/euroexchangeapp"
    },
    {
        id: 4,
        title: "Buscador de películas",
        description: "App de búsqueda de películas, mediante el uso de la api de 'omdbapi'.",
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
        title: "Live Chat",
        description: "Chat en tiempo real, usando SocketIo y un server en Express.",
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
        title: "Aplicación web de MaxAutos V1",
        description: "App web de una empresa de venta de autos, con un panel de administración y catalogo de vehículos.",
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
    }
]