export interface Plato {
    nombre: string;
    ingredientes: { nombre: string; precio: number, url: string }[];
    precio?: number; // Cambiado a opcional, ya que lo calcularemos dinámicamente
    imagen: string;
    destacado?: boolean;
}

export const platos: Plato[] = [
    {
        nombre: "Tacos al Pastor",
        ingredientes: [
            { nombre: "Tortillas de maíz", precio: 100, url: "/file.svg" },
            { nombre: "Carne de cerdo", precio: 20, url: "/file.svg" },
            { nombre: "Piña", precio: 5, url: "/file.svg" },
            { nombre: "Cebolla", precio: 2, url: "/file.svg" },
            { nombre: "Cilantro", precio: 2, url: "/file.svg" },
        ],
        imagen: "/file.svg",
    },
    {
        nombre: "Enchiladas",
        ingredientes: [
            { nombre: "Tortillas de maíz", precio: 10, url: "/file.svg" },
            { nombre: "Carne de cerdo", precio: 200, url: "/file.svg" },
            { nombre: "Piña", precio: 5, url: "/file.svg" },
            { nombre: "Cebolla", precio: 2, url: "/file.svg" },
            { nombre: "Cilantro", precio: 2, url: "/file.svg" },
        ],
        imagen: "/file.svg",
    },
    {
        nombre: "Tamales",
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
        nombre: "Chiles en Nogada",
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