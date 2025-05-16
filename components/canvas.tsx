'use client';
import Image from "next/image";
import { canvas } from "../data/canvas";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useRef } from 'react';
import type { Swiper as SwiperType } from 'swiper';

// Componente para los botones de navegación
const SwiperNavButtons = () => {
    const swiper = useSwiper();

    return (
        <div className="swiper-nav-btns">
            <button onClick={() => swiper.slidePrev()} className="swiper-nav-btn prev">←</button>
            <button onClick={() => swiper.slideNext()} className="swiper-nav-btn next">→</button>
        </div>
    );
};

// Componente principal
const CanvasCarousel = () => {
    const swiperRef = useRef<SwiperType | null>(null);

    return (
        <div className="canvas-carousel-container">
            <h1 className="canvas-title">Modelo Canvas</h1>

            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                modules={[Navigation]}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
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
                            <p className="canvas-slogan"><i>- {canvasItem.slogan} -</i></p>
                            <div className="canvas-grid">
                                <div className="canvas-item value-proposition">
                                    <h2>Propuesta de Valor</h2>
                                    {canvasItem.canva[0].propuestaValor.map((item, index) => (
                                        <p key={`propuesta-${canvasIndex}-${index}`}>● {item.texto}</p>
                                    ))}
                                </div>

                                <div className="canvas-item key-partners">
                                    <h2>Socios Clave</h2>
                                    {canvasItem.canva[0].sociosClaves.map((item, index) => (
                                        <p key={`socios-${canvasIndex}-${index}`}>● {item.texto}</p>
                                    ))}
                                </div>

                                <div className="canvas-item customer-segments">
                                    <h2>Segmento de Mercado</h2>
                                    {canvasItem.canva[0].segmentoMercado.map((item, index) => (
                                        <p key={`segmento-${canvasIndex}-${index}`}>● {item.texto}</p>
                                    ))}
                                </div>

                                <div className="canvas-item channels">
                                    <h2>Canales</h2>
                                    {canvasItem.canva[0].canales.map((item, index) => (
                                        <p key={`canales-${canvasIndex}-${index}`}>● {item.texto}</p>
                                    ))}
                                </div>

                                <div className="canvas-item customer-relationships">
                                    <h2>Relación con Clientes</h2>
                                    {canvasItem.canva[0].relacionClientes.map((item, index) => (
                                        <p key={`relacion-${canvasIndex}-${index}`}>● {item.texto}</p>
                                    ))}
                                </div>

                                <div className="canvas-item revenue-streams">
                                    <h2>Fuentes de Ingresos</h2>
                                    {canvasItem.canva[0].fuentesIngresos.map((item, index) => (
                                        <p key={`ingresos-${canvasIndex}-${index}`}>● {item.texto}</p>
                                    ))}
                                </div>

                                <div className="canvas-item key-resources">
                                    <h2>Recursos Clave</h2>
                                    {canvasItem.canva[0].recursosClaves.map((item, index) => (
                                        <p key={`recursos-${canvasIndex}-${index}`}>● {item.texto}</p>
                                    ))}
                                </div>

                                <div className="canvas-item key-activities">
                                    <h2>Actividades Clave</h2>
                                    {canvasItem.canva[0].actividadesClaves.map((item, index) => (
                                        <p key={`actividades-${canvasIndex}-${index}`}>● {item.texto}</p>
                                    ))}
                                </div>
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
                <SwiperNavButtons />
            </Swiper>
        </div>
    );
};

export default CanvasCarousel;
