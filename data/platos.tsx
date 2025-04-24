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
            { nombre: "Mariscos", precio: 100, url: "/file.svg" },
            { nombre: "Pimiento", precio: 20, url: "/file.svg" },
            { nombre: "Cebolla", precio: 5, url: "/file.svg" },
            { nombre: "Comino", precio: 2, url: "/file.svg" },
            { nombre: "Ajo", precio: 2, url: "/file.svg" },
            { nombre: "Sal", precio: 10, url: "/file.svg" },
            { nombre: "Mantequilla", precio: 5, url: "/file.svg" },
            { nombre: "Salsa de tomate y mostaza", precio: 2, url: "/file.svg" },
            { nombre: "Arroz", precio: 10, url: "/file.svg" },
            { nombre: "Salsa de ostión", precio: 2, url: "/file.svg" },
        ],
        imagen: "/arrozmarinero.jpg",
    },
    {
        nombre: "Medallones de Pollo",
        ingredientes: [
            { nombre: "Pollo", precio: 10, url: "/file.svg" },
            { nombre: "Jamón y Queso", precio: 200, url: "/file.svg" },
            { nombre: "Ensalada salteada de vainita y zanahoria", precio: 5, url: "/file.svg" },
            { nombre: "Salsa de reducción de Ciruelas", precio: 2, url: "/file.svg" },
            { nombre: "Croqueta de Papa", precio: 2, url: "/file.svg" },
        ],
        imagen: "/medallondepollo.jpg",
    },
    {
        nombre: "Arroz",
        ingredientes: [
            { nombre: "Tortillas de maíz", precio: 10, url: "/file.svg" },
            { nombre: "Carne de cerdo", precio: 20, url: "/file.svg" },
            { nombre: "Piña", precio: 5, url: "/file.svg" },
            { nombre: "Cebolla", precio: 2, url: "/file.svg" },
            { nombre: "Cilantro", precio: 2, url: "/file.svg" },
        ],
        imagen: "/file.svg",
    },
    {
        nombre: "Medallones de pollo",
        ingredientes: [
            { nombre: "Tortillas de maíz", precio: 10, url: "/file.svg" },
            { nombre: "Carne de cerdo", precio: 20, url: "/file.svg" },
            { nombre: "Piña", precio: 5, url: "/file.svg" },
            { nombre: "Cebolla", precio: 2, url: "/file.svg" },
            { nombre: "Cilantro", precio: 2, url: "/file.svg" },
        ],
        imagen: "/file.svg",
    },
];

// Calcula el precio dinámicamente sumando los precios de los ingredientes
platos.forEach((plato) => {
    plato.precio = plato.ingredientes.reduce((total, ingrediente) => total + ingrediente.precio, 0);
});