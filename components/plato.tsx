"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Plato as PlatoType } from "../data/platos";
import { platos } from "../data/platos";

export default function Plato() {
    const [platoSeleccionado, setPlatoSeleccionado] = useState<PlatoType | null>(null);

    const abrirModal = (plato: PlatoType) => {
        setPlatoSeleccionado(plato);
    };

    const cerrarModal = () => {
        setPlatoSeleccionado(null);
    };

    const generarMensajeWhatsApp = (nombrePlato: string) => {
        return `Hola Martín%0AQuiero ${nombrePlato}`;
    };

    return (
        <div style={{ padding: "10px", boxSizing: "border-box", maxWidth: "100%", overflowX: "hidden" }}>
            {platos.map((plato) => (
                <div
                    key={plato.nombre}
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        backgroundColor: "red",
                        marginBottom: "15px",
                        borderRadius: "30px",
                        padding: "10px",
                        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                    }}
                >
                    <button
                        className="plato"
                        onClick={() => abrirModal(plato)}
                        style={{
                            border: "none",
                            background: "none",
                            cursor: "pointer",
                            width: "100%",
                            padding: "10px",
                            transition: "background-color 0.2s ease",
                            borderRadius: "25px",
                        }}
                        onTouchStart={(e) => (e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)")}
                        onTouchEnd={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                    >
                        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                            <div
                                style={{
                                    flexShrink: 0,
                                    position: "relative",
                                    width: "clamp(80px, 25vw, 100px)",
                                    height: "clamp(80px, 25vw, 100px)",
                                }}
                            >
                                <Image
                                    src={plato.imagen}
                                    alt={plato.nombre}
                                    fill
                                    sizes="100vw"
                                    style={{
                                        borderRadius: "12px",
                                        objectFit: "cover",
                                        border: "1px solid #ddd",
                                    }}
                                />
                            </div>
                            <div style={{ flex: 1, textAlign: "left", minWidth: "120px" }}>
                                <h2 style={{ fontSize: "clamp(1rem, 4vw, 1.2rem)", color: "#333", margin: 0, fontWeight: 600 }}>
                                    {plato.nombre}
                                </h2>
                                <div style={{ display: "flex", flexDirection: "column", gap: "3px", marginTop: "5px" }}>
                                    {plato.ingredientes.map((ingrediente, index) => (
                                        <p
                                            key={index}
                                            style={{
                                                margin: 0,
                                                color: "#555",
                                                fontSize: "clamp(0.75rem, 3vw, 0.85rem)",
                                                lineHeight: 1.3,
                                            }}
                                        >
                                            - {ingrediente.nombre}
                                        </p>
                                    ))}
                                </div>
                            </div>
                            <div style={{ textAlign: "right", flexShrink: 0 }}>
                                <h3
                                    style={{
                                        fontSize: "clamp(0.9rem, 3.5vw, 1rem)",
                                        color: "#fff",
                                        margin: 0,
                                        fontWeight: 500,
                                        backgroundColor: "#000",
                                        borderRadius: "50%",
                                        width: "clamp(50px, 15vw, 60px)",
                                        height: "clamp(50px, 15vw, 60px)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    ${plato.precio?.toFixed(2) || "0.00"}
                                </h3>
                            </div>
                        </div>
                    </button>
                </div>
            ))}

            {platoSeleccionado && (
                <div
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(0, 0, 0, 0.8)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        zIndex: 999,
                        overflowY: "auto",
                        padding: "10px",
                        boxSizing: "border-box",
                    }}
                >
                    <div
                        style={{
                            backgroundColor: "#fff100",
                            padding: "clamp(15px, 5vw, 20px)",
                            borderRadius: "15px",
                            maxWidth: "90vw",
                            width: "100%",
                            textAlign: "center",
                            boxShadow: "0 6px 20px rgba(0, 0, 0, 0.3)",
                            maxHeight: "90vh",
                            overflowY: "auto",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: "clamp(10px, 3vw, 15px)",
                                marginBottom: "15px",
                                flexWrap: "wrap",
                            }}
                        >
                            <h2
                                style={{
                                    fontSize: "clamp(1.5rem, 5vw, 1.8rem)",
                                    color: "#333",
                                    margin: 0,
                                    fontWeight: 700,
                                    textTransform: "uppercase",
                                }}
                            >
                                {platoSeleccionado.nombre}
                            </h2>
                            <div
                                style={{
                                    position: "relative",
                                    width: "clamp(100px, 30vw, 120px)",
                                    height: "clamp(70px, 20vw, 80px)",
                                }}
                            >
                                <Image
                                    src={platoSeleccionado.imagen}
                                    alt={platoSeleccionado.nombre}
                                    fill
                                    sizes="100vw"
                                    style={{
                                        borderRadius: "12px",
                                        objectFit: "cover",
                                        border: "2px solid #333",
                                    }}
                                />
                            </div>
                        </div>
                        <ul style={{ listStyle: "none", padding: 0, margin: "0 0 15px 0" }}>
                            {platoSeleccionado.ingredientes.map((ing, i) => (
                                <React.Fragment key={i}>
                                    <li
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                            marginBottom: "10px",
                                            backgroundColor: "#fff",
                                            borderRadius: "8px",
                                            padding: "8px",
                                            position: "relative",
                                            overflow: "visible", // importante para que sobresalga la imagen
                                            boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
                                        }}
                                        onTouchStart={(e) => (e.currentTarget.style.backgroundColor = "#f0f0f0")}
                                        onTouchEnd={(e) => (e.currentTarget.style.backgroundColor = "#fff")}
                                    >
                                        {/* Imagen más grande y sobresaliendo */}
                                        <div
                                            style={{
                                                position: "relative",
                                                width: "clamp(60px, 18vw, 80px)",
                                                height: "clamp(60px, 18vw, 80px)",
                                                marginLeft: "-10px", // sobresalga del lado izquierdo
                                                flexShrink: 0,
                                                zIndex: 1,
                                            }}
                                        >
                                            <Image
                                                src={ing.url}
                                                alt={ing.nombre}
                                                fill
                                                sizes="100vw"
                                                style={{
                                                    borderRadius: "10px",
                                                    objectFit: "cover",
                                                    border: "2px solid #333",
                                                }}
                                            />
                                        </div>

                                        {/* Nombre del ingrediente */}
                                        <p
                                            style={{
                                                margin: "0 10px",
                                                color: "#333",
                                                fontSize: "clamp(0.85rem, 3.5vw, 0.95rem)",
                                                flex: 1,
                                                textAlign: "left",
                                                fontWeight: 500,
                                            }}
                                        >
                                            {ing.nombre}
                                        </p>

                                        {/* Precio como círculo negro */}
                                        <div
                                            style={{
                                                backgroundColor: "#000",
                                                color: "#fff",
                                                borderRadius: "50%",
                                                width: "clamp(50px, 12vw, 60px)",
                                                height: "clamp(50px, 12vw, 60px)",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                fontWeight: 600,
                                                fontSize: "clamp(0.8rem, 3vw, 1rem)",
                                                flexShrink: 0,
                                            }}
                                        >
                                            ${ing.precio.toFixed(2)}
                                        </div>
                                    </li>

                                </React.Fragment>
                            ))}
                        </ul>
                        <h3
                            style={{
                                fontSize: "clamp(1rem, 4vw, 1.2rem)",
                                color: "#fff",
                                margin: "0 auto 15px",
                                fontWeight: 600,
                                backgroundColor: "#000",
                                borderRadius: "50%",
                                width: "clamp(50px, 15vw, 60px)",
                                height: "clamp(50px, 15vw, 60px)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            ${platoSeleccionado.precio}
                        </h3>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                gap: "clamp(10px, 3vw, 15px)",
                                flexWrap: "wrap",
                                marginTop: "10px",
                            }}
                        >
                            <button
                                onClick={cerrarModal}
                                style={{
                                    padding: "clamp(8px, 2.5vw, 10px) clamp(16px, 5vw, 20px)",
                                    backgroundColor: "#d00000",
                                    color: "#fff",
                                    border: "none",
                                    borderRadius: "8px",
                                    cursor: "pointer",
                                    fontSize: "clamp(0.85rem, 3.5vw, 0.95rem)",
                                    fontWeight: 600,
                                    transition: "background-color 0.2s ease, transform 0.2s ease",
                                }}
                                onTouchStart={(e) => {
                                    e.currentTarget.style.backgroundColor = "#a00000";
                                    e.currentTarget.style.transform = "scale(0.95)";
                                }}
                                onTouchEnd={(e) => {
                                    e.currentTarget.style.backgroundColor = "#d00000";
                                    e.currentTarget.style.transform = "scale(1)";
                                }}
                            >
                                Cerrar
                            </button>
                            <a
                                href={`https://wa.me/593983331900?text=${generarMensajeWhatsApp(platoSeleccionado.nombre)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button
                                    style={{
                                        padding: "clamp(8px, 2.5vw, 10px) clamp(16px, 5vw, 20px)",
                                        backgroundColor: "#25d366",
                                        color: "#fff",
                                        border: "none",
                                        borderRadius: "8px",
                                        cursor: "pointer",
                                        fontSize: "clamp(0.85rem, 3.5vw, 0.95rem)",
                                        fontWeight: 600,
                                        transition: "background-color 0.2s ease, transform 0.2s ease",
                                    }}
                                    onTouchStart={(e) => {
                                        e.currentTarget.style.backgroundColor = "#1ebe5d";
                                        e.currentTarget.style.transform = "scale(0.95)";
                                    }}
                                    onTouchEnd={(e) => {
                                        e.currentTarget.style.backgroundColor = "#25d366";
                                        e.currentTarget.style.transform = "scale(1)";
                                    }}
                                >
                                    Pedir por WhatsApp
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
