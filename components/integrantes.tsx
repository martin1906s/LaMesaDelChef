'use client';
import Image from "next/image";
import { Integrante } from "../data/integrantes";
import { integrantes } from "../data/integrantes";

export default function Integrantes() {
    return (
        <footer className="integrantes-container">
            <h1 className="integrantes-title">Grupos 3 "H"</h1>
            <div className="integrantes-grid">
                {integrantes.map((grupo: Integrante) => (
                    <div key={grupo.grupo} className="grupo-card">
                        <Image
                            src={grupo.imagen}
                            alt={`Grupo ${grupo.grupo}`}
                            width={200}
                            height={200}
                            style={{ borderRadius: "100%" }}
                            className="grupo-image"
                            priority
                        />
                        <ul className="integrantes-list">
                            {grupo.integrantes.map((integrante, index) => (
                                <li key={index}>
                                    {integrante.nombre} - <b>{integrante.rol}</b>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </footer>
    );
}