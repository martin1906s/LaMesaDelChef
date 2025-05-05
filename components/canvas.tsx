"use client";
import Image from "next/image";

export default function Canvas() {
    return (
        <div className="canvas-container">
            <h1 className="canvas-title">Modelo Canvas</h1>

            <div className="canvas-image">
                <Image
                    src="/logo.png"
                    alt="Logo mesa del chef"
                    width={200}
                    height={200}
                    priority
                />
            </div>

            <div className="canvas-grid">
                {/* Propuesta de Valor (sección más grande) */}
                <div className="canvas-item value-proposition">
                    <h2>Propuesta de Valor</h2>
                    <p>Nuestro objetivo es brindarte una experiencia gastronómica inolvidable aquí en La Mesa del Chef para compartir con tus amigos y familiares. Nuestro buffet ofrecerá platos preparados exquisitamente con productos frescos y de alta calidad, variedad de opciones para satisfacer todos los gustos y preferencias, un ambiente acogedor y elegante, y un servicio personalizado y atento. Utilizamos solo los mejores ingredientes y seguimos estrictos protocolos de higiene y seguridad alimentaria. Nuestro buffet es perfecto para graduaciones, cumpleaños, bodas, aniversarios y reuniones familiares. ¡Reserva tu mesa hoy mismo y prepárate para una experiencia gastronómica inolvidable! ¡Felicitaciones por tu graduación!</p>
                </div>
                
                {/* Segmento de Mercado */}
                <div className="canvas-item customer-segments">
                    <h2>Segmento de Mercado</h2>
                    <h3>● Por tipo de cliente</h3>
                    <p>● Empresas</p>
                    <p>● Particulares</p>
                    <p>● Instituciones educativas</p>
                    <p>● Organizaciones religiosas o comunitarias</p>

                    <h3>● Por edad</h3>
                    <p>● Por edad</p>

                    <h3>● Por tipo de evento</h3>
                    <p>● Formales</p>
                    <p>● Informales</p>
                    <p>● Temáticas</p>

                    <h3>● Por ubicación geográfica</h3>
                    <p>● Local</p>
                    <p>● Regional</p>
                    <p>● A domicilio</p>
                </div>
                
                {/* Canales */}
                <div className="canvas-item channels">
                    <h2>Canales</h2>
                    <h3>● Estrategias de promoción</h3>
                    <p>● Contacto directo con instituciones educativas</p>
                    <p>● Redes sociales (Instagram, Facebook)</p>
                    <p>● Recomendaciones boca a boca</p>
                    <p>● Participación en ferias escolares o eventos</p>
                </div>
                
                {/* Relación con Clientes */}
                <div className="canvas-item customer-relationships">
                    <h2>Relación con Clientes</h2>
                    <h3>● Atención al cliente</h3>
                    <p>● Brindar una bienvenida amable y personalizada</p>
                    <p>● Mantener una actitud cordial y servicial en todo momento</p>
                    <p>● Calidad del servicio</p>
                    <p>● Asegurar que los alimentos sean frescos y bien presentados</p>

                    <h3>● Experiencia del cliente</h3>
                    <p>● Cuidar la higiene y presentación del personal</p>
                    <p>● Decorar el espacio de manera atractiva y cómoda</p>
                    <p>● Recopilar opiniones: preguntar al cliente cómo fue su experiencia</p>

                    <h3>● Fidelización</h3>
                    <p>● Ofrecer eventos o promociones para eventos a futuro</p>
                </div>
                
                {/* Fuentes de Ingresos */}
                <div className="canvas-item revenue-streams">
                    <h2>Fuentes de Ingresos</h2>
                    <h3>● Venta directa</h3>
                    <p>● Productos de ingresos diarios por la venta de alimentos a estudiantes</p>
                    <p>● Menú escolar</p>
                    <p>● Ingresos por paquete</p>
                    <p>● Venta de platos de menú</p>

                    <h3>● Ingresos por eventos especiales</h3>
                    <p>● Venta de productos en ferias escolares</p>
                    <p>● Venta en eventos deportivos</p>
                    <p>● Promociones por fechas especiales</p>

                    <h3>● Acuerdos o patrocinamientos</h3>
                    <p>● Alianza con marcas de alimentos saludables</p>
                    <p>● Subvenciones o apoyos del colegio</p>
                </div>
                
                {/* Recursos Clave */}
                <div className="canvas-item key-resources">
                    <h2>Recursos Clave</h2>
                    <p>● Equipamiento de cocina</p>
                    <p>● Utensilios</p>
                    <p>● Herramientas</p>
                    <p>● Material de presentación</p>
                    <p>● Menaje</p>
                    <p>● Insumos</p>
                    <p>● Materia prima</p>
                    <p>● Cocina y ayudantes</p>
                    <p>● Mesero</p>
                    <p>● Personal de servicio</p>
                    <p>● Personal de logística</p>
                    <p>● Homenaje</p>
                    <p>● Administrador o coordinador</p>
                    <p>● Transporte adecuado</p>
                    <p>● Planificación del menú</p>
                    <p>● Proveedores confiables</p>
                    <p>● Control de higiene y seguridad</p>
                    <p>● Estrategia de venta</p>
                    <p>● Promociones de venta</p>
                </div>
                
                {/* Actividades Clave */}
                <div className="canvas-item key-activities">
                    <h2>Actividades Clave</h2>
                    <p>● Planificación y organización</p>
                    <p>● Diseñar un menú variado y atractivo</p>
                    <p>● Coordinar al equipo de trabajo</p>
                    <p>● Compra y preparación de alimentos</p>
                    <p>● Seleccionar proveedores confiables para ingredientes frescos</p>
                    <p>● Montaje y presentación del buffet</p>
                    <p>● Distribuir estratégicamente las estaciones de comida</p>
                    <p>● Atención y servicio al cliente</p>
                    <p>● Mantener los alimentos bien servidos, calientes o fríos</p>
                    <p>● Limpieza o cierre del servicio</p>
                    <p>● Retirar platos y desechos constantes de los menús</p>
                </div>
                
                {/* Socios Clave */}
                <div className="canvas-item key-partners">
                    <h2>Socios Clave</h2>
                    <p>● Proveedores de Alimentos</p>
                    <p>● Institución Educativa</p>
                    <p>● Personal del Buffet</p>
                    <p>● Personal Administrativo</p>
                    <p>● Transportistas de Logística</p>
                </div>
                
                {/* Estructura de Costos */}
                <div className="canvas-item cost-structure">
                    <h2>Estructura de Costos</h2>
                    <h3>● Costos fijos</h3>
                    <p>● Sueldo de personal (cocinero, ayudante y limpieza)</p>
                    <p>● Alquiler de espacios</p>
                    <p>● Servicios básicos</p>
                    <p>● Mantenimiento de equipos</p>
                    <p>● Permiso y licencia sanitaria</p>

                    <h3>● Costos variables</h3>
                    <p>● Compra de insumos alimentarios</p>
                    <p>● Empaque de utensilios desechables</p>
                    <p>● Productos de limpieza e higiene</p>
                    <p>● Transporte de productos</p>
                    <p>● Costes de reposición de utensilios</p>

                    <h3>● Otros costos posibles</h3>
                    <p>● Publicidad interna (carteles, menú, promociones)</p>
                    <p>● Capacitaciones del personal</p>
                </div>
            </div>
        </div>
    );
}