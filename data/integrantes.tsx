export interface Integrante {
    grupo: number;
    integrantes: { nombre: string; rol: string; }[];
    imagen: string ;
}

export const integrantes: Integrante[] = [
    {
        grupo: 1,
        integrantes: [
            { nombre: "Pasaco", rol: "Lider" },
            { nombre: "Espín", rol: "Publicidad" },
            { nombre: "Nava", rol: "Decoración" },
            { nombre: "Simbaña  M.", rol: "Desarrollador Web" },
        ],
        imagen: "/grupos/1.jpg"
    },
    {
        grupo: 8,
        integrantes: [
            { nombre: "Espinel", rol: "Lider" },
            { nombre: "Robalino ", rol: "Publicidad" },
            { nombre: "Pilatuña", rol: "Decoración" },
            { nombre: "Loor ", rol: "Logística" },
        ],
        imagen: "/grupos/8.jpg"
    },
    {
        grupo: 3,
        integrantes: [
            { nombre: "Tibán", rol: "Lider" },
            { nombre: "Vivas", rol: "Publicidad" },
            { nombre: "Torres", rol: "Decoración" },
            { nombre: "Arroyo", rol: "Logística" },
        ],
        imagen: "/grupos/3.jpg"
    },
    {
        grupo: 10,
        integrantes: [
            { nombre: "Cuichan", rol: "Lider" },
        ],
        imagen: "/grupos/10.jpg"
    },
    {
        grupo: 11,
        integrantes: [
            { nombre: "Guaman", rol: "Lider" }
        ],
        imagen: "/grupos/11.jpg"
    },
    {
        grupo: 4,
        integrantes: [
            { nombre: "Toledo", rol: "Lider" },
            { nombre: "Simbaña S.", rol: "Publicidad" },
            { nombre: "Sandoval     ", rol: "Decoración" },
            { nombre: "Flores", rol: "Logística" },
        ],
        imagen: "/grupos/4.jpg"
    },
    {
        grupo: 5,
        integrantes: [
            { nombre: "Bravo", rol: "Lider" },
            { nombre: "Gonzalez", rol: "Publicidad" },
            { nombre: "Oyagata", rol: "Decoración" },
            { nombre: "Chancusig", rol: "Logística" },
        ],
        imagen: "/grupos/5.jpg"
    },
    {
        grupo: 2,
        integrantes: [
            { nombre: "Fraga ", rol: "Lider" },
            { nombre: "Quinsasamin", rol: "Publicidad" },
            { nombre: "Tupiza", rol: "Decoración" },
            { nombre: "Cóndor", rol: "Logística" },
        ],
        imagen: "/grupos/2.jpg"
    },
    {
        grupo: 6,
        integrantes: [
            { nombre: "Yaguana", rol: "Lider" },
            { nombre: "Guerrero", rol: "Publicidad" },
            { nombre: "Ramos", rol: "Decoración" },
            { nombre: "Capelo", rol: "Logística" },
        ],
        imagen: "/grupos/6.jpg"
    },
    {
        grupo: 7,
        integrantes: [
            { nombre: "Lincango", rol: "Lider" },
            { nombre: "Zambrano", rol: "Publicidad" },
            { nombre: "Farías", rol: "Decoración" },
            { nombre: "Calderón", rol: "Logística" },
        ],
        imagen: "/grupos/7.jpg"
    },
    {
        grupo: 9,
        integrantes: [
            { nombre: "Tagua", rol: "Lider" },
            { nombre: "Granada", rol: "Publicidad" },
            { nombre: "Cevallos", rol: "Decoración" },
            { nombre: "Guachan", rol: "Logística" },
        ],
        imagen: "/grupos/9.jpg"
    },
    {
        grupo: 12,
        integrantes: [
            { nombre: "Simbaña  M.", rol: "Desarrollador Web" },
        ],
        imagen: "/grupos/dev.jpg"
    },
]