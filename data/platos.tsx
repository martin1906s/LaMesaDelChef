export interface Plato {
    nombre: string;
    ingredientes: { nombre: string; precio: number, url: string }[];
    precio?: number;
    imagen: string;
    destacado?: boolean;
}

export const platos: Plato[] = [
    {
        nombre: "Arroz Marinero",
        ingredientes: [
            { nombre: "Mix de Mariscos", precio: 3.89, url: "/mariscos.jpg" },
            { nombre: "Arroz", precio: 0.30, url: "/arroz.jpg" },
            { nombre: "Verduras", precio: 0.30, url: "/verduras.jpg" },
            { nombre: "Especias de Comida", precio: 0.50, url: "/especias.jpg" },
        ],
        imagen: "/arrozmarinero.jpg",
    },
    {
        nombre: "Medallones de Pollo",
        ingredientes: [
            { nombre: "Pollo", precio: 1.50, url: "/pollo.jpg" },
            { nombre: "Jamón", precio: 0.25, url: "/jamon.jpg" },
            { nombre: "Queso Mozarella", precio: 0.25, url: "/queso.jpg" },
            { nombre: "Croqueta de Papa", precio: 0.5, url: "/papas.jpg" },
            { nombre: "Ensalada de Vainita y Zanahoria", precio: 0.25, url: "/enzaladaZanahoriaVainitas.jpg" },
            { nombre: "Salsa de Ciruelas", precio: 0.25, url: "/salsaCiruela.jpg" },
        ],
        imagen: "/medallondepollo.jpg",
    },
    {
        nombre: "Enrrollado de Pollo",
        ingredientes: [
            { nombre: "Croqueta de Papa", precio: 1, url: "/papas2.jpg" },
            { nombre: "Arroz Amarillo", precio: 0.25, url: "/arrozamarillo.png" },
            { nombre: "Pollo", precio: 1.50, url: "/pollo2.jpg" },
            { nombre: "Jamón", precio: 0.25, url: "/jamon2.jpg" },
            { nombre: "Queso Mozarella", precio: 0.25, url: "/queso2.jpg" },
            { nombre: "Ensalada de Mango y Vinagreta", precio: 0.50, url: "/ensaladaMango.png" },
        ],
        imagen: "/arrozypapa.jpg",
    },
];

// Calcula el precio de los ingredientes
platos.forEach((plato) => {
    plato.precio = parseFloat(plato.ingredientes.reduce((total, ingrediente) => total + ingrediente.precio, 0).toFixed(2));
});