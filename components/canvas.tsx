"use client";

export default function Canvas() {
    return (
        <div className="canvas-container">
            <h1 className="canvas-title">Modelo Canvas</h1>

            {/* Contenedor principal */}
            <div className="main-container">
                {/* Primera fila */}
                <div className="row">
                    {/* Aliados Clave */}
                    <Box title="ALIADOS CLAVE" className="box-aliados-clave" />

                    {/* Actividades y Recursos Clave */}
                    <div className="column">
                        <Box title="ACTIVIDADES CLAVE" className="box-actividades-clave" />
                        <Box title="RECURSOS CLAVE" className="box-recursos-clave" />
                    </div>

                    {/* Propuesta de Valor */}
                    <Box title="PROPUESTA DE VALOR" className="box-propuesta-valor" />

                    {/* Relación con Clientes y Canales */}
                    <div className="column">
                        <Box title="RELACIÓN CON CLIENTES" className="box-relacion-clientes" />
                        <Box title="CANALES" className="box-canales" />
                    </div>

                    {/* Segmento de Clientes */}
                    <Box title="SEGMENTO DE CLIENTES" className="box-segmento-clientes" />
                </div>

                {/* Segunda fila */}
                <div className="row">
                    <Box title="ESTRUCTURA DE COSTES" className="box-estructura-costes" />
                    <Box title="FLUJOS DE INGRESOS" className="box-flujos-ingresos" />
                </div>
            </div>
        </div>
    );
}

// Componente reutilizable
function Box({ title, className }: { title: string; className: string }) {
    return (
        <div className={`box ${className}`}>
            {title}
        </div>
    );
}