'use client';
import Image from "next/image";
import { canvas } from "../data/canvas";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function CanvasComponent() {
    return (
        <div className="canvas-carousel-container">
            <h1 className="canvas-title">Modelo Canvas</h1>

            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
            >
                {canvas.map((canvasItem, canvasIndex) => (
                    <SwiperSlide key={`canvas-${canvasIndex}`}>
                        <div className="canvas-container">
                            <h4 className="canvas-curso">{canvasItem.curso}</h4>

                            <div className="canvas-image">
                                <Image
                                    src={canvasItem.logo || "/logo.png"}
                                    alt={`Logo ${canvasItem.nombreEmprendimiento}`}
                                    width={200}
                                    height={200}
                                    priority
                                />
                            </div>
                            <h2 className="canvas-nombre">{canvasItem.nombreEmprendimiento}</h2>

                            <div className="canvas-grid">
                                {/* Propuesta de Valor */}
                                <div className="canvas-item value-proposition">
                                    <h2>Propuesta de Valor</h2>
                                    {canvasItem.canva[0].propuestaValor.map((item, index) => (
                                        <p key={`propuesta-${canvasIndex}-${index}`}>● {item.texto}</p>
                                    ))}
                                </div>

                                {/* Segmento de Mercado */}
                                <div className="canvas-item customer-segments">
                                    <h2>Segmento de Mercado</h2>
                                    {canvasItem.canva[0].segmentoMercado.map((item, index) => (
                                        <p key={`segmento-${canvasIndex}-${index}`}>● {item.texto}</p>
                                    ))}
                                </div>

                                {/* Canales */}
                                <div className="canvas-item channels">
                                    <h2>Canales</h2>
                                    {canvasItem.canva[0].canales.map((item, index) => (
                                        <p key={`canales-${canvasIndex}-${index}`}>● {item.texto}</p>
                                    ))}
                                </div>

                                {/* Relación con Clientes */}
                                <div className="canvas-item customer-relationships">
                                    <h2>Relación con Clientes</h2>
                                    {canvasItem.canva[0].relacionClientes.map((item, index) => (
                                        <p key={`relacion-${canvasIndex}-${index}`}>● {item.texto}</p>
                                    ))}
                                </div>

                                {/* Fuentes de Ingresos */}
                                <div className="canvas-item revenue-streams">
                                    <h2>Fuentes de Ingresos</h2>
                                    {canvasItem.canva[0].fuentesIngresos.map((item, index) => (
                                        <p key={`ingresos-${canvasIndex}-${index}`}>● {item.texto}</p>
                                    ))}
                                </div>

                                {/* Recursos Clave */}
                                <div className="canvas-item key-resources">
                                    <h2>Recursos Clave</h2>
                                    {canvasItem.canva[0].recursosClaves.map((item, index) => (
                                        <p key={`recursos-${canvasIndex}-${index}`}>● {item.texto}</p>
                                    ))}
                                </div>

                                {/* Actividades Clave */}
                                <div className="canvas-item key-activities">
                                    <h2>Actividades Clave</h2>
                                    {canvasItem.canva[0].actividadesClaves.map((item, index) => (
                                        <p key={`actividades-${canvasIndex}-${index}`}>● {item.texto}</p>
                                    ))}
                                </div>

                                {/* Socios Clave */}
                                <div className="canvas-item key-partners">
                                    <h2>Socios Clave</h2>
                                    {canvasItem.canva[0].sociosClaves.map((item, index) => (
                                        <p key={`socios-${canvasIndex}-${index}`}>● {item.texto}</p>
                                    ))}
                                </div>

                                {/* Estructura de Costos */}
                                <div className="canvas-item cost-structure">
                                    <h2>Estructura de Costos</h2>
                                    {canvasItem.canva[0].estructuraCostos.map((item, index) => (
                                        <p key={`costos-${canvasIndex}-${index}`}>● {item.texto}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div >
    );
}